
const Tax = require('../model/taxmodel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const taxController = new BaseController(Tax);

exports.createtaxTask = taxController.create.bind(taxController);

exports.gettaxTask = taxController.getAll.bind(taxController);

exports.deletetaxTasks = taxController.deleteOne.bind(taxController);

exports.gettaxbyidTasks = taxController.getByParams.bind(taxController);

exports.updatetax = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData.Tax;
    
    if (!_id || !taskData) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await Tax.updateOne(
      { _id: _id }, 
      taskData.Tax
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Tax not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};