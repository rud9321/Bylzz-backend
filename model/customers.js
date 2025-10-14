const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const customerFields = {
  name: BaseSchema.createStringField(false, 50),
  MobileNo: BaseSchema.createStringField(false, 20),
  DOB: BaseSchema.createStringField(false, 20),
  tag: BaseSchema.createStringField(false, 20),
  DueAmount: BaseSchema.createNumberField(false),
  Anniversary: BaseSchema.createStringField(false, 50),
  Paymentstatus: BaseSchema.createNumberField(false),
  RecieptNumber: BaseSchema.createNumberField(false),
  employee_id: BaseSchema.createStringField(false, 50)
};

// Create the model using ModelFactory with new collection name
const Customer = ModelFactory.createCompleteModel('Customer', customerFields, {}, 'customers');

module.exports = Customer.model; 