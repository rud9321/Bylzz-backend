const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const AddOnProductFields = {
    name:BaseSchema.createStringField(true, 50),
    description: BaseSchema.createStringField(false, 300),
  Price: BaseSchema.createStringField(true, 50),
  SelectProductId: BaseSchema.createStringField(true, 300),
  SubQuantityTypeID: BaseSchema.createStringField(true, 300),
  employee_id: BaseSchema.createStringField(false, 50)
};

// Create the model using ModelFactory with new collection name
const AddOnProduct = ModelFactory.createCompleteModel('AddOnProduct', AddOnProductFields, {}, 'AddOnProducts');

module.exports = AddOnProduct.model; 