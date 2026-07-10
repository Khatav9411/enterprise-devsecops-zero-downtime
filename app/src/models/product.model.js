const db = require("../database/db");

async function findAll() {
  const result = await db.query(
    `SELECT * FROM products ORDER BY id`
  );
  return result.rows;
}

async function findById(id) {
  const result = await db.query(
    `SELECT * FROM products WHERE id=$1`,
    [id]
  );
  return result.rows[0];
}

async function create(product) {
  const result = await db.query(
    `INSERT INTO products
    (name,description,price,stock)
    VALUES($1,$2,$3,$4)
    RETURNING *`,
    [
      product.name,
      product.description,
      product.price,
      product.stock
    ]
  );

  return result.rows[0];
}

async function update(id, product) {
  const result = await db.query(
    `UPDATE products
     SET
     name=$1,
     description=$2,
     price=$3,
     stock=$4
     WHERE id=$5
     RETURNING *`,
    [
      product.name,
      product.description,
      product.price,
      product.stock,
      id
    ]
  );

  return result.rows[0];
}

async function remove(id) {
  await db.query(
    `DELETE FROM products WHERE id=$1`,
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