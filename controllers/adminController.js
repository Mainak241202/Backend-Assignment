const Order = require("../models/Order");

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("customer_id").populate("sku_id").populate("user_id");
        res.status(200).json({ message: "All orders fetched successfully", orders });
    } catch (err) {
        console.log(err);
        console.error("Error fetching orders:", err);
        res.status(500).json({ error: "Server error", details: err.message });
    }
};

module.exports = { getAllOrders };

