const db = require("../database/db");

async function findAll() {
  const result = await db.query(
    `SELECT id, full_name, email, role, created_at
     FROM users
     ORDER BY id`
  );

  return result.rows;
}

async function findById(id) {
  const result = await db.query(
    `SELECT id, full_name, email, role, created_at
     FROM users
     WHERE id = $1`,
    [id]
  );

  return result.rows[0];
}

async function create(user) {
  const result = await db.query(
    `INSERT INTO users
    (full_name,email,password_hash,role)
    VALUES ($1,$2,$3,$4)
    RETURNING id,full_name,email,role,created_at`,
    [
      user.full_name,
      user.email,
      user.password_hash,
      user.role
    ]
  );

  return result.rows[0];
}

async function update(id, user) {
  const result = await db.query(
    `UPDATE users
     SET full_name=$1,
         email=$2,
         password_hash=$3,
         role=$4
     WHERE id=$5
     RETURNING id,full_name,email,role,created_at`,
    [
      user.full_name,
      user.email,
      user.password_hash,
      user.role,
      id
    ]
  );

  return result.rows[0];
}

async function remove(id) {
  await db.query(
    "DELETE FROM users WHERE id=$1",
    [id]
  );
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};