const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const userFields = {
  id: BaseSchema.createStringField(false, 50),
  firstName: BaseSchema.createStringField(false, 50),
  lastName: BaseSchema.createStringField(false, 50),
  username: BaseSchema.createStringField(false, 50),
  password: BaseSchema.createStringField(false, 50)
};

// Create the model using ModelFactory with new collection name
const User = ModelFactory.createCompleteModel('User', userFields, {}, 'users');

module.exports = User.model; 