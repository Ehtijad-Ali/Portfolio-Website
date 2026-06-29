import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CTABanner from '@/components/sections/CTABanner';

/* ═══════════════════════════════════════════════════════════════════
   SVG ICONS
══════════════════════════════════════════════════════════════════ */

const BrainIcon = ({ size = 22, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.07-4.53A3 3 0 0 1 4.5 9.5a3 3 0 0 1 .9-2.13A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.07-4.53A3 3 0 0 0 19.5 9.5a3 3 0 0 0-.9-2.13A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);
const EyeIcon = ({ size = 22, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const ChatIcon = ({ size = 22, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const BarChartIcon = ({ size = 22, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);
const CodeIcon = ({ size = 22, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const HeadphonesIcon = ({ size = 22, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
);
const TerminalIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
  </svg>
);
const CpuIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
);
const GlobeIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const ToolsIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);
const NetworkIcon = ({ size = 36, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
    <path d="M12 7v4M8.5 17.5l-1.5-2M15.5 17.5l1.5-2M10 11l-3 5M14 11l3 5"/>
  </svg>
);
const CubeIcon = ({ size = 36, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);
const CloudIcon = ({ size = 36, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    <polyline points="12 12 12 18"/><polyline points="9 15 12 18 15 15"/>
  </svg>
);
const SparkleIcon = ({ size = 36, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.07-4.53A3 3 0 0 1 4.5 9.5a3 3 0 0 1 .9-2.13A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.07-4.53A3 3 0 0 0 19.5 9.5a3 3 0 0 0-.9-2.13A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════
   SKILL BAR
══════════════════════════════════════════════════════════════════ */
type BarColor = 'green' | 'blue' | 'orange';
function SkillBar({ name, pct, color = 'green' }: { name: string; pct: number; color?: BarColor }) {
  const [w, setW] = useState(0);
  useEffect(() => { const t = setTimeout(() => setW(pct), 300); return () => clearTimeout(t); }, [pct]);
  const barColor = color === 'green' ? 'var(--color-success)' : color === 'blue' ? 'var(--color-secondary)' : 'var(--color-accent)';
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 500, marginBottom: 5 }}>{name}</div>
      <div style={{ height: 3, background: 'var(--color-border)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{ width: `${w}%`, height: '100%', background: barColor, borderRadius: 2, transition: 'width 0.9s ease' }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CAPABILITY CARD
══════════════════════════════════════════════════════════════════ */
function CapCard({ icon, iconBg, title, desc }: { icon: React.ReactNode; iconBg: string; title: string; desc: string }) {
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

/* ═══════════════════════════════════════════════════════════════════
   SKILL CATEGORY COLUMN
══════════════════════════════════════════════════════════════════ */
function SkillCol({ icon, title, skills }: {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; pct: number; color: BarColor }[];
}) {
  return (
    <div 
      className="rounded-xl p-6 flex flex-col transition-all duration-300 hover:scale-105"
      style={{ 
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        flex: 1,
      }}
    >
      <div className="flex items-center gap-2.5 mb-5">
        <div 
          className="rounded-md flex items-center justify-center"
          style={{ 
            width: 32, 
            height: 32, 
            background: 'var(--color-accent-light)',
            border: '1px solid var(--color-accent)',
            color: 'var(--color-accent)'
          }}
        >
          {icon}
        </div>
        <span className="font-semibold" style={{ fontSize: 13, color: 'var(--color-text-primary)' }}>{title}</span>
      </div>
      {skills.map(s => <SkillBar key={s.name} name={s.name} pct={s.pct} color={s.color} />)}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   LEARNING CARD
══════════════════════════════════════════════════════════════════ */
function LearnCard({ icon, iconColor, title, desc, pct }: {
  icon: React.ReactNode; iconColor: string; title: string; desc: string; pct: number;
}) {
  const [w, setW] = useState(0);
  useEffect(() => { const t = setTimeout(() => setW(pct), 500); return () => clearTimeout(t); }, [pct]);
  return (
    <div 
      className="rounded-xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
      style={{ 
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        flex: 1,
      }}
    >
      <div 
        className="rounded-xl flex items-center justify-center"
        style={{ 
          width: 64, 
          height: 64, 
          background: `${iconColor}18`,
          border: `1px solid ${iconColor}40`,
          color: iconColor
        }}
      >
        {icon}
      </div>
      <div className="font-semibold" style={{ fontSize: 14, color: 'var(--color-text-primary)' }}>{title}</div>
      <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{desc}</div>
      <div style={{ width: '100%', marginTop: 4 }}>
        <div style={{ height: 3, background: 'var(--color-border)', borderRadius: 2, overflow: 'hidden', marginBottom: 6 }}>
          <div style={{ width: `${w}%`, height: '100%', background: iconColor, borderRadius: 2, transition: 'width 1s ease' }} />
        </div>
        <div className="font-bold" style={{ fontSize: 12, color: iconColor, textAlign: 'right' }}>{pct}%</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION HEADER
══════════════════════════════════════════════════════════════════ */
function SectionHeader({ label, title, highlight, sub, rightText }: {
  label: string; title: string; highlight?: string; sub?: string; rightText?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10">
      <div>
        <p 
          className="text-xs font-semibold uppercase tracking-wider mb-2"
          style={{
            color: 'var(--color-accent)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.13em',
          }}
        >
          {label}
        </p>
        <h2 
          className="font-display font-bold"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--color-text-primary)',
          }}
        >
          {title}{highlight && <> <span style={{ color: 'var(--color-accent)' }}>{highlight}</span></>}
        </h2>
        {sub && <p className="mt-3" style={{ fontSize: 14, color: 'var(--color-text-secondary)', maxWidth: 380, lineHeight: 1.7 }}>{sub}</p>}
      </div>
      {rightText && (
        <p 
          className="md:text-right"
          style={{ 
            fontSize: 14, 
            color: 'var(--color-text-secondary)', 
            maxWidth: 300, 
            lineHeight: 1.7,
            flexShrink: 0,
          }}
        >
          {rightText}
        </p>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════════════ */
export default function SkillsPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t); }, []);

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)', fontFamily: 'var(--font-sans)', color: 'var(--color-text-primary)' }}>

      {/* ══ HERO BANNER ══ */}
      <section 
        className="relative overflow-hidden"
        style={{ 
          background: 'var(--color-bg)',
          padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 4rem)',
          ...fade(0),
        }}
      >
        <div className="section-container">
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 800 }}>
            <p 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
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
              My Expertise
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
              Skills & <span style={{ color: 'var(--color-accent)' }}>Tools</span>
            </h1>
            <p 
              className="mb-8 leading-relaxed"
              style={{
                fontSize: 16,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.78,
              }}
            >
              A comprehensive toolkit that powers my AI solutions, from research and development to deployment and scaling.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-[10px] text-white font-bold no-underline transition-all duration-300 hover:scale-105"
                style={{
                  background: 'var(--color-accent)',
                  fontSize: 15,
                  letterSpacing: '0.01em',
                  boxShadow: 'var(--color-shadow-md)',
                }}
              >
                View Projects <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-[10px] font-semibold no-underline transition-all duration-300 hover:scale-105"
                style={{
                  background: 'transparent',
                  border: '1.5px solid var(--color-border-strong)',
                  color: 'var(--color-text-primary)',
                  fontSize: 15,
                }}
              >
                My Experience <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CORE CAPABILITIES ══ */}
      <section className="section" style={fade(0.1)}>
        <div className="section-container">
          <SectionHeader
            label="What I Do Best"
            title="Core Capabilities"
            rightText="I combine technical expertise with problem-solving skills to build efficient, scalable and intelligent solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CapCard icon={<BrainIcon size={22} />}   iconBg="rgba(249,115,22,0.12)" title="Machine Learning"      desc="Building predictive models, classification systems, clustering and recommendation engines." />
            <CapCard icon={<EyeIcon size={22} />}     iconBg="rgba(59,130,246,0.12)"  title="Computer Vision"       desc="Object detection, image classification, face recognition, segmentation and real-time systems." />
            <CapCard icon={<ChatIcon size={22} />}    iconBg="rgba(168,85,247,0.12)"  title="NLP & LLM Solutions"   desc="Chatbots, text classification, sentiment analysis, translation, summarization and LLM integration." />
            <CapCard icon={<BarChartIcon size={22} />} iconBg="rgba(34,197,94,0.12)"  title="Data Analytics"        desc="Data cleaning, analysis, visualization and dashboards to extract actionable business insights." />
            <CapCard icon={<CodeIcon size={22} />}    iconBg="rgba(245,158,11,0.12)"  title="AI Web Applications"   desc="FastAPI, React, Streamlit and modern web technologies to build intelligent and scalable apps." />
            <CapCard icon={<HeadphonesIcon size={22} />} iconBg="rgba(236,72,153,0.12)" title="Consulting & Support" desc="Helping businesses adopt AI, optimize workflows and grow through intelligent solutions." />
          </div>
        </div>
      </section>

      {/* ══ SKILLS & TECHNOLOGIES ══ */}
      <section className="section" style={fade(0.15)}>
        <div className="section-container">
          {/* Header row with legend */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
            <div>
              <p 
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.13em',
                }}
              >
                Technical Proficiency
              </p>
              <h2 
                className="font-display font-bold"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text-primary)',
                }}
              >
                Skills & Technologies
              </h2>
            </div>
            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4">
              {[{color:'var(--color-success)',label:'Advanced'},{color:'var(--color-secondary)',label:'Proficient'},{color:'var(--color-accent)',label:'Familiar'}].map(({color,label}) => (
                <div key={label} className="flex items-center gap-2" style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
                  <div style={{ width:8,height:8,borderRadius:'50%',background:color }} />{label}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <SkillCol icon={<TerminalIcon/>} title="Programming" skills={[
              {name:'Python',     pct:92, color:'green'},
              {name:'SQL',        pct:80, color:'green'},
              {name:'JavaScript', pct:65, color:'blue'},
              {name:'C++',        pct:50, color:'orange'},
            ]}/>
            <SkillCol icon={<CpuIcon/>} title="AI / ML" skills={[
              {name:'TensorFlow', pct:88, color:'green'},
              {name:'PyTorch',    pct:85, color:'green'},
              {name:'Scikit-learn',pct:90,color:'green'},
              {name:'Keras',      pct:80, color:'green'},
              {name:'XGBoost',    pct:75, color:'blue'},
            ]}/>
            <SkillCol icon={<EyeIcon size={18} />} title="Computer Vision" skills={[
              {name:'OpenCV',    pct:88, color:'green'},
              {name:'YOLO',      pct:82, color:'green'},
              {name:'MediaPipe', pct:75, color:'blue'},
              {name:'DeepFace',  pct:70, color:'blue'},
            ]}/>
            <SkillCol icon={<GlobeIcon/>} title="Web & Backend" skills={[
              {name:'FastAPI',   pct:85, color:'green'},
              {name:'React.js',  pct:72, color:'blue'},
              {name:'Streamlit', pct:90, color:'green'},
              {name:'Node.js',   pct:60, color:'blue'},
              {name:'REST APIs', pct:88, color:'green'},
            ]}/>
            <SkillCol icon={<ToolsIcon/>} title="Tools & Platforms" skills={[
              {name:'Git & GitHub', pct:92, color:'green'},
              {name:'Docker',       pct:75, color:'blue'},
              {name:'AWS / GCP',    pct:65, color:'blue'},
              {name:'Linux',        pct:80, color:'green'},
              {name:'Postman',      pct:85, color:'green'},
            ]}/>
          </div>
        </div>
      </section>

      {/* ══ CURRENTLY LEARNING ══ */}
      <section className="section" style={fade(0.2)}>
        <div className="section-container">
          <SectionHeader
            label="Always Growing"
            title="Currently Learning"
            rightText="I believe in continuous learning and staying up-to-date with the latest technologies to build future-ready solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <LearnCard icon={<NetworkIcon/>}  iconColor="var(--color-success)" title="Advanced AI Agents"    desc="Building autonomous agents that can plan, reason, and execute multi-step tasks."       pct={70}/>
            <LearnCard icon={<CubeIcon/>}     iconColor="#a855f7" title="System Design"         desc="Designing scalable, reliable and maintainable systems for real-world applications."    pct={60}/>
            <LearnCard icon={<CloudIcon/>}    iconColor="var(--color-secondary)" title="MLOps & Deployment"    desc="Learning CI/CD, model monitoring, containerization and scalable deployment."           pct={80}/>
            <LearnCard icon={<SparkleIcon/>}  iconColor="var(--color-accent)" title="Generative AI"         desc="Exploring LLMs, prompt engineering, RAG pipelines and fine-tuning models."             pct={65}/>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <CTABanner />

    </div>
  );
}