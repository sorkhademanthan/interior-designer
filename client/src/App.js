import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';
import ProjectDetail from './components/ProjectDetail';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import BookConsultationPage from './pages/BookConsultationPage';
import StartProjectPage from './pages/StartProjectPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

function HomePage() {
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
    <main className="page-shell">
      <Navbar isScrolled={isScrolled} />
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
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/book-consultation" element={<BookConsultationPage />} />
          <Route path="/start-project" element={<StartProjectPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
