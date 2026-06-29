import { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import { projects } from '@/data/portfolio';
import ProcessSection from '@/components/sections/ProcessSection';
import ProjectStatsSection from '@/components/sections/ProjectStatsSection';
import CTABanner from '@/components/sections/CTABanner';

/* ═══════════════════════════════════════════════════════════
   SVG ICONS
═══════════════════════════════════════════════════════════ */

const FilterIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const CodeIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);

const BrainIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.07-4.53A3 3 0 0 1 4.5 9.5a3 3 0 0 1 .9-2.13A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.07-4.53A3 3 0 0 0 19.5 9.5a3 3 0 0 0-.9-2.13A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const EyeIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
  </svg>
);

const ChatIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const LayersIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════ */

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => { 
    const t = setTimeout(() => setMounted(true), 60); 
    return () => clearTimeout(t); 
  }, []);

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map(p => p.category)));
    return ['All', ...cats];
  }, []);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Generative AI': return <BrainIcon size={18} />;
      case 'NLP': return <ChatIcon size={18} />;
      case 'Computer Vision': return <EyeIcon size={18} />;
      case 'AI Systems': return <LayersIcon size={18} />;
      case 'Web Development': return <CodeIcon size={18} />;
      default: return <CodeIcon size={18} />;
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)', fontFamily: 'var(--font-sans)', color: 'var(--color-text-primary)' }}>

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section 
        className="relative overflow-hidden"
        style={{ 
          background: 'var(--color-bg)',
          padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 4rem)',
          ...fade(0)
        }}
      >
        <div className="section-container">
          <div className="max-w-4xl text-left">
            <p 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                fontSize: 13,
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                ...fade(0.05)
              }}
            >
              Portfolio
            </p>
            
            <h1 
              className="font-display font-extrabold mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                lineHeight: 1.07,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                ...fade(0.1)
              }}
            >
              Selected <span className="gradient-text">Projects</span>
            </h1>
            
            <div 
              className="mb-5"
              style={{ 
                width: 48, 
                height: 3, 
                background: 'var(--color-accent)', 
                borderRadius: 2,
                ...fade(0.15)
              }} 
            />
            
            <p 
              className="max-w-2xl leading-relaxed"
              style={{
                fontSize: 16,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.78,
                ...fade(0.2)
              }}
            >
              Real-world AI and data science solutions — from deepfake detection to intelligent interview systems.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FILTERS & PROJECTS ══════════════════════ */}
      <section className="section" style={fade(0.25)}>
        <div className="section-container">
          
          {/* Filter Buttons */}
          <div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            style={fade(0.3)}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300"
                style={{
                  background: activeFilter === category ? 'var(--color-accent)' : 'var(--color-surface)',
                  color: activeFilter === category ? 'white' : 'var(--color-text-secondary)',
                  border: `1px solid ${activeFilter === category ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  fontSize: 14,
                  fontFamily: 'var(--font-sans)',
                  transform: activeFilter === category ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: activeFilter === category ? '0 4px 12px rgba(249, 115, 22, 0.3)' : 'none',
                }}
              >
                {category !== 'All' && getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>

          {/* Projects Count */}
          <div 
            className="text-center mb-8"
            style={fade(0.35)}
          >
            <p 
              style={{ 
                fontSize: 14, 
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-mono)' 
              }}
            >
              Showing <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
              {activeFilter !== 'All' && <span> in <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{activeFilter}</span></span>}
            </p>
          </div>

          {/* Project Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="card overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.1 
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
                    className="w-full aspect-video object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  />
                </a>

                {/* Card Content */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2">
                    <span 
                      className="tag w-fit inline-flex items-center gap-1.5"
                      style={{
                        background: 'var(--color-accent-light)',
                        color: 'var(--color-accent)',
                      }}
                    >
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="heading-sm"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="body-sm leading-relaxed flex-1"
                    style={{ color: 'var(--color-text-secondary)' }}
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
                          background: 'var(--color-surface)',
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

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div 
              className="text-center py-16"
              style={fade(0.4)}
            >
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-muted)',
                }}
              >
                <FilterIcon size={32} />
              </div>
              <p 
                className="font-semibold mb-2"
                style={{ 
                  fontSize: 18, 
                  color: 'var(--color-text-primary)' 
                }}
              >
                No projects found
              </p>
              <p 
                style={{ 
                  fontSize: 14, 
                  color: 'var(--color-text-secondary)' 
              }}
              >
                Try selecting a different category filter
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ══════════════════════ PROCESS ══════════════════════ */}
      <ProcessSection />

      {/* ══════════════════════ PROJECT STATS ══════════════════════ */}
      <ProjectStatsSection />

      {/* ══════════════════════ CTA BANNER ══════════════════════ */}
      <CTABanner />

    </div>
  );
}