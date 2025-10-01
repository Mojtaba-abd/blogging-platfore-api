import db from "../db.js";

export async function getAllPosts() {
  const result = await db.query("select * from posts");
  console.log("running query");
  return result.rows;
}
export async function getPostById(id) {
  const result = await db.query("select * from posts where id = $1", [id]);
  return result.rows[0];
}
export async function createPost({ title, content, category, tags }) {
  const result = await db.query(
    "insert into posts(title,content,category,tags) values($1,$2,$3,$4) returning *",
    [title, content, category, JSON.stringify(tags)],
  );
  return result.rows[0];
}

export async function updatePost(id, { title, content, category, tags }) {
  const result = await db.query(
    "update posts set title = $1,content=$2,category=$3,tags=$4, update_at = now() where id = $5 returning *",
    [title, content, category, JSON.stringify(tags), id],
  );
  return result.rows[0];
}

export async function deletePost(id) {
  const result = await db.query("delete from posts where id = $1 returning *", [
    id,
  ]);
  return result.rows[0];
}

export async function searchPosts(search) {
  const result = await db.query(
    "select * from posts where title ilike  $1  or content ilike  $1 ",
    [`%${search}%`],
  );
  return result.rows;
}
