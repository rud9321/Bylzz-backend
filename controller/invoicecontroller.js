
const Invoice = require('../model/invoicemodel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const invoiceController = new BaseController(Invoice);

exports.createinvoiceTask = invoiceController.create.bind(invoiceController);

exports.getinvoiceTask = invoiceController.getAll.bind(invoiceController);

exports.getinvoicebyidTasks = invoiceController.getByParams.bind(invoiceController);

exports.updateinvoice = async (req, res) => {
  
  try {
    const taskData = req.body;
    const { RecieptNumber } = taskData.invoice;
    
    if (!RecieptNumber || !taskData.invoice) {
      return ResponseHandler.badRequest(res, 'Missing receipt number or update data');
    }
    
    const result = await Invoice.updateOne(
      { RecieptNumber: RecieptNumber }, 
      taskData.invoice
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Invoice not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

exports.getinvoicebydateTasks3 = async (req, res) => {
  try {
    const { startdate, enddate } = req.params;
    
    const results = await Invoice.find({
      createdAt: { 
        $gte: new Date(startdate), 
        $lte: new Date(enddate) 
      }
    });
    
    return ResponseHandler.success(res, results);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

exports.getinvoicebydateTasks2 = async (req, res) => {
  try {
    const { createdAt } = req.params;
    const splittime = createdAt.split('T');
    const addzerotime = splittime[0] + 'T00:00:00.000+00:00';
    const add24time = splittime[0] + 'T23:59:59.000+00:00';
    
    const results = await Invoice.find({
      createdAt: { 
        $gte: new Date(addzerotime), 
        $lte: new Date(add24time) 
      }
    });
    
    return ResponseHandler.success(res, results);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

  