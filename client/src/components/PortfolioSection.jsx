import { useNavigate } from 'react-router-dom';
import { portfolioProjects } from '../data/portfolioData';

const PortfolioSection = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

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
        {portfolioProjects.map((project) => (
          <article key={project.id} className="portfolio__card" onClick={() => handleProjectClick(project.id)}>
            <div 
              className="portfolio__image" 
              style={{ backgroundImage: `url(${project.mainImage})` }}
            />
            <div className="portfolio__content">
              <div className="portfolio__meta">
                <span className="portfolio__tag">{project.tag}</span>
                <span className="portfolio__year">{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              <button className="portfolio__link">View project</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
