TRUNCATE phone_description;
TRUNCATE phones;
TRUNCATE trademarks;

INSERT INTO trademarks(name) VALUES ('Samsung'),('Huawei'),('Motorola'),('Nokia');

INSERT INTO phones(image_url, model, trademark_id, price, inventory_quantity) VALUES ('sql/sources/imgs/samsung_M40.webp','Galaxy M40',1,290.99,100);

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
       ('Precio: 290 USD',1);

/* SELECT phones.id AS phone,
       image_url, 
       phone_description.id AS detail,
       CONCAT(trademarks.name, ' ', phones.model) AS phone_name, 
       characteristic, 
       price, 
       inventory_quantity AS available
FROM phones 
INNER JOIN phone_description 
ON phones.id = phone_description.phone_id 
INNER JOIN trademarks 
ON trademarks.id = phones.trademark_id;

SELECT * FROM phones;

UPDATE phones SET phones.image_url = '/sources/imgs/samsung_M40.webp' WHERE phones.id = 1; */