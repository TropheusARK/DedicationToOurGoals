const { Pool } = require("pg");

const pool = new Pool({
  host: "interchange.proxy.rlwy.net",
  port: 54615,
  user: "postgres",
  password: "EqKhfyzfgJgsDJHGdWZzbzWJSUBUYybd",
  database: "railway",
  ssl: false
});

pool.query("SELECT 1")
  .then(() => console.log("✅ DB CONNECTED — HARD CODE TEST PASSED"))
  .catch(err => console.error("❌ DB TEST FAILED:", err));

module.exports = pool;
