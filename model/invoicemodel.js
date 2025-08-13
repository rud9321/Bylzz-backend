const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const invoiceFields = {
  Taxes: {
    type: Object
  },
  Chairs: {
    type: Object
  },
  DiscountId: BaseSchema.createStringField(false, 50),
  Discountvalue: BaseSchema.createNumberField(false),
  Discountperstage: BaseSchema.createNumberField(false),
  AdditionaldiscountAmount: BaseSchema.createNumberField(false),
  Totalvaue: BaseSchema.createNumberField(false),
  grandtotal: BaseSchema.createNumberField(false),
  RecieptNumber: BaseSchema.createNumberField(false),
  PendingAmount: BaseSchema.createNumberField(false),
  PaidAmount: BaseSchema.createNumberField(false),
  returnAmount: BaseSchema.createNumberField(false),
  AmountPaidstatus: BaseSchema.createBooleanField(false),
  Orderstatus: BaseSchema.createStringField(false, 10),
  TotalTaxAmount: BaseSchema.createNumberField(false),
  TotalItemsAmount: BaseSchema.createNumberField(false),
  OrderTypeName: BaseSchema.createStringField(false, 50),
  paybyId: BaseSchema.createStringField(false, 50),
  table_id: BaseSchema.createStringField(false, 50),
  customer_id: BaseSchema.createStringField(false, 50),
  employee_id: BaseSchema.createStringField(false, 50),
  AssistToId: BaseSchema.createStringField(false, 50),
  CommentId: BaseSchema.createStringField(false, 50),
  tablename: BaseSchema.createStringField(false, 50),
  tokennumber: BaseSchema.createNumberField(false)
};

// Create the model using ModelFactory with new collection name
const Invoice = ModelFactory.createCompleteModel('Invoice', invoiceFields, {}, 'invoices');

module.exports = Invoice.model; 