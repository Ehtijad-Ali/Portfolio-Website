import { motion } from 'motion/react';

const learningTopics = [
  {
    name: 'Agentic AI Systems',
    description:
      'Building autonomous AI agents that can plan, reason, and execute multi-step tasks using tool-use and memory.',
    status: 'Active',
  },
  {
    name: 'Advanced RAG Architectures',
    description:
      'Exploring hybrid search, re-ranking, query decomposition, and multi-modal retrieval for production RAG pipelines.',
    status: 'Active',
  },
  {
    name: 'MLOps & Model Serving',
    description:
      'Learning end-to-end ML infrastructure — model versioning, A/B testing, monitoring, and scalable serving with KServe.',
    status: 'Exploring',
  },
  {
    name: 'Multimodal AI',
    description:
      'Understanding vision-language models, cross-modal reasoning, and building applications that process text, images, and audio.',
    status: 'Exploring',
  },
];

const LearningSection = () => {
  return (
    <section className="section" id="learning">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="badge mb-4 inline-block">Growth</span>
          <h2 className="heading-xl">Currently Learning</h2>
        </motion.div>

        <div className="stagger-children grid grid-cols-1 gap-6 sm:grid-cols-2">
          {learningTopics.map((topic, index) => (
            <motion.div
              key={topic.name}
              className="card flex flex-col gap-3 p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="heading-sm">{topic.name}</h3>
                <span
                  className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium"
                  style={{
                    backgroundColor:
                      topic.status === 'Active'
                        ? 'var(--color-accent-light)'
                        : 'var(--color-surface-hover)',
                    color:
                      topic.status === 'Active'
                        ? 'var(--color-accent)'
                        : 'var(--color-text-muted)',
                  }}
                >
                  {topic.status}
                </span>
              </div>

              <p
                className="body-sm"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {topic.description}
              </p>

              {/* Progress indicator */}
              <div className="mt-auto pt-2">
                <div className="progress-bar" style={{ height: 4, borderRadius: 999 }}>
                  <motion.div
                    className="progress-bar-fill"
                    style={{
                      height: '100%',
                      borderRadius: 999,
                      backgroundColor:
                        topic.status === 'Active'
                          ? 'var(--color-accent)'
                          : 'var(--color-secondary)',
                    }}
                    initial={{ width: '0%' }}
                    whileInView={{
                      width: topic.status === 'Active' ? '60%' : '25%',
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;