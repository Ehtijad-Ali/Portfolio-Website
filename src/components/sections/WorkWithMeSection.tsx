import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const WorkWithMeSection = () => {
  return (
    <section className="section" id="work-with-me">
      <div className="section-container">
        <motion.div
          className="card-glass mx-auto max-w-2xl p-8 text-center sm:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <motion.h2
            className="heading-xl mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Ready to Work Together?
          </motion.h2>

          <motion.p
            className="body-lg mx-auto mb-8 max-w-lg"
            style={{ color: 'var(--color-text-secondary)' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Whether you need an AI-powered solution, a full-stack application, or
            expert consultation on your data strategy — I&apos;d love to hear about
            your project and explore how we can bring it to life.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link to="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link to="/projects" className="btn-secondary">
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkWithMeSection;