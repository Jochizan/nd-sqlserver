CREATE TABLE Products
(
  id int NOT NULL IDENTITY(1, 1) PRIMARY KEY,
  name VARCHAR(100),
  description VARCHAR(256),
  quantity int
);

INSERT INTO Products
  (name, description, quantity)
VALUES
  ('laptop', 'lenovo laptop i5', 10),
  ('mouse Ryzer', 'gaming mouse', 15);

SELECT *
FROM Products;

INSERT INTO Products
  (name, description, quantity)
VALUES
  ('keyboard corsa', 'gaming keyboard', 20);

UPDATE Products
  SET name='mouse ryzer'
  WHERE id=2;