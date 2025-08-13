const Category = require('../model/categoerymodel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const categoryController = new BaseController(Category);

exports.createTask = categoryController.create.bind(categoryController);

exports.getTasks = categoryController.getAll.bind(categoryController);

exports.getCategoryName = categoryController.getByParams.bind(categoryController);

exports.deleteTasks = categoryController.deleteOne.bind(categoryController);

exports.updateTasks = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData.productcategory;
    
    if (!_id || !taskData.productcategory) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await Category.updateOne(
      { _id: _id }, 
      taskData.productcategory
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Category not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};