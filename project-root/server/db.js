const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: "interchange.proxy.rlwy.net",
  port: 54615,
  user: "postgres",
  password: "EqKhfyzfgJgsDJHGdWZzbzWJSUBUYybd",
  database: "railway",
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect()
  .then(() => console.log("✅ DB CONNECTED — HARD CODE TEST PASSED"))
  .catch(err => console.error("❌ DB TEST FAILED:", err));

module.exports = pool;
