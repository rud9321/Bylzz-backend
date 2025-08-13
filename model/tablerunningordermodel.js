const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const tableRunningOrderFields = {
  Chairsrunningorder: {
    type: Object
  },
  tablename: BaseSchema.createStringField(false, 50),
  tokennumber: BaseSchema.createNumberField(false)
};

// Create the model using ModelFactory with new collection name
const TableRunningOrder = ModelFactory.createCompleteModel('TableRunningOrder', tableRunningOrderFields, {}, 'tablerunningorders');

module.exports = TableRunningOrder.model;