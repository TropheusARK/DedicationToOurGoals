const express = require("express");
const cors = require("cors");

const legendsRoutes = require("./routes/legends");

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/legends", legendsRoutes);

// health check (important for sanity)
app.get("/", (req, res) => {
  res.send("API running");
});

// 🚨 THIS IS THE ONLY CORRECT PORT SETUP
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

