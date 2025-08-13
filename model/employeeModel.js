const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const employeeFields = {
  role: BaseSchema.createStringField(true, 50),
  type: BaseSchema.createStringField(true, 50),
  status: BaseSchema.createBooleanField(true),
  managepermission: BaseSchema.createBooleanField(false),
  title: BaseSchema.createStringField(false, 50),
  desc: BaseSchema.createStringField(false, 300),
  userId: BaseSchema.createStringField(false, 50),
  password: BaseSchema.createStringField(false, 15),
  employee_id: BaseSchema.createStringField(false, 50)
};

// Create the model using ModelFactory with new collection name
const Employee = ModelFactory.createCompleteModel('Employee', employeeFields, {}, 'employees');

module.exports = Employee.model; 