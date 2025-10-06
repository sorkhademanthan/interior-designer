import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <Link to="/" className="navbar__logo">Aurora</Link>
        <div className="navbar__links">
          <a href="/#about">About</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/#process">Process</a>
          <Link to="/features">Services</Link>
          <Link to="/pricing">Pricing</Link>
        </div>
        <div className="navbar__actions">
          <button className="navbar__ghost" onClick={() => navigate('/#portfolio')}>Gallery</button>
          <button className="navbar__primary" onClick={() => navigate('/book-consultation')}>Book consultation</button>
        </div>
        <button 
          className="navbar__hamburger" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`navbar__hamburger-line ${isMobileMenuOpen ? 'navbar__hamburger-line--open' : ''}`}></span>
          <span className={`navbar__hamburger-line ${isMobileMenuOpen ? 'navbar__hamburger-line--open' : ''}`}></span>
          <span className={`navbar__hamburger-line ${isMobileMenuOpen ? 'navbar__hamburger-line--open' : ''}`}></span>
        </button>
        <div className="navbar__highlight" aria-hidden="true" />
      </nav>

      <div 
        className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}
        onClick={closeMobileMenu}
      >
        <div className="navbar__mobile-content" onClick={(e) => e.stopPropagation()}>
          <div className="navbar__mobile-header">
            <div className="navbar__mobile-logo">Aurora</div>
            <button 
              className="navbar__mobile-close" 
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <span className="navbar__mobile-close-icon"></span>
            </button>
          </div>
          <div className="navbar__mobile-links">
            <a href="/#about" onClick={closeMobileMenu}>About</a>
            <a href="/#portfolio" onClick={closeMobileMenu}>Portfolio</a>
            <a href="/#process" onClick={closeMobileMenu}>Process</a>
            <Link to="/features" onClick={closeMobileMenu}>Services</Link>
            <Link to="/pricing" onClick={closeMobileMenu}>Pricing</Link>
          </div>
          <div className="navbar__mobile-actions">
            <button className="navbar__ghost" onClick={() => { navigate('/#portfolio'); closeMobileMenu(); }}>Gallery</button>
            <button className="navbar__primary" onClick={() => { navigate('/book-consultation'); closeMobileMenu(); }}>Book consultation</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
