const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const subQuantityTypeFields = {
  name: BaseSchema.createStringField(true, 50),
  description: BaseSchema.createStringField(false, 300),
  selectQtypeID: BaseSchema.createStringField(true, 50)
};

// Create the model using ModelFactory with new collection name
const SubQuantityType = ModelFactory.createCompleteModel('SubQuantityType', subQuantityTypeFields, {}, 'subquantitytypes');

module.exports = SubQuantityType.model; 