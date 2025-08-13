const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const inventoryFoodMainFields = {
  name: BaseSchema.createStringField(true, 50),
  description: BaseSchema.createStringField(false, 300),
  quantitytypeID: BaseSchema.createStringField(false, 300),
  quantitytypename: BaseSchema.createStringField(false, 50),
  quantitytypevalue: BaseSchema.createNumberField(false),
  employee_id: BaseSchema.createStringField(false, 50)
};

// Create the model using ModelFactory with new collection name
const InventoryFoodMain = ModelFactory.createCompleteModel('InventoryFoodMain', inventoryFoodMainFields, {}, 'inventoryfoodmains');

module.exports = InventoryFoodMain.model;