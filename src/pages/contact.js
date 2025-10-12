'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar';
import './contact.css';

export default function Contact() {
  const router = useRouter();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState(null);

  // Use env if present; otherwise fall back to the keys you shared
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_9wka50e';
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_5wxk5z2';
  const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  || 'Ox4xT03k0j8zBZPkx';

  const onSubmit = async (e) => {
    e.preventDefault();
    setNote(null);

    if (!formRef.current) {
      setNote({ type: 'error', msg: 'Form reference not found.' });
      return;
    }
    const fd = new FormData(formRef.current);
    const name = fd.get('name')?.toString().trim();
    const email = fd.get('email')?.toString().trim();
    const subject = fd.get('subject')?.toString().trim() || 'Website contact';
    const message = fd.get('message')?.toString().trim();
    const company = fd.get('company')?.toString().trim(); // honeypot

    if (company) return; // spam bot bail

    if (!name || !email) {
      setNote({ type: 'error', msg: 'Please fill your name and email.' });
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          subject,
          message,
          // Make sure your EmailJS template includes a {{to_email}} variable,
          // or configure the recipient inside the template settings.
          to_email: 'info@arnika-marine.com',
        },
        { publicKey: PUBLIC_KEY }
      );

      router.push('/contact/thanks');
    } catch (err) {
      console.error(err);
      setNote({ type: 'error', msg: 'Something went wrong. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <div className="container">
          {/* Header */}
          <header className="header">
            <h1>Contact Us</h1>
            <p>
              We&apos;d love to hear from you. Reach out to Arnika Travel using the details below
              or send us a message.
            </p>
          </header>

          {/* Centered cards wrapper */}
          <div className="center-wrap">
            {/* Contact info card */}
            <section className="info">
              <h2>Contact details</h2>
              <ul>
                <li><strong>Company:</strong> Arnika Travel</li>
                <li><strong>Phone:</strong> +995 598 767 668</li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@arnika-marine.com">info@arnika-marine.com</a>
                </li>
                <li><strong>Address:</strong> Tbilisi, Georgia</li>
              </ul>
            </section>

            {/* Form card */}
            <section className="form-section">
              <h2>Send us a message</h2>

              <form ref={formRef} onSubmit={onSubmit} className="form" noValidate>
                {/* Honeypot (hidden) */}
                <input name="company" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                <div className="field-grid">
                  <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input id="name" name="name" placeholder="Your name" required />
                  </div>

                  <div className="field">
                    <label htmlFor="email">Your email</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" placeholder="Subject (optional)" />
                </div>

                <div className="field">
                  <label htmlFor="message">Your message</label>
                  <textarea id="message" name="message" rows={6} placeholder="Your message (optional)" />
                </div>

                {note && (
                  <div role="alert" className={`note ${note.type === 'error' ? 'error' : 'success'}`}>
                    {note.msg}
                  </div>
                )}

                <div className="actions">
                  <button type="submit" disabled={loading}>
                    {loading ? 'Sending…' : 'Send'}
                  </button>
                  <Link href="/" className="back-link">Back to home</Link>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
