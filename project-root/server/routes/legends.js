const express = require("express");
const router = express.Router();
const pool = require("../../db/pool");

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM legends ORDER BY id ASC");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { name, url } = req.body;

  const result = await pool.query(
    "INSERT INTO legends (name, url) VALUES ($1, $2) RETURNING *",
    [name, url]
  );

  res.json(result.rows[0]);
});

module.exports = router;
