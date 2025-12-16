console.log("✅ CORRECT SERVER FILE LOADED");


require("dotenv").config();
const express = require("express");
const cors = require("cors");

const legendsRouter = require("./routes/legends");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes

app.use("/api/legends", legendsRouter);

// health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
