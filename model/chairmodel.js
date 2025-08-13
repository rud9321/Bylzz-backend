const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const chairFields = {
  description: BaseSchema.createStringField(false, 300),
  status: BaseSchema.createBooleanField(false),
  table_id: BaseSchema.createStringField(false, 300),
  chairorderstatus: BaseSchema.createStringField(false, 5)
};

// Create the model using ModelFactory with new collection name
const Chair = ModelFactory.createCompleteModel('Chair', chairFields, {}, 'chairs');

module.exports = Chair.model;