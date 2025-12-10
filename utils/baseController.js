const ResponseHandler = require('./responseHandler');

class BaseController {
  constructor(model) {
    this.model = model;
  }

  async create(req, res) {
    console.log(req.body);
    try {
      const data = req.body;
      console.log(data);
      const createdItem = await this.model.create(data);
      console.log(createdItem);
      if (!createdItem) {
        return ResponseHandler.notFound(res, 'Creation failed');
      }
      
      return ResponseHandler.created(res, createdItem);
    } catch (error) {
       return ResponseHandler.internalError(res, error);
     // console.error( error);
    }
  }

  async getAll(req, res) {
    try {
      const items = await this.model.find();
      return ResponseHandler.success(res, items);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }

  async getById(req, res) {
    try {
      const item = await this.model.findById(req.params.id);
      
      if (!item) {
        return ResponseHandler.notFound(res, 'Item not found');
      }
      
      return ResponseHandler.success(res, item);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }
async getByMobileNumber(req, res)
{
  console.log(req.params);
  try{
    const item = await this.model.find(req.params);
      
    if (!item) {
      return ResponseHandler.notFound(res, 'Item not found');
    }
    
    return ResponseHandler.success(res, item);
  }
  catch(error)
  {
    return ResponseHandler.internalError(res, error);
  }
}

  async getByParams(req, res) {
    console.log(req.params);
    try {
      const items = await this.model.find(req.params);
      return ResponseHandler.success(res, items);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }

  async update(req, res) {
    try {
      const { _id } = req.params;
      const updateData = req.body;
      
      if (!_id || !updateData) {
        return ResponseHandler.badRequest(res, 'Missing id or update data');
      }
      
      const result = await this.model.findByIdAndUpdate(
        _id, 
        updateData, 
        { new: true, runValidators: true }
      );
      
      if (!result) {
        return ResponseHandler.notFound(res, 'Item not found');
      }
      
      return ResponseHandler.updated(res, result);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }

  async delete(req, res) {
    try {
      const { _id } = req.params;
      const result = await this.model.findByIdAndDelete(_id);
      
      if (!result) {
        return ResponseHandler.notFound(res, 'Item not found');
      }
      
      return ResponseHandler.deleted(res);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }

  async deleteOne(req, res) {
    try {
      const result = await this.model.deleteOne(req.params);
      
      if (result.deletedCount === 0) {
        return ResponseHandler.notFound(res, 'Item not found');
      }
      
      return ResponseHandler.deleted(res);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }

  async updateOne(req, res) {
    try {
      const { _id } = req.params;
      const updateData = req.body;
      
      if (!_id || !updateData) {
        return ResponseHandler.badRequest(res, 'Missing id or update data');
      }
      
      const result = await this.model.updateOne(
        { _id: _id }, 
        updateData
      );
      
      if (result.matchedCount === 0) {
        return ResponseHandler.notFound(res, 'Item not found');
      }
      
      if (result.modifiedCount === 0) {
        return ResponseHandler.success(res, null, 'No changes made');
      }
      
      return ResponseHandler.updated(res, result);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }
}

module.exports = BaseController;
