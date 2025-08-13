
const Customer = require('../model/customers');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const customerController = new BaseController(Customer);

exports.createcustomersTask = customerController.create.bind(customerController);

exports.getcustomersTask = customerController.getAll.bind(customerController);

exports.deletecustomersTasks = customerController.deleteOne.bind(customerController);

exports.getcustomersbyidTasks = customerController.getByParams.bind(customerController);

exports.getcustomersbyidTasks2 = async (req, res) => {
  try {
    const { _id } = req.params;
    const customer = await Customer.findOne({
      $and: [
        { _id: _id }
      ]
    });
    
    if (!customer) {
      return ResponseHandler.notFound(res, 'Customer not found');
    }
    
    return ResponseHandler.success(res, customer);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

exports.updatecustomers = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData.cutomer;
    
    if (!_id || !taskData) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await Customer.updateOne(
      { _id: _id }, 
      taskData.cutomer
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