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
  'hero.cta': { en: 'View My Work', ur: 'میرا کام دیکھیں' },
  'hero.cta2': { en: 'Get in Touch', ur: 'رابطہ کریں' },
  'about.title': { en: 'About Me', ur: 'میرے بارے میں' },
  'skills.title': { en: 'Skills & Tools', ur: 'مہارتیں اور ٹولز' },
  'projects.title': { en: 'Selected Projects', ur: 'منتخب پروجیکٹس' },
  'contact.title': { en: 'Get in Touch', ur: 'رابطہ کریں' },
  'footer.rights': { en: 'All rights reserved.', ur: 'جملہ حقوق محفوظ ہیں۔' },
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