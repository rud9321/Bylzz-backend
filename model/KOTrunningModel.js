const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const KOTRunningOrderFields = {
    KOTrunningorders: {
    type: Object
  },
  RecieptNumber: BaseSchema.createStringField(true, 70)
};

// Create the model using ModelFactory with new collection name
const KOTRunningOrder = ModelFactory.createCompleteModel('KOTRunningOrder', KOTRunningOrderFields, {}, 'KOTrunningorders');

module.exports = KOTRunningOrder.model;