const router = require("express").Router();
const paymentController = require('../controller/paymentController');

// Standard CRUD routes
router
  .post('/', paymentController.createPayment)
  .get('/', paymentController.getAllPayments)
  .get('/:id', paymentController.getPaymentById)
  .put('/:id', paymentController.updatePayment)
  .delete('/:id', paymentController.deletePayment);

// Get payment by RecieptNumber
router.get('/receipt/:RecieptNumber', paymentController.getPaymentByRecieptNumber);

module.exports = router;
