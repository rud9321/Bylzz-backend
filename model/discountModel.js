const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define the fields for the Discount schema
const discountFields = {
  DiscountTag:        BaseSchema.createStringField(false, 50),
  DiscountName:       BaseSchema.createStringField(false, 50),
  DiscountType:       BaseSchema.createStringField(false, 50),
  DiscountAmount:     BaseSchema.createNumberField(false),
  DiscountPercent:    BaseSchema.createNumberField(false),
  DiscountCode:       BaseSchema.createStringField(true, 30),
  Description:        BaseSchema.createStringField(true, 200),
  Active:             BaseSchema.createBooleanField(false),
  StartDate:          BaseSchema.createStringField(false),
  EndDate:            BaseSchema.createStringField(false)
};

// Create and export the Discount model
module.exports = ModelFactory.createCompleteModel(
  'Discount',
  discountFields,
  {},
  'discounts'
).model;
