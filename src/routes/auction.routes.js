const express = require('express');
const router = express.Router();
const {
  createAuction,
  getAuctions,
  getAuction,
  updateAuction,
  deleteAuction
} = require('../controllers/auction.controller');

// All routes
router.get('/', getAuctions);
router.get('/:id', getAuction);
router.post('/', createAuction);
router.put('/:id', updateAuction);
router.delete('/:id', deleteAuction);

module.exports = router; 