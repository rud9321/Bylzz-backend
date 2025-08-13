
const SubQuantityType = require('../model/subQuantityTypeModel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const subQuantityTypeController = new BaseController(SubQuantityType);

exports.createTask = subQuantityTypeController.create.bind(subQuantityTypeController);

exports.getbTask = subQuantityTypeController.getAll.bind(subQuantityTypeController);

exports.deleteTasks = subQuantityTypeController.deleteOne.bind(subQuantityTypeController);

exports.getbyidTasks = subQuantityTypeController.getByParams.bind(subQuantityTypeController);

exports.getbyNameTasks = subQuantityTypeController.getByParams.bind(subQuantityTypeController);

exports.update = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData.basetype;
    
    if (!_id || !taskData.basetype) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await SubQuantityType.updateOne(
      { _id: _id }, 
      taskData.basetype
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Sub quantity type not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};