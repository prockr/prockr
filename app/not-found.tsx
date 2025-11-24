import { redirect } from 'next/navigation';

export default function NotFound() {
  // تحويل فوري من جانب السيرفر
  redirect('/');
}

