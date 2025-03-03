const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    order_id: { type: String, unique: true, required: true },
    customer_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Customer" },
    sku_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "SKU" },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Generate unique order_id before saving
orderSchema.pre("save", async function (next) {
    if (!this.order_id) {
        const count = await mongoose.model("Order").countDocuments();
        this.order_id = `OD-${String(count + 1).padStart(5, "0")}`;
    }
    next();
});

module.exports = mongoose.model("Order", orderSchema);

