#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script compresses and optimizes images in the public/images directory.
 * It uses sharp library to:
 * - Convert images to WebP/AVIF formats
 * - Compress images with optimal quality
 * - Resize images if needed
 * - Generate responsive image variants
 * 
 * Usage:
 *   npm run optimize-images
 * 
 * Note: This requires sharp package to be installed:
 *   npm install --save-dev sharp
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('❌ Error: sharp package is not installed.');
  console.error('Install it with: npm install --save-dev sharp');
  process.exit(1);
}

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images-optimized');

// Optimization configuration
const CONFIG = {
  quality: {
    jpeg: 80,
    webp: 80,
    avif: 75,
    png: 85,
  },
  maxWidth: 1920,
  maxHeight: 1920,
  formats: ['jpeg', 'webp', 'avif'],
  preserveOriginal: true,
};

/**
 * Get all image files recursively
 */
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else if (/\.(jpg|jpeg|png|webp|avif)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Optimize a single image
 */
async function optimizeImage(inputPath) {
  const relativePath = path.relative(IMAGES_DIR, inputPath);
  const outputPath = path.join(OUTPUT_DIR, relativePath);
  const outputDir = path.dirname(outputPath);
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`📸 Processing: ${relativePath}`);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Calculate new dimensions if image is too large
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > CONFIG.maxWidth || height > CONFIG.maxHeight) {
      const ratio = Math.min(CONFIG.maxWidth / width, CONFIG.maxHeight / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }

    // Process each format
    for (const format of CONFIG.formats) {
      const outputFileName = `${baseName}.${format}`;
      const outputFilePath = path.join(outputDir, outputFileName);
      
      let processor = image.clone().resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      });

      switch (format) {
        case 'jpeg':
          processor = processor.jpeg({ quality: CONFIG.quality.jpeg, progressive: true });
          break;
        case 'webp':
          processor = processor.webp({ quality: CONFIG.quality.webp });
          break;
        case 'avif':
          processor = processor.avif({ quality: CONFIG.quality.avif });
          break;
        case 'png':
          processor = processor.png({ quality: CONFIG.quality.png, compressionLevel: 9 });
          break;
      }

      await processor.toFile(outputFilePath);
      
      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputFilePath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
      
      console.log(`  ✓ ${format}: ${(optimizedSize / 1024).toFixed(2)}KB (${savings}% smaller)`);
    }

  } catch (error) {
    console.error(`  ❌ Error processing ${relativePath}:`, error.message);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🎨 Image Optimization Script\n');
  console.log(`📁 Input directory: ${IMAGES_DIR}`);
  console.log(`📁 Output directory: ${OUTPUT_DIR}\n`);

  // Check if images directory exists
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ Error: Images directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }

  // Get all image files
  const imageFiles = getImageFiles(IMAGES_DIR);
  console.log(`📊 Found ${imageFiles.length} images to optimize\n`);

  if (imageFiles.length === 0) {
    console.log('No images found to optimize.');
    process.exit(0);
  }

  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Process all images
  let processed = 0;
  let failed = 0;

  for (const file of imageFiles) {
    try {
      await optimizeImage(file);
      processed++;
    } catch (error) {
      failed++;
      console.error(`❌ Failed to process ${file}:`, error.message);
    }
  }

  console.log('\n✅ Optimization complete!');
  console.log(`📊 Statistics:`);
  console.log(`  - Processed: ${processed} images`);
  console.log(`  - Failed: ${failed} images`);
  console.log(`  - Total: ${imageFiles.length} images\n`);
  
  console.log('📝 Next steps:');
  console.log('  1. Review optimized images in:', OUTPUT_DIR);
  console.log('  2. Compare file sizes and quality');
  console.log('  3. Replace original images if satisfied');
  console.log('  4. Delete images-optimized folder after replacing\n');
}

// Run the script
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

