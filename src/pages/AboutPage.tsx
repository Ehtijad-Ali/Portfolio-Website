import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CTABanner from '@/components/sections/CTABanner';

/* ═══════════════════════════════════════════════════════════
   ALL SVG ICONS
═══════════════════════════════════════════════════════════ */

const CalendarIcon = ({ size = 26, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const StarIcon = ({ size = 26, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const LayersIcon = ({ size = 26, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);
const UsersIcon = ({ size = 26, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const BrainIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.07-4.53A3 3 0 0 1 4.5 9.5a3 3 0 0 1 .9-2.13A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.07-4.53A3 3 0 0 0 19.5 9.5a3 3 0 0 0-.9-2.13A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);
const BarChartIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);
const EyeIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const ChatIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const GlobeIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const CodeIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const HeadphonesIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);
const LightbulbIcon = ({ size = 32, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>
);
const ShieldIcon = ({ size = 32, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
  </svg>
);
const HeartIcon = ({ size = 32, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const PeopleIcon = ({ size = 32, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const BookIcon = ({ size = 28, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const RocketIcon = ({ size = 28, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);
const BarChartUpIcon = ({ size = 28, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
  </svg>
);
const TargetIcon = ({ size = 28, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const SendIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   SMALL REUSABLE PARTS
═══════════════════════════════════════════════════════════ */

function StatCard({ icon, value, label1, label2 }: { icon: React.ReactNode; value: string; label1: string; label2: string }) {
  return (
    <div 
      className="rounded-xl p-5 flex items-start gap-3.5 transition-all duration-300 hover:scale-105"
      style={{ 
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div 
        className="rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ 
          width: 44, 
          height: 44, 
          background: 'var(--color-accent-light)',
          border: '1px solid var(--color-accent)',
          color: 'var(--color-accent)'
        }}
      >
        {icon}
      </div>
      <div>
        <div 
          className="font-display font-extrabold leading-none"
          style={{ fontSize: 28, color: 'var(--color-accent)', letterSpacing: '-0.02em' }}
        >
          {value}
        </div>
        <div 
          className="mt-1"
          style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 500 }}
        >
          {label1}
        </div>
        <div 
          style={{ fontSize: 11, color: 'var(--color-text-muted)' }}
        >
          {label2}
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, desc, accentColor }: { icon: React.ReactNode; title: string; desc: string; accentColor: string }) {
  return (
    <div 
      className="rounded-xl p-6 flex flex-col items-center text-center gap-3.5 transition-all duration-300 hover:scale-105 hover:shadow-lg"
      style={{ 
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderBottom: `3px solid ${accentColor}`,
        flex: 1,
      }}
    >
      <div 
        className="rounded-xl flex items-center justify-center"
        style={{ 
          width: 56, 
          height: 56, 
          background: `${accentColor}18`,
          border: `1px solid ${accentColor}40`,
          color: accentColor
        }}
      >
        {icon}
      </div>
      <div className="font-semibold" style={{ fontSize: 15, color: 'var(--color-text-primary)' }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{desc}</div>
    </div>
  );
}

function JourneyCard({ year, title, desc, icon }: { year: string; title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div 
      className="rounded-xl p-6 flex flex-col gap-2.5 transition-all duration-300 hover:scale-105"
      style={{ 
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        flex: 1,
      }}
    >
      <div className="font-bold" style={{ fontSize: 13, color: 'var(--color-accent)', letterSpacing: '0.02em' }}>{year}</div>
      <div className="font-semibold" style={{ fontSize: 15, color: 'var(--color-text-primary)' }}>{title}</div>
      <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.7, flex: 1 }}>{desc}</div>
      <div className="mt-2" style={{ color: 'var(--color-accent)' }}>{icon}</div>
    </div>
  );
}

function ServiceCard({ icon, iconBg, title, desc }: { icon: React.ReactNode; iconBg: string; title: string; desc: string }) {
  return (
    <div 
      className="rounded-xl p-6 flex flex-col gap-3.5 transition-all duration-300 hover:scale-105 hover:shadow-lg"
      style={{ 
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="flex items-start gap-3.5">
        <div 
          className="rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ width: 46, height: 46, background: iconBg, color: 'var(--color-accent)' }}
        >
          {icon}
        </div>
        <div>
          <div className="font-semibold mb-1.5" style={{ fontSize: 15, color: 'var(--color-text-primary)' }}>{title}</div>
          <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{desc}</div>
        </div>
      </div>
      <a 
        href="#" 
        className="inline-flex items-center gap-1.5 no-underline font-semibold"
        style={{ fontSize: 12, color: 'var(--color-accent)' }}
      >
        Learn more <span>→</span>
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ORBITAL FLOATING ICONS (hero right side)
═══════════════════════════════════════════════════════════ */
function FloatIcon({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div 
      className="hidden lg:flex items-center justify-center"
      style={{
        position: 'absolute',
        width: 52,
        height: 52,
        borderRadius: 14,
        background: 'var(--color-surface-glass)',
        border: '1px solid var(--color-accent)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 3,
        color: 'var(--color-accent)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════ */
export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t); }, []);

  const photoUrl = 'https://i.ibb.co/Rksnjdyh/Whats-App-Image-2026-06-26-at-12-05-20-AM.jpg';

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  const techLogos = [
    { name: 'Python',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TensorFlow',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'OpenCV',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'Scikit-learn',src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'Pandas',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'NumPy',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'FastAPI',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'React',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'SQL',         src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Docker',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git',         src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)', fontFamily: 'var(--font-sans)', color: 'var(--color-text-primary)' }}>

      {/* ══════════════════════ HERO / ABOUT TOP ══════════════════════ */}
      <section 
        className="relative overflow-hidden"
        style={{ 
          background: 'var(--color-bg)',
          padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 4rem)',
          ...fade(0)
        }}
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left text */}
            <div className="lg:col-span-6 flex flex-col" style={fade(0)}>
              <p 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 self-start"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  fontSize: 13,
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                About Me
              </p>
              
              <h1 
                className="font-display font-extrabold mb-4"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                  lineHeight: 1.07,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-text-primary)',
                }}
              >
                Building Intelligent Solutions<br />
                That Drive <span className="gradient-text">Real Impact</span>
              </h1>
              
              <div 
                className="mb-5"
                style={{ 
                  width: 48, 
                  height: 3, 
                  background: 'var(--color-accent)', 
                  borderRadius: 2 
                }} 
              />
              
              <p 
                className="max-w-lg mb-8 leading-relaxed"
                style={{
                  fontSize: 16,
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.78,
                }}
              >
                A passionate AI Engineer & Data Scientist from Gilgit, Pakistan —<br />
                driven by curiosity, shaped by data, and focused on building<br />
                AI solutions that matter.
              </p>
              
              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard icon={<CalendarIcon size={22} />} value="3+" label1="Years Experience" label2="AI/ML Development" />
                <StatCard icon={<StarIcon size={22} />} value="30+" label1="Certifications" label2="Earned" />
                <StatCard icon={<LayersIcon size={22} />} value="15+" label1="AI/ML Projects" label2="Completed" />
                <StatCard icon={<UsersIcon size={22} />} value="20+" label1="Happy Clients" label2="Worldwide" />
              </div>
            </div>

            {/* Right — photo + floating icons */}
            <div 
              className="lg:col-span-6 relative flex items-center justify-center"
              style={{ minHeight: 420, ...fade(0.15) }}
            >
              {/* Accent glow */}
              <div 
                className="pointer-events-none"
                style={{
                  position: 'absolute',
                  width: 380,
                  height: 380,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, var(--color-accent-light) 0%, rgba(0,0,0,0) 72%)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)',
                  opacity: 0.9,
                }}
              />
              {[340, 440].map((s, i) => (
                <div 
                  key={i}
                  className="pointer-events-none"
                  style={{
                    position: 'absolute',
                    width: s,
                    height: s,
                    borderRadius: '50%',
                    border: `1px solid var(--color-accent)`,
                    borderColor: `color-mix(in srgb, var(--color-accent) ${20 - i * 8}%, transparent)`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    opacity: 0.5,
                  }}
                />
              ))}
              
              {/* Photo */}
              <img 
                src={photoUrl} 
                alt="Ehtijad Ali"
                className="relative z-[2] block"
                style={{ 
                  width: 300, 
                  height: 400, 
                  objectFit: 'cover', 
                  objectPosition: 'top center',
                  borderRadius: 16,
                  border: '3px solid var(--color-accent)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 80px var(--color-accent-light)',
                }}
                onError={e => { 
                  (e.target as HTMLImageElement).src = 'https://placehold.co/300x400/1a1a2e/f97316?text=EA'; 
                }}
              />
              
              {/* Floating icon cards */}
              <FloatIcon style={{ top: 40, left: '18%' }}><BrainIcon size={24} /></FloatIcon>
              <FloatIcon style={{ top: 140, left: '6%' }}><BarChartIcon size={24} /></FloatIcon>
              <FloatIcon style={{ top: 260, left: '12%' }}><BarChartUpIcon size={24} /></FloatIcon>
              <FloatIcon style={{ top: 80, right: '6%' }}><EyeIcon size={24} /></FloatIcon>
              <FloatIcon style={{ top: 220, right: '3%' }}><ChatIcon size={24} /></FloatIcon>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ MY VALUES ══════════════════════ */}
      <section className="section" style={fade(0.1)}>
        <div className="section-container">
          <p 
            className="text-xs font-semibold uppercase tracking-[0.13em] mb-3"
            style={{
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Principles
          </p>
          <h2 
            className="font-display font-bold mb-3"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
            }}
          >
            My <span style={{ color: 'var(--color-accent)' }}>Values</span>
          </h2>
          <p 
            className="max-w-2xl mb-10"
            style={{
              fontSize: 14,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
            }}
          >
            The core principles that guide my work and ensure I deliver meaningful and lasting impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ValueCard
              icon={<LightbulbIcon size={28} />}
              title="Curiosity-Driven"
              desc="I explore new ideas and technologies to create innovative solutions."
              accentColor="#f59e0b"
            />
            <ValueCard
              icon={<ShieldIcon size={28} />}
              title="Quality Over Speed"
              desc="I believe in building things right the first time with clean, maintainable code."
              accentColor="#3b82f6"
            />
            <ValueCard
              icon={<HeartIcon size={28} />}
              title="Client-Centric"
              desc="Your success is my success. I deliver solutions that create real and measurable impact."
              accentColor="#ec4899"
            />
            <ValueCard
              icon={<PeopleIcon size={28} />}
              title="Open Collaboration"
              desc="I value teamwork, clear communication, and sharing knowledge."
              accentColor="#a855f7"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════ MY JOURNEY ══════════════════════ */}
      <section className="section" style={fade(0.15)}>
        <div className="section-container">
          <p 
            className="text-xs font-semibold uppercase tracking-[0.13em] mb-3"
            style={{
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Journey
          </p>
          <h2 
            className="font-display font-bold mb-8"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
            }}
          >
            My <span style={{ color: 'var(--color-accent)' }}>Journey</span>
          </h2>

          {/* Timeline line + dots */}
          <div className="relative mb-8" style={{ margin: '32px 0 24px' }}>
            <div 
              className="mx-8"
              style={{ 
                height: 2, 
                background: 'color-mix(in srgb, var(--color-accent) 20%, transparent)' 
              }} 
            />
            <div 
              className="absolute top-1/2 left-0 right-0 flex justify-around"
              style={{ transform: 'translateY(-50%)' }}
            >
              {[0, 1, 2, 3].map(i => (
                <div 
                  key={i}
                  style={{ 
                    width: 14, 
                    height: 14, 
                    borderRadius: '50%', 
                    background: 'var(--color-accent)',
                    border: '3px solid var(--color-bg)',
                    boxShadow: '0 0 0 3px var(--color-accent-light)',
                  }} 
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <JourneyCard year="2021" title="Starting My Journey" desc="Began learning AI, ML and Data Science. Built strong foundations in Python and mathematics." icon={<BookIcon size={24} />} />
            <JourneyCard year="2022" title="Building & Learning" desc="Worked on multiple real-world projects and improved skills in Computer Vision, NLP, and Deep Learning." icon={<RocketIcon size={24} />} />
            <JourneyCard year="2023" title="Experience & Growth" desc="Joined professional projects, collaborated with teams, and delivered AI solutions to real clients." icon={<BarChartUpIcon size={24} />} />
            <JourneyCard year="2024+" title="Impact & Innovation" desc="Continuing to build scalable AI products and helping businesses achieve meaningful results." icon={<TargetIcon size={24} />} />
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHAT I DO ══════════════════════ */}
      <section className="section" style={fade(0.2)}>
        <div className="section-container">
          <p 
            className="text-xs font-semibold uppercase tracking-[0.13em] mb-3"
            style={{
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Services
          </p>
          <h2 
            className="font-display font-bold mb-3"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
            }}
          >
            What I <span style={{ color: 'var(--color-text-primary)' }}>Do</span>
          </h2>
          <p 
            className="max-w-2xl mb-10"
            style={{
              fontSize: 14,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
            }}
          >
            End-to-end AI solutions tailored to solve real-world problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard
              icon={<BrainIcon size={22} />}
              iconBg="rgba(249,115,22,0.12)"
              title="Machine Learning"
              desc="Predictive modeling, classification, regression, clustering and recommendation systems."
            />
            <ServiceCard
              icon={<EyeIcon size={22} />}
              iconBg="rgba(59,130,246,0.12)"
              title="Computer Vision"
              desc="Object detection, face recognition, image classification, surveillance and automation."
            />
            <ServiceCard
              icon={<ChatIcon size={22} />}
              iconBg="rgba(168,85,247,0.12)"
              title="NLP & LLM Solutions"
              desc="Chatbots, text classification, sentiment analysis, translation and LLM integration."
            />
            <ServiceCard
              icon={<BarChartIcon size={22} />}
              iconBg="rgba(34,197,94,0.12)"
              title="Data Analytics"
              desc="Data cleaning, analysis, visualization and dashboards to drive business insights."
            />
            <ServiceCard
              icon={<CodeIcon size={22} />}
              iconBg="rgba(245,158,11,0.12)"
              title="AI Web Applications"
              desc="FastAPI, React, Streamlit apps, REST APIs and full-stack AI solutions."
            />
            <ServiceCard
              icon={<HeadphonesIcon size={22} />}
              iconBg="rgba(236,72,153,0.12)"
              title="Consulting & Support"
              desc="Helping businesses adopt AI, optimize workflows and grow through intelligent solutions."
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA BANNER ══════════════════════ */}
      <CTABanner />

    </div>
  );
}