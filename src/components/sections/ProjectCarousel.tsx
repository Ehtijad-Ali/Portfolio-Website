import { projects } from '@/data/portfolio';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';

const CARD_GAP = 24;
const CARD_WIDTH = 360;

export default function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = Math.max(0, projects.length - 1);

  const scrollTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, maxIndex));
      setActiveIndex(clamped);
      scrollRef.current?.scrollTo({
        left: clamped * (CARD_WIDTH + CARD_GAP),
        behavior: 'smooth',
      });
    },
    [maxIndex],
  );

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const idx = Math.round(scrollLeft / (CARD_WIDTH + CARD_GAP));
    setActiveIndex(Math.max(0, Math.min(idx, maxIndex)));
  }, [maxIndex]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section className="section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Navigation arrows */}
          <div className="flex items-center justify-end gap-2 mb-6">
            <button
              onClick={() => scrollTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="btn-ghost !p-2.5 rounded-full border border-[var(--color-border)] disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
              aria-label="Previous project"
            >
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
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo(activeIndex + 1)}
              disabled={activeIndex >= maxIndex}
              className="btn-ghost !p-2.5 rounded-full border border-[var(--color-border)] disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
              aria-label="Next project"
            >
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
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                className="card snap-start flex-shrink-0 overflow-hidden group"
                style={{ width: CARD_WIDTH }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 badge text-[10px]">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="heading-sm mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="tag text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Project carousel">
            {projects.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to project ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 bg-[var(--color-accent)]'
                    : 'w-2 bg-[var(--color-border)] hover:bg-[var(--color-text-muted)]'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}