import { motion } from 'motion/react';

const toolCategories = [
  {
    name: 'Development',
    tools: [
      { name: 'VS Code', icon: '⌨️' },
      { name: 'Git', icon: '🔀' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Postman', icon: '📮' },
    ],
  },
  {
    name: 'AI / ML',
    tools: [
      { name: 'Jupyter', icon: '📓' },
      { name: 'MLflow', icon: '📊' },
      { name: 'Weights & Biases', icon: '📈' },
      { name: 'Hugging Face Hub', icon: '🤗' },
    ],
  },
  {
    name: 'Cloud',
    tools: [
      { name: 'Azure Portal', icon: '☁️' },
      { name: 'AWS Console', icon: '🛠️' },
      { name: 'GCP Console', icon: '🌐' },
      { name: 'Vercel', icon: '▲' },
    ],
  },
  {
    name: 'Design',
    tools: [
      { name: 'Figma', icon: '🎨' },
      { name: 'Canva', icon: '🖌️' },
      { name: 'Excalidraw', icon: '✏️' },
    ],
  },
];

const ToolStackSection = () => {
  return (
    <section className="section" id="tool-stack">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="badge mb-4 inline-block">Arsenal</span>
          <h2 className="heading-xl">Tool Stack</h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {toolCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
            >
              <h3
                className="heading-sm mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {category.name}
              </h3>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    className="card flex items-center gap-3 p-4 transition-colors duration-200"
                    style={{ cursor: 'default' }}
                    whileHover={{
                      backgroundColor: 'var(--color-surface-hover)',
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.08 + toolIndex * 0.05,
                    }}
                  >
                    <span className="text-xl">{tool.icon}</span>
                    <span
                      className="body-sm font-medium"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolStackSection;