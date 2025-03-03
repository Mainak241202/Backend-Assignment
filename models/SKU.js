const mongoose = require("mongoose");

const SKUSchema = new mongoose.Schema({
    sku_name: {
        type: String,
        required: true
    },
    unit_of_measurement: {
        type: String,
        required: true
    },
    tax_rate: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("SKU", SKUSchema);