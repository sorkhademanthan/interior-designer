const Consultation = require('../models/Consultation');
const { validationResult } = require('express-validator');
const emailService = require('../config/emailService');

exports.createConsultation = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const consultation = new Consultation(req.body);
    await consultation.save();

    try {
      await emailService.sendConsultationNotification(consultation);
    } catch (emailError) {
      console.error('Email notification failed:', emailError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully',
      data: consultation
    });
  } catch (error) {
    console.error('Error creating consultation:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      success: false,
      message: 'Failed to submit consultation request',
      error: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

exports.getAllConsultations = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const query = status ? { status } : {};
    
    const consultations = await Consultation.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Consultation.countDocuments(query);

    res.json({
      success: true,
      data: consultations,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count
    });
  } catch (error) {
    console.error('Error fetching consultations:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch consultations',
      error: error.message
    });
  }
};

exports.getConsultationById = async (req, res) => {
  try {
    const consultation = await Consultation.findById(req.params.id);
    
    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation not found'
      });
    }

    res.json({
      success: true,
      data: consultation
    });
  } catch (error) {
    console.error('Error fetching consultation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch consultation',
      error: error.message
    });
  }
};

exports.updateConsultationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    const consultation = await Consultation.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation not found'
      });
    }

    res.json({
      success: true,
      message: 'Consultation status updated',
      data: consultation
    });
  } catch (error) {
    console.error('Error updating consultation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update consultation',
      error: error.message
    });
  }
};

exports.deleteConsultation = async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndDelete(req.params.id);

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation not found'
      });
    }

    res.json({
      success: true,
      message: 'Consultation deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting consultation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete consultation',
      error: error.message
    });
  }
};
