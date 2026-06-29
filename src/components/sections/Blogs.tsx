import { motion } from 'motion/react';
import { blogs } from '@/data/portfolio';

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

const CalendarIcon = ({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = ({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const Blogs = () => {
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
            Writing
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
            Articles & <span style={{ color: 'var(--color-accent)' }}>Insights</span>
          </h2>
          <p 
            className="max-w-2xl mt-4"
            style={{
              fontSize: 14,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
            }}
          >
            Long-form writing on AI, large language models, machine learning trends, and data products.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {blogs.map((blog) => (
            <motion.a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]"
              variants={cardVariants}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                textDecoration: 'none',
                color: 'var(--color-text-primary)',
              }}
              whileHover={{ y: -4 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-md font-medium"
                      style={{
                        background: 'var(--color-accent-light)',
                        color: 'var(--color-accent)',
                        border: '1px solid var(--color-accent)',
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 
                  className="font-display font-bold"
                  style={{ 
                    fontSize: 20, 
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.3,
                  }}
                >
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p 
                  className="leading-relaxed flex-1"
                  style={{ 
                    fontSize: 14, 
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div 
                  className="flex items-center gap-3 pt-3"
                  style={{ 
                    borderTop: '1px solid var(--color-border)',
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon size={14} />
                    <span 
                      style={{ 
                        fontSize: 13, 
                        color: 'var(--color-text-muted)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <span style={{ color: 'var(--color-border)' }}>·</span>
                  <div className="flex items-center gap-1.5">
                    <ClockIcon size={14} />
                    <span 
                      style={{ 
                        fontSize: 13, 
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {blog.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;