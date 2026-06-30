const Scan = require("../models/Scan");

const getDashboardStats = async (req, res) => {
  try {
    const scans = await Scan.find();

    const totalScans = scans.length;

    const critical = scans.filter(
      (scan) => scan.severity === "Critical"
    ).length;

    const high = scans.filter(
      (scan) => scan.severity === "High"
    ).length;

    const medium = scans.filter(
      (scan) => scan.severity === "Medium"
    ).length;

    const low = scans.filter(
      (scan) => scan.severity === "Low"
    ).length;

    const averageRisk =
      totalScans === 0
        ? 0
        : Math.round(
            scans.reduce(
              (sum, scan) => sum + scan.riskScore,
              0
            ) / totalScans
          );

    res.status(200).json({
      success: true,
      data: {
        totalScans,
        critical,
        high,
        medium,
        low,
        averageRisk,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to load dashboard stats",
    });
  }
};

module.exports = {
  getDashboardStats,
};