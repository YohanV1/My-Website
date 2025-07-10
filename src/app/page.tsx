import Hero from '@/components/Hero';
import About from '@/components/About';
import Extracurricular from '@/components/Extracurricular';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Extracurricular />
      <Contact />
      <Footer />
    </main>
  );
}
