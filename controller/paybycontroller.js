const PayBy = require('../model/paybymanagemodel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const payByController = new BaseController(PayBy);

exports.createTask = payByController.create.bind(payByController);

exports.getTasks = payByController.getAll.bind(payByController);

exports.deleteTasks = payByController.deleteOne.bind(payByController);

exports.updateByPayByIdTask = async (req, res) => {
  try {
    const { _id } = req.body;

    let result;
    if (_id) {
      // No _id provided: unset makeMeDefault for all
      await PayBy.updateMany({}, { $set: { makeMeDefault: false } });
    result = await PayBy.updateOne({ _id }, { $set: { makeMeDefault: true } });
    }

    // _id provided: unset makeMeDefault for all, then set for target _id
   

    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'PayBy document not found');
    }
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};


exports.updateTasks = async (req, res) => {
  try {
    const taskData = req.body;

    const { _id } = taskData.paybymanage;
    
    if (!_id || !taskData.paybymanage) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await PayBy.updateOne(
      { _id: _id }, 
      taskData.paybymanage
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'PayBy method not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};