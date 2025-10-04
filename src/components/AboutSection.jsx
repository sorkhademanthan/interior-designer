const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="about__badge">About the atelier</div>
      <div className="about__grid">
        <div className="about__summary">
          <h2>Composing spatial poetry since 2006.</h2>
          <p>
            We are a coterie of architects, stylists, and material tacticians devoted to interiors that breathe in rhythm with their owners. Each commission is limited, deeply personal, and guided by over 15 years of discreet collaborations.
          </p>
        </div>
        <div className="about__statement">
          <p>
            From sourcing antique patinas to engineering hidden lighting rituals, we choreograph every interaction with practiced restraint. Our spaces linger—silhouettes that feel familiar, finishes that reveal new stories when the light shifts.
          </p>
          <div className="about__signoff">
            <span>Éloise Maren</span>
            <small>Creative Director & Principal Designer</small>
          </div>
        </div>
        <div className="about__pillars">
          <div className="pillar">
            <span>1</span>
            <h3>Discreet process</h3>
            <p>White-glove project orchestration with absolute confidentiality.</p>
          </div>
          <div className="pillar">
            <span>2</span>
            <h3>Material intelligence</h3>
            <p>Rare veneers, honed stone, and experimental textiles sourced globally.</p>
          </div>
          <div className="pillar">
            <span>3</span>
            <h3>Enduring resonance</h3>
            <p>Spaces that age with nuance, revealing new depth season after season.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
