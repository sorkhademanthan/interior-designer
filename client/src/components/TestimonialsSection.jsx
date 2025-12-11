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
      <style>{`
        .testimonials {
          padding: 4rem 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .testimonials__header {
          text-align: center;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .testimonials__badge {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.8rem;
          display: block;
          margin-bottom: 1rem;
          opacity: 0.6;
        }
        .testimonials__header h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          line-height: 1.2;
          font-family: serif;
        }
        
        .testimonials__content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .testimonial-card--feature {
          position: relative;
          min-height: 500px;
          border-radius: 8px;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .testimonial-card__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          z-index: 1;
        }

        .testimonial-card__overlay {
          position: relative;
          z-index: 2;
          padding: 2rem;
        }

        .testimonial-card__tag {
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
          display: block;
          opacity: 0.9;
        }

        .testimonial-card--feature blockquote {
          font-size: 1.5rem;
          line-height: 1.3;
          margin-bottom: 1.5rem;
          font-family: serif;
        }

        .testimonial-card__details {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.2);
        }

        .testimonial-card__detail span {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          opacity: 0.7;
        }

        .testimonials__stack {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .testimonial-card--compact {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .testimonial-card__avatar {
          width: 100%;
          height: 200px;
          border-radius: 4px;
          background-size: cover;
          background-position: center;
          flex-shrink: 0;
        }

        .testimonial-card__body blockquote {
          font-size: 1.1rem;
          font-style: italic;
          margin: 0.5rem 0;
          font-family: serif;
        }

        .testimonials__ledger {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #eee;
        }

        .testimonials__ledger ul {
          list-style: none;
          padding: 0;
        }

        .testimonials__ledger li {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }
        
        .testimonials__ledger li p {
          color: #666;
          margin: 0;
        }

        @media (min-width: 768px) {
          .testimonial-card--compact {
            flex-direction: row;
            align-items: center;
          }
          .testimonial-card__avatar {
            width: 100px;
            height: 100px;
          }
          .testimonials__ledger li {
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;
          }
          .testimonials__ledger li p {
            max-width: 60%;
            text-align: right;
          }
        }

        @media (min-width: 1024px) {
          .testimonials__content {
            display: grid;
            grid-template-columns: 1.4fr 1fr;
            gap: 4rem;
            align-items: start;
          }
          .testimonial-card--feature {
            height: 100%;
            min-height: 700px;
          }
        }
      `}</style>
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
