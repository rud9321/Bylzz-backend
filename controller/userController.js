const User = require('../model/User');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const userController = new BaseController(User);

exports.createTask = userController.create.bind(userController);

exports.getTasks = userController.getAll.bind(userController);

exports.getbyidTasks = userController.getByParams.bind(userController);

exports.deleteTasks = userController.deleteOne.bind(userController);

exports.updateTasks = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData.User;
    
    if (!_id || !taskData.User) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await User.updateOne(
      { _id: _id }, 
      taskData.User
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'User not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};