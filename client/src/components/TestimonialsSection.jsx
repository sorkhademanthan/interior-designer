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
          background: #fff;
          overflow: hidden;
        }
        .testimonials__header {
          text-align: center;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .testimonials__badge {
          display: inline-block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #999;
          margin-bottom: 1rem;
        }
        .testimonials__header h2 {
          font-family: serif;
          font-size: 2rem;
          font-weight: 400;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .testimonials__header p {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
        }

        /* Mobile View Styles */
        .testimonials__mobile-view {
          display: block;
        }
        .testimonials__desktop-view {
          display: none;
        }
        
        .testimonials__scroll {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 2rem;
          margin: 0 -1.5rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .testimonials__scroll::-webkit-scrollbar {
          display: none;
        }
        
        .mobile-card {
          flex: 0 0 85vw;
          scroll-snap-align: center;
          height: 60vh;
          min-height: 450px;
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .mobile-card__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%);
          z-index: 1;
        }
        .mobile-card__content {
          position: relative;
          z-index: 2;
          padding: 2rem;
        }
        .mobile-card__tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          opacity: 0.9;
          margin-bottom: 0.75rem;
          display: block;
        }
        .mobile-card__quote {
          font-family: serif;
          font-size: 1.4rem;
          line-height: 1.3;
          margin: 0 0 1.5rem;
          font-style: italic;
        }
        .mobile-card__meta span {
          display: block;
          font-weight: 500;
          font-size: 1rem;
          letter-spacing: 0.02em;
        }
        .mobile-card__meta small {
          opacity: 0.8;
          font-size: 0.8rem;
          font-weight: 300;
        }

        .mobile-ledger {
          margin-top: 3rem;
          border-top: 1px solid #eee;
          padding-top: 2rem;
        }
        .mobile-ledger h3 {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          color: #333;
          text-align: center;
        }
        .mobile-ledger ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .mobile-ledger li {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .mobile-ledger li span {
          font-weight: 500;
          font-size: 0.95rem;
        }
        .mobile-ledger li p {
          margin: 0;
          font-size: 0.85rem;
          color: #777;
          text-align: right;
          max-width: 60%;
        }

        @media (min-width: 768px) {
          .testimonials__mobile-view {
            display: none;
          }
          .testimonials__desktop-view {
            display: block;
          }
          .testimonials__content {
            display: grid;
            grid-template-columns: 1.4fr 1fr;
            gap: 2rem;
            align-items: start;
          }
          .testimonial-card--feature {
            height: 700px;
            position: relative;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 3rem;
            background-size: cover;
            background-position: center;
            border-radius: 4px;
            overflow: hidden;
          }
          .testimonial-card__scrim {
             position: absolute;
             inset: 0;
             background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
             z-index: 1;
          }
          .testimonial-card__overlay {
             position: relative;
             z-index: 2;
          }
          .testimonial-card__tag {
             text-transform: uppercase;
             letter-spacing: 0.1em;
             font-size: 0.8rem;
             margin-bottom: 1rem;
             display: block;
          }
          .testimonial-card--feature blockquote {
             font-family: serif;
             font-size: 2rem;
             line-height: 1.2;
             margin-bottom: 2rem;
          }
          .testimonial-card__details {
             display: flex;
             gap: 2rem;
             margin-top: 2rem;
             padding-top: 2rem;
             border-top: 1px solid rgba(255,255,255,0.2);
          }
          .testimonial-card__detail span {
             display: block;
             font-size: 0.7rem;
             text-transform: uppercase;
             opacity: 0.7;
             margin-bottom: 0.25rem;
          }
          .testimonials__stack {
             display: flex;
             flex-direction: column;
             gap: 2rem;
          }
          .testimonial-card--compact {
             display: flex;
             gap: 1.5rem;
             align-items: center;
          }
          .testimonial-card__avatar {
             width: 120px;
             height: 120px;
             background-size: cover;
             background-position: center;
             flex-shrink: 0;
             border-radius: 4px;
          }
          .testimonial-card__body blockquote {
             font-family: serif;
             font-size: 1.1rem;
             margin: 0.5rem 0 1rem;
             font-style: italic;
          }
          .testimonials__ledger {
             margin-top: 3rem;
             padding-top: 2rem;
             border-top: 1px solid #eee;
          }
          .testimonials__ledger h3 {
             font-size: 0.9rem;
             text-transform: uppercase;
             letter-spacing: 0.1em;
             margin-bottom: 1.5rem;
          }
          .testimonials__ledger li {
             margin-bottom: 1rem;
          }
          .testimonials__ledger li span {
             font-weight: 600;
             display: block;
          }
          .testimonials__ledger li p {
             color: #666;
             font-size: 0.9rem;
             margin: 0;
          }
        }
      `}</style>
      <div className="testimonials__header">
        <span className="testimonials__badge">Testimonials</span>
        <h2>Whispers from homes we quietly composed.</h2>
        <p>Measured words from patrons who prefer their gratitude in undertones.</p>
      </div>

      {/* Mobile View */}
      <div className="testimonials__mobile-view">
        <div className="testimonials__scroll">
          {roster.map((item, index) => (
            <article 
              key={index} 
              className="mobile-card"
              style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="mobile-card__scrim" />
              <div className="mobile-card__content">
                <span className="mobile-card__tag">{item.project}</span>
                <blockquote className="mobile-card__quote">&ldquo;{item.quote}&rdquo;</blockquote>
                <div className="mobile-card__meta">
                  <span>{item.name}</span>
                  <small>{item.title}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mobile-ledger">
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

      {/* Desktop View */}
      <div className="testimonials__desktop-view">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
