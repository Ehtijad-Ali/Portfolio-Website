import { useEffect, useState } from 'react';

// ─── SVG Icons ─────────────────────────────────────────────────────────────────

const CalendarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const CodeBracketIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const CertIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    <line x1="9" y1="8" x2="9.01" y2="8"/><line x1="12" y1="8" x2="15" y2="8"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const LayersIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>
);

const StarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const UserCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

// "What I Do Best" icons
const BrainIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.07-4.53A3 3 0 0 1 4.5 9.5a3 3 0 0 1 .9-2.13A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.07-4.53A3 3 0 0 0 19.5 9.5a3 3 0 0 0-.9-2.13A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const ChatBubbleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const BarChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const RocketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

// Contact bar icons
const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

// ─── Sub-components ────────────────────────────────────────────────────────────

function StatCard({ icon, value, label1, label2 }: { icon: React.ReactNode; value: string; label1: string; label2: string }) {
  return (
    <div className="card group cursor-pointer">
      <div className="flex items-start gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[color-mix(in_srgb,var(--color-accent)_18%,transparent)] bg-[var(--color-accent-light)] transition-transform duration-300 group-hover:scale-110">
          <div className="text-[var(--color-accent)]">{icon}</div>
        </div>
        <div>
          <div className="text-2xl font-extrabold leading-tight tracking-tight text-[var(--color-accent)]">{value}</div>
          <div className="text-xs font-medium text-[var(--color-text-secondary)] mt-0.5">{label1}</div>
          <div className="text-[11px] text-[var(--color-text-muted)] mt-0.5">{label2}</div>
        </div>
      </div>
    </div>
  );
}

function SkillItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 transition-all duration-200 hover:scale-105 cursor-pointer">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] bg-[var(--color-accent-light)]">
        <div className="text-[var(--color-accent)]">{icon}</div>
      </div>
      <span className="text-[13px] text-[var(--color-text-secondary)] font-normal">{label}</span>
    </div>
  );
}

