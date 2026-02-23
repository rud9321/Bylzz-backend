
const Item = require('../model/itemmodel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const itemController = new BaseController(Item);

exports.createitemsTask = itemController.create.bind(itemController);

exports.getitemTask = itemController.getAll.bind(itemController);

exports.getiitembyidTasks = itemController.getByParams.bind(itemController);

exports.deleteItemsTasks = itemController.deleteOne.bind(itemController);

exports.updateitems = async (req, res) => {
 
  try {
    const taskData = req.body;
    const { _id } = taskData.items[0];
    // const { RecieptNumber } = taskData.items;
    // const { Productid } = taskData.items[0];
    // const { SubQuantityTypeName } = taskData.items[0];
    
    const result = await Item.updateOne(
      {
        _id:_id
       
      },
      taskData.items[0]
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Item not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, { Invoiceid });
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};
   