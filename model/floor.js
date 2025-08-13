const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const floorFields = {
  name: BaseSchema.createStringField(true, 50),
  description: BaseSchema.createStringField(false, 300),
  status: BaseSchema.createBooleanField(true)
};

// Create the model using ModelFactory with new collection name
const Floor = ModelFactory.createCompleteModel('Floor', floorFields, {}, 'floors');

module.exports = Floor.model;