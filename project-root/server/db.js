
// Railway provides DATABASE_URL automatically in production
// Local dev can still use .env if you want
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Add SSL for Railway/Production connections
  ssl: {
    rejectUnauthorized: false
  }
});

// connection test (safe to keep)

pool.query("SELECT 1")
  .then(() => console.log("✅ DB CONNECTED"))
  .catch(err => console.error("❌ DB FAILED:", err));

  pool.connect()
  .then(() => console.log('✅ DB CONNECTED'))
  .catch(err => console.error('❌ DB FAILED:', err));

module.exports = pool;


