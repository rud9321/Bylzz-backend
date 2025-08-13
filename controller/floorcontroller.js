const Floor = require('../model/floor');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const floorController = new BaseController(Floor);

exports.createTask = floorController.create.bind(floorController);

exports.getTasks = floorController.getAll.bind(floorController);

exports.deleteTasks = floorController.deleteOne.bind(floorController);

exports.updateTasks = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData.floor;
    
    if (!_id || !taskData.floor) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await Floor.updateOne(
      { _id: _id }, 
      taskData.floor
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Floor not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};