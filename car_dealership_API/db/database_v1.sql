CREATE SCHEMA `dealership`;
USE `dealership`;



CREATE TABLE `car` (
`id` int NOT NULL AUTO_INCREMENT,
`name` varchar(90) NOT NULL,
`description` varchar(90) NOT NULL,
`color` varchar(20) NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB ;



CREATE TABLE `engine` (
`id` int NOT NULL AUTO_INCREMENT,
`name` varchar(90) NOT NULL,
`horsepower` int NOT NULL,
`brand` varchar(45) NOT NULL,
`car_id` int NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB ;



CREATE TABLE `manufacturer` (
`id` int NOT NULL AUTO_INCREMENT,
`name` varchar(90) NOT NULL,
`founded` int NOT NULL,
`description` varchar(90) NOT NULL,
`car_id` int NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB ;



CREATE TABLE `owner` (
`id` int NOT NULL AUTO_INCREMENT,
`name` varchar(90) NOT NULL,
`age` int NOT NULL,
`sex` varchar(20) NOT NULL,
`car_id` int NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB ;



GRANT ALL ON *.* TO 'root'@'%' IDENTIFIED BY '12345678';