class ResponseHandler {
  static success(res, data, message = 'Success', statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data
    });
  }

  static error(res, message = 'Error occurred', statusCode = 500, error = null) {
    const response = {
      success: false,
      message
    };
    
    if (error) {
      response.error = error.message || error;
    }
    
    return res.status(statusCode).json(response);
  }

  static notFound(res, message = 'Resource not found') {
    return this.error(res, message, 404);
  }

  static badRequest(res, message = 'Bad request') {
    return this.error(res, message, 400);
  }

  static created(res, data, message = 'Resource created successfully') {
    return this.success(res, data, message, 201);
  }

  static updated(res, data, message = 'Resource updated successfully') {
    return this.success(res, data, message, 200);
  }

  static deleted(res, message = 'Resource deleted successfully') {
    return this.success(res, null, message, 200);
  }

  static internalError(res, error) {
    return this.error(res, 'Internal server error', 500, error);
  }
}

module.exports = ResponseHandler;
