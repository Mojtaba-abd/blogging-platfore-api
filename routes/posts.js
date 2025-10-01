import express, { json } from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getAllPosts,
  getSinglePost,
  updatePost,
} from "../controllers/postsController.js";

// create a post
router.post("/", createPost);

// get all posts
router.get("/", getAllPosts);

// get single post
router.get("/:id", getSinglePost);
// delete post
router.delete("/:id", deletePost);

// update a post
router.put("/:id", updatePost);

export default router;
