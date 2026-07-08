INSERT INTO users
(full_name,email,password_hash,role)
VALUES
('Administrator',
'admin@enterprise.com',
'admin123',
'ADMIN'),

('DevOps Engineer',
'devops@enterprise.com',
'devops123',
'DEVOPS');



INSERT INTO products
(name,description,price,stock)
VALUES

('Laptop',
'Dell Latitude',
65000,
20),

('Keyboard',
'Mechanical Keyboard',
3500,
100),

('Mouse',
'Wireless Mouse',
1200,
80),

('Monitor',
'27 inch IPS',
18000,
15),

('Docking Station',
'USB-C Dock',
8500,
10);



INSERT INTO orders
(user_id,total_amount,status)
VALUES

(1,65000,'COMPLETED'),

(2,4700,'PROCESSING');