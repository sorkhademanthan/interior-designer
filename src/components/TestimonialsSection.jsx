const testimonials = [
  {
    quote: 'Aurora anticipated the pauses in our day and staged the light accordingly.',
    name: 'Isabella Chen',
    title: 'Restorative penthouse · Singapore',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
    project: 'Private penthouse curation',
    detail: 'Discreet entertaining floor with concealed acoustic layering and art lighting.',
    details: [
      { label: 'Mood', value: 'Twilight hush' },
      { label: 'Palette', value: 'Inkstone & alabaster' },
      { label: 'Texture', value: 'Brushed brass, silk wallcovering' },
    ],
  },
  {
    quote: 'They distilled heirlooms into a narrative that feels effortlessly current.',
    name: 'The Lefevre family',
    title: 'Riverfront residence · Montréal',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    project: 'Heritage townhouse revival',
    detail: 'Salon parlors reimagined with hand-carved plaster relief and bespoke joinery.',
  },
  {
    quote: 'Every finish invites touch, every vista frames a moment worth remembering.',
    name: 'Mateo Alvarez',
    title: 'Cliffside retreat · Mallorca',
    image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=900&q=80',
    project: 'Seaside sanctuary residence',
    detail: 'Layered terraces with scent-programmed evening lighting and travertine paths.',
  },
];

const TestimonialsSection = () => {
  const [feature, ...secondary] = testimonials;
  const roster = [feature, ...secondary];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__header">
        <span className="testimonials__badge">Testimonials</span>
        <h2>Whispers from homes we quietly composed.</h2>
        <p>Measured words from patrons who prefer their gratitude in undertones.</p>
      </div>
      <div className="testimonials__content">
        <article
          className="testimonial-card testimonial-card--feature"
          style={{ backgroundImage: `url(${feature.image})` }}
        >
          <div className="testimonial-card__scrim" aria-hidden="true" />
          <div className="testimonial-card__overlay">
            <span className="testimonial-card__tag">{feature.project}</span>
            <blockquote>{feature.quote}</blockquote>
            <div className="testimonial-card__meta">
              <span>{feature.name}</span>
              <small>{feature.title}</small>
            </div>
            <div className="testimonial-card__details">
              {feature.details.map(({ label, value }) => (
                <div key={label} className="testimonial-card__detail">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </article>
        <div className="testimonials__column">
          <div className="testimonials__stack">
            {secondary.map(({ quote, name, title, image, project }) => (
              <article key={name} className="testimonial-card testimonial-card--compact">
                <div className="testimonial-card__avatar" style={{ backgroundImage: `url(${image})` }} />
                <div className="testimonial-card__body">
                  <span className="testimonial-card__tag">{project}</span>
                  <blockquote>{quote}</blockquote>
                  <div className="testimonial-card__meta">
                    <span>{name}</span>
                    <small>{title}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="testimonials__ledger">
            <h3>Recent commissions</h3>
            <ul>
              {roster.map(({ project, detail }) => (
                <li key={project}>
                  <span>{project}</span>
                  <p>{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
