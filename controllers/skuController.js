const SKU = require("../models/SKU");

const createSKU = async (req, res) => {
    try {
        const { sku_name, unit_of_measurement, tax_rate } = req.body;
        const sku = new SKU({ sku_name, unit_of_measurement, tax_rate });
        await sku.save();
        res.status(201).json(sku);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

const getAllSKUs = async (req, res) => {
    try {
        const skus = await SKU.find();
        res.json(skus);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = {
    createSKU,
    getAllSKUs,
};

