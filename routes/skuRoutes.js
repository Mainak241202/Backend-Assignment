const express = require("express");
const { createSKU, getAllSKUs } = require("../controllers/skuController");
const {authMiddleware} = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createSKU);
router.get("/", authMiddleware, getAllSKUs);

module.exports = router;