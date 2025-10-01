# Blogging Platform API

---

## Overview

This is a RESTful API for a personal blogging platform, built with Node.js and Express. It uses PostgreSQL as the DB

---

## Features

Create, Read, Update, and Delete blog posts

Search posts by term (in title or content)

JSON-based API responses

---

## Tech Stack

- Node js
- Express
- PostgreSQL(with pg)
- Docker

---

## setup/installation

---

## API Endpoints

- GET /api/v1/posts → get all posts

- GET /api/v1/posts/:id → get single post

- GET /api/v1/posts?search=term → search posts

- POST /api/v1/posts → create post

```
  POST /posts
  {
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
  }
```

- PUT /api/v1/posts/:id → update post

```
  PUT /posts/1
  {
  "title": "My Updated Blog Post",
  "content": "This is the updated content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
  }
```

- DELETE /api/v1/posts/:id → delete post

```
  DELETE /posts/1
```

---

## DataBase Schema

```SQL
CREATE TABLE posts (
id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
content TEXT NOT NULL,
category TEXT NOT NULL,
tags JSONB,
created_at TIMESTAMP DEFAULT NOW(),
updated_at TIMESTAMP
);
```

[roadmap.sh](https://roadmap.sh/projects/blogging-platform-api)
