import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const PrivacyPage = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <div className="legal-page">
        <button onClick={() => navigate('/')} className="legal-page__back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to home
        </button>

        <div className="legal-page__hero">
          <div className="legal-page__hero-content">
            <span className="legal-page__badge">Privacy Policy</span>
            <h1>Your privacy, our commitment</h1>
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>

        <div className="legal-page__container">
          <div className="legal-page__content">
            <section>
              <h2>Introduction</h2>
              <p>
                At Aurora Atelier, we understand that privacy is paramount when entrusting us with your home and vision. 
                This Privacy Policy explains how we collect, use, protect, and share information about you when you use our 
                services, visit our website, or communicate with us.
              </p>
            </section>

            <section>
              <h2>Information We Collect</h2>
              <h3>Information You Provide Directly</h3>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, property address</li>
                <li><strong>Project Details:</strong> Budget preferences, design preferences, timeline requirements</li>
                <li><strong>Communication:</strong> Messages, consultation notes, feedback, and correspondence</li>
                <li><strong>Payment Information:</strong> Billing address and payment details (processed securely through third-party payment processors)</li>
              </ul>

              <h3>Information Collected Automatically</h3>
              <ul>
                <li><strong>Website Usage:</strong> IP address, browser type, pages visited, time spent on pages</li>
                <li><strong>Cookies:</strong> We use cookies to improve your browsing experience and analyze website traffic</li>
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
              </ul>
            </section>

            <section>
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our interior design services</li>
                <li>Process consultation requests and project proposals</li>
                <li>Communicate with you about your project, appointments, and service updates</li>
                <li>Send invoices, process payments, and maintain transaction records</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>With your consent, send promotional materials about our services</li>
              </ul>
            </section>

            <section>
              <h2>How We Share Your Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Contractors, artisans, suppliers, and vendors working on your project</li>
                <li><strong>Professional Partners:</strong> Architects, engineers, and consultants as required for your project</li>
                <li><strong>Payment Processors:</strong> Secure third-party payment platforms to process transactions</li>
                <li><strong>Legal Compliance:</strong> When required by law, court order, or legal process</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p>
                <strong>We never sell your personal information to third parties.</strong>
              </p>
            </section>

            <section>
              <h2>Photography and Portfolio Use</h2>
              <p>
                With your explicit written consent, we may photograph completed projects for our portfolio, website, 
                marketing materials, and publications. You will always have the opportunity to review and approve images 
                before they are published. We can accommodate requests for anonymity or limited use.
              </p>
            </section>

            <section>
              <h2>Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information from unauthorized access, 
                disclosure, alteration, and destruction. This includes:
              </p>
              <ul>
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Confidentiality agreements with employees and contractors</li>
              </ul>
              <p>
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request your data in a portable format</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for specific uses of your information</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at <a href="mailto:privacy@auroraatelier.com">privacy@auroraatelier.com</a>
              </p>
            </section>

            <section>
              <h2>Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience. You can control 
                cookie preferences through your browser settings. Note that disabling cookies may limit functionality.
              </p>
              <p>Types of cookies we use:</p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </section>

            <section>
              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect 
                personal information from children. If you believe we have inadvertently collected such information, 
                please contact us immediately.
              </p>
            </section>

            <section>
              <h2>International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. 
                We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2>Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, 
                comply with legal obligations, resolve disputes, and enforce agreements. Project-related information is 
                typically retained for 7 years after project completion for legal and warranty purposes.
              </p>
            </section>

            <section>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                We will notify you of significant changes via email or prominent notice on our website. The "Last Updated" 
                date at the top indicates when changes were last made.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="legal-page__contact">
                <p><strong>Aurora Atelier</strong></p>
                <p>Email: <a href="mailto:privacy@auroraatelier.com">privacy@auroraatelier.com</a></p>
                <p>Phone: <a href="tel:+12125550194">+1 (212) 555-0194</a></p>
                <p>Address: New York · Singapore · Mallorca</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
