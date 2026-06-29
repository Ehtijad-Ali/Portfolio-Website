import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase mb-4">404</p>
        <h1 className="heading-xl mb-6">NOT FOUND</h1>
        <p className="body-md mb-10 max-w-sm">This page does not exist. Head back home.</p>
        <Link to="/" className="btn-primary">GO HOME</Link>
      </motion.div>
    </section>
  );
}