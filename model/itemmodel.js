const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const itemFields = {
  Productid: BaseSchema.createStringField(true, 100),
  Productname: BaseSchema.createStringField(true, 300),
  SubQuantityTypeID: BaseSchema.createStringField(true, 100),
  SubQuantityTypeName: BaseSchema.createStringField(true, 300),
  Invoiceid: BaseSchema.createStringField(true, 100),
  Qauntityid: BaseSchema.createStringField(true, 100),
  Qauntityname: BaseSchema.createStringField(true, 300),
  Quantity: BaseSchema.createNumberField(true),
  itemamount: BaseSchema.createNumberField(true),
  totalquantityamount: BaseSchema.createNumberField(true),
  employee_id: BaseSchema.createStringField(false, 50)
};

// Create the model using ModelFactory with new collection name
const Item = ModelFactory.createCompleteModel('Item', itemFields, {}, 'items');

module.exports = Item.model;