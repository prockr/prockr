import Script from 'next/script';

type SchemaInjectorProps = {
  schemas: object[];
};

export function SchemaInjector({ schemas }: SchemaInjectorProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