function TechLogo({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex flex-col items-center gap-2 transition-all duration-200 hover:scale-110 cursor-pointer">
      <img 
        src={src} 
        alt={name} 
        width={36} 
        height={36} 
        className="object-contain" 
        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} 
      />
      <span className="text-xs text-[var(--color-text-muted)] font-medium">{name}</span>
    </div>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3.5 flex-1 transition-all duration-200 hover:scale-105 cursor-pointer">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] bg-[var(--color-accent-light)]">
        <div className="text-[var(--color-accent)]">{icon}</div>
      </div>
      <div>
        <div className="text-[11px] text-[var(--color-text-muted)] mb-0.5">{label}</div>
        <div className="text-[13px] text-[var(--color-text-primary)] font-medium">{value}</div>
      </div>
    </div>
  );
}

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t); }, []);

  const photoUrl = 'https://i.ibb.co/Rksnjdyh/Whats-App-Image-2026-06-26-at-12-05-20-AM.jpg';

  const techLogos = [
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TensorFlow', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'OpenCV', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'Scikit-learn', src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'Pandas', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'NumPy', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'FastAPI', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'SQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  return (
    <div className="section">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-xs font-bold tracking-widest uppercase text-[var(--color-accent)] mb-3">About Me</p>
          <h2 className="heading-xl mb-5">
            Building Intelligent Solutions<br />
            That Drive <span className="gradient-text">Real Impact</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            {[false, false, true, false, false].map((active, i) => (
              <div key={i} className="rounded-full transition-all duration-300" style={{ width: active ? 28 : 8, height: 8, background: active ? 'var(--color-accent)' : 'var(--color-border)' }} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
          <div className="lg:col-span-7 card overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-[210px] h-[260px] md:h-auto shrink-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(circle at 50% 60%, var(--color-accent-light) 0%, transparent 65%)' }} />
                <img src={photoUrl} alt="Ehtijad Ali" className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-110" onError={e => { (e.target as HTMLImageElement).src = 'https://placehold.co/210x420/1a1a2e/f97316?text=EA'; }} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-extrabold tracking-tight text-[var(--color-text-primary)] mb-2.5">Hi, I'm <span className="text-[var(--color-accent)]">Ehtijad Ali</span></h3>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-accent-light)] border border-[color-mix(in_srgb,var(--color-accent)_25%,transparent)] text-xs text-[var(--color-accent)] font-medium mb-4">
                  <UserCircleIcon /> AI Engineer & Data Scientist
                </div>
                <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed mb-5">I help businesses and organizations solve complex problems using AI, Machine Learning, Computer Vision, NLP, and data-driven insights.</p>
                <div className="flex flex-col gap-2.5 mb-6">
                  {['3+ years of hands-on experience in AI/ML development', 'Expertise in building scalable, production-ready applications', 'Passionate about research, innovation, and clean code', 'Strong believer in delivering measurable results'].map((text, i) => (
                    <div key={i} className="flex items-start gap-2"><div className="mt-0.5 shrink-0 text-[var(--color-accent)]"><CheckCircleIcon /></div><span className="text-[13px] text-[var(--color-text-secondary)]">{text}</span></div>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                  <a href="#" className="btn-primary"><DownloadIcon /> Download CV</a>
                  <a href="#contact" className="btn-secondary">Hire Me →</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
              <StatCard icon={<CalendarIcon />} value="3+" label1="Years Experience" label2="AI/ML Development" />
              <StatCard icon={<CodeBracketIcon />} value="15+" label1="AI/ML Projects" label2="Completed" />
              <StatCard icon={<CertIcon />} value="30+" label1="Certifications" label2="Earned" />
              <StatCard icon={<UsersIcon />} value="20+" label1="Happy Clients" label2="Worldwide" />
              <StatCard icon={<LayersIcon />} value="5+" label1="Technologies" label2="Mastered" />
              <StatCard icon={<StarIcon />} value="100%" label1="Client Satisfaction" label2="Rate" />
            </div>
            <div className="card flex-1">
              <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-4">What I Do Best</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <SkillItem icon={<BrainIcon />} label="Machine Learning & Deep Learning" />
                <SkillItem icon={<BarChartIcon />} label="Data Analysis & Visualization" />
                <SkillItem icon={<EyeIcon />} label="Computer Vision Applications" />
                <SkillItem icon={<GlobeIcon />} label="AI-Powered Web Applications" />
                <SkillItem icon={<ChatBubbleIcon />} label="Natural Language Processing" />
                <SkillItem icon={<RocketIcon />} label="Model Deployment & MLOps" />
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-5 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-lg font-bold text-[var(--color-text-primary)] text-center mb-2">Technologies & Tools I Work With</h3>
          <div className="w-16 h-1 bg-[var(--color-accent)] rounded-full mx-auto mb-8" />
          <div className="flex items-end justify-center gap-10 flex-wrap">
            {techLogos.map(t => <TechLogo key={t.name} {...t} />)}
          </div>
        </div>

        <div className="card transition-all duration-300 hover:shadow-lg mb-16">
          <div className="flex flex-col lg:flex-row items-stretch">
            {[{ icon: <MapPinIcon />, label: 'Location', value: 'Gilgit, Pakistan' }, { icon: <MailIcon />, label: 'Email', value: 'ehtijad.dev@gmail.com' }, { icon: <PhoneIcon />, label: 'Phone', value: '+92 348 7623407' }, { icon: <ClockIcon />, label: 'Availability', value: 'Open to Work' }].map(({ icon, label, value }, i, arr) => (
              <div key={label} className="flex flex-1 items-center">
                <ContactItem icon={icon} label={label} value={value} />
                {i < arr.length - 1 && <div className="hidden lg:block w-px h-10 bg-[var(--color-border)] shrink-0 mx-8" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
