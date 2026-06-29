import { Link } from 'react-router-dom';

const SendIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function CTABanner() {
  return (
    <section className="section">
      <div className="section-container">
        <div 
          className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          {/* Decorative glow corner */}
          <div 
            className="pointer-events-none"
            style={{
              position: 'absolute',
              bottom: -40,
              right: -40,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)',
            }}
          />

          {/* Send icon circle */}
          <div 
            className="rounded-full flex items-center justify-center flex-shrink-0"
            style={{ 
              width: 64, 
              height: 64, 
              background: 'var(--color-accent-light)',
              border: '1px solid var(--color-accent)',
              color: 'var(--color-accent)'
            }}
          >
            <SendIcon size={26} />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p 
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.12em',
              }}
            >
              Let's Work Together
            </p>
            <h3 
              className="font-display font-extrabold mb-2"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Have a Project in Mind?
            </h3>
            <p 
              className="leading-relaxed"
              style={{
                fontSize: 14,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}
            >
              I'm always open to discussing new opportunities and interesting projects. Let's build something amazing together!
            </p>
          </div>

          {/* CTA button */}
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-white font-bold no-underline flex-shrink-0 transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--color-accent)',
              fontSize: 15,
              letterSpacing: '0.01em',
              boxShadow: 'var(--color-shadow-md)',
            }}
          >
            Get In Touch <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}