import { motion } from 'motion/react';

const pathSteps = [
  {
    year: '2021',
    title: 'Started with Python',
    description:
      'First steps into programming — learned Python fundamentals, data structures, and scripting basics.',
  },
  {
    year: '2022',
    title: 'Data Science Fundamentals',
    description:
      'Dove into data analysis, statistics, visualization with Tableau, and database querying with SQL and R.',
  },
  {
    year: '2023',
    title: 'Machine Learning',
    description:
      'Built predictive models, studied supervised & unsupervised learning, and earned the Google AI Essentials certification.',
  },
  {
    year: '2023',
    title: 'Deep Learning & NLP',
    description:
      'Explored neural networks, NLP with BERT, and published research on multi-lingual sentiment analysis at NUST.',
  },
  {
    year: '2024',
    title: 'Production AI Systems',
    description:
      'Deployed real-world AI solutions — deepfake detection, AI interviews, and government ML pipelines.',
  },
  {
    year: '2025',
    title: 'Current: AI Leadership',
    description:
      'Leading ML initiatives, exploring agentic AI, RAG architectures, and building full-stack AI products.',
  },
];

const LearningPathSection = () => {
  return (
    <section className="section" id="learning-path">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="badge mb-4 inline-block">Journey</span>
          <h2 className="heading-xl">Learning Path</h2>
        </motion.div>

        {/* Desktop: horizontal path */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Horizontal connector line */}
            <div
              className="absolute bottom-6 left-0 right-0 h-px"
              style={{ backgroundColor: 'var(--color-border-strong)' }}
            />

            <div className="grid grid-cols-6 gap-4">
              {pathSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  {/* Node dot */}
                  <div
                    className="relative z-10 mb-3 h-3 w-3 rounded-full"
                    style={{
                      backgroundColor:
                        index === pathSteps.length - 1
                          ? 'var(--color-accent)'
                          : 'var(--color-accent)',
                      boxShadow:
                        index === pathSteps.length - 1
                          ? `0 0 0 4px var(--color-accent-light)`
                          : 'none',
                    }}
                  />

                  <span
                    className="body-sm font-mono"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {step.year}
                  </span>
                  <h4
                    className="heading-sm mt-1 text-sm"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="body-sm mt-2"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative md:hidden">
          <div
            className="absolute bottom-0 left-3 top-0 w-px"
            style={{ backgroundColor: 'var(--color-border-strong)' }}
          />

          <div className="flex flex-col gap-6 pl-10">
            {pathSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                {/* Node dot */}
                <div
                  className="absolute -left-10 top-1 h-2.5 w-2.5 rounded-full"
                  style={{
                    left: '-25px',
                    backgroundColor: 'var(--color-accent)',
                    boxShadow:
                      index === pathSteps.length - 1
                        ? `0 0 0 4px var(--color-accent-light)`
                        : 'none',
                  }}
                />

                <span
                  className="body-sm font-mono"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {step.year}
                </span>
                <h4 className="heading-sm mt-1">{step.title}</h4>
                <p
                  className="body-sm mt-1"
                  style={{ color: 'var(--color-text-secondary)' }}
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

export default LearningPathSection;