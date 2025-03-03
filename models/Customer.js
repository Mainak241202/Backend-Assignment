const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" } // Ensure user_id is required
});

module.exports = mongoose.model("Customer", CustomerSchema);
