import express from "express";
import "dotenv/config";
import db from "./db.js";

const app = express();
const port = process.env.PORT || 8000;

// starting the server
app.listen(port, () => console.log(`server is running on port ${port}`));
