const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const taxFields = {
  name: BaseSchema.createStringField(false, 50),
  Description: BaseSchema.createStringField(false, 300),
  perscentRate: BaseSchema.createNumberField(true),
  Status: BaseSchema.createBooleanField(true)
};

// Create the model using ModelFactory with new collection name
const Tax = ModelFactory.createCompleteModel('Tax', taxFields, {}, 'taxes');

module.exports = Tax.model; 