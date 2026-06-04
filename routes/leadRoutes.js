const express = require('express');
const {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
  getLeadStats,
} = require('../controllers/leadController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, createLead)
  .get(protect, getLeads);

router.route('/stats').get(protect, getLeadStats);

router.route('/:id')
  .put(protect, updateLead)
  .delete(protect, deleteLead);

module.exports = router;
