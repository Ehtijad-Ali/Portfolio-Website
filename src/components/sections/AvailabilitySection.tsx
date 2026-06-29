import { motion } from 'motion/react';

const AvailabilitySection = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <section className="section" id="availability">
      <div className="section-container">
        <motion.div
          className="card-glass mx-auto max-w-xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Status indicator */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: '#22c55e' }}
              />
              <span
                className="relative inline-flex h-3 w-3 rounded-full"
                style={{ backgroundColor: '#22c55e' }}
              />
            </span>
            <h3 className="heading-sm" style={{ color: '#22c55e' }}>
              Available for Freelance
            </h3>
          </div>

          <div
            className="divider my-5"
            style={{ borderColor: 'var(--color-border)' }}
          />

          {/* Details */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div>
                <p
                  className="body-sm font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Working Hours
                </p>
                <p
                  className="body-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Monday – Saturday, 9 AM – 6 PM (PKT)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <div>
                <p
                  className="body-sm font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Response Time
                </p>
                <p
                  className="body-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Usually within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <div>
                <p
                  className="body-sm font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Current Timezone
                </p>
                <p
                  className="body-sm font-mono"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {timezone}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AvailabilitySection;