const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM legends ORDER BY id ASC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("LEGENDS QUERY ERROR:", err);
    res.status(500).json({ error: "Failed to fetch legends" });
  }
});

module.exports = router;
