require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT),
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  ssl: false   // IMPORTANT: Internal Railway DB does NOT use SSL
});

client.connect()
  .then(() => console.log("Connected to Railway Postgres (INTERNAL HOST)"))
  .catch(err => console.error("DB Connection Error:", err));

module.exports = client;
