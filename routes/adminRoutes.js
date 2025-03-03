const express = require("express");
const router = express.Router();
const { getAllOrders } = require("../controllers/adminController");
const { authMiddleware, adminMiddleware } = require("../middlewares/authMiddleware");

// ✅ Only admins can access this route
router.get("/orders", authMiddleware, adminMiddleware, getAllOrders);

module.exports = router;
