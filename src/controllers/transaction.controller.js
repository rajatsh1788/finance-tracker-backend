const Transaction = require("../models/Transaction");

// CREATE Transaction (Admin only)
exports.createTransaction = async (req, res) => {
    try {
        const { type, amount, category } = req.body;

        // Validation
        if (!type || !amount) {
            return res.status(400).json({ message: "Type and amount required" });
        }

        if (amount <= 0) {
            return res.status(400).json({ message: "Amount must be > 0" });
        }

        const transaction = await Transaction.create({
            userId: req.user.id,
            type,
            amount,
            category
        });

        res.status(201).json(transaction);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({
            userId: req.user.id
        });

        res.json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getTransactionById = async (req, res) => {
    try {
        const tx = await Transaction.findById(req.params.id);

        if (!tx) {
            return res.status(404).json({ message: "Not found" });
        }

        res.json(tx);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.updateTransaction = async (req, res) => {
    try {
        const tx = await Transaction.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!tx) {
            return res.status(404).json({ message: "Not found" });
        }

        res.json(tx);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.deleteTransaction = async (req, res) => {
    try {
        const tx = await Transaction.findByIdAndDelete(req.params.id);

        if (!tx) {
            return res.status(404).json({ message: "Not found" });
        }

        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};