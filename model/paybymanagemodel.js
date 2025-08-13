const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const payByManageFields = {
  Paybyname: BaseSchema.createStringField(true, 50),
  desc: BaseSchema.createStringField(false, 300)
};

// Create the model using ModelFactory with new collection name
const PayByManage = ModelFactory.createCompleteModel('PayByManage', payByManageFields, {}, 'paybymanages');

module.exports = PayByManage.model;