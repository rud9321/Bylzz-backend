
const Payment = require('../model/paymentModel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const PaymentController = new BaseController(Payment);

// Standard CRUD operations via BaseController
exports.createPayment = PaymentController.create.bind(PaymentController);
exports.getAllPayments = PaymentController.getAll.bind(PaymentController);
exports.getPaymentById = PaymentController.getById.bind(PaymentController);
exports.updatePayment = PaymentController.update.bind(PaymentController);
exports.deletePayment = PaymentController.deleteOne.bind(PaymentController);

// Get payments by RecieptNumber
exports.getPaymentByRecieptNumber = async (req, res) => {
  try {
    const { RecieptNumber } = req.params;
    if (!RecieptNumber) {
      return ResponseHandler.badRequest(res, 'RecieptNumber is required');
    }
    const payment = await Payment.findOne({ RecieptNumber });
    if (!payment) {
      return ResponseHandler.notFound(res, 'Payment not found');
    }
    return ResponseHandler.success(res, payment, 'Payment fetched successfully');
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

