const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const projectController = require('../controllers/projectController');

const projectValidation = [
  body('clientName')
    .trim()
    .notEmpty().withMessage('Client name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email'),
  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required'),
  body('propertyAddress')
    .trim()
    .notEmpty().withMessage('Property address is required'),
  body('projectType')
    .notEmpty().withMessage('Project type is required')
    .isIn(['residential', 'commercial']).withMessage('Invalid project type'),
  body('propertyType')
    .notEmpty().withMessage('Property type is required'),
  body('pricingTier')
    .notEmpty().withMessage('Pricing tier is required')
    .isIn(['refresh', 'signature', 'bespoke', 'not-sure']).withMessage('Invalid pricing tier'),
  body('desiredStartDate')
    .notEmpty().withMessage('Desired start date is required')
    .isISO8601().withMessage('Please provide a valid date'),
  body('budgetRange')
    .notEmpty().withMessage('Budget range is required'),
  body('additionalNotes')
    .optional()
    .trim()
    .isLength({ max: 2000 }).withMessage('Additional notes cannot exceed 2000 characters')
];

router.post('/', projectValidation, projectController.createProject);
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;
