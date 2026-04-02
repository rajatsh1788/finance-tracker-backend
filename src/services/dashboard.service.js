const Transaction = require("../models/Transaction");

exports.getDashboardData = async (userId) => {
    const transactions = await Transaction.find({ userId });

    let totalIncome = 0;
    let totalExpenses = 0;

    const categoryTotals = {};
    const monthlyTrends = {};

    transactions.forEach(tx => {
        // Income vs Expense
        if (tx.type === "income") {
            totalIncome += tx.amount;
        } else {
            totalExpenses += tx.amount;
        }

        // Category totals
        if (!categoryTotals[tx.category]) {
            categoryTotals[tx.category] = 0;
        }
        categoryTotals[tx.category] += tx.amount;

        // Monthly trends (YYYY-MM)
        const month = tx.date.toISOString().slice(0, 7);
        if (!monthlyTrends[month]) {
            monthlyTrends[month] = 0;
        }
        monthlyTrends[month] += tx.amount;
    });

    return {
        totalIncome,
        totalExpenses,
        netBalance: totalIncome - totalExpenses,
        categoryTotals,
        monthlyTrends,
        recentActivity: transactions.slice(-5)
    };
};