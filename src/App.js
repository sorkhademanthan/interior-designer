import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar isScrolled={isScrolled} />
      <main className="page-shell">
        <HeroSection />
        <div className="page-content">
          <AboutSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ProcessSection />
          <FAQSection />
          <FooterSection />
        </div>
      </main>
    </div>
  );
}

export default App;
