import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const StartProjectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const [formData, setFormData] = useState({
    // Client Information
    clientName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    bestTimeToContact: 'anytime',
    
    // Project Type & Property Details
    projectType: 'residential',
    propertyType: 'house',
    propertySize: '',
    roomsAreas: [],
    propertyCondition: 'good',
    
    // Scope & Timeline
    pricingTier: location.state?.tier || 'signature',
    desiredStartDate: '',
    projectDeadline: '',
    timelineFlexibility: 'flexible',
    
    // Budget
    budgetRange: '50k-100k',
    budgetFlexibility: 'somewhat-flexible',
    needsFinancing: false,
    
    // Design Preferences
    stylePreferences: [],
    colorPreferences: '',
    inspirationReferences: '',
    mustHaveFeatures: '',
    
    // Special Requirements
    accessibilityNeeds: false,
    accessibilityDetails: '',
    sustainabilityPreference: 'somewhat-important',
    hasPets: false,
    petDetails: '',
    storageNeeds: 'moderate',
    
    // Additional Services
    needsArchitecture: false,
    needsContractor: false,
    needsProjectManagement: true,
    
    // Additional Information
    additionalNotes: '',
    howDidYouHear: ''
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
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleMultiSelect = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter(item => item !== value)
        : [...prev[name], value]
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

    try {
      const response = await fetch(`${API_URL}/api/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Project request submitted successfully! We\'ll be in touch within 1-2 business days.' 
        });
        setTimeout(() => {
          navigate('/', { state: { showSuccessMessage: true } });
        }, 3000);
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Failed to submit. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error submitting project:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const minDate = new Date().toISOString().split('T')[0];

  const roomOptions = [
    'Living Room', 'Dining Room', 'Kitchen', 'Master Bedroom', 'Bedrooms', 
    'Bathrooms', 'Home Office', 'Library', 'Media Room', 'Basement', 
    'Outdoor Spaces', 'Entryway', 'Laundry Room', 'Garage', 'Other'
  ];

  const styleOptions = [
    'Modern', 'Contemporary', 'Traditional', 'Transitional', 'Industrial',
    'Mid-Century Modern', 'Scandinavian', 'Bohemian', 'Coastal', 'Farmhouse',
    'Art Deco', 'Minimalist', 'Eclectic', 'Asian-Inspired', 'Mediterranean'
  ];

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <div className="start-project-page">
        <button onClick={() => navigate(-1)} className="start-project-page__back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="start-project-page__hero">
          <div className="start-project-page__hero-content">
            <span className="start-project-page__badge">Start Your Project</span>
            <h1>Let's bring your vision to life</h1>
            <p>
              This comprehensive form helps us understand your project in detail. 
              Take your time—we'll use this information to craft a tailored proposal for your space.
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="start-project-page__progress">
          <div className="start-project-page__progress-bar">
            <div 
              className="start-project-page__progress-fill" 
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
          <div className="start-project-page__progress-steps">
            {[1, 2, 3, 4, 5].map(step => (
              <div 
                key={step}
                className={`start-project-page__progress-step ${currentStep >= step ? 'active' : ''}`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="start-project-page__progress-labels">
            <span className={currentStep === 1 ? 'active' : ''}>Contact</span>
            <span className={currentStep === 2 ? 'active' : ''}>Property</span>
            <span className={currentStep === 3 ? 'active' : ''}>Scope</span>
            <span className={currentStep === 4 ? 'active' : ''}>Preferences</span>
            <span className={currentStep === 5 ? 'active' : ''}>Review</span>
          </div>
        </div>

        <div className="start-project-page__container">
          <form onSubmit={handleSubmit} className="start-project-page__form">
            
            {submitStatus && (
              <div className={`start-project-page__alert start-project-page__alert--${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            {/* Step 1: Client Information */}
            {currentStep === 1 && (
              <div className="start-project-page__step">
                <h2>Tell us about yourself</h2>
                <p className="start-project-page__step-description">
                  We'll use this information to contact you about your project.
                </p>

                <div className="start-project-page__form-group">
                  <label htmlFor="clientName">Full Name *</label>
                  <input
                    type="text"
                    id="clientName"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="start-project-page__form-row">
                  <div className="start-project-page__form-group">
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

                  <div className="start-project-page__form-group">
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

                <div className="start-project-page__form-group">
                  <label htmlFor="propertyAddress">Property Address *</label>
                  <input
                    type="text"
                    id="propertyAddress"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    required
                    placeholder="123 Main St, City, State, ZIP"
                  />
                  <span className="start-project-page__form-hint">
                    The address where the project will take place
                  </span>
                </div>

                <div className="start-project-page__form-group">
                  <label htmlFor="bestTimeToContact">Best Time to Contact</label>
                  <select
                    id="bestTimeToContact"
                    name="bestTimeToContact"
                    value={formData.bestTimeToContact}
                    onChange={handleChange}
                  >
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>

                <div className="start-project-page__step-actions">
                  <button type="button" onClick={nextStep} className="start-project-page__btn-primary">
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Property Details */}
            {currentStep === 2 && (
              <div className="start-project-page__step">
                <h2>About your property</h2>
                <p className="start-project-page__step-description">
                  Help us understand the space we'll be working with.
                </p>

                <div className="start-project-page__form-row">
                  <div className="start-project-page__form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>

                  <div className="start-project-page__form-group">
                    <label htmlFor="propertyType">Property Type *</label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                    >
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="office">Office</option>
                      <option value="retail">Retail</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="hotel">Hotel</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="start-project-page__form-row">
                  <div className="start-project-page__form-group">
                    <label htmlFor="propertySize">Property Size (sq ft)</label>
                    <input
                      type="text"
                      id="propertySize"
                      name="propertySize"
                      value={formData.propertySize}
                      onChange={handleChange}
                      placeholder="e.g., 2,500 sq ft"
                    />
                  </div>

                  <div className="start-project-page__form-group">
                    <label htmlFor="propertyCondition">Current Condition</label>
                    <select
                      id="propertyCondition"
                      name="propertyCondition"
                      value={formData.propertyCondition}
                      onChange={handleChange}
                    >
                      <option value="new-construction">New Construction</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="needs-renovation">Needs Renovation</option>
                      <option value="major-renovation">Major Renovation Required</option>
                    </select>
                  </div>
                </div>

                <div className="start-project-page__form-group">
                  <label>Which rooms/areas need design? (Select all that apply)</label>
                  <div className="start-project-page__checkbox-grid">
                    {roomOptions.map(room => (
                      <label key={room} className="start-project-page__checkbox-label">
                        <input
                          type="checkbox"
                          checked={formData.roomsAreas.includes(room)}
                          onChange={() => handleMultiSelect('roomsAreas', room)}
                        />
                        <span>{room}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="start-project-page__step-actions">
                  <button type="button" onClick={prevStep} className="start-project-page__btn-secondary">
                    Back
                  </button>
                  <button type="button" onClick={nextStep} className="start-project-page__btn-primary">
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Scope & Budget */}
            {currentStep === 3 && (
              <div className="start-project-page__step">
                <h2>Project scope & timeline</h2>
                <p className="start-project-page__step-description">
                  Let's understand your timeline and investment expectations.
                </p>

                <div className="start-project-page__form-group">
                  <label htmlFor="pricingTier">Which package interests you? *</label>
                  <select
                    id="pricingTier"
                    name="pricingTier"
                    value={formData.pricingTier}
                    onChange={handleChange}
                    required
                  >
                    <option value="refresh">Refresh ($12,000+)</option>
                    <option value="signature">Signature ($45,000+)</option>
                    <option value="bespoke">Bespoke (Custom)</option>
                    <option value="not-sure">Not Sure / Need Consultation</option>
                  </select>
                </div>

                <div className="start-project-page__form-row">
                  <div className="start-project-page__form-group">
                    <label htmlFor="desiredStartDate">Desired Start Date *</label>
                    <input
                      type="date"
                      id="desiredStartDate"
                      name="desiredStartDate"
                      value={formData.desiredStartDate}
                      onChange={handleChange}
                      required
                      min={minDate}
                    />
                  </div>

                  <div className="start-project-page__form-group">
                    <label htmlFor="projectDeadline">Project Deadline (if any)</label>
                    <input
                      type="date"
                      id="projectDeadline"
                      name="projectDeadline"
                      value={formData.projectDeadline}
                      onChange={handleChange}
                      min={minDate}
                    />
                  </div>
                </div>

                <div className="start-project-page__form-group">
                  <label htmlFor="timelineFlexibility">Timeline Flexibility</label>
                  <select
                    id="timelineFlexibility"
                    name="timelineFlexibility"
                    value={formData.timelineFlexibility}
                    onChange={handleChange}
                  >
                    <option value="flexible">Flexible</option>
                    <option value="somewhat-flexible">Somewhat Flexible</option>
                    <option value="fixed">Fixed / Hard Deadline</option>
                  </select>
                </div>

                <div className="start-project-page__form-group">
                  <label htmlFor="budgetRange">Budget Range *</label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    required
                  >
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="over-500k">Over $500,000</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

                <div className="start-project-page__form-row">
                  <div className="start-project-page__form-group">
                    <label htmlFor="budgetFlexibility">Budget Flexibility</label>
                    <select
                      id="budgetFlexibility"
                      name="budgetFlexibility"
                      value={formData.budgetFlexibility}
                      onChange={handleChange}
                    >
                      <option value="strict">Strict Budget</option>
                      <option value="somewhat-flexible">Somewhat Flexible</option>
                      <option value="flexible">Flexible for Right Solutions</option>
                    </select>
                  </div>

                  <div className="start-project-page__form-group">
                    <label className="start-project-page__checkbox-label start-project-page__checkbox-label--inline">
                      <input
                        type="checkbox"
                        name="needsFinancing"
                        checked={formData.needsFinancing}
                        onChange={handleChange}
                      />
                      <span>I'm interested in financing options</span>
                    </label>
                  </div>
                </div>

                <div className="start-project-page__step-actions">
                  <button type="button" onClick={prevStep} className="start-project-page__btn-secondary">
                    Back
                  </button>
                  <button type="button" onClick={nextStep} className="start-project-page__btn-primary">
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Design Preferences & Requirements */}
            {currentStep === 4 && (
              <div className="start-project-page__step">
                <h2>Design preferences</h2>
                <p className="start-project-page__step-description">
                  Share your vision and any special requirements.
                </p>

                <div className="start-project-page__form-group">
                  <label>Style Preferences (Select all that apply)</label>
                  <div className="start-project-page__checkbox-grid">
                    {styleOptions.map(style => (
                      <label key={style} className="start-project-page__checkbox-label">
                        <input
                          type="checkbox"
                          checked={formData.stylePreferences.includes(style)}
                          onChange={() => handleMultiSelect('stylePreferences', style)}
                        />
                        <span>{style}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="start-project-page__form-group">
                  <label htmlFor="colorPreferences">Color Preferences</label>
                  <input
                    type="text"
                    id="colorPreferences"
                    name="colorPreferences"
                    value={formData.colorPreferences}
                    onChange={handleChange}
                    placeholder="e.g., Warm neutrals, navy accents, no red"
                  />
                </div>

                <div className="start-project-page__form-group">
                  <label htmlFor="inspirationReferences">Inspiration Sources</label>
                  <textarea
                    id="inspirationReferences"
                    name="inspirationReferences"
                    value={formData.inspirationReferences}
                    onChange={handleChange}
                    rows="3"
                    maxLength="500"
                    placeholder="Pinterest boards, Instagram accounts, magazines, or specific spaces you love..."
                  />
                  <span className="start-project-page__form-hint">
                    {formData.inspirationReferences.length}/500 characters
                  </span>
                </div>

                <div className="start-project-page__form-group">
                  <label htmlFor="mustHaveFeatures">Must-Have Features</label>
                  <textarea
                    id="mustHaveFeatures"
                    name="mustHaveFeatures"
                    value={formData.mustHaveFeatures}
                    onChange={handleChange}
                    rows="3"
                    maxLength="500"
                    placeholder="Features or elements that are non-negotiable for your space..."
                  />
                  <span className="start-project-page__form-hint">
                    {formData.mustHaveFeatures.length}/500 characters
                  </span>
                </div>

                <div className="start-project-page__form-group">
                  <label htmlFor="sustainabilityPreference">Sustainability Importance</label>
                  <select
                    id="sustainabilityPreference"
                    name="sustainabilityPreference"
                    value={formData.sustainabilityPreference}
                    onChange={handleChange}
                  >
                    <option value="not-important">Not Important</option>
                    <option value="somewhat-important">Somewhat Important</option>
                    <option value="very-important">Very Important</option>
                    <option value="essential">Essential</option>
                  </select>
                </div>

                <div className="start-project-page__form-group">
                  <label className="start-project-page__checkbox-label start-project-page__checkbox-label--inline">
                    <input
                      type="checkbox"
                      name="hasPets"
                      checked={formData.hasPets}
                      onChange={handleChange}
                    />
                    <span>I have pets</span>
                  </label>
                  {formData.hasPets && (
                    <input
                      type="text"
                      name="petDetails"
                      value={formData.petDetails}
                      onChange={handleChange}
                      placeholder="e.g., Two dogs, one cat"
                      style={{ marginTop: '10px' }}
                    />
                  )}
                </div>

                <div className="start-project-page__form-group">
                  <label className="start-project-page__checkbox-label start-project-page__checkbox-label--inline">
                    <input
                      type="checkbox"
                      name="accessibilityNeeds"
                      checked={formData.accessibilityNeeds}
                      onChange={handleChange}
                    />
                    <span>I have accessibility requirements</span>
                  </label>
                  {formData.accessibilityNeeds && (
                    <textarea
                      name="accessibilityDetails"
                      value={formData.accessibilityDetails}
                      onChange={handleChange}
                      rows="2"
                      placeholder="Please describe your accessibility needs..."
                      style={{ marginTop: '10px' }}
                    />
                  )}
                </div>

                <div className="start-project-page__form-group">
                  <label htmlFor="storageNeeds">Storage Needs</label>
                  <select
                    id="storageNeeds"
                    name="storageNeeds"
                    value={formData.storageNeeds}
                    onChange={handleChange}
                  >
                    <option value="minimal">Minimal</option>
                    <option value="moderate">Moderate</option>
                    <option value="extensive">Extensive</option>
                  </select>
                </div>

                <div className="start-project-page__form-group">
                  <label>Additional Services Needed</label>
                  <label className="start-project-page__checkbox-label start-project-page__checkbox-label--inline">
                    <input
                      type="checkbox"
                      name="needsArchitecture"
                      checked={formData.needsArchitecture}
                      onChange={handleChange}
                    />
                    <span>Architecture / Structural Work</span>
                  </label>
                  <label className="start-project-page__checkbox-label start-project-page__checkbox-label--inline">
                    <input
                      type="checkbox"
                      name="needsContractor"
                      checked={formData.needsContractor}
                      onChange={handleChange}
                    />
                    <span>Contractor Services</span>
                  </label>
                  <label className="start-project-page__checkbox-label start-project-page__checkbox-label--inline">
                    <input
                      type="checkbox"
                      name="needsProjectManagement"
                      checked={formData.needsProjectManagement}
                      onChange={handleChange}
                    />
                    <span>Project Management</span>
                  </label>
                </div>

                <div className="start-project-page__step-actions">
                  <button type="button" onClick={prevStep} className="start-project-page__btn-secondary">
                    Back
                  </button>
                  <button type="button" onClick={nextStep} className="start-project-page__btn-primary">
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {currentStep === 5 && (
              <div className="start-project-page__step">
                <h2>Almost there!</h2>
                <p className="start-project-page__step-description">
                  Any final notes before we submit your project request?
                </p>

                <div className="start-project-page__form-group">
                  <label htmlFor="additionalNotes">Additional Notes or Questions</label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows="5"
                    maxLength="2000"
                    placeholder="Share any additional details, concerns, or questions about your project..."
                  />
                  <span className="start-project-page__form-hint">
                    {formData.additionalNotes.length}/2000 characters
                  </span>
                </div>

                <div className="start-project-page__form-group">
                  <label htmlFor="howDidYouHear">How did you hear about us?</label>
                  <input
                    type="text"
                    id="howDidYouHear"
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleChange}
                    placeholder="e.g., Instagram, Referral, Google Search"
                  />
                </div>

                <div className="start-project-page__review">
                  <h3>Project Summary</h3>
                  <div className="start-project-page__review-section">
                    <h4>Contact Information</h4>
                    <p><strong>Name:</strong> {formData.clientName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Property:</strong> {formData.propertyAddress}</p>
                  </div>
                  <div className="start-project-page__review-section">
                    <h4>Project Details</h4>
                    <p><strong>Type:</strong> {formData.projectType.charAt(0).toUpperCase() + formData.projectType.slice(1)}</p>
                    <p><strong>Property Type:</strong> {formData.propertyType.charAt(0).toUpperCase() + formData.propertyType.slice(1)}</p>
                    <p><strong>Package:</strong> {formData.pricingTier.charAt(0).toUpperCase() + formData.pricingTier.slice(1)}</p>
                    <p><strong>Budget Range:</strong> {formData.budgetRange}</p>
                    <p><strong>Start Date:</strong> {formData.desiredStartDate ? new Date(formData.desiredStartDate).toLocaleDateString() : 'Not specified'}</p>
                  </div>
                </div>

                <p className="start-project-page__form-note">
                  By submitting this form, you agree to our terms and privacy policy. 
                  We'll review your request and respond within 1-2 business days with next steps.
                </p>

                <div className="start-project-page__step-actions">
                  <button type="button" onClick={prevStep} className="start-project-page__btn-secondary">
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="start-project-page__btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Project Request'}
                  </button>
                </div>
              </div>
            )}

          </form>
        </div>
      </div>
    </>
  );
};

export default StartProjectPage;
