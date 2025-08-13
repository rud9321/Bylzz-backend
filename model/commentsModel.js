const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const commentFields = {
  RecieptNumber: BaseSchema.createStringField(true, 50),
  Comment: BaseSchema.createStringField(false, 300)
};

// Create the model using ModelFactory with new collection name
const Comment = ModelFactory.createCompleteModel('Comment', commentFields, {}, 'comments');

module.exports = Comment.model; 