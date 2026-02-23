const SplitBill = require('../model/splitbillModel');

// Create a new split bill entry
exports.createSplitBill = async (req, res) => {
    try {
        const splitBill = new SplitBill(req.body);
        const savedSplitBill = await splitBill.save();
        res.status(201).json(savedSplitBill);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all split bills
exports.getAllSplitBills = async (req, res) => {
    try {
        const splitBills = await SplitBill.find({});
        res.status(200).json(splitBills);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a split bill by ID
exports.getSplitBillById = async (req, res) => {
    try {
        const splitBill = await SplitBill.findById(req.params.id);
        if (!splitBill) {
            return res.status(404).json({ message: 'SplitBill not found' });
        }
        res.status(200).json(splitBill);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a split bill by ID
exports.updateSplitBill = async (req, res) => {
    try {
        const updatedSplitBill = await SplitBill.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedSplitBill) {
            return res.status(404).json({ message: 'SplitBill not found' });
        }
        res.status(200).json(updatedSplitBill);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a split bill by ID
exports.deleteSplitBill = async (req, res) => {
    try {
        const deletedSplitBill = await SplitBill.findByIdAndDelete(req.params.id);
        if (!deletedSplitBill) {
            return res.status(404).json({ message: 'SplitBill not found' });
        }
        res.status(200).json({ message: 'SplitBill deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
