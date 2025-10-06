const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const consultationController = require('../controllers/consultationController');

const consultationValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email'),
  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .matches(/^[\d\s\-\+\(\)]+$/).withMessage('Please provide a valid phone number'),
  body('preferredDate')
    .notEmpty().withMessage('Preferred date is required')
    .isISO8601().withMessage('Please provide a valid date'),
  body('message')
    .optional()
    .trim()
    .isLength({ max: 1000 }).withMessage('Message cannot exceed 1000 characters')
];

router.post('/', consultationValidation, consultationController.createConsultation);
router.get('/', consultationController.getAllConsultations);
router.get('/:id', consultationController.getConsultationById);
router.patch('/:id/status', consultationController.updateConsultationStatus);
router.delete('/:id', consultationController.deleteConsultation);

module.exports = router;
