
const Qtype = require('../model/QtypeModel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const qtypeController = new BaseController(Qtype);

exports.createQtypeTask = qtypeController.create.bind(qtypeController);

exports.getQtypeTasks = qtypeController.getAll.bind(qtypeController);

exports.getByQuntityTypeName = qtypeController.getByParams.bind(qtypeController);

exports.getidTasks = qtypeController.getByParams.bind(qtypeController);

exports.deleteQtypeTasks = qtypeController.deleteOne.bind(qtypeController);

exports.updateQtype = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData.quantitytype;
    
    if (!_id || !taskData.quantitytype) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await Qtype.updateOne(
      { _id: _id }, 
      taskData.quantitytype
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Quantity type not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};