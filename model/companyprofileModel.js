const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields using BaseSchema utilities
const companyProfileFields = {
  name: BaseSchema.createStringField(true, 300),
  tilte: BaseSchema.createStringField(false, 100),
  desc: BaseSchema.createStringField(false, 500),
  GSTNumber: BaseSchema.createStringField(false, 50),
  turnover: BaseSchema.createStringField(false, 50),
  address: BaseSchema.createStringField(false, 500),
  mobilenumber: BaseSchema.createStringField(false, 20),
  mobilenumber2: BaseSchema.createStringField(false, 20),
  customercarenumber: BaseSchema.createStringField(false, 20),
  maplocation1: BaseSchema.createStringField(false, 100),
  maplocation2: BaseSchema.createStringField(false, 100),
  telephonenumber: BaseSchema.createStringField(false, 20),
  companyId: BaseSchema.createStringField(false, 100),
  companyphoto: BaseSchema.createStringField(false, 150),
  websitelink: BaseSchema.createStringField(false, 100),
  logo: BaseSchema.createStringField(false, 500),
  employee_id: BaseSchema.createStringField(false, 50)
};

// Create the model using ModelFactory with new collection name
const CompanyProfile = ModelFactory.createCompleteModel('CompanyProfile', companyProfileFields, {}, 'companyprofiles');

module.exports = CompanyProfile.model; 