import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Understanding your goals, challenges, and constraints through in-depth research and stakeholder interviews.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Architecting solutions with clean system design, data flow diagrams, and interactive prototypes.',
    icon: '🎨',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Building robust, scalable systems with iterative development, code reviews, and continuous testing.',
    icon: '⚙️',
  },
  {
    number: '04',
    title: 'Delivery',
    description:
      'Deploying to production with CI/CD pipelines, monitoring, documentation, and ongoing support.',
    icon: '🚀',
  },
];

const ProcessSection = () => {
  return (
    <section className="section" id="process">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p 
            className="text-xs font-semibold uppercase tracking-[0.13em] mb-3"
            style={{
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Methodology
          </p>
          <h2 
            className="font-display font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
            }}
          >
            My <span style={{ color: 'var(--color-accent)' }}>Process</span>
          </h2>
          <p 
            className="max-w-2xl mt-4"
            style={{
              fontSize: 14,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
            }}
          >
            A proven methodology that ensures successful project delivery from concept to launch.
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-4">
          <div className="grid min-w-[640px] grid-cols-4 gap-6 md:min-w-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute top-8 left-[calc(50%+32px)] hidden h-px w-[calc(100%-64px)] md:block"
                    style={{ 
                      background: 'linear-gradient(to right, var(--color-accent), transparent)',
                      height: 2,
                    }}
                  />
                )}

                {/* Step circle */}
                <div
                  className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-2xl font-bold mb-6"
                  style={{
                    background: 'var(--color-surface)',
                    border: '2px solid var(--color-accent)',
                    color: 'var(--color-accent)',
                    boxShadow: '0 0 0 4px var(--color-accent-light)',
                  }}
                >
                  {step.icon}
                </div>

                <div
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{
                    background: 'var(--color-accent-light)',
                    color: 'var(--color-accent)',
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.05em',
                  }}
                >
                  STEP {step.number}
                </div>

                <h3
                  className="font-semibold mb-3"
                  style={{ 
                    fontSize: 18, 
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ 
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
