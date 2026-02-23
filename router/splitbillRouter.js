const express = require('express');
const router = express.Router();
const splitbillController = require('../controller/splitbillController');

// Create a new split bill
router.post('/', splitbillController.createSplitBill);

// Get all split bills
router.get('/', splitbillController.getAllSplitBills);

// Get a split bill by ID
router.get('/:id', splitbillController.getSplitBillById);

// Update a split bill by ID
router.put('/:id', splitbillController.updateSplitBill);

// Delete a split bill by ID
router.delete('/:id', splitbillController.deleteSplitBill);

module.exports = router;
