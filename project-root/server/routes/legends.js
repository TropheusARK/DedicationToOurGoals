const express = require("express");
const router = express.Router();
const pool = require("../db/pool");

// GET all legends
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM legends ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch legends" });
  }
});

// Add one legend (optional)
router.post("/", async (req, res) => {
  try {
    const { name, url } = req.body;
    const result = await pool.query(
      "INSERT INTO legends (name, url) VALUES ($1, $2) RETURNING *",
      [name, url]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create legend" });
  }
});

module.exports = router;
