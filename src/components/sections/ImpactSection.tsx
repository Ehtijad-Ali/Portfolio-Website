import { motion } from 'motion/react';

const impacts = [
  {
    stat: '40%',
    title: 'Reduction in Processing Time',
    description:
      'Automated data pipelines at IT Directorate that cut manual processing by nearly half, freeing teams for higher-value work.',
  },
  {
    stat: '6',
    title: 'Professional Certifications',
    description:
      'Industry-recognized credentials from Google, NUST, and W3Schools spanning data analytics, AI, cloud, and full-stack development.',
  },
  {
    stat: '4',
    title: 'International Client Base',
    description:
      'Delivered projects for clients across the US, Germany, Switzerland, and Pakistan — adapting to diverse requirements and time zones.',
  },
  {
    stat: '∞',
    title: 'Open Source Contributor',
    description:
      'Active contributor to the AI/ML community with published models on Hugging Face and open-source tools on GitHub.',
  },
];

const ImpactSection = () => {
  return (
    <section className="section" id="impact">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="badge mb-4 inline-block">Results</span>
          <h2 className="heading-xl">Impact &amp; Achievements</h2>
        </motion.div>

        <div className="stagger-children grid grid-cols-1 gap-6 sm:grid-cols-2">
          {impacts.map((item, index) => (
            <motion.div
              key={item.title}
              className="card p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="gradient-text font-display text-5xl font-bold">
                {item.stat}
              </span>
              <h3 className="heading-sm mt-3">{item.title}</h3>
              <p
                className="body-sm mt-2"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;