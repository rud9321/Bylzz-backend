const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const associateInventoryMainFoodWithProductFields = {
  ProductId: BaseSchema.createStringField(true, 300),
  ProductPrcieId: BaseSchema.createStringField(true, 300),
  ProductName: BaseSchema.createStringField(true, 300),
  SubQuantityTypeID: BaseSchema.createStringField(true, 300),
  SubQuantityTypeName: BaseSchema.createStringField(true, 300),
  goodscollections: {
    type: Object
  },
  employee_id: BaseSchema.createStringField(false, 50)
};

// Create the model using ModelFactory with new collection name
const AssociateInventoryMainFoodWithProduct = ModelFactory.createCompleteModel('AssociateInventoryMainFoodWithProduct', associateInventoryMainFoodWithProductFields, {}, 'associateinventorymainfoodwithproducts');

module.exports = AssociateInventoryMainFoodWithProduct.model;