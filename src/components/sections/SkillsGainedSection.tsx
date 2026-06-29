import { motion } from 'motion/react';

const skillsGained = [
  'Data Analysis',
  'SQL',
  'R',
  'Tableau',
  'AI Fundamentals',
  'Machine Learning',
  'Neural Networks',
  'Ethics',
  'Python',
  'OOP',
  'Scikit-learn',
  'GCP',
  'Cloud Storage',
  'Compute Engine',
  'BigQuery',
  'Async',
  'Decorators',
  'Model Evaluation',
  'Feature Engineering',
  'Deployment',
  'HTML/CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Databases',
  'Data Cleaning',
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: 'var(--color-accent)' }}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SkillsGainedSection = () => {
  return (
    <section className="section" id="skills-gained">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="badge mb-4 inline-block">Growth</span>
          <h2 className="heading-xl">Skills Gained</h2>
          <p
            className="body-md mt-3 max-w-2xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Competencies earned through professional certifications and hands-on
            project work.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          {skillsGained.map((skill, index) => (
            <motion.span
              key={skill}
              className="tag inline-flex items-center gap-1.5"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
            >
              <CheckIcon />
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGainedSection;