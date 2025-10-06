const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  // Client Information
  clientName: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  propertyAddress: {
    type: String,
    required: [true, 'Property address is required'],
    trim: true
  },
  bestTimeToContact: {
    type: String,
    enum: ['morning', 'afternoon', 'evening', 'anytime'],
    default: 'anytime'
  },

  // Project Type & Property Details
  projectType: {
    type: String,
    required: [true, 'Project type is required'],
    enum: ['residential', 'commercial']
  },
  propertyType: {
    type: String,
    required: [true, 'Property type is required'],
    enum: ['house', 'apartment', 'condo', 'townhouse', 'office', 'retail', 'restaurant', 'hotel', 'other']
  },
  propertySize: {
    type: String,
    trim: true
  },
  roomsAreas: {
    type: [String],
    default: []
  },
  propertyCondition: {
    type: String,
    enum: ['new-construction', 'excellent', 'good', 'needs-renovation', 'major-renovation'],
    default: 'good'
  },

  // Scope & Timeline
  pricingTier: {
    type: String,
    required: [true, 'Pricing tier is required'],
    enum: ['refresh', 'signature', 'bespoke', 'not-sure']
  },
  desiredStartDate: {
    type: Date,
    required: [true, 'Desired start date is required']
  },
  projectDeadline: {
    type: Date
  },
  timelineFlexibility: {
    type: String,
    enum: ['flexible', 'somewhat-flexible', 'fixed'],
    default: 'flexible'
  },

  // Budget
  budgetRange: {
    type: String,
    required: [true, 'Budget range is required'],
    enum: [
      'under-25k',
      '25k-50k',
      '50k-100k',
      '100k-250k',
      '250k-500k',
      'over-500k',
      'prefer-not-to-say'
    ]
  },
  budgetFlexibility: {
    type: String,
    enum: ['strict', 'somewhat-flexible', 'flexible'],
    default: 'somewhat-flexible'
  },
  needsFinancing: {
    type: Boolean,
    default: false
  },

  // Design Preferences
  stylePreferences: {
    type: [String],
    default: []
  },
  colorPreferences: {
    type: String,
    trim: true
  },
  inspirationReferences: {
    type: String,
    trim: true,
    maxlength: [500, 'Inspiration references cannot exceed 500 characters']
  },
  mustHaveFeatures: {
    type: String,
    trim: true,
    maxlength: [500, 'Must-have features cannot exceed 500 characters']
  },

  // Special Requirements
  accessibilityNeeds: {
    type: Boolean,
    default: false
  },
  accessibilityDetails: {
    type: String,
    trim: true
  },
  sustainabilityPreference: {
    type: String,
    enum: ['not-important', 'somewhat-important', 'very-important', 'essential'],
    default: 'somewhat-important'
  },
  hasPets: {
    type: Boolean,
    default: false
  },
  petDetails: {
    type: String,
    trim: true
  },
  storageNeeds: {
    type: String,
    enum: ['minimal', 'moderate', 'extensive'],
    default: 'moderate'
  },

  // Additional Services
  needsArchitecture: {
    type: Boolean,
    default: false
  },
  needsContractor: {
    type: Boolean,
    default: false
  },
  needsProjectManagement: {
    type: Boolean,
    default: true
  },

  // Additional Information
  additionalNotes: {
    type: String,
    trim: true,
    maxlength: [2000, 'Additional notes cannot exceed 2000 characters']
  },
  howDidYouHear: {
    type: String,
    trim: true
  },

  // Status & Tracking
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'proposal-sent', 'accepted', 'in-progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  assignedTo: {
    type: String,
    trim: true
  },
  estimatedValue: {
    type: Number
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
