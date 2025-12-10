// KOTsUD UD stand for Update Delete

const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const KOTsUDFields = {
    KOTsUD: {
    type: Object
  },
  RecieptNumber: BaseSchema.createStringField(true, 70)
};

// Create the model using ModelFactory with new collection name
const KOTsUDsOrder = ModelFactory.createCompleteModel('KOTsUDsOrder', KOTsUDFields, {}, 'KOTsUDsorders');

module.exports = KOTsUDsOrder.model;