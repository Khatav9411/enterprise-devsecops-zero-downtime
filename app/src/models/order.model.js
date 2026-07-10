const db = require("../database/db");

const getAllOrders = async () => {
    const result = await db.query(`
        SELECT
            o.id,
            u.full_name,
            p.name AS product,
            o.quantity,
            o.total_price,
            o.status,
            o.created_at
        FROM orders o
        JOIN users u ON u.id = o.user_id
        JOIN products p ON p.id = o.product_id
        ORDER BY o.id
    `);

    return result.rows;
};

const getOrderById = async (id) => {
    const result = await db.query(
        `SELECT * FROM orders WHERE id=$1`,
        [id]
    );

    return result.rows[0];
};

const createOrder = async (order) => {

    const {
        user_id,
        product_id,
        quantity,
        total_price,
        status
    } = order;

    const result = await db.query(
        `INSERT INTO orders
        (user_id,product_id,quantity,total_price,status)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *`,
        [
            user_id,
            product_id,
            quantity,
            total_price,
            status
        ]
    );

    return result.rows[0];
};

const updateOrder = async (id, order) => {

    const {
        quantity,
        total_price,
        status
    } = order;

    const result = await db.query(
        `UPDATE orders
        SET quantity=$1,
            total_price=$2,
            status=$3
        WHERE id=$4
        RETURNING *`,
        [
            quantity,
            total_price,
            status,
            id
        ]
    );

    return result.rows[0];
};

const deleteOrder = async (id) => {

    await db.query(
        "DELETE FROM orders WHERE id=$1",
        [id]
    );

};

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
};