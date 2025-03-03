const mongoose = require("mongoose");
const Order = require("../models/Order");

const createOrder = async (req, res) => {
    try {
        const { customer_id, sku_id, user_id, quantity, price } = req.body;

        if (!user_id || !customer_id || !sku_id) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        if (!mongoose.Types.ObjectId.isValid(customer_id) || !mongoose.Types.ObjectId.isValid(sku_id) || !mongoose.Types.ObjectId.isValid(user_id)) {
            return res.status(400).json({ error: "Invalid ObjectId format" });
        }

        // Generate unique order ID
        const count = await Order.countDocuments();
        const order_id = `ORD-${String(count + 1).padStart(5, "0")}`;

        // Create a new order
        const newOrder = new Order({
            order_id,
            customer_id: new mongoose.Types.ObjectId(customer_id),
            sku_id: new mongoose.Types.ObjectId(sku_id),
            user_id: new mongoose.Types.ObjectId(user_id),
            quantity,
            price
        });

        await newOrder.save();
        res.status(201).json({ message: "Order created successfully", order: newOrder });
    } catch (err) {
        console.error("Error creating order:", err);
        res.status(500).json({ error: "Server error", details: err.message });
    }
};

module.exports = { createOrder };
