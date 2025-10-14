
const Customer = require('../model/customers');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const customerController = new BaseController(Customer);
const customersByMobileNumberController = new  BaseController(Customer);

exports.createcustomersTask = customerController.create.bind(customerController);

exports.getcustomersTask = customerController.getAll.bind(customerController);

exports.deletecustomersTasks = customerController.deleteOne.bind(customerController);

exports.getcustomersbyidTasks = customerController.getByParams.bind(customerController);

exports.getcustomersbyidMobileNumber = customersByMobileNumberController.getByMobileNumber.bind(customerController);

// exports.getcustomersbyidMobileNumber = async (req, res) => {
//   console.log(req.params);
//   try {
//     const { MobileNo } = req.params;
    
//     const customer = await Customer.findOne(req.params);
    
//     if (!customer) {
//       return ResponseHandler.notFound(res, 'Customer not found');
//     }
    
//     return ResponseHandler.success(res, customer);
//   } catch (error) {
//     return ResponseHandler.internalError(res, error);
//   }
// };

exports.updatecustomers = async (req, res) => {
  console.log(req.body);
  try {
    const taskData = req.body;
    const { _id } = taskData.customer;
    
    if (!_id || !taskData.customer) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await Customer.updateOne(
      { _id: _id }, 
      taskData.customer
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Customer not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};