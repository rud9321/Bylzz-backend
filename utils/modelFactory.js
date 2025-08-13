const { model } = require('mongoose');
const BaseSchema = require('./baseSchema');

/**
 * Model Factory - Creates consistent models with standardized naming and structure
 * Eliminates naming inconsistencies and provides a clean API for model creation
 */
class ModelFactory {
  /**
   * Create a model with consistent naming and structure
   * @param {string} modelName - The name of the model (singular, PascalCase)
   * @param {Schema} schema - The mongoose schema
   * @param {string} collectionName - The collection name in MongoDB (optional)
   * @returns {Model} Mongoose model instance
   */
  static createModel(modelName, schema, collectionName = null) {
    // Ensure model name is PascalCase
    const formattedModelName = this.formatModelName(modelName);
    
    // Use provided collection name or generate from model name
    const finalCollectionName = collectionName || this.generateCollectionName(formattedModelName);
    
    // Create and return the model
    return model(formattedModelName, schema, finalCollectionName);
  }

  /**
   * Format model name to PascalCase
   * @param {string} name - The input name
   * @returns {string} Formatted name in PascalCase
   */
  static formatModelName(name) {
    if (!name) return 'Model';
    
    // Convert to PascalCase
    return name
      .replace(/[^a-zA-Z0-9]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }

  /**
   * Generate collection name from model name
   * @param {string} modelName - The model name in PascalCase
   * @returns {string} Collection name in lowercase, plural
   */
  static generateCollectionName(modelName) {
    if (!modelName) return 'models';
    
    // Convert PascalCase to lowercase and pluralize
    const singular = modelName
      .replace(/([A-Z])/g, '_$1')
      .toLowerCase()
      .replace(/^_/, '');
    
    // Simple pluralization
    if (singular.endsWith('y')) {
      return singular.slice(0, -1) + 'ies';
    } else if (singular.endsWith('s') || singular.endsWith('sh') || singular.endsWith('ch')) {
      return singular + 'es';
    } else {
      return singular + 's';
    }
  }

  /**
   * Create a complete model with schema and export
   * @param {string} modelName - The name of the model
   * @param {Object} fields - Schema fields
   * @param {Object} options - Schema options
   * @param {string} collectionName - Collection name (optional)
   * @returns {Object} Object with model and export statement
   */
  static createCompleteModel(modelName, fields, options = {}, collectionName = null) {
    const schema = BaseSchema.createSchema(fields, options);
    const mongooseModel = this.createModel(modelName, schema, collectionName);
    
    return {
      schema,
      model: mongooseModel,
      exportStatement: `module.exports = ${mongooseModel.modelName}`
    };
  }
}

module.exports = ModelFactory;
