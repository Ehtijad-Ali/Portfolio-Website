import { motion } from 'motion/react';
import { projects } from '@/data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p 
            className="text-xs font-semibold uppercase tracking-[0.13em] mb-3"
            style={{
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Portfolio
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
            Selected <span style={{ color: 'var(--color-accent)' }}>Projects</span>
          </h2>
          <p 
            className="max-w-2xl mt-4"
            style={{
              fontSize: 14,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
            }}
          >
            Real-world AI and data science solutions — from deepfake detection to intelligent interview systems.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]"
              variants={cardVariants}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
              whileHover={{ y: -4 }}
            >
              {/* Project Image */}
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>

              {/* Card Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                {/* Category Badge */}
                <span 
                  className="text-xs px-3 py-1.5 rounded-md font-medium w-fit"
                  style={{
                    background: 'var(--color-accent-light)',
                    color: 'var(--color-accent)',
                    border: '1px solid var(--color-accent)',
                    fontWeight: 600,
                  }}
                >
                  {project.category}
                </span>

                {/* Title */}
                <h3
                  className="font-display font-bold"
                  style={{ 
                    fontSize: 20, 
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed flex-1"
                  style={{ 
                    fontSize: 14, 
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md font-mono"
                      style={{
                        background: 'var(--color-bg)',
                        color: 'var(--color-accent)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-3">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-sm flex-1 text-center"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1.5 inline-block"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-sm flex-1 text-center"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-1.5 inline-block"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}