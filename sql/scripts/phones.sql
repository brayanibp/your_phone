TRUNCATE phone_description;
TRUNCATE phones;
TRUNCATE trademarks;

INSERT INTO trademarks(name) VALUES ('Samsung'),('Huawei'),('Motorola'),('Nokia');

INSERT INTO phones(image_url, model, trademark_id, price, inventory_quantity) VALUES ('/sources/imgs/samsung_M40.webp','Galaxy M40',1,290.99,100),
('/sources/imgs/samsung_galaxy_xcover-4s.jpg','Galaxy Xcover 4s',1,309.00,50),('/sources/imgs/samsung_galaxy_a60.jpg','Galaxy A60',1,310.50,200)
('/sources/imgs/','Galaxy A20e',1,300);

INSERT INTO phone_description(characteristic,phone_id) 
VALUES ('Pantalla: 6.3", 1080 x 2340 pixels',1),
       ('Procesador: Snapdragon 675 2GHz',1),
       ('RAM: 6GB',1),
       ('Almacenamiento: 128GB',1),
       ('Expansión: MicroSD',1),
       ('Cámara: Triple, 32MP+8MP+5MP',1),
       ('Batería: 3500 mAh',1),
       ('OS: Android 9.0',1),
       ('Perfil: 7.9 mm',1),
       ('Peso: 169 g',1),
       ('Pantalla: 5", 720 x 1280 pixels',2),
       ('Procesador: Exynos 7885 1.6GHz',2),
       ('RAM: 3GB',2),
       ('Almacenamiento: 32GB',2),
       ('Expansión: microSD',2),
       ('Cámara: 16 MP',2),
       ('Batería: 2800 mAh',2),
       ('OS: Android 9.0',2),
       ('Perfil: 9.7 mm',2),
       ('Peso: 172 g',2),
       ('Pantalla: 6.3", 1080 x 2340 pixels',3),
       ('Procesador: Snapdragon 675 2GHz',3),
       ('RAM: 6GB',3),
       ('Almacenamiento: 128GB',3),
       ('Expansión: microSD',3),
       ('Cámara: Triple, 32MP+8MP+5MP',3),
       ('Batería: 3500 mAh',3),
       ('OS: Android 9.0',3),
       ('Perfil: 7.9 mm',3),
       ('Peso: 162 g',3);
       ('Pantalla: 5.8", 720 x 1560 pixels',4),
       ('Procesador: Exynos 7884 1.6GHz',4),
       ('RAM: 3GB',4),('Almacenamiento: 32GB',4),
       ('Expansión: microSD',4),
       ('Cámara: Dual, 13MP+5MP',4),
       ('Batería: 3000 mAh',4),
       ('OS: Android 9.0',4);