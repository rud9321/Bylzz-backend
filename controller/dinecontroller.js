const Dine = require('../model/dinemodel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const dineController = new BaseController(Dine);

exports.createTask = dineController.create.bind(dineController);

exports.getTasks = dineController.getAll.bind(dineController);

exports.getbyidTasks = dineController.getByParams.bind(dineController);

exports.deleteTasks = dineController.deleteOne.bind(dineController);

exports.updateTasks = async (req, res) => {
  console.log(req.body);
  try {
    const taskData = req.body;
    const { _id } = taskData.dine;
    
    if (!_id || !taskData.dine) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await Dine.updateOne(
      { _id: _id }, 
      taskData.dine
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Dine order not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};