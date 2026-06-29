import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface CTA {
  label: string;
  to?: string;
  href?: string;
  primary?: boolean;
}

interface PageHeroProps {
  badge: string;
  titleLine1: string;
  titleAccent: string;
  bgImage: string;
  description: string;
  align?: 'left' | 'center';
  ctas?: CTA[];
}

export default function PageHero({
  badge,
  titleLine1,
  titleAccent,
  bgImage,
  description,
  align = 'center',
  ctas = [],
}: PageHeroProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';

  return (
    <section
      className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--color-hero-overlay, rgba(0,0,0,0.7))' }}
      />

      {/* Content */}
      <div className={`relative z-10 px-6 py-24 sm:px-12 lg:px-24 max-w-4xl mx-auto w-full ${alignment}`}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="badge">{badge}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="heading-xl leading-tight"
        >
          {titleLine1}{' '}
          <span className="gradient-text">{titleAccent}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 text-lg max-w-2xl leading-relaxed"
          style={{
            color: 'var(--color-text-secondary)',
            marginLeft: align === 'center' ? 'auto' : undefined,
            marginRight: align === 'center' ? 'auto' : undefined,
          }}
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        {ctas.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`mt-10 flex flex-wrap gap-4 ${
              align === 'center' ? 'justify-center' : 'justify-start'
            }`}
          >
            {ctas.map((cta, index) => {
              const className = cta.primary ? 'btn-primary' : 'btn-secondary';

              if (cta.to) {
                return (
                  <Link key={index} to={cta.to} className={className}>
                    {cta.label}
                  </Link>
                );
              }

              if (cta.href) {
                return (
                  <a
                    key={index}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {cta.label}
                  </a>
                );
              }

              return (
                <span key={index} className={className} role="button" tabIndex={0}>
                  {cta.label}
                </span>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}