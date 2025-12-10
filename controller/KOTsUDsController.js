


const KOTsUDs = require('../model/KOTsUDsModel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const KOTsUDsController = new BaseController(KOTsUDs);

exports.createKOTsUDsTask = KOTsUDsController.create.bind(KOTsUDsController);

exports.getcreateKOTsUDsTask = KOTsUDsController.getAll.bind(KOTsUDsController);

exports.deleteKOTsUDseTasks = KOTsUDsController.deleteOne.bind(KOTsUDsController);

exports.getcreateKOTsUDsbyidTasks = KOTsUDsController.getByParams.bind(KOTsUDsController);

exports.getKOTsUDsbyRecieptTasks = async (req, res) => {
  try {
    const { receiptnumber } = req.params;
    
    const results = await KOTsUDs.find({
      receiptnumber: { receiptnumber }
    });
    
    return ResponseHandler.success(res, results);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

 

  