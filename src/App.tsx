import { HashRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Preloader from './components/sections/Preloader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import FeedbackPage from './pages/FeedbackPage';
import BlogsPage from './pages/BlogsPage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Chatbot from './components/ui/Chatbot';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { ThemeProvider } from './contexts/ThemeContext';
import { I18nProvider } from './contexts/i18nContext';
import { useState, useEffect } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <I18nProvider>
        {loading && <Preloader />}
        <HashRouter>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <Chatbot />
          <WhatsAppButton />
        </HashRouter>
      </I18nProvider>
    </ThemeProvider>
  );
}