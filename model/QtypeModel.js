const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const qtypeFields = {
  name: BaseSchema.createStringField(true, 50),
  Desc: BaseSchema.createStringField(false, 300)
};

// Create the model using ModelFactory with new collection name
const Qtype = ModelFactory.createCompleteModel('Qtype', qtypeFields, {}, 'qtypes');

module.exports = Qtype.model; 