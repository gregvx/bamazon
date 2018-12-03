DROP DATABASE bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products
(
	item_id int NOT NULL AUTO_INCREMENT,
	product_name varchar(255) NOT NULL,
    department_name varchar(255) NOT NULL,
    price double NOT NULL,
    stock_quantity int,
	PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('iPhone charge cable', 'electronics', 13.45, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('1984 by George Orwell', 'books', 12.95, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Nintendo Switch', 'electronics', 399.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Greys Anatomy Season 14', 'home entertainment', 39.99, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('iphone 6S replacement screen', 'electronics', 15.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Chia Pet Obama', 'gardening', 19.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Cat food - 50 lb bag', 'pets', 24.66, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('guitar pics - assorted colors', 'musical instruments', 3.76, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Yamaha Tenor Saxophone', 'musical instruments', 145.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Dont let the pigeon drive the bus by Mo Willems', 'books', 7.45, 20);