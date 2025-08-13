
const Product = require('../model/productmodel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const productController = new BaseController(Product);

exports.createproductTask = productController.create.bind(productController);

exports.getproductTask = productController.getAll.bind(productController);

exports.deleteproductTasks = productController.deleteOne.bind(productController);

exports.getproductbyidTasks = productController.getByParams.bind(productController);

exports.getproductbyProductNameTasks2 = productController.getByParams.bind(productController);

exports.getproductbyidTasks2 = productController.getByParams.bind(productController);

exports.updateproduct = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData.product;
    
    if (!_id || !taskData) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await Product.updateOne(
      { _id: _id }, 
      taskData.product
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Product not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};