import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const eased = 1 - Math.pow(1 - current / steps, 3);
      setProgress(Math.min(Math.round(eased * 100), 100));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => setIsVisible(false), 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => {}}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: 'var(--color-bg)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.h1
            className="font-display text-5xl font-bold tracking-widest sm:text-7xl"
            style={{ color: 'var(--color-text-primary)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            NEXUS
          </motion.h1>

          <div className="w-64 sm:w-80">
            <div
              className="progress-bar overflow-hidden"
              style={{ height: 3, borderRadius: 999 }}
            >
              <motion.div
                className="progress-bar-fill"
                style={{
                  height: '100%',
                  borderRadius: 999,
                  backgroundColor: 'var(--color-accent)',
                }}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15, ease: 'linear' }}
              />
            </div>
            <p
              className="mt-3 text-center font-mono text-xs tracking-wider"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;