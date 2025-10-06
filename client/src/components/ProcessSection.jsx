const ProcessSection = () => {
  return (
    <section id="process" className="process">
      <div className="process__badge">Process & ethos</div>
      <div className="process__grid">
        <div className="process__timeline">
          <h2>Precision with poetic restraint.</h2>
          <p>
            Four movements, each choreographed to keep decisions effortless and the result unmistakably yours.
          </p>
          <div className="timeline">
            <article className="timeline__item">
              <div className="timeline__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="6" />
                  <line x1="15.5" y1="15.5" x2="21" y2="21" />
                </svg>
              </div>
              <div className="timeline__body">
                <h3>Discovery</h3>
                <p>Quiet listening sessions and site immersion to frame the vision.</p>
              </div>
            </article>
            <article className="timeline__item">
              <div className="timeline__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M4 10h16" />
                  <path d="M10 4v16" />
                </svg>
              </div>
              <div className="timeline__body">
                <h3>Design</h3>
                <p>Concept layers, tactile palettes, and choreography unveiled with clarity.</p>
              </div>
            </article>
            <article className="timeline__item">
              <div className="timeline__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21v-4l11-11 4 4-11 11z" />
                  <path d="M14 7l4 4" />
                  <path d="M2 13l2 2" />
                </svg>
              </div>
              <div className="timeline__body">
                <h3>Execution</h3>
                <p>Artisan-led fabrication with transparent weekly touchpoints.</p>
              </div>
            </article>
            <article className="timeline__item">
              <div className="timeline__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l1.8 4.6L19 8.4l-3.5 3.4.8 4.8L12 14.8 7.7 16.6l.8-4.8L5 8.4l5.2-.8z" />
                </svg>
              </div>
              <div className="timeline__body">
                <h3>Final reveal</h3>
                <p>Styled unveiling with every vignette ready for the first moment home.</p>
              </div>
            </article>
          </div>
        </div>
        <div className="process__differentiators">
          <div className="process__imagery-panel">
            <img 
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" 
              alt="Craftsman working on interior details" 
              loading="lazy"
            />
          </div>
          <h3>What makes us different</h3>
          <ul>
            <li>
              <span className="diff__title">Personalized approach</span>
              <span className="diff__copy">Only six active projects at a time for founder-led focus.</span>
            </li>
            <li>
              <span className="diff__title">Transparent pricing</span>
              <span className="diff__copy">Open-book budgets paired with curated vendor collaborations.</span>
            </li>
            <li>
              <span className="diff__title">Award-winning designs</span>
              <span className="diff__copy">International accolades for nuance, craft, and calm.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
