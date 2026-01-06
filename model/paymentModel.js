const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields for the payment model
const paymentFields = {
  paymentId: BaseSchema.createStringField(true, 100),
  RecieptNumber: BaseSchema.createStringField(true, 70),
  orderId: BaseSchema.createStringField(false, 100),
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: BaseSchema.createStringField(true, 50), // e.g., "cash", "card", "UPI"
  paymentStatus: BaseSchema.createStringField(true, 30), // e.g., "paid", "pending"
  transactionId: BaseSchema.createStringField(false, 100),
  paymentDate: {
    type: Date,
    default: Date.now,
  },
  customerId: BaseSchema.createStringField(false, 100),
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  }
};

// Create the Payment model using ModelFactory
const Payment = ModelFactory.createCompleteModel('Payment', paymentFields, {}, 'payments');

module.exports = Payment.model;
