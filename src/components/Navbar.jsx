const Navbar = ({ isScrolled }) => {
  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">Aurora</div>
      <div className="navbar__links">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#stories">Stories</a>
        <a href="#support">Support</a>
      </div>
      <div className="navbar__actions">
        <button className="navbar__ghost">Sign in</button>
        <button className="navbar__primary">Get Started</button>
      </div>
      <div className="navbar__highlight" aria-hidden="true" />
    </nav>
  );
};

export default Navbar;
