const CompanyProfile = require('../model/companyprofileModel');
const BaseController = require('../utils/baseController');
const ResponseHandler = require('../utils/responseHandler');

const companyProfileController = new BaseController(CompanyProfile);

exports.createTask = companyProfileController.create.bind(companyProfileController);

exports.getTasks = companyProfileController.getAll.bind(companyProfileController);

exports.getbyidTasks = companyProfileController.getByParams.bind(companyProfileController);

exports.deleteTasks = companyProfileController.deleteOne.bind(companyProfileController);

exports.updateTasks = async (req, res) => {
  try {
    const taskData = req.body;
    const { _id } = taskData.companyprofile;
    
    if (!_id || !taskData.companyprofile) {
      return ResponseHandler.badRequest(res, 'Missing id or update data');
    }
    
    const result = await CompanyProfile.updateOne(
      { _id: _id }, 
      taskData.companyprofile
    );
    
    if (result.matchedCount === 0) {
      return ResponseHandler.notFound(res, 'Company profile not found');
    }
    
    if (result.modifiedCount === 0) {
      return ResponseHandler.success(res, null, 'No changes made');
    }
    
    return ResponseHandler.updated(res, result);
  } catch (error) {
    return ResponseHandler.internalError(res, error);
  }
};