
const ProductPrice = require('../model/productPriceModel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const productPriceController = new BaseController(ProductPrice);

exports.createppTask = productPriceController.create.bind(productPriceController);

exports.getppTask = productPriceController.getAll.bind(productPriceController);

exports.deleteppTasks = productPriceController.deleteOne.bind(productPriceController);

exports.getppbyidTasks = productPriceController.getByParams.bind(productPriceController);

exports.getppbybasetypeidTasks = productPriceController.getByParams.bind(productPriceController);

exports.getppbyQtypeidTasks = productPriceController.getByParams.bind(productPriceController);

exports.getproductbyidTasks2 = productPriceController.getByParams.bind(productPriceController);

exports.getProductPriceByShortcode = productPriceController.getByParams.bind(productPriceController);

exports.getppbyidTasks2 = async (req, res) => {
  try {
    // console.log(req.params);
    // const {SelectProductId, selectSubQuantityTypeID, selectQtypeID , selectcategoryID } = req.params;
    // console.log(SelectProductId);
    const item = await ProductPrice.find({
      // $and: [
      //   { SelectProductId: SelectProductId },
      //   { selectSubQuantityTypeID: selectSubQuantityTypeID },
      //   { selectQtypeID: selectQtypeID },
      //   { selectcategoryID: selectcategoryID }       
        
      // ]
      $and: [req.params]
    });
    
    if (!item) {
      return ResponseHandler.notFound(res, 'Product price not found');
    }
    
    return ResponseHandler.success(res, item);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

exports.updatepp = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData.productprice;
    
    if (!_id || !taskData.productprice) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await ProductPrice.updateOne(
      { _id: _id }, 
      taskData.productprice
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Product price not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};

  