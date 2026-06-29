import { motion } from 'motion/react';
import { education } from '@/data/portfolio';

const EducationSection = () => {
  return (
    <section className="section" id="education">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="badge mb-4 inline-block">Academics</span>
          <h2 className="heading-xl">Education</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute bottom-0 left-4 top-0 w-px md:left-1/2 md:-translate-x-px"
            style={{ backgroundColor: 'var(--color-border-strong)' }}
          />

          <div className="flex flex-col gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-12 md:pl-0"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[9px] top-1.5 z-10 h-[10px] w-[10px] rounded-full border-2 md:left-1/2 md:-translate-x-1/2"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    borderColor: 'var(--color-bg)',
                    boxShadow: '0 0 0 3px var(--color-accent-light)',
                  }}
                />

                {/* Card — offset alternating on desktop */}
                <div
                  className={`card p-6 ${
                    index % 2 === 0
                      ? 'md:ml-auto md:mr-[calc(50%+24px)] md:w-[calc(50%-24px)]'
                      : 'md:mr-auto md:ml-[calc(50%+24px)] md:w-[calc(50%-24px)]'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="heading-sm">{edu.degree}</h3>
                      <p
                        className="body-md mt-1 font-medium"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        {edu.institution}
                      </p>
                    </div>
                    <span
                      className="body-sm shrink-0"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <p
                    className="body-sm mt-1"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    📍 {edu.location}
                  </p>

                  <p
                    className="body-sm mt-3"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {edu.description}
                  </p>

                  {'gpa' in edu && edu.gpa && (
                    <div
                      className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        backgroundColor: 'var(--color-accent-light)',
                        color: 'var(--color-accent)',
                      }}
                    >
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;