
const ReserveDine = require('../model/reservedtablemodel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const reserveDineController = new BaseController(ReserveDine);

exports.createreserveDineTask = reserveDineController.create.bind(reserveDineController);

exports.getreservedineTask = reserveDineController.getAll.bind(reserveDineController);

exports.deletereservedineTasks = reserveDineController.deleteOne.bind(reserveDineController);

exports.getreservedinebyidTasks = reserveDineController.getByParams.bind(reserveDineController);

exports.getreservedinebyidTasks2 = async (req, res) => {
  try {
    const { _id } = req.params;
    const item = await ReserveDine.findOne({
      $and: [
        { _id: _id }
      ]
    });
    
    if (!item) {
      return ResponseHandler.notFound(res, 'Reserve dine not found');
    }
    
    return ResponseHandler.success(res, item);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

exports.getreservedinebyStartTimeAndEndTimeTasks = async (req, res) => {
  try {
    const { DateTimeStart, DateTimeEnd } = req.params;
    
    const items = await ReserveDine.find({
      $gt: [
        { DateTimeStart: DateTimeStart }
      ],
      $lt: [
        { DateTimeEnd: DateTimeEnd }
      ]
    });
    
    return ResponseHandler.success(res, items);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

exports.updatereservedine = async (req, res) => {
  // const taskData = req.body;
  //   const { _id } = taskData;
  //   console.log(taskData);
  try {
    
    const taskData = req.body;
    const { _id } = taskData;
   
    if (!_id || !taskData) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await ReserveDine.updateOne(
      { _id: _id }, 
      taskData
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Reserve dine not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};