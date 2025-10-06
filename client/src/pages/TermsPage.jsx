import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const TermsPage = () => {
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
            <span className="legal-page__badge">Terms of Service</span>
            <h1>Professional engagement terms</h1>
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>

        <div className="legal-page__container">
          <div className="legal-page__content">
            <section>
              <h2>Introduction</h2>
              <p>
                These Terms of Service ("Terms") govern your use of Aurora Atelier's services and website. By engaging our services 
                or using our website, you agree to these Terms. Please read them carefully before proceeding with any consultation or project.
              </p>
            </section>

            <section>
              <h2>Services Provided</h2>
              <p>Aurora Atelier provides professional interior design services including:</p>
              <ul>
                <li>Residential and commercial interior design</li>
                <li>Space planning and architectural detailing</li>
                <li>Furniture selection and custom design</li>
                <li>Material sourcing and specification</li>
                <li>Project management and contractor coordination</li>
                <li>Art curation and accessory styling</li>
              </ul>
              <p>
                Specific services and deliverables will be outlined in individual project proposals and contracts.
              </p>
            </section>

            <section>
              <h2>Consultation Process</h2>
              <h3>Initial Consultation</h3>
              <p>
                Initial consultations are complimentary and allow us to understand your project scope, timeline, and vision. 
                During this phase, no contractual obligations are created.
              </p>

              <h3>Proposal</h3>
              <p>
                Following consultation, we provide a detailed proposal including scope of work, timeline, fee structure, and terms. 
                The proposal is valid for 30 days unless otherwise specified.
              </p>

              <h3>Contract Execution</h3>
              <p>
                Services begin only upon execution of a formal design services agreement and receipt of the initial deposit. 
                Each project requires a signed contract tailored to its specific requirements.
              </p>
            </section>

            <section>
              <h2>Fees and Payment</h2>
              <h3>Design Fees</h3>
              <p>
                Design fees are based on project scope and complexity. Fees may be structured as:
              </p>
              <ul>
                <li>Fixed fee for defined scope projects</li>
                <li>Hourly rate for ongoing or phased work</li>
                <li>Percentage of project cost for comprehensive services</li>
              </ul>

              <h3>Payment Schedule</h3>
              <p>Standard payment structure:</p>
              <ul>
                <li><strong>Initial Deposit:</strong> 50% upon contract signing</li>
                <li><strong>Midpoint Payment:</strong> 25% at project midpoint or design development completion</li>
                <li><strong>Final Payment:</strong> 25% upon project completion</li>
              </ul>
              <p>
                Custom payment schedules may be arranged for larger or phased projects.
              </p>

              <h3>Expenses and Procurement</h3>
              <p>
                Client is responsible for all project-related expenses including furniture, materials, contractor fees, permits, 
                and shipping. Aurora Atelier may advance costs on behalf of the client, subject to advance payment or credit approval.
              </p>

              <h3>Late Payment</h3>
              <p>
                Invoices are due within 15 days of issuance. Late payments may incur a 1.5% monthly finance charge. 
                Work may be suspended for accounts more than 30 days past due.
              </p>
            </section>

            <section>
              <h2>Project Timeline</h2>
              <p>
                Project timelines are estimates based on scope, complexity, and third-party dependencies. While we make every effort 
                to adhere to schedules, timelines may be affected by:
              </p>
              <ul>
                <li>Client decision-making and approval delays</li>
                <li>Material availability and shipping times</li>
                <li>Contractor schedules and permit processing</li>
                <li>Unforeseen site conditions or complications</li>
              </ul>
              <p>
                Aurora Atelier is not liable for delays caused by factors beyond our reasonable control.
              </p>
            </section>

            <section>
              <h2>Client Responsibilities</h2>
              <p>Successful project execution requires client cooperation including:</p>
              <ul>
                <li>Timely responses to inquiries and design presentations</li>
                <li>Provision of accurate site information and access</li>
                <li>Timely payment of invoices and deposits</li>
                <li>Clear communication of preferences and concerns</li>
                <li>Decision-making within agreed timeframes</li>
                <li>Cooperation with contractors and vendors</li>
              </ul>
            </section>

            <section>
              <h2>Changes and Revisions</h2>
              <p>
                The initial scope includes a defined number of design revisions as specified in your contract. Additional revisions 
                requested beyond the agreed scope will be billed at our standard hourly rate or as mutually agreed.
              </p>
              <p>
                Significant scope changes may require contract amendments and fee adjustments. We will discuss and document any 
                scope modifications before proceeding.
              </p>
            </section>

            <section>
              <h2>Cancellation and Termination</h2>
              <h3>Client Cancellation</h3>
              <p>
                Either party may terminate services with written notice. Upon termination:
              </p>
              <ul>
                <li>Client pays for all work completed through termination date</li>
                <li>Client receives deliverables completed to date</li>
                <li>Deposits are non-refundable but applied to work performed</li>
                <li>Client assumes all outstanding vendor commitments and deposits</li>
              </ul>

              <h3>Aurora Atelier Cancellation</h3>
              <p>
                We reserve the right to terminate services if:
              </p>
              <ul>
                <li>Payment terms are not met</li>
                <li>Client fails to fulfill contractual obligations</li>
                <li>Project scope changes significantly from original agreement</li>
                <li>Working relationship becomes untenable</li>
              </ul>
            </section>

            <section>
              <h2>Intellectual Property</h2>
              <h3>Design Ownership</h3>
              <p>
                All design concepts, drawings, specifications, and materials created by Aurora Atelier remain our intellectual property 
                until final payment is received. Upon full payment, client receives a non-exclusive license to use designs for the 
                specified project.
              </p>

              <h3>Usage Rights</h3>
              <p>
                Designs are licensed for the specific project only and may not be:
              </p>
              <ul>
                <li>Reproduced for other projects without written permission</li>
                <li>Shared with other designers or contractors for competitive bidding</li>
                <li>Sold, transferred, or licensed to third parties</li>
              </ul>

              <h3>Portfolio Use</h3>
              <p>
                Aurora Atelier reserves the right to photograph completed projects and use images for portfolio, marketing, 
                and publication purposes, subject to client approval. Anonymity can be maintained upon request.
              </p>
            </section>

            <section>
              <h2>Warranties and Disclaimers</h2>
              <h3>Design Services</h3>
              <p>
                Aurora Atelier warrants that services will be performed with professional skill and care consistent with industry 
                standards. However, we do not warrant:
              </p>
              <ul>
                <li>Performance or quality of third-party products or services</li>
                <li>Contractor workmanship or installation quality</li>
                <li>Exact color matching across different materials or lighting conditions</li>
                <li>Future availability of specified products</li>
              </ul>

              <h3>Product Disclaimers</h3>
              <p>
                Furniture, materials, and products are subject to manufacturer warranties. Aurora Atelier is not responsible for 
                product defects, though we will assist with warranty claims as a courtesy.
              </p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p>
                Aurora Atelier's liability is limited to the amount of design fees paid for the specific project. We are not liable for:
              </p>
              <ul>
                <li>Indirect, consequential, or incidental damages</li>
                <li>Loss of use, revenue, or profits</li>
                <li>Contractor errors or installation issues</li>
                <li>Product defects or supplier failures</li>
                <li>Delays beyond our reasonable control</li>
                <li>Changes to building codes or regulations</li>
              </ul>
            </section>

            <section>
              <h2>Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This includes:
              </p>
              <ul>
                <li>Design concepts and specifications</li>
                <li>Budget and financial information</li>
                <li>Personal information and preferences</li>
                <li>Property details and security information</li>
              </ul>
              <p>
                Confidentiality obligations survive termination of services.
              </p>
            </section>

            <section>
              <h2>Insurance</h2>
              <p>
                Aurora Atelier maintains professional liability insurance. Clients are responsible for property insurance, 
                contractor liability insurance, and any specialized coverage for high-value items.
              </p>
            </section>

            <section>
              <h2>Dispute Resolution</h2>
              <p>
                Any disputes arising from these Terms or our services shall be resolved through:
              </p>
              <ol>
                <li><strong>Good Faith Discussion:</strong> Initial attempt to resolve through direct communication</li>
                <li><strong>Mediation:</strong> Non-binding mediation with mutually agreed mediator</li>
                <li><strong>Arbitration:</strong> Binding arbitration in accordance with applicable rules</li>
              </ol>
              <p>
                Legal proceedings, if necessary, shall be conducted in New York and governed by New York law.
              </p>
            </section>

            <section>
              <h2>Force Majeure</h2>
              <p>
                Neither party is liable for delays or failures caused by circumstances beyond reasonable control, including natural 
                disasters, pandemics, labor disputes, government actions, or supply chain disruptions.
              </p>
            </section>

            <section>
              <h2>General Provisions</h2>
              <ul>
                <li><strong>Entire Agreement:</strong> Individual project contracts supersede these general Terms for specific provisions</li>
                <li><strong>Amendments:</strong> Changes must be in writing and signed by both parties</li>
                <li><strong>Severability:</strong> Invalid provisions don't affect validity of remaining terms</li>
                <li><strong>Assignment:</strong> Client may not assign contract without written consent</li>
                <li><strong>No Agency:</strong> Nothing creates an agency, partnership, or employment relationship</li>
              </ul>
            </section>

            <section>
              <h2>Contact Information</h2>
              <p>
                For questions about these Terms or to discuss a project, please contact:
              </p>
              <div className="legal-page__contact">
                <p><strong>Aurora Atelier</strong></p>
                <p>Email: <a href="mailto:legal@auroraatelier.com">legal@auroraatelier.com</a></p>
                <p>Phone: <a href="tel:+12125550194">+1 (212) 555-0194</a></p>
                <p>Address: New York · Singapore · Mallorca</p>
              </div>
            </section>

            <section>
              <p style={{ marginTop: '48px', fontStyle: 'italic', color: 'rgba(206, 202, 194, 0.78)' }}>
                By submitting a consultation request or engaging our services, you acknowledge that you have read, understood, 
                and agree to these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
