const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const productFields = {
  name: BaseSchema.createStringField(true, 50),
  Productdesc: BaseSchema.createStringField(false, 300),
  selectcategoryID: BaseSchema.createStringField(true, 50),
  selectQtypeID: BaseSchema.createStringField(true, 50),
  selectSubQuantityTypeID: BaseSchema.createStringField(true, 50),
  availablity: BaseSchema.createBooleanField(true),
  veg_nonveg: BaseSchema.createBooleanField(true),
  Status: BaseSchema.createBooleanField(true),
  employee_id: BaseSchema.createStringField(false, 50)
};

// Create the model using ModelFactory with new collection name
const Product = ModelFactory.createCompleteModel('Product', productFields, {}, 'products');

module.exports = Product.model; 