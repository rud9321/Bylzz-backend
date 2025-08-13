const Chair = require('../model/chairmodel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const chairController = new BaseController(Chair);

exports.createTask = chairController.create.bind(chairController);

exports.getTasks = chairController.getAll.bind(chairController);

exports.deleteTasks = chairController.deleteOne.bind(chairController);

exports.getchairbyidTasks = chairController.getByParams.bind(chairController);

exports.getchairbytable_idTasks = chairController.getByParams.bind(chairController);

exports.updatechairstatusTasks = async (req, res) => {
  try {
    const _id = req.params._id;
    const chairorderstatus = req.params.chairorderstatus;
    
    if (!_id) {
      return ResponseHandler.badRequest(res, 'Missing id');
    }
    
    const result = await Chair.updateOne(
      { _id: _id }, 
      chairorderstatus
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Chair not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

exports.updateTasks = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData.chair;
    
    if (!_id || !taskData.chair) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await Chair.updateOne(
      { _id: _id }, 
      taskData.chair
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Chair not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

 