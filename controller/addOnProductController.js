
const addOnProduct = require('../model/addonProductModel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const addOnProductController = new BaseController(addOnProduct);

exports.createAddOnProductTask = addOnProductController.create.bind(addOnProductController);

exports.getAddOnProductTask = addOnProductController.getAll.bind(addOnProductController);

exports.deleteAddOnProductTasks = addOnProductController.deleteOne.bind(addOnProductController);

exports.getAddOnProductbyidTasks = addOnProductController.getByParams.bind(addOnProductController);

exports.getAddOnProductbybasetypeidTasks = addOnProductController.getByParams.bind(addOnProductController);

exports.getAddOnProductbyQtypeidTasks = addOnProductController.getByParams.bind(addOnProductController);

exports.getAddOnProductbyidTasks2 = addOnProductController.getByParams.bind(addOnProductController);

exports.getAddOnProductbyidTasks2 = async (req, res) => {
  console.log(req.params)
  try {
    // console.log(req.params);
    // const {SelectProductId, selectSubQuantityTypeID, selectQtypeID , selectcategoryID } = req.params;
    // console.log(SelectProductId);
    const item = await addOnProduct.find(req.params);
    
    if (!item) {
      return ResponseHandler.notFound(res, 'addOnProduct not found');
    }
    
    return ResponseHandler.success(res, item);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

exports.updateAddOnProduct = async (req, res) => {
 // console.log(req.body);
  try {
    const taskData = req.body;
    const { _id } = taskData.addOnProduct;
  //  console.log(taskData);
    if (!_id || !taskData.addOnProduct) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await addOnProduct.updateOne(
      { _id: _id }, 
      taskData.addOnProduct
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'addOnProduct not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

  