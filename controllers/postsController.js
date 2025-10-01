import * as PostModel from "../models/postsModel.js";

export const createPost = async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;
    const newPost = await PostModel.createPost({
      title,
      content,
      category,
      tags,
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.log("couldn't create post", error);
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const search = req.query.search;
    if (search) {
      const searchedPost = await PostModel.searchPosts(search);
      return res.status(200).json(searchedPost);
    }
    console.log("before calling get all posts");
    const posts = await PostModel.getAllPosts();
    console.log("after calling get all posts");
    if (!posts) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(200).json(posts);
  } catch (error) {
    console.log("Database error ", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const post = await PostModel.getPostById(id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.log("there isn't a post with that id", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedPost = await PostModel.deletePost(id);
    if (!deletePost) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(200).json({ msg: `post deleted: ${deletedPost}` });
  } catch (error) {
    console.log("there isn't a post with that id", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, content, category, tags } = req.body;
    const updatedPost = await PostModel.updatePost(id, {
      title,
      content,
      category,
      tags,
    });
    if (!updatedPost) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(200).json({ msg: "Post updated successfully" });
  } catch (error) {
    console.log("couldn't update post", error);
  }
};
