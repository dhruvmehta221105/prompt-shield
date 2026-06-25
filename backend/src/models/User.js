const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema(
  {
    prompt: {
      type: String,
      required: true,
      trim: true,
    },

    threats: [
      {
        type: String,
      },
    ],

    riskScore: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    severity: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      default: "Low",
    },
    recommendation: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Scan", scanSchema);