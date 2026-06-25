const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const scanRoutes = require("./routes/scanner.routes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/scan", scanRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "PromptShield Backend Running",
  });
});

module.exports = app;