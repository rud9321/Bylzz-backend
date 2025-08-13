const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const reservedTableFields = {
  TableId: BaseSchema.createStringField(false, 100),
  DateTimeStart: BaseSchema.createStringField(false),
  DateTimeEnd: BaseSchema.createStringField(false),
  CustomerId: BaseSchema.createStringField(false, 100),
  Name: BaseSchema.createStringField(false, 50),
  MobileNo: BaseSchema.createStringField(false, 20),
  TableName: BaseSchema.createStringField(false, 200),
  BookingAmount: BaseSchema.createNumberField(false),
  Paymentstatus: BaseSchema.createBooleanField(false),
  Bookingstatus: BaseSchema.createBooleanField(false),
  RecieptNumber: BaseSchema.createStringField(false, 50),
  employee_id: BaseSchema.createStringField(false, 50)
};

// Create the model using ModelFactory with new collection name
const ReservedTable = ModelFactory.createCompleteModel('ReservedTable', reservedTableFields, {}, 'reservedtables');

module.exports = ReservedTable.model;