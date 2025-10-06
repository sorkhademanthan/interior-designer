import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home">
      <div className="hero__aura" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__eyebrow">Tailored sanctuaries</div>
        <h1>Quiet luxury, distilled.</h1>
        <p>
          Aurora Atelier is the hush behind interiors that feel inevitable—few words, flawless execution, every detail composed with intent.
        </p>
        <div className="hero__actions">
          <button className="hero__cta" onClick={() => navigate('/book-consultation')}>Request a private consult</button>
          <button className="hero__secondary" onClick={() => navigate('/#portfolio')}>View the portfolio</button>
        </div>
        <div className="hero__metrics">
          <div>
            <span className="metric__value">240+</span>
            <span className="metric__label">Signature spaces unveiled</span>
          </div>
          <div>
            <span className="metric__value">98%</span>
            <span className="metric__label">Return with their next vision</span>
          </div>
          <div>
            <span className="metric__value">120</span>
            <span className="metric__label">Artisans in our circle</span>
          </div>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__visual-frame">
          <img
            className="hero__visual-image"
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80"
            alt="Aurora Atelier premium interior makeover"
            loading="eager"
          />
          <div className="hero__visual-overlay" />
          <div className="hero__visual-gradient" />
          <div className="hero__visual-focus">
            <span>Luminous Atelier Suite</span>
            <p>Velvet dusk, sculpted light, bespoke millwork—poise in every line.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
