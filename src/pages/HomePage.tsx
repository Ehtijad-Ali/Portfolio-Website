import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Stats from '../components/sections/Stats';
import Experience from '../components/sections/Experience';
import ClientFeedback from '../components/sections/ClientFeedback';
import Blogs from '../components/sections/Blogs';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Experience />
      <ClientFeedback />
      <Blogs />
      <Certifications />
      <Contact />
    </>
  );
}