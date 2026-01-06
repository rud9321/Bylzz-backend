const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');
//KOT Running ITems
// Define schema fields using BaseSchema utilities
const KOTRunningOrderFields = {
    KOTrunningorders: {
    type: Object
  },
  RecieptNumber: BaseSchema.createStringField(true, 70),
  createdAt:Date,
  TableId: BaseSchema.createStringField(true, 70),
  EmployeeId:BaseSchema.createStringField(true, 70),
  KOTStatus:BaseSchema.createStringField(true, 20),
};

// Create the model using ModelFactory with new collection name
const KOTRunningOrder = ModelFactory.createCompleteModel('KOTRunningOrder', KOTRunningOrderFields, {}, 'KOTrunningorders');

module.exports = KOTRunningOrder.model;