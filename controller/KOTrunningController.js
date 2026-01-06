


const KOTrunningOrder = require('../model/KOTrunningModel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const KOTrunningController = new BaseController(KOTrunningOrder);

exports.createKOTrunningOrderTask = KOTrunningController.create.bind(KOTrunningController);

exports.getcreateKOTrunningOrderTask = KOTrunningController.getAll.bind(KOTrunningController);

exports.deleteKOTrunningOrdereTasks = KOTrunningController.deleteOne.bind(KOTrunningController);

exports.getcreateKOTrunningOrderbyidTasks = KOTrunningController.getByParams.bind(KOTrunningController);

exports.updateKOTrunningOrder = async (req, res) => {
  console.log(req.body);
  try {
    const taskData = req.body;
    // Assuming taskData contains key fields to match the record to update
    // and the updated fields to set in the record

    // You may need to adjust the following fields according to your schema
    const { RecieptNumber } = taskData.GenratedItemKOT;

    if (!RecieptNumber) { 
      return ResponseHandler.badRequest(res, 'RecieptNumber is required');
    }

    const result = await KOTrunningOrder.updateOne(
      { RecieptNumber: RecieptNumber },
      taskData.GenratedItemKOT
    );

    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'KOTrunningOrder not found');
    }

    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }

    return ResponseHandler.updated(res, { RecieptNumber });
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

exports.getKOTrunningOrderbyRecieptTasks = async (req, res) => {
  try {
    const { RecieptNumber } = req.params;
    
    const results = await KOTrunningOrder.find({
      RecieptNumber: { RecieptNumber }
    });
    
    return ResponseHandler.success(res, results);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

 

  