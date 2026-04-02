const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");

const {
    createTransaction,
    getTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction
} = require("../controllers/transaction.controller");

// Create (Admin only)
router.post("/", auth, authorizeRoles("admin"), createTransaction);

// Read (Analyst + Admin)
router.get("/", auth, authorizeRoles("analyst", "admin"), getTransactions);

// Read one
router.get("/:id", auth, authorizeRoles("analyst", "admin"), getTransactionById);

// Update (Admin)
router.put("/:id", auth, authorizeRoles("admin"), updateTransaction);

// Delete (Admin)
router.delete("/:id", auth, authorizeRoles("admin"), deleteTransaction);

module.exports = router;