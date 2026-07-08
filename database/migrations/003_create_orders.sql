CREATE TABLE IF NOT EXISTS orders (

    id SERIAL PRIMARY KEY,

    user_id INTEGER NOT NULL,

    total_amount DECIMAL(10,2) NOT NULL,

    status VARCHAR(30) DEFAULT 'PENDING',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_orders_user
        FOREIGN KEY(user_id)
        REFERENCES users(id)
        ON DELETE CASCADE

);