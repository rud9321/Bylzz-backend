const BaseSchema = require('../utils/baseSchema');
const ModelFactory = require('../utils/modelFactory');

// Define schema fields for split bill
const SplitBillFields = {
    BillId: BaseSchema.createStringField(true, 70),
    Items: {
        type: Array, // Array of items split in the bill
        required: true
    },
    Amounts: {
        type: Array, // Array of split amounts
        required: true
    },
    TotalAmount: {
        type: Number,
        required: true
    },
    SplitType: BaseSchema.createStringField(true, 30), // e.g., 'equal', 'custom'
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    CreatedBy: BaseSchema.createStringField(false, 70), // optional: employee/user id
    TableId: BaseSchema.createStringField(false, 70),
    Comment: BaseSchema.createStringField(false, 300)
};

// Create the SplitBill model
const SplitBill = ModelFactory.createCompleteModel('SplitBill', SplitBillFields, {}, 'splitbills');

module.exports = SplitBill.model;
