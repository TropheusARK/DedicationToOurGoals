const express = require("express");
const router = express.Router();
const db = require("../db"); // <-- USE THE WORKING TUNNEL CONNECTION

// GET all legends
router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM legends ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error("LEGENDS QUERY ERROR:", err);
    res.status(500).json({ error: "Failed to fetch legends" });
  }
});

// Add one legend
router.post("/", async (req, res) => {
  try {
    const { name, url } = req.body;
    const result = await db.query(
      "INSERT INTO legends (name, url) VALUES ($1, $2) RETURNING *",
      [name, url]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error("LEGEND INSERT ERROR:", err);
    res.status(500).json({ error: "Failed to create legend" });
  }
});

module.exports = router;
