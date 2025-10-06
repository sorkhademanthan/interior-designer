import { useState } from 'react';

const faqItems = [
  {
    question: 'How bespoke is each commission?',
    answer:
      'Every environment is drawn from a fresh palette. We develop a sensory brief, craft custom furnishings, and pair artisans uniquely suited to the project’s rhythm. No templates, no repeats.',
  },
  {
    question: 'Do you collaborate with architects and builders?',
    answer:
      'Yes. We often lead multidisciplinary teams, integrating early with architects and contractors to choreograph detailing, lighting, and finish sequencing for a seamless reveal.',
  },
  {
    question: 'What is the typical engagement timeline?',
    answer:
      'Discovery through reveal ranges from six months for focused suites to eighteen months for full-residence transformations. We maintain only a handful of active commissions to preserve intimacy.',
  },
  {
    question: 'Can you work internationally?',
    answer:
      'Absolutely. Our atelier travels globally, sourcing local artisans while bringing our core team to ensure continuity. Logistics, customs, and white-glove installation are handled in-house.',
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="faq" className="faq">
      <div className="faq__aurora" aria-hidden="true" />
      <div className="faq__header">
        <span className="faq__badge">Frequently asked</span>
        <h2>Questions whispered in confidence.</h2>
        <p>
          A curated ledger of curiosities from patrons exploring the Aurora experience. Each answer reveals how we choreograph the rare, the quiet, the unforgettable.
        </p>
      </div>
      <div className="faq__panel">
        <div className="faq__columns">
          <div className="faq__marquee">
            <div className="faq__marquee-glow" aria-hidden="true" />
            <div className="faq__marquee-content">
              <span>Discretion assured</span>
              <span>Bespoke detailing</span>
              <span>Global artisanship</span>
              <span>White-glove reveal</span>
            </div>
          </div>
          <div className="faq__list">
            {faqItems.map(({ question, answer }, index) => {
              const isOpen = expanded === index;
              return (
                <button
                  key={question}
                  type="button"
                  className={`faq__item${isOpen ? ' faq__item--active' : ''}`}
                  onClick={() => setExpanded(isOpen ? -1 : index)}
                >
                  <div className="faq__item-header">
                    <span className="faq__item-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="faq__item-question">{question}</span>
                    <span className="faq__item-indicator" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </div>
                  <div className="faq__item-body" aria-hidden={!isOpen}>
                    <p>{answer}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
