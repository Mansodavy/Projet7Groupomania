-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.28 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table groupomania.comments: ~0 rows (approximately)
DELETE FROM `comments`;

-- Dumping data for table groupomania.posts: ~0 rows (approximately)
DELETE FROM `posts`;

-- Dumping data for table groupomania.roles: ~2 rows (approximately)
DELETE FROM `roles`;
INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
	(0, 'user', '2022-03-31 13:46:14', '2022-03-31 13:46:15'),
	(1, 'admin', '2022-03-31 13:46:37', '2022-03-31 13:46:38');

-- Dumping data for table groupomania.users: ~3 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `nom`, `prenom`, `email`, `password`, `imageUrl`, `createdAt`, `updatedAt`) VALUES
	(1, 'Marc', 'Dutrou', 'Jean@groupomania.fr', '$2a$08$1gkR.bnFHveQAb4Ew4vihOc3uFHpz/MEhU5MnG2uSxUhNDLGbbnO.', 'http://localhost:5000/images/Avatar.jpg', '2022-08-08 02:07:44', '2022-08-08 02:07:44'),
	(2, 'Gasty', 'Marie', 'Marie@gmail.com', '$2a$08$SFNY2nXgqQa6mV7R7af0ieaO.2XX1xIyzaa.zwc9Hoj5wfduD/a/2', 'http://localhost:5000/images/Avatar.jpg', '2022-08-08 02:08:39', '2022-08-08 02:08:39'),
	(3, 'Carl', 'Jean', 'Jean@yahoo.com', '$2a$08$2viB3XOTJjRR25S9KjWRfuRm7J9utSFiuqJ0a0ocpZCb0e6EIPolu', 'http://localhost:5000/images/Avatar.jpg', '2022-08-08 02:09:40', '2022-08-08 02:09:40');

-- Dumping data for table groupomania.user_roles: ~3 rows (approximately)
DELETE FROM `user_roles`;
INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
	('2022-08-08 02:08:39', '2022-08-08 02:08:39', 0, 2),
	('2022-08-08 02:09:40', '2022-08-08 02:09:40', 0, 3),
	('2022-08-08 02:07:44', '2022-08-08 02:07:44', 1, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
