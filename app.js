import express from "express";
import "dotenv/config";
import posts from "./routes/posts.js";

const app = express();
const port = process.env.PORT || 8000;
// middleware
app.use(express.json());

// Routes
app.use("/api/v1/posts", posts);

// starting the server
app.listen(port, () => console.log(`server is running on port ${port}`));
