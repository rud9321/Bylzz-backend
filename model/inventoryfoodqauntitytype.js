const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const inventoryFoodQuantityTypeFields = {
  name: BaseSchema.createStringField(true, 50),
  description: BaseSchema.createStringField(false, 300)
};

// Create the model using ModelFactory with new collection name
const InventoryFoodQuantityType = ModelFactory.createCompleteModel('InventoryFoodQuantityType', inventoryFoodQuantityTypeFields, {}, 'inventoryfoodquantitytypes');

module.exports = InventoryFoodQuantityType.model;