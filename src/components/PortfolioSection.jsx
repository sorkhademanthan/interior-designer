const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__header">
        <span className="portfolio__badge">Portfolio</span>
        <h2>Curated residences & journeys.</h2>
        <p>
          A glimpse into compositions that balance heritage, modernity, and emotion. Each project is a dialogue between client narrative and our obsession with detail.
        </p>
      </div>
      <div className="portfolio__grid">
        <article className="portfolio__card">
          <div className="portfolio__image portfolio__image--nocturne" />
          <div className="portfolio__content">
            <div className="portfolio__meta">
              <span className="portfolio__tag">Penthouse</span>
              <span className="portfolio__year">2024</span>
            </div>
            <h3>Nocturne Overlook</h3>
            <p>
              Shadowed oak, smoked mirrors, and a floating brass hearth craft a refuge high above the skyline—stillness anchored by sculptural light.
            </p>
            <button className="portfolio__link">View project</button>
          </div>
        </article>
        <article className="portfolio__card">
          <div className="portfolio__image portfolio__image--hamilton" />
          <div className="portfolio__content">
            <div className="portfolio__meta">
              <span className="portfolio__tag">Townhouse</span>
              <span className="portfolio__year">2023</span>
            </div>
            <h3>Hamilton Muse</h3>
            <p>
              A Georgian frame softened with bespoke plasterwork, archival textiles, and bronze inlays that trace the homeowners’ travels.
            </p>
            <button className="portfolio__link">View project</button>
          </div>
        </article>
        <article className="portfolio__card">
          <div className="portfolio__image portfolio__image--serenade" />
          <div className="portfolio__content">
            <div className="portfolio__meta">
              <span className="portfolio__tag">Boutique hotel</span>
              <span className="portfolio__year">2022</span>
            </div>
            <h3>Serenade Pavilion</h3>
            <p>
              Silk lacquer panels, cascading glass, and fragrant terrace gardens create a sensory retreat nestled within the Amalfi cliffs.
            </p>
            <button className="portfolio__link">View project</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PortfolioSection;
