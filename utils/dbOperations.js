const ResponseHandler = require('./responseHandler');

class DatabaseOperations {
  static async findOne(model, query, res, errorMessage = 'Item not found') {
    try {
      const item = await model.findOne(query);
      
      if (!item) {
        return ResponseHandler.notFound(res, errorMessage);
      }
      
      return ResponseHandler.success(res, item);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }

  static async findMany(model, query, res, errorMessage = 'No items found') {
    try {
      const items = await model.find(query);
      return ResponseHandler.success(res, items);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }

  static async createOne(model, data, res, successMessage = 'Item created successfully') {
    try {
      const createdItem = await model.create(data);
      
      if (!createdItem) {
        return ResponseHandler.notFound(res, 'Creation failed');
      }
      
      return ResponseHandler.created(res, createdItem, successMessage);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }

  static async updateOne(model, filter, updateData, res, errorMessage = 'Item not found') {
    try {
      const result = await model.updateOne(filter, updateData);
      
      if (result.matchedCount === 0) {
        return ResponseHandler.notFound(res, errorMessage);
      }
      
      if (result.modifiedCount === 0) {
        return ResponseHandler.success(res, null, 'No changes made');
      }
      
      return ResponseHandler.updated(res, result);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }

  static async deleteOne(model, filter, res, errorMessage = 'Item not found') {
    try {
      const result = await model.deleteOne(filter);
      
      if (result.deletedCount === 0) {
        return ResponseHandler.notFound(res, errorMessage);
      }
      
      return ResponseHandler.deleted(res);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }

  static async findByIdAndUpdate(model, id, updateData, res, errorMessage = 'Item not found') {
    try {
      const result = await model.findByIdAndUpdate(
        id, 
        updateData, 
        { new: true, runValidators: true }
      );
      
      if (!result) {
        return ResponseHandler.notFound(res, errorMessage);
      }
      
      return ResponseHandler.updated(res, result);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }

  static async findByIdAndDelete(model, id, res, errorMessage = 'Item not found') {
    try {
      const result = await model.findByIdAndDelete(id);
      
      if (!result) {
        return ResponseHandler.notFound(res, errorMessage);
      }
      
      return ResponseHandler.deleted(res);
    } catch (error) {
      return ResponseHandler.internalError(res, error);
    }
  }
}

module.exports = DatabaseOperations;
