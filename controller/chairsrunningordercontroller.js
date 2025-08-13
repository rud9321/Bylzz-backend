
const ChairsRunningOrder = require('../model/tablerunningordermodel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const chairsRunningOrderController = new BaseController(ChairsRunningOrder);

exports.createchairsrunningorderTask = chairsRunningOrderController.create.bind(chairsRunningOrderController);

exports.getcreatechairsrunningorderTask = chairsRunningOrderController.getAll.bind(chairsRunningOrderController);

exports.deletechairsrunningordereTasks = chairsRunningOrderController.deleteOne.bind(chairsRunningOrderController);

exports.getcreatechairsrunningorderbyidTasks = chairsRunningOrderController.getByParams.bind(chairsRunningOrderController);

exports.getcreatechairsrunningorderbydateTasks2 = async (req, res) => {
  try {
    const { createdAt } = req.params;
    
    const results = await ChairsRunningOrder.find({
      createdAt: { createdAt }
    });
    
    return ResponseHandler.success(res, results);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

 

  exports.getcreatechairsrunningorderTasks = async (req, res) => {
  //  console.log(req);
  //  console.log(req.body);
   // console.log(req.params);
  //   try {  
      
  //     // const {createdAt} =  req.body;
  //     // console.log(createdAt);
  //     // const data =  await invoicemodelTask.find({
  //     //     createdAt: { $lte: createdAt }
  //     //   });   
  //     //   console.log(data) 
  //     //   res.json(data);
  //     console.log(req.params)
  //     invoicemodelTask.find($lte,req.params)
  //   .then((allTasks) => {
  //     res.status(200)
  //       .json({
  //         success: true,
  //         allTasks
  //       })
  //    //   invoicemodelTask.find(req.params)
  //     // .then((allTasks) => {
  //     //   res.status(200)
  //     //     .json({                                                               
  //     //       success: true,
  //     //       allTasks
  //     //     })
  //      })
  //     .catch((error) => {
  //       res.status(404)
  //         .json({
  //           success: false,
  //           message: "Cant fined ",
  //           error
  //         })
  //     })
  // } catch (error) {
  //   res.status(500)
  //     .json({
  //       success: false,
  //       message: "Internal server error",
  //       error: error.message
  //     })
  // }
     
   }
  
  