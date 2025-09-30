import express from "express";
const router = express.Router();
import db from "../db.js";

// create a post
router.post("/", async (req, res) => {
  const { title, content, category, tags } = req.body;
  try {
    await db.query(
      "insert into posts(title,content,category,tags) values($1,$2,$3,$4)",
      [title, content, category, JSON.stringify(tags)],
    );
    res.status(200).json({ msg: "Post created successfully" });
    console.log("added post");
  } catch (error) {
    console.log("couldn't add post", error);
  }
});
// get all posts
router.get("/", async (req, res) => {
  try {
    const result = await db.query("select * from posts");
    res.status(200).json(result.rows);
  } catch (error) {
    console.log("Database error ", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

// get single post
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await db.query(`select * from posts where id = $1`[id]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.log("there isn't a post with that id", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await db.query(`delete from posts where id = $1`[id]);
    res.status(200).json({ msg: `post  ID ${id} has been deleted` });
  } catch (error) {
    console.log("there isn't a post with that id", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

export default router;
