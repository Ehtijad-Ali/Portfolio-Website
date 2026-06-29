import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

// ─── SVG Icons ─────────────────────────────────────────────────────────────────

const BrainIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent)' }}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.07-4.53A3 3 0 0 1 4.5 9.5a3 3 0 0 1 .9-2.13A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.07-4.53A3 3 0 0 0 19.5 9.5a3 3 0 0 0-.9-2.13A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);

const EyeIcon = ({ size = 28, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const ChatIcon = ({ size = 28, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const BarChartIcon = ({ size = 28, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const DevIcon = ({ size = 28, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent)' }}>
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent)' }}>
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const AwardIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent)' }}>
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent)' }}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

// ─── Orbital Rings ─────────────────────────────────────────────────────────────

function OrbitalRings() {
  return (
    <>
      <div
        className="hidden lg:block pointer-events-none"
        style={{
          position: 'absolute',
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-accent-light) 0%, rgba(0,0,0,0) 72%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          opacity: 0.9,
        }}
      />
      {[380, 490, 600].map((s, i) => (
        <div
          key={i}
          className="hidden lg:block pointer-events-none"
          style={{
            position: 'absolute',
            width: s,
            height: s,
            borderRadius: '50%',
            border: `1px solid var(--color-accent)`,
            borderColor: `color-mix(in srgb, var(--color-accent) ${22 - i * 7}%, transparent)`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            opacity: 0.6,
          }}
        />
      ))}
      {[
        { top: '15%', left: '60%', s: 6, o: 0.9 },
        { top: '10%', left: '74%', s: 3, o: 0.5 },
        { top: '28%', left: '89%', s: 5, o: 0.7 },
        { top: '70%', left: '91%', s: 3, o: 0.4 },
        { top: '84%', left: '72%', s: 6, o: 0.8 },
        { top: '78%', left: '56%', s: 3, o: 0.5 },
      ].map((d, i) => (
        <div
          key={i}
          className="hidden lg:block pointer-events-none"
          style={{
            position: 'absolute',
            width: d.s,
            height: d.s,
            borderRadius: '50%',
            background: 'var(--color-accent)',
            top: d.top,
            left: d.left,
            opacity: d.o,
          }}
        />
      ))}
    </>
  );
}

// ─── Floating Service Card ─────────────────────────────────────────────────────

function ServiceCard({ icon, label, style }: { icon: React.ReactNode; label: string; style?: React.CSSProperties }) {
  return (
    <div
      className="hidden lg:flex transition-all duration-300 hover:scale-110 hover:shadow-lg"
      style={{
        position: 'absolute',
        background: 'var(--color-surface-glass)',
        border: '1px solid var(--color-accent)',
        borderWidth: 1,
        borderColor: 'color-mix(in srgb, var(--color-accent) 22%, var(--color-border))',
        borderRadius: 14,
        padding: '14px 16px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        minWidth: 96,
        textAlign: 'center',
        zIndex: 3,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        ...style,
      }}
    >
      <div style={{ color: 'var(--color-accent)' }}>
        {icon}
      </div>
      <span
        style={{
          fontSize: 11,
          color: 'var(--color-text-secondary)',
          fontWeight: 500,
          lineHeight: 1.4,
          whiteSpace: 'pre-line',
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Skill Tag ─────────────────────────────────────────────────────────────────

function SkillTag({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: '8px 15px',
        borderRadius: 8,
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        color: 'var(--color-text-secondary)',
        fontSize: 13,
        fontWeight: 500,
      }}
    >
      {icon}{label}
    </div>
  );
}

// ─── Stat Block ────────────────────────────────────────────────────────────────

function StatBlock({ icon, value, label, border }: { icon: React.ReactNode; value: string; label: string; border?: boolean }) {
  return (
    <div
      className="flex items-center gap-5 flex-1 px-8 sm:px-10 py-8"
      style={{
        borderRight: border ? '1px solid var(--color-border)' : undefined,
      }}
    >
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'var(--color-accent-light)',
          border: '1px solid var(--color-accent)',
          borderWidth: 1,
          borderColor: 'color-mix(in srgb, var(--color-accent) 20%, transparent)',
        }}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <div
          className="font-display font-extrabold leading-none"
          style={{
            fontSize: 32,
            color: 'var(--color-accent)',
            letterSpacing: '-0.02em',
          }}
        >
          {value}
        </div>
        <div
          className="mt-1"
          style={{
            fontSize: 14,
            color: 'var(--color-text-muted)',
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

// ─── Tech Logo ─────────────────────────────────────────────────────────────────

function TechLogo({ src, name }: { src: string; name: string }) {
  return (
    <div
      className="flex items-center gap-2"
      style={{
        color: 'var(--color-text-muted)',
        fontSize: 13,
        fontWeight: 500,
      }}
    >
      <img
        src={src}
        alt={name}
        width={22}
        height={22}
        style={{ objectFit: 'contain' }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      {name}
    </div>
  );
}

// ─── MAIN HERO ─────────────────────────────────────────────────────────────────

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const photoUrl = 'https://i.ibb.co/Rksnjdyh/Whats-App-Image-2026-06-26-at-12-05-20-AM.jpg';

  const techLogos = [
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TensorFlow', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'OpenCV', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'Scikit-learn', src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'FastAPI', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'SQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  const fadeIn = (delay = 0): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'var(--color-bg)', fontFamily: 'var(--font-sans)', color: 'var(--color-text-primary)' }}
    >

      {/* ── HERO MAIN AREA ── */}
      <div
        className="section-container flex-1 flex items-center pt-8 lg:pt-14"
        style={{ minHeight: 'calc(100vh - 68px)', position: 'relative' }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">

          {/* ─── LEFT COLUMN ─── */}
          <div
            className="lg:col-span-6 flex flex-col lg:pr-4"
            style={fadeIn(0)}
          >
            {/* Availability */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6 self-start"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                fontSize: 13,
                color: 'var(--color-text-secondary)',
              }}
            >
              <span
                className="relative flex w-2 h-2"
              >
                <span
                  className="absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: 'var(--color-success)', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite' }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: 'var(--color-success)' }}
                />
              </span>
              Available for Freelance &amp; Full-time Opportunities
            </div>

                {/* Headline */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="inline-flex items-center justify-center rounded-md"
                    style={{
                      background: 'var(--color-accent)',
                      color: 'var(--color-text-inverse)',
                      padding: '6px 8px',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                    }}
                  >
                    AI
                  </div>
                </div>
                <h1
                  className="font-display font-extrabold mb-4"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                    lineHeight: 1.07,
                    letterSpacing: '-0.03em',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  <span style={{ display: 'block' }}>AI Engineer,</span>
                  <span style={{ display: 'block' }}>Data Scientist</span>
                  <span className="gradient-text" style={{ display: 'block' }}>And Web Developer</span>
                </h1>

            {/* Description */}
            <p
              className="max-w-md mb-6 leading-relaxed"
              style={{
                fontSize: 16,
                color: 'var(--color-text-muted)',
                lineHeight: 1.78,
              }}
            >
              I build intelligent AI solutions and data-driven applications
              that solve real-world problems and create impact.
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2.5 mb-7">
              <SkillTag icon={<EyeIcon size={17} color="var(--color-accent)" />} label="Machine Learning" />
              <SkillTag icon={<EyeIcon size={17} color="var(--color-accent)" />} label="Computer Vision" />
              <SkillTag icon={<ChatIcon size={17} color="var(--color-accent)" />} label="NLP" />
              <SkillTag icon={<BarChartIcon size={17} color="var(--color-accent)" />} label="Data Analytics" />
            </div>

            {/* CTA + Socials */}
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-[10px] text-white font-bold no-underline"
                style={{
                  background: 'var(--color-accent)',
                  fontSize: 15,
                  letterSpacing: '0.01em',
                  boxShadow: 'var(--color-shadow-md)',
                }}
              >
                Hire Me
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-[10px] font-semibold no-underline"
                style={{
                  background: 'transparent',
                  border: '1.5px solid var(--color-border-strong)',
                  color: 'var(--color-text-primary)',
                  fontSize: 15,
                }}
              >
                View Projects <span>&rarr;</span>
              </Link>
              {[
                { icon: <GitHubIcon />, href: 'https://github.com/Ehtijad-Ali' },
                { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/ehtijad-ali' },
                { icon: <MailIcon />, href: 'mailto:ehtijadali1919@gmail.com' },
              ].map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center no-underline transition-all duration-200 hover:scale-110"
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: '50%',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ─── RIGHT COLUMN — Photo + Floating Cards ─── */}
          <div
            className="lg:col-span-6 relative flex items-center justify-center"
            style={{ minHeight: 520, ...fadeIn(0.18) }}
          >
            <OrbitalRings />

            {/* Photo */}
            <div
              className="absolute z-[2] left-1/2 top-1/2"
              style={{ transform: 'translate(-50%,-50%)', width: 360, height: 360, borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--color-accent)', boxShadow: '0 20px 60px rgba(0,0,0,0.45), 0 0 80px var(--color-accent-light)'}}
            >
              <img
                src={photoUrl}
                alt="Ehtijad Ali"
                className="w-full h-full object-cover block transition-transform duration-500 hover:scale-110"
                style={{ objectPosition: 'center center' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/360x360/1a1a2e/f97316?text=Ehtijad+Ali';
                }}
              />
            </div>

            {/* Left floating cards */}
            <ServiceCard icon={<BrainIcon />} label={"Machine\nLearning"} style={{ top: -100, left: 180 }} />
            <ServiceCard icon={<EyeIcon />} label={"Computer\nVision"} style={{ top: 220, left: 15 }} />

            {/* Right floating cards */}
            <ServiceCard icon={<ChatIcon />} label={"NLP\nSolutions"} style={{ top: 20, right: 55 }} />
            <ServiceCard icon={<BarChartIcon />} label={"Data\nAnalytics"} style={{ top: 430, right: 72 }} />
            <ServiceCard
              icon={<DevIcon />}
              label={"AI Web\nApps"}
              style={{ bottom: -133, left: '40%', transform: 'translateX(-50%)' }}
            />
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <motion.div
        className="section-container mb-10"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        <div
          className="rounded-2xl overflow-hidden flex items-stretch"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          }}
        >
          <div className="flex flex-col sm:flex-row w-full">
            <StatBlock icon={<CalendarIcon />} value="3+" label="Years Experience" border />
            <StatBlock icon={<BriefcaseIcon />} value="15+" label="AI/ML Projects" border />
            <StatBlock icon={<AwardIcon />} value="6" label="Certifications" border />
            <StatBlock icon={<UsersIcon />} value="30+" label="Happy Clients" />
          </div>
        </div>
      </motion.div>

      {/* ── TECH STRIP ── */}
      <motion.div
        className="px-6 lg:px-[52px] pt-7 pb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.45 }}
      >
        <p
          className="text-center text-xs font-semibold uppercase tracking-[0.13em] mb-4"
          style={{
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          Trusted by technologies
        </p>
        <div className="flex items-center justify-center gap-9 flex-wrap">
          {techLogos.map((t) => (
            <TechLogo key={t.name} {...t} />
          ))}
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span
          className="text-[10px] uppercase tracking-[0.25em]"
          style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
        >
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full flex justify-center pt-1.5"
          style={{ border: '1.5px solid var(--color-border-strong)' }}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full"
            style={{ background: 'var(--color-accent)' }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}