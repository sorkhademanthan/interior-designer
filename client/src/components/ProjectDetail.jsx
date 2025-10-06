import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProjectById } from '../data/portfolioData';
import Navbar from './Navbar';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  if (!project) {
    return (
      <>
        <Navbar isScrolled={isScrolled} />
        <div className="project-detail project-detail--not-found">
          <div className="project-detail__container">
            <h1>Project not found</h1>
            <button onClick={() => navigate('/')} className="hero__cta">
              Return home
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <div className="project-detail">
        <button onClick={() => navigate('/')} className="project-detail__back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to portfolio
      </button>

      <div className="project-detail__hero">
        <img src={project.mainImage} alt={project.title} />
        <div className="project-detail__hero-overlay" />
        <div className="project-detail__hero-content">
          <span className="project-detail__tag">{project.tag}</span>
          <h1>{project.title}</h1>
          <p>{project.location}</p>
        </div>
      </div>

      <div className="project-detail__container">
        <div className="project-detail__overview">
          <div className="project-detail__overview-text">
            <h2>Project Overview</h2>
            <p>{project.description}</p>
          </div>
          <div className="project-detail__overview-stats">
            <div className="project-detail__stat">
              <span className="project-detail__stat-label">Location</span>
              <span className="project-detail__stat-value">{project.location}</span>
            </div>
            <div className="project-detail__stat">
              <span className="project-detail__stat-label">Area</span>
              <span className="project-detail__stat-value">{project.area}</span>
            </div>
            <div className="project-detail__stat">
              <span className="project-detail__stat-label">Duration</span>
              <span className="project-detail__stat-value">{project.duration}</span>
            </div>
            <div className="project-detail__stat">
              <span className="project-detail__stat-label">Investment</span>
              <span className="project-detail__stat-value">{project.budget}</span>
            </div>
            <div className="project-detail__stat">
              <span className="project-detail__stat-label">Completed</span>
              <span className="project-detail__stat-value">{project.completedDate}</span>
            </div>
            <div className="project-detail__stat">
              <span className="project-detail__stat-label">Year</span>
              <span className="project-detail__stat-value">{project.year}</span>
            </div>
          </div>
        </div>

        <div className="project-detail__section">
          <h2>The Challenge</h2>
          <p>{project.challenge}</p>
        </div>

        <div className="project-detail__section">
          <h2>The Solution</h2>
          <p>{project.solution}</p>
        </div>

        <div className="project-detail__gallery">
          <h2>Project Gallery</h2>
          <div className="project-detail__gallery-grid">
            {project.gallery.map((image, index) => (
              <div key={index} className="project-detail__gallery-item">
                <img src={image} alt={`${project.title} view ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="project-detail__timeline">
          <h2>Project Timeline</h2>
          <div className="project-detail__timeline-grid">
            {project.timeline.map((phase, index) => (
              <div key={index} className="project-detail__timeline-item">
                <div className="project-detail__timeline-number">{index + 1}</div>
                <div className="project-detail__timeline-content">
                  <h3>{phase.phase}</h3>
                  <span className="project-detail__timeline-duration">{phase.duration}</span>
                  <p>{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="project-detail__features">
          <h2>Key Features</h2>
          <ul className="project-detail__features-list">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-detail__materials">
          <h2>Materials & Sources</h2>
          <div className="project-detail__materials-grid">
            {project.materials.map((material, index) => (
              <div key={index} className="project-detail__material-card">
                <h3>{material.name}</h3>
                <p>{material.source}</p>
              </div>
            ))}
          </div>
        </div>

        {project.testimonial && (
          <div className="project-detail__testimonial">
            <blockquote>
              {project.testimonial.quote}
            </blockquote>
            <div className="project-detail__testimonial-author">
              <span>{project.testimonial.author}</span>
              <small>{project.testimonial.role}</small>
            </div>
          </div>
        )}

        <div className="project-detail__footer">
          <button onClick={() => navigate('/#portfolio')} className="hero__secondary">
            View more projects
          </button>
          <button onClick={() => navigate('/book-consultation')} className="hero__cta">
            Start your project
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProjectDetail;
