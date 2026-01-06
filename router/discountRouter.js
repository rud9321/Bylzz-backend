const express = require('express');
const discountController = require('../controller/discountController');

const discountRouter = express.Router();

discountRouter.post('/', discountController.createDiscount);
discountRouter.get('/', discountController.getAllDiscounts);
discountRouter.get('/:id', discountController.getDiscountById);
discountRouter.put('/:id', discountController.updateDiscount);
discountRouter.delete('/:id', discountController.deleteDiscount);

module.exports = discountRouter;
