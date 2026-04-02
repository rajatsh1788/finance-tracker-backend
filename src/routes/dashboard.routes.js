const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");
const { getDashboard } = require("../controllers/dashboard.controller");

// Only analyst & admin can access dashboard
router.get("/", auth, authorizeRoles("analyst", "admin"), getDashboard);

module.exports = router;