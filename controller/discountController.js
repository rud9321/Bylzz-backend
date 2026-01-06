const Discount = require('../model/discountModel');

// Create a new discount
exports.createDiscount = async (req, res) => {
  try {
    const discountData = req.body;
    const newDiscount = await Discount.create(discountData);
    return res.status(201).json(newDiscount);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating discount', error: error.message });
  }
};

// Get all discounts
exports.getAllDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.find();
    return res.status(200).json(discounts);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving discounts', error: error.message });
  }
};

// Get discount by ID
exports.getDiscountById = async (req, res) => {
  try {
    const { id } = req.params;
    const discount = await Discount.findById(id);
    if (!discount) {
      return res.status(404).json({ message: 'Discount not found' });
    }
    return res.status(200).json(discount);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving discount', error: error.message });
  }
};

// Update discount by ID
exports.updateDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDiscount = await Discount.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDiscount) {
      return res.status(404).json({ message: 'Discount not found' });
    }
    return res.status(200).json(updatedDiscount);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating discount', error: error.message });
  }
};

// Delete discount by ID
exports.deleteDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Discount.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Discount not found' });
    }
    return res.status(200).json({ message: 'Discount deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting discount', error: error.message });
  }
};
