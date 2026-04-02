const { getDashboardData } = require("../services/dashboard.service");

exports.getDashboard = async (req, res) => {
    try {
        const data = await getDashboardData(req.user.id);
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};