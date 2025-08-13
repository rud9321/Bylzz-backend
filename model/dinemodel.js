const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const dineFields = {
  name: BaseSchema.createStringField(true, 50),
  description: BaseSchema.createStringField(false, 300),
  status: BaseSchema.createBooleanField(true),
  floor_id: BaseSchema.createStringField(true, 300),
  employee_id: BaseSchema.createStringField(false, 50)
};

// Create the model using ModelFactory with new collection name
const Dine = ModelFactory.createCompleteModel('Dine', dineFields, {}, 'dines');

module.exports = Dine.model;