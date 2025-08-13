const InventoryFoodQuantityType = require('../model/inventoryfoodqauntitytype');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const inventoryFoodQuantityTypeController = new BaseController(InventoryFoodQuantityType);

exports.createTask = inventoryFoodQuantityTypeController.create.bind(inventoryFoodQuantityTypeController);

exports.getTasks = inventoryFoodQuantityTypeController.getAll.bind(inventoryFoodQuantityTypeController);

exports.deleteTasks = inventoryFoodQuantityTypeController.deleteOne.bind(inventoryFoodQuantityTypeController);

exports.updateTasks = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData._InventoryFoodQuantityType;
    
    if (!_id || !taskData._InventoryFoodQuantityType) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await InventoryFoodQuantityType.updateOne(
      { _id: _id }, 
      taskData._InventoryFoodQuantityType
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Inventory food quantity type not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};