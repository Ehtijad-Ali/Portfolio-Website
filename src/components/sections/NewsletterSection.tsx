import { useState } from 'react';
import { motion } from 'motion/react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section" id="newsletter">
      <div className="section-container">
        <motion.div
          className="card-glass max-w-xl mx-auto text-center p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge mb-4 inline-block">Newsletter</span>
          <h2 className="heading-lg mb-3">Stay Updated</h2>
          <p className="body-md text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
            Get notified about new articles, projects, and AI insights.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="py-4"
            >
              <span className="text-3xl mb-3 block">✉️</span>
              <p className="heading-sm text-[var(--color-accent)] mb-2">You&apos;re subscribed!</p>
              <p className="body-sm text-[var(--color-text-secondary)]">
                Thanks for subscribing. You&apos;ll hear from me soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input flex-1"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}