import { useState } from 'react';

export default function HeroFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      style={{ perspective: '1000px', width: '280px', height: '360px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Card Container */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s ease',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ─── FRONT FACE ─── */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          }}
        >
          {/* Geometric avatar placeholder */}
          <div className="relative w-28 h-28 mb-6">
            {/* Outer ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `linear-gradient(135deg, var(--color-accent), var(--color-secondary))`,
                opacity: 0.25,
              }}
            />
            {/* Inner ring */}
            <div
              className="absolute rounded-full"
              style={{
                top: '8px',
                left: '8px',
                right: '8px',
                bottom: '8px',
                background: `linear-gradient(225deg, var(--color-accent-light), var(--color-accent))`,
                opacity: 0.35,
              }}
            />
            {/* Core circle */}
            <div
              className="absolute rounded-full flex items-center justify-center"
              style={{
                top: '20px',
                left: '20px',
                right: '20px',
                bottom: '20px',
                backgroundColor: 'var(--color-accent)',
                boxShadow: '0 0 40px rgba(0,0,0,0.15)',
              }}
            >
              {/* SVG geometric pattern */}
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Hexagon */}
                <path
                  d="M28 6L49 18V38L28 50L7 38V18L28 6Z"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.9"
                />
                {/* Inner diamond */}
                <path
                  d="M28 16L38 28L28 40L18 28L28 16Z"
                  stroke="white"
                  strokeWidth="1"
                  fill="rgba(255,255,255,0.1)"
                  opacity="0.7"
                />
                {/* Center dot */}
                <circle cx="28" cy="28" r="4" fill="white" opacity="0.8" />
                {/* Orbiting dots */}
                <circle cx="28" cy="8" r="2" fill="white" opacity="0.5" />
                <circle cx="48" cy="28" r="2" fill="white" opacity="0.5" />
                <circle cx="8" cy="28" r="2" fill="white" opacity="0.5" />
                <circle cx="28" cy="48" r="2" fill="white" opacity="0.5" />
              </svg>
            </div>
            {/* Decorative floating rings */}
            <div
              className="absolute rounded-full border-2 animate-pulse"
              style={{
                top: '-6px',
                left: '-6px',
                right: '-6px',
                bottom: '-6px',
                borderColor: 'var(--color-accent)',
                opacity: 0.15,
              }}
            />
          </div>

          {/* Name */}
          <h3
            className="text-xl font-bold tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Ehtijad Ali
          </h3>

          {/* Role */}
          <p
            className="mt-1 text-sm font-medium tracking-wide uppercase"
            style={{ color: 'var(--color-accent)' }}
          >
            AI Engineer
          </p>

          {/* Decorative line */}
          <div
            className="mt-4 w-12 h-0.5 rounded-full"
            style={{ backgroundColor: 'var(--color-accent)', opacity: 0.5 }}
          />
        </div>

        {/* ─── BACK FACE ─── */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          }}
        >
          {/* Contact Info */}
          <div className="w-full space-y-4">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--color-accent-light)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span
                className="text-sm truncate"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                ehtijad@example.com
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--color-accent-light)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span
                className="text-sm truncate"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Worldwide · Remote
              </span>
            </div>

            {/* Website */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--color-accent-light)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span
                className="text-sm truncate"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                ehtijadali.dev
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="my-4 w-full h-px"
            style={{ backgroundColor: 'var(--color-border)' }}
          />

          {/* Availability */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: '#22c55e' }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ backgroundColor: '#22c55e' }}
              />
            </span>
            <span
              className="text-sm font-medium"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Available for work
            </span>
          </div>

          {/* Hint */}
          <p
            className="mt-4 text-xs"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Hover away to flip back
          </p>
        </div>
      </div>

      {/* Responsive overrides via inline style on a wrapper — 
          mobile sizes handled by parent or media query. 
          For self-contained mobile support: */}
      <style>{`
        @media (max-width: 640px) {
          .group[style*="width: 280px"] {
            width: 240px !important;
            height: 300px !important;
          }
        }
      `}</style>
    </div>
  );
}