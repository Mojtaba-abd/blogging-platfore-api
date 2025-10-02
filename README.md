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

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/blogging-platform-api.git
cd blogging-platform-api
```

### 2.Configer enviorment variables

```
PORT=5000

# Database
DBUSER= your-username
DBPASSWORD= your-password
DBNAME=blogPosts
DBPORT=5432
DBHOST=localhost

# pgAdmin
PGADMIN_EMAIL=your-username@domain-name.com
PGADMIN_PASSWORD=your-password
```

### 3. Start services with Docker Compose

Spin up PostgreSQL and pgAdmin:

```bash
docker-compose up -d
```

- PostgreSQL runs on localhost:5432
- pgAdmin runs on http://localhost:8080
  - Login email: value of PGADMIN_EMAIL
  - Password: value of PGADMIN_PASSWORD

### 4. Install dependencies

```bash
npm install
```

### 5. Run the server

```bash
npm run dev
```

OR

```bash
node app.js
```

Server will start on http://localhost:5000

### 6. Verify setup

- Visit http://localhost:5000/api/v1/posts → should return an empty array [] initially.
- Log in to pgAdmin (http://localhost:8080) and connect to the blogPosts database using the credentials from .env.

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
