const InventoryFoodMain = require('../model/InventoryFoodMain');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const inventoryFoodMainController = new BaseController(InventoryFoodMain);

exports.createTask = inventoryFoodMainController.create.bind(inventoryFoodMainController);

exports.getTasks = inventoryFoodMainController.getAll.bind(inventoryFoodMainController);

exports.getbyidTasks = inventoryFoodMainController.getByParams.bind(inventoryFoodMainController);

exports.deleteTasks = inventoryFoodMainController.deleteOne.bind(inventoryFoodMainController);

exports.updateTasks = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData._InventoryFoodMain;
    
    if (!_id || !taskData._InventoryFoodMain) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await InventoryFoodMain.updateOne(
      { _id: _id }, 
      taskData._InventoryFoodMain
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Inventory food main not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};