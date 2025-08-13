const InventoryMainFoodProduct = require('../model/assocciateInventoryMainFoodWithProduct');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const inventoryMainFoodProductController = new BaseController(InventoryMainFoodProduct);

exports.createTask = inventoryMainFoodProductController.create.bind(inventoryMainFoodProductController);

exports.getTasks = inventoryMainFoodProductController.getAll.bind(inventoryMainFoodProductController);

exports.deleteTasks = inventoryMainFoodProductController.deleteOne.bind(inventoryMainFoodProductController);

exports.getbyidTasks = async (req, res) => {
  try {
    const { ProductId, SubQuantityTypeID } = req.params;
    const item = await InventoryMainFoodProduct.findOne(req.params);
    
    if (!item) {
      return ResponseHandler.notFound(res, 'Inventory food with product not found');
    }
    
    return ResponseHandler.success(res, item);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

exports.updateTasks = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData._InventoryFoodwithProduct;
    
    if (!_id || !taskData._InventoryFoodwithProduct) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await InventoryMainFoodProduct.updateOne(
      { _id: _id }, 
      taskData._InventoryFoodwithProduct
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Inventory food with product not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};