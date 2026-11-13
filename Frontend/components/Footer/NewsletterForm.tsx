'use client';

import { useState, type FormEvent } from 'react';

/**
 * Newsletter subscription form.
 *
 * Client Component — needs controlled input state and form submit handler.
 * Extracted from Footer so the rest of the footer can remain a Server Component.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to your newsletter / CRM endpoint
    setSubmitted(true);
    setEmail('');
  };

  if (submitted) {
    return (
      <p className="text-sm text-primary font-semibold py-4">
        ✓ Thanks! You're subscribed.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-2 bg-surface-container rounded-full focus-within:ring-2 ring-primary transition-all"
      aria-label="Newsletter subscription"
    >
      <label htmlFor="footer-newsletter-email" className="sr-only">
        Email Address
      </label>
      <input
        id="footer-newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
        aria-required="true"
        className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm px-4 w-full"
      />
      <button
        type="submit"
        className="bg-primary cursor-pointer text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
        aria-label="Subscribe to newsletter"
      >
        <span className="material-symbols-outlined text-sm" aria-hidden="true">
          send
        </span>
      </button>
    </form>
  );
}
