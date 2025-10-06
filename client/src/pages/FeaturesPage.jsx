import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const services = [
  {
    id: 'residential',
    title: 'Residential Design',
    subtitle: 'Private sanctuaries crafted with intention',
    description: 'From intimate apartments to sprawling estates, we compose spaces that resonate with how you live. Each room becomes a chapter in your personal narrative—layered, considered, and unmistakably yours.',
    features: [
      'Full-home spatial planning',
      'Custom furniture design & sourcing',
      'Material selection & color composition',
      'Lighting design & automation',
      'Art curation & placement',
      'Millwork & architectural detailing'
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    id: 'commercial',
    title: 'Commercial Spaces',
    subtitle: 'Environments that elevate experience',
    description: 'Boutiques, galleries, and hospitality venues that whisper sophistication. We design spaces where brand and atmosphere merge seamlessly, leaving lasting impressions on every visitor.',
    features: [
      'Hospitality & restaurant design',
      'Retail & showroom spaces',
      'Gallery & exhibition design',
      'Office & workspace curation',
      'Brand identity integration',
      'Customer journey choreography'
    ],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  },
  {
    id: 'renovation',
    title: 'Renovation & Restoration',
    subtitle: 'Heritage reimagined for modern life',
    description: 'We honor architectural legacy while weaving in contemporary comfort. Historic properties regain their soul through meticulous restoration paired with invisible modern systems.',
    features: [
      'Historic preservation consultation',
      'Structural assessment & planning',
      'Period-appropriate detailing',
      'Modern systems integration',
      'Sustainable material sourcing',
      'Craftsmanship coordination'
    ],
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    id: 'styling',
    title: 'Styling & Curation',
    subtitle: 'The finishing touches that complete the vision',
    description: 'For spaces that need refinement rather than reinvention. We curate furnishings, textiles, and art that bring cohesion and character to existing interiors.',
    features: [
      'Furniture selection & sourcing',
      'Textile & soft goods curation',
      'Art advisory & acquisition',
      'Accessory styling & placement',
      'Color palette refinement',
      'Seasonal refresh consultation'
    ],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    )
  }
];

const FeaturesPage = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <div className="features-page">
        <button onClick={() => navigate('/')} className="features-page__back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to home
      </button>

      <div className="features-page__hero">
        <div className="features-page__hero-content">
          <span className="features-page__badge">Our Services</span>
          <h1>Comprehensive design services tailored to your vision</h1>
          <p>
            From intimate residences to grand commercial ventures, we orchestrate every detail with practiced restraint. Each service is a promise—executed with the precision and poetry that define Aurora Atelier.
          </p>
        </div>
      </div>

      <div className="features-page__container">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`features-page__service ${index % 2 === 1 ? 'features-page__service--reverse' : ''}`}
          >
            <div className="features-page__service-image">
              <img src={service.image} alt={service.title} loading="lazy" />
            </div>
            <div className="features-page__service-content">
              <div className="features-page__service-icon">
                {service.icon}
              </div>
              <h2>{service.title}</h2>
              <h3>{service.subtitle}</h3>
              <p>{service.description}</p>
              <div className="features-page__service-features">
                <h4>What's included:</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="features-page__cta">
        <div className="features-page__cta-content">
          <h2>Ready to begin your transformation?</h2>
          <p>Schedule a private consultation to discuss your vision. We'll craft a bespoke proposal tailored to your space, timeline, and aspirations.</p>
          <div className="features-page__cta-actions">
            <button className="hero__cta" onClick={() => navigate('/book-consultation')}>
              Request consultation
            </button>
            <button className="hero__secondary" onClick={() => navigate('/pricing')}>
              View pricing
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default FeaturesPage;
