import pkg from "pg";
import "dotenv/config";
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: process.env.DBNAME,
});

export default pool;
