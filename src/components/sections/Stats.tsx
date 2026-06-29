import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { stats } from '@/data/portfolio';

function AnimatedCounter({
  target,
  suffix,
  isInView,
}: {
  target: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // ms
    const incrementTime = 30; // ms
    const steps = Math.ceil(duration / incrementTime);
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span style={{ color: 'var(--color-accent)' }}>
      {count}
      {suffix}
    </span>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15 * i,
    },
  }),
};

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="section"
      style={{ background: 'var(--color-surface)' }}
      ref={ref}
    >
      <div className="section-container">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-3 p-6 md:p-8 rounded-xl transition-all duration-300 hover:scale-105"
              custom={index}
              variants={cardVariants}
              style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
              }}
            >
              <span
                className="font-display font-extrabold"
                style={{ 
                  fontSize: 48, 
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </span>
              <span
                className="font-medium text-center"
                style={{ 
                  fontSize: 14, 
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}