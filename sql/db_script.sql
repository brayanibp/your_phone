DROP DATABASE your_phone;
CREATE DATABASE your_phone;
USE your_phone;

CREATE TABLE users(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firts_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(15) NOT NULL,
    email VARCHAR(25) NOT NULL,
    credit_card INT UNIQUE NOT NULL,
    birth_day TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE countries(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    country_name VARCHAR(20)
);

CREATE TABLE states(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    country_id INT NOT NULL,
    state_name VARCHAR(20),
    FOREIGN KEY(country_id) REFERENCES countries(id)
);

CREATE TABLE cities(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    state_id INT NOT NULL,
    city_name VARCHAR(25),
    FOREIGN KEY(state_id) REFERENCES states(id)
);

CREATE TABLE postal_codes(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    city_id INT NOT NULL,
    code INT NOT NULL,
    FOREIGN KEY(city_id) REFERENCES cities(id)
);

CREATE TABLE directions(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    direction VARCHAR(200) NOT NULL,
    postal_code_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(postal_code_id) REFERENCES postal_codes(id)
);

CREATE TABLE trademarks(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(25)
);

CREATE TABLE phones(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(200) NOT NULL,
    model VARCHAR(20) NOT NULL,
    trademark_id INT NOT NULL,
    price DOUBLE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(trademark_id) REFERENCES trademarks(id)
);

CREATE TABLE shopping_car(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE shopping_car_details(
    shopping_car_id INT NOT NULL,
    phone_id INT NOT NULL,
    UNIQUE KEY(shopping_car_id,phone_id),
    FOREIGN KEY(shopping_car_id) REFERENCES shopping_car(id),
    FOREIGN KEY(phone_id) REFERENCES phones(id)
);

CREATE TABLE payment_receipts(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    shopping_car_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(shopping_car_id) REFERENCES shopping_car(id)
);