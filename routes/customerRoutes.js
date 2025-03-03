const express = require("express");
const { createCustomer } = require("../controllers/customerController");
const {authMiddleware} = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createCustomer);

module.exports = router;