


const KOTrunningOrder = require('../model/KOTrunningModel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const KOTrunningController = new BaseController(KOTrunningOrder);

exports.createKOTrunningOrderTask = KOTrunningController.create.bind(KOTrunningController);

exports.getcreateKOTrunningOrderTask = KOTrunningController.getAll.bind(KOTrunningController);

exports.deleteKOTrunningOrdereTasks = KOTrunningController.deleteOne.bind(KOTrunningController);

exports.getcreateKOTrunningOrderbyidTasks = KOTrunningController.getByParams.bind(KOTrunningController);

exports.getKOTrunningOrderbyRecieptTasks = async (req, res) => {
  try {
    const { receiptnumber } = req.params;
    
    const results = await KOTrunningOrder.find({
      receiptnumber: { receiptnumber }
    });
    
    return ResponseHandler.success(res, results);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

 

  