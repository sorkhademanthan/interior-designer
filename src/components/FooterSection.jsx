const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__badge">Aurora Atelier</span>
          <h2>Spaces composed for the few.</h2>
          <p>
            Discreet interiors, meticulously orchestrated from first whisper to final reveal. Each commission is limited, founder-led, and grounded in quiet luxury.
          </p>
          <div className="footer__contact">
            <div>
              <span className="footer__label">Studio</span>
              <strong>New York · Singapore · Mallorca</strong>
            </div>
            <div>
              <span className="footer__label">Private line</span>
              <strong>+1 (212) 555-0194</strong>
            </div>
            <div>
              <span className="footer__label">Correspondence</span>
              <strong>concierge@auroraatelier.com</strong>
            </div>
          </div>
        </div>
        <div className="footer__grid">
          <div className="footer__column">
            <span className="footer__heading">Commissions</span>
            <ul>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <span className="footer__heading">Services</span>
            <ul>
              <li>Private residences</li>
              <li>Boutique hospitality</li>
              <li>Art curation</li>
              <li>Material sourcing</li>
            </ul>
          </div>
          <div className="footer__column">
            <span className="footer__heading">Social</span>
            <ul>
              <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.pinterest.com" target="_blank" rel="noreferrer">Pinterest</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://www.behance.net" target="_blank" rel="noreferrer">Behance</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <span>© {new Date().getFullYear()} Aurora Atelier. All rights reserved.</span>
        <div className="footer__links">
          <a href="#support">Client login</a>
          <a href="#privacy">Privacy</a>
          <a href="#legal">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
