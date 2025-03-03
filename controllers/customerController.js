const mongoose = require("mongoose");
const Customer = require("../models/Customer");

const createCustomer = async (req, res) => {
    try {
        const { name, address, user_id } = req.body;

        // Ensure user_id is provided
        if (!user_id) {
            return res.status(400).json({ error: "User ID is required" });
        }

        // Ensure user_id is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            return res.status(400).json({ error: "Invalid user_id format" });
        }

        // Create customer
        const newCustomer = new Customer({
            name,
            address,
            user_id: new mongoose.Types.ObjectId(user_id)
        });

        await newCustomer.save();
        res.status(201).json({ message: "Customer created successfully", customer: newCustomer });
    } catch (err) {
        console.error("Error creating customer:", err);
        res.status(500).json({ error: "Server error", details: err.message });
    }
};

module.exports = {
    createCustomer,
};