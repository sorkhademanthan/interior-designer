import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const BookConsultationPage = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    serviceType: 'consultation',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

    try {
      const response = await fetch(`${API_URL}/api/consultations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Consultation request submitted successfully! We will contact you soon.' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          serviceType: 'consultation',
          message: ''
        });
        setTimeout(() => {
          navigate('/', { state: { scrollTo: 'contact' } });
        }, 3000);
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Failed to submit. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error submitting consultation:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <div className="consultation-page">
        <button onClick={() => navigate('/')} className="consultation-page__back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to home
        </button>

        <div className="consultation-page__hero">
          <div className="consultation-page__hero-content">
            <span className="consultation-page__badge">Book a Consultation</span>
            <h1>Let's bring your vision to life</h1>
            <p>
              Schedule a private consultation with our design team. We'll discuss your space, 
              understand your vision, and craft a bespoke proposal tailored to your needs.
            </p>
          </div>
        </div>

        <div className="consultation-page__container">
          <div className="consultation-page__info">
            <h2>What to expect</h2>
            <div className="consultation-page__info-items">
              <div className="consultation-page__info-item">
                <div className="consultation-page__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3>60-90 minutes</h3>
                <p>In-depth discussion of your project, space, and aspirations</p>
              </div>
              <div className="consultation-page__info-item">
                <div className="consultation-page__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3>Your space or ours</h3>
                <p>On-site visits or virtual consultations available</p>
              </div>
              <div className="consultation-page__info-item">
                <div className="consultation-page__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3>Tailored proposal</h3>
                <p>Receive a detailed design approach and timeline within 48 hours</p>
              </div>
            </div>
          </div>

          <div className="consultation-page__form-wrapper">
            <form onSubmit={handleSubmit} className="consultation-page__form">
              <h2>Book your consultation</h2>
              
              {submitStatus && (
                <div className={`consultation-page__alert consultation-page__alert--${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="consultation-page__form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength="2"
                  maxLength="100"
                  placeholder="John Doe"
                />
              </div>

              <div className="consultation-page__form-row">
                <div className="consultation-page__form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="consultation-page__form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="consultation-page__form-row">
                <div className="consultation-page__form-group">
                  <label htmlFor="preferredDate">Preferred Date *</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    min={minDate}
                  />
                </div>

                <div className="consultation-page__form-group">
                  <label htmlFor="preferredTime">Preferred Time</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 7PM)</option>
                  </select>
                </div>
              </div>

              <div className="consultation-page__form-group">
                <label htmlFor="serviceType">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value="consultation">General Consultation</option>
                  <option value="interior-design">Interior Design</option>
                  <option value="renovation">Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="consultation-page__form-group">
                <label htmlFor="message">Tell us about your project</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  maxLength="1000"
                  placeholder="Share your vision, timeline, budget range, or any specific requirements..."
                />
                <span className="consultation-page__form-hint">
                  {formData.message.length}/1000 characters
                </span>
              </div>

              <button 
                type="submit" 
                className="consultation-page__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit consultation request'}
              </button>

              <p className="consultation-page__form-note">
                By submitting this form, you agree to our terms and privacy policy. 
                We'll respond within 24 hours to confirm your consultation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookConsultationPage;
