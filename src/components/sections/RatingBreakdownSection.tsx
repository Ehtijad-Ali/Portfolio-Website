import { motion } from 'motion/react';

const ratingData = [
  { stars: 5, percentage: 80, count: 4 },
  { stars: 4, percentage: 15, count: 1 },
  { stars: 3, percentage: 5, count: 0 },
  { stars: 2, percentage: 0, count: 0 },
  { stars: 1, percentage: 0, count: 0 },
];

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? 'var(--color-accent)' : 'none'}
    stroke={filled ? 'var(--color-accent)' : 'var(--color-border-strong)'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const RatingBreakdownSection = () => {
  return (
    <section className="section" id="rating-breakdown">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="badge mb-4 inline-block">Reviews</span>
          <h2 className="heading-xl">Rating Breakdown</h2>
        </motion.div>

        <div className="card mx-auto max-w-2xl p-6 sm:p-8">
          {/* Average rating */}
          <motion.div
            className="mb-8 flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span className="gradient-text font-display text-6xl font-bold">4.9</span>
            <div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= 5} />
                ))}
              </div>
              <p
                className="body-sm mt-1"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Based on 5 client reviews
              </p>
            </div>
          </motion.div>

          <div
            className="divider mb-6"
            style={{ borderColor: 'var(--color-border)' }}
          />

          {/* Rating bars */}
          <div className="flex flex-col gap-3">
            {ratingData.map((rating, index) => (
              <motion.div
                key={rating.stars}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
              >
                <div className="flex w-16 shrink-0 items-center gap-1">
                  <span
                    className="body-sm font-medium"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {rating.stars}
                  </span>
                  <StarIcon filled={false} />
                </div>

                <div className="progress-bar flex-1" style={{ height: 8, borderRadius: 999 }}>
                  <motion.div
                    className="progress-bar-fill"
                    style={{
                      height: '100%',
                      borderRadius: 999,
                      backgroundColor: 'var(--color-accent)',
                    }}
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${rating.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                  />
                </div>

                <span
                  className="body-sm w-12 shrink-0 text-right"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {rating.percentage}%
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingBreakdownSection;