const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const productPriceFields = {
  ProductPrice: BaseSchema.createStringField(true, 50),
  SelectProductId: BaseSchema.createStringField(true, 300),
  selectcategoryID: BaseSchema.createStringField(true, 50),
  selectQtypeID: BaseSchema.createStringField(true, 50),
  selectSubQuantityTypeID: BaseSchema.createStringField(true, 50),
  employee_id: BaseSchema.createStringField(false, 50)
};

// Create the model using ModelFactory with new collection name
const ProductPrice = ModelFactory.createCompleteModel('ProductPrice', productPriceFields, {}, 'productprices');

module.exports = ProductPrice.model; 