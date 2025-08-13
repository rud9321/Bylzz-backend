const { Schema } = require('mongoose');

/**
 * Base Schema Class - Provides common fields and methods for all models
 * Eliminates code duplication and ensures consistency across the application
 */
class BaseSchema {
  /**
   * Get common timestamp fields used across all models
   * @returns {Object} Schema fields for timestamps
   */
  static getTimestampFields() {
    return {
      createdAt: {
        type: Date,
        default: () => {
          const now = new Date();
          return new Date(now.getTime() - now.getTimezoneOffset() * 60000);
        }
      },
      updatedAt: {
        type: Date,
        default: () => {
          const now = new Date();
          return new Date(now.getTime() - now.getTimezoneOffset() * 60000);
        }
      }
    };
  }

  /**
   * Get common ID fields used across models
   * @returns {Object} Schema fields for common IDs
   */
  static getCommonIdFields() {
    return {
      employee_id: {
        type: String,
        maxlength: 50
      }
    };
  }

  /**
   * Get common status fields
   * @returns {Object} Schema fields for status
   */
  static getStatusFields() {
    return {
      status: {
        type: Boolean,
        default: true
      }
    };
  }

  /**
   * Create a string field with consistent validation
   * @param {boolean} required - Whether the field is required
   * @param {number} maxlength - Maximum length of the string
   * @param {string} default_value - Default value (optional)
   * @returns {Object} Schema field definition
   */
  static createStringField(required = false, maxlength = 50, default_value = undefined) {
    const field = {
      type: String,
      maxlength
    };
    
    if (required) field.required = true;
    if (default_value !== undefined) field.default = default_value;
    
    return field;
  }

  /**
   * Create a number field with consistent validation
   * @param {boolean} required - Whether the field is required
   * @param {number} min - Minimum value (optional)
   * @param {number} max - Maximum value (optional)
   * @param {number} default_value - Default value (optional)
   * @returns {Object} Schema field definition
   */
  static createNumberField(required = false, min = undefined, max = undefined, default_value = undefined) {
    const field = {
      type: Number
    };
    
    if (required) field.required = true;
    if (min !== undefined) field.min = min;
    if (max !== undefined) field.max = max;
    if (default_value !== undefined) field.default = default_value;
    
    return field;
  }

  /**
   * Create a boolean field with consistent validation
   * @param {boolean} required - Whether the field is required
   * @param {boolean} default_value - Default value (optional)
   * @returns {Object} Schema field definition
   */
  static createBooleanField(required = false, default_value = undefined) {
    const field = {
      type: Boolean
    };
    
    if (required) field.required = true;
    if (default_value !== undefined) field.default = default_value;
    
    return field;
  }

  /**
   * Create a reference field to another model
   * @param {string} ref - Reference model name
   * @param {boolean} required - Whether the field is required
   * @returns {Object} Schema field definition
   */
  static createReferenceField(ref, required = false) {
    const field = {
      type: Schema.Types.ObjectId,
      ref
    };
    
    if (required) field.required = true;
    
    return field;
  }

  /**
   * Create a schema with common fields
   * @param {Object} fields - Additional fields for the schema
   * @param {Object} options - Schema options
   * @returns {Schema} Mongoose schema instance
   */
  static createSchema(fields = {}, options = {}) {
    const schemaFields = {
      ...fields,
      ...this.getTimestampFields()
    };

    return new Schema(schemaFields, {
      timestamps: false, // We're handling timestamps manually
      ...options
    });
  }
}

module.exports = BaseSchema;
