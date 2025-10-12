import Link from 'next/link';

export default function ContactThanks() {
  return (
    <main style={{padding: 24, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
      <h1>Thank you</h1>
      <p>Your message was sent successfully. We'll get back to you shortly.</p>
      <p>
        <Link href="/">Return to home</Link>
      </p>
    </main>
  );
}
