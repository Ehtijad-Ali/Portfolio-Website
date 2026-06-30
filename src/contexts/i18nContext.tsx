import { createContext, useContext, useState, type ReactNode } from 'react';

type Lang = 'en' | 'ur';

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  'nav.home': { en: 'Home', ur: 'ہوم' },
  'nav.about': { en: 'About', ur: 'تعارف' },
  'nav.skills': { en: 'Skills', ur: 'مہارتیں' },
  'nav.projects': { en: 'Projects', ur: 'پروجیکٹس' },
  'nav.experience': { en: 'Experience', ur: 'تجربہ' },
  'nav.blogs': { en: 'Blogs', ur: 'بلاگز' },
  'nav.certifications': { en: 'Certifications', ur: 'سرٹیفکیٹس' },
  'nav.contact': { en: 'Contact', ur: 'رابطہ' },
  'nav.feedback': { en: 'Feedback', ur: 'فیڈ بیک' },
  'hero.greeting': { en: 'Hello, I am', ur: 'سلام، میں ہوں' },
  'hero.role': { en: 'AI Engineer & Data Scientist', ur: 'اینگجینئر اور ڈیٹا سائنٹسٹ' },
  'hero.cta': { en: 'Hire Me', ur: 'مجھے نوکری دیں' },
  'hero.cta2': { en: 'View Projects', ur: 'پروجیکٹس دیکھیں' },
  'hero.available': { en: 'Available for Freelance & Full-time Opportunities', ur: 'فری لانس اور فل ٹائم مواقع کے لیے دستیاب' },
  'hero.headline1': { en: 'AI Engineer,', ur: 'اینگجینئر،' },
  'hero.headline2': { en: 'Data Scientist', ur: 'ڈیٹا سائنٹسٹ' },
  'hero.headline3': { en: 'And Web Developer', ur: 'اور ویب ڈویلپر' },
  'hero.description': { en: 'I build intelligent AI solutions and data-driven applications that solve real-world problems and create impact.', ur: 'میں ذہین AI حل اور ڈیٹا ڈرائیں ایپلیکیشنز بناتا ہوں جو حقیقی مسائل حل کرتے ہیں اور اثر پیدا کرتے ہیں۔' },
  'hero.skill1': { en: 'Machine Learning', ur: 'مشین لرننگ' },
  'hero.skill2': { en: 'Computer Vision', ur: 'کمپیوٹر وژن' },
  'hero.skill3': { en: 'NLP', ur: 'این ایل پی' },
  'hero.skill4': { en: 'Data Analytics', ur: 'ڈیٹا اینالیٹکس' },
  'hero.scroll': { en: 'Scroll', ur: 'سکرول' },
  'about.title': { en: 'About Me', ur: 'میرے بارے میں' },
  'about.badge': { en: 'About Me', ur: 'میرے بارے میں' },
  'about.heading': { en: 'Building Intelligent Solutions That Drive Real Impact', ur: 'حقیقی اثر پیدا کرنے والے ذہین حل بنانا' },
  'about.description': { en: 'A passionate AI Engineer & Data Scientist from Gilgit, Pakistan — driven by curiosity, shaped by data, and focused on building AI solutions that matter.', ur: 'گلگت، پاکستان سے ایک پرجوش AI انجینئر اور ڈیٹا سائنٹسٹ — تجسس سے چلا ہوا، ڈیٹا سے شکل دی ہوئی، اور AI حل بنانے پر مرکوز۔' },
  'about.stat1': { en: 'Years Experience', ur: 'سال کا تجربہ' },
  'about.stat2': { en: 'Certifications', ur: 'سرٹیفکیٹس' },
  'about.stat3': { en: 'AI/ML Projects', ur: 'AI/ML پروجیکٹس' },
  'about.stat4': { en: 'Happy Clients', ur: 'خوشگار کلائنٹس' },
  'about.principles': { en: 'Principles', ur: 'اصول' },
  'about.values': { en: 'My Values', ur: 'میری قدریں' },
  'about.valuesDesc': { en: 'The core principles that guide my work and ensure I deliver meaningful and lasting impact.', ur: 'وہ بنیادی اصول جو میری کام کی رہنمائی کرتے ہیں اور یہ یقینی بناتے ہیں کہ میں معنی دار اور پائیدار اثر پیدا کرتا ہوں۔' },
  'about.journey': { en: 'Journey', ur: 'سفر' },
  'about.journeyTitle': { en: 'My Journey', ur: 'میرا سفر' },
  'about.services': { en: 'Services', ur: 'سروسز' },
  'about.servicesDesc': { en: 'End-to-end AI solutions tailored to solve real-world problems.', ur: 'حقیقی مسائل حل کرنے کے لیے تیار کردہ اینڈ ٹو اینڈ AI حل۔' },
  'about.whatIDo': { en: 'What I Do', ur: 'میں کیا کرتا ہوں' },
  'skills.title': { en: 'Skills & Tools', ur: 'مہارتیں اور ٹولز' },
  'projects.title': { en: 'Selected Projects', ur: 'منتخب پروجیکٹس' },
  'contact.title': { en: 'Get in Touch', ur: 'رابطہ کریں' },
  'footer.rights': { en: 'All rights reserved.', ur: 'جملہ حقوق محفوظ ہیں۔' },
  'footer.brand': { en: 'NEXUS', ur: 'نیگس' },
  'footer.description': { en: 'Full-stack developer & UI/UX enthusiast crafting elegant digital experiences with modern web technologies.', ur: 'فول سٹیک ڈویلپر اور UI/UX شوقین جدید ویب ٹیکنالوجیز کے ساتھ خوبصورت ڈیجیٹل تجربات تیار کرتا ہوں۔' },
  'footer.quick links': { en: 'Quick Links', ur: 'فوری لنکس' },
  'footer.resources': { en: 'Resources', ur: 'وسائل' },
  'footer.connect': { en: 'Connect', ur: 'رابطہ' },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const toggleLang = () => setLang(prev => (prev === 'en' ? 'ur' : 'en'));
  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}