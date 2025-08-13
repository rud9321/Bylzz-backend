const Employee = require('../model/employeeModel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const employeeController = new BaseController(Employee);

exports.createTask = employeeController.create.bind(employeeController);

exports.getTasks = employeeController.getAll.bind(employeeController);

exports.getbyidTasks = employeeController.getByParams.bind(employeeController);

exports.deleteTasks = employeeController.deleteOne.bind(employeeController);

exports.updateTasks = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData.employee;
    
    if (!_id || !taskData.employee) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await Employee.updateOne(
      { _id: _id }, 
      taskData.employee
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Employee not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};