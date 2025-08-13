const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const categoryFields = {
  name: BaseSchema.createStringField(true, 50),
  categorydesc: BaseSchema.createStringField(false, 300)
};

// Create the model using ModelFactory with new collection name
const Category = ModelFactory.createCompleteModel('Category', categoryFields, {}, 'categories');

module.exports = Category.model;