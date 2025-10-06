import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const pricingTiers = [
  {
    id: 'refresh',
    name: 'Refresh',
    subtitle: 'For spaces that need a refined touch',
    price: '$12,000',
    duration: 'Starting investment',
    description: 'Perfect for single rooms or curated styling that breathes new life into existing spaces.',
    features: [
      'One to two room focus',
      'Initial consultation & concept board',
      'Curated furniture & décor sourcing',
      'Color palette refinement',
      'Art & accessory placement',
      'Final styling session',
      'Digital lookbook of selections'
    ],
    ideal: 'Ideal for homeowners seeking expert guidance without full renovation',
    timeline: '4-8 weeks',
    cta: 'Begin refresh'
  },
  {
    id: 'signature',
    name: 'Signature',
    subtitle: 'Our most sought-after service',
    price: '$45,000',
    duration: 'Starting investment',
    description: 'Comprehensive design for complete homes or multiple commercial spaces. Our signature approach to creating timeless interiors.',
    features: [
      'Full-home or multi-space design',
      'In-depth discovery & spatial planning',
      'Custom furniture design & sourcing',
      'Material & finish selection',
      'Lighting design & specification',
      'Contractor coordination',
      'Project management & site visits',
      'Installation & final styling',
      'Post-completion support (60 days)'
    ],
    ideal: 'Ideal for those seeking a complete, cohesive transformation',
    timeline: '3-6 months',
    cta: 'Start your project',
    featured: true
  },
  {
    id: 'bespoke',
    name: 'Bespoke',
    subtitle: 'White-glove, end-to-end curation',
    price: 'Custom',
    duration: 'Investment determined in consultation',
    description: 'For estates, heritage properties, and commercial ventures requiring discretion, precision, and uncompromising attention to detail.',
    features: [
      'Unlimited project scope',
      'Dedicated design team',
      'Custom millwork & architectural detailing',
      'Global artisan & vendor network',
      'Procurement & logistics management',
      'Historic preservation consultation',
      'Sustainability advisory',
      'Art curation & acquisition support',
      'Seasonal refresh services',
      '12-month post-completion support'
    ],
    ideal: 'Ideal for estates, luxury hospitality, and flagship commercial projects',
    timeline: '6-18+ months',
    cta: 'Schedule private consultation'
  }
];

const addOns = [
  { name: 'Art Advisory & Acquisition', price: 'From $3,500' },
  { name: 'Landscape & Outdoor Integration', price: 'From $8,000' },
  { name: 'Smart Home Integration', price: 'From $5,000' },
  { name: 'Feng Shui Consultation', price: 'From $2,500' },
  { name: 'Seasonal Styling Refresh', price: 'From $4,000' },
  { name: 'Virtual Design Consultation', price: '$500/hour' }
];

const PricingPage = () => {
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState('signature');
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
      <div className="pricing-page">
        <button onClick={() => navigate('/')} className="pricing-page__back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to home
      </button>

      <div className="pricing-page__hero">
        <div className="pricing-page__hero-content">
          <span className="pricing-page__badge">Investment Guide</span>
          <h1>Transparent pricing for transformative design</h1>
          <p>
            We believe in clarity from the first conversation. Our fees reflect the depth of our craft, the caliber of our network, and the enduring value we bring to your space. Each engagement is tailored, but these tiers provide a foundation.
          </p>
          <button 
            className="hero__cta" 
            onClick={() => navigate('/book-consultation')}
            style={{ marginTop: '32px' }}
          >
            Book free consultation
          </button>
        </div>
      </div>

      <div className="pricing-page__container">
        <div className="pricing-page__tiers">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.id}
              className={`pricing-page__tier ${tier.featured ? 'pricing-page__tier--featured' : ''} ${selectedTier === tier.id ? 'pricing-page__tier--selected' : ''}`}
              onClick={() => setSelectedTier(tier.id)}
            >
              {tier.featured && <div className="pricing-page__tier-badge">Most Popular</div>}
              
              <div className="pricing-page__tier-header">
                <h2>{tier.name}</h2>
                <p className="pricing-page__tier-subtitle">{tier.subtitle}</p>
                <div className="pricing-page__tier-price">
                  <span className="pricing-page__tier-amount">{tier.price}</span>
                  <span className="pricing-page__tier-duration">{tier.duration}</span>
                </div>
              </div>

              <p className="pricing-page__tier-description">{tier.description}</p>

              <div className="pricing-page__tier-features">
                <h4>What's included:</h4>
                <ul>
                  {tier.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-page__tier-meta">
                <div className="pricing-page__tier-ideal">
                  <span>Best for:</span>
                  <p>{tier.ideal}</p>
                </div>
                <div className="pricing-page__tier-timeline">
                  <span>Typical timeline:</span>
                  <p>{tier.timeline}</p>
                </div>
              </div>

              <button 
                className={tier.featured ? 'hero__cta' : 'hero__secondary'}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/start-project', { state: { tier: tier.id } });
                }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-page__addons">
          <h2>Enhance your experience</h2>
          <p>Complementary services available across all tiers</p>
          <div className="pricing-page__addons-grid">
            {addOns.map((addon, idx) => (
              <div key={idx} className="pricing-page__addon">
                <h4>{addon.name}</h4>
                <span>{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pricing-page__faq">
          <h2>Investment FAQs</h2>
          <div className="pricing-page__faq-list">
            <div className="pricing-page__faq-item">
              <h3>How do you determine final project costs?</h3>
              <p>Design fees are transparent and outlined upfront. Total project investment includes design services, furnishings, materials, contractor fees, and installation. We provide detailed budgets during discovery and maintain open communication throughout.</p>
            </div>
            <div className="pricing-page__faq-item">
              <h3>What's your payment structure?</h3>
              <p>Typically, we require 50% upon contract signing, 25% at midpoint, and 25% upon completion. For Bespoke projects, we create custom milestone-based payment schedules.</p>
            </div>
            <div className="pricing-page__faq-item">
              <h3>Do you work with existing contractors?</h3>
              <p>Yes, we collaborate seamlessly with trusted teams. If preferred, we can also introduce vetted artisans and contractors from our curated network.</p>
            </div>
            <div className="pricing-page__faq-item">
              <h3>Can projects be phased over time?</h3>
              <p>Absolutely. We understand that some visions unfold in chapters. We create master plans that allow for phased implementation while maintaining cohesive design integrity.</p>
            </div>
          </div>
        </div>

        <div className="pricing-page__cta">
          <div className="pricing-page__cta-content">
            <h2>Let's discuss your vision</h2>
            <p>Every project begins with conversation. Schedule a complimentary consultation to explore how Aurora Atelier can bring your space to life.</p>
            <div className="pricing-page__cta-actions">
              <button className="hero__cta" onClick={() => navigate('/book-consultation')}>
                Book free consultation
              </button>
              <button className="hero__secondary" onClick={() => navigate('/features')}>
                View our services
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PricingPage;
