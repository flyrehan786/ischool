-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: school_db
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
INSERT INTO `grades` VALUES (1,'Play-Group+','2010-01-01 00:00:00','2010-01-01 00:00:00'),(2,'Nursury','2010-01-01 00:00:00','2010-01-01 00:00:00'),(3,'KG','2010-01-01 00:00:00','2010-01-01 00:00:00'),(4,'1st','2010-01-01 00:00:00','2010-01-01 00:00:00'),(5,'2nd','2010-01-01 00:00:00','2010-01-01 00:00:00'),(6,'3rd','2010-01-01 00:00:00','2010-01-01 00:00:00'),(7,'4th','2010-01-01 00:00:00','2010-01-01 00:00:00'),(8,'5th','2010-01-01 00:00:00','2010-01-01 00:00:00'),(9,'6th','2010-01-01 00:00:00','2010-01-01 00:00:00'),(10,'7th','2010-01-01 00:00:00','2010-01-01 00:00:00'),(11,'8th','2010-01-01 00:00:00','2010-01-01 00:00:00'),(12,'9th','2010-01-01 00:00:00','2010-01-01 00:00:00'),(13,'10th','2010-01-01 00:00:00','2010-01-01 00:00:00'),(14,'1st Year','2010-01-01 00:00:00','2010-01-01 00:00:00'),(15,'2nd Year','2010-01-01 00:00:00','2010-01-01 00:00:00'),(16,'testing','2010-01-01 00:00:00','2010-01-01 00:00:00'),(17,'testing','2010-01-01 00:00:00','2010-01-01 00:00:00'),(18,'testing','2010-01-01 00:00:00','2010-01-01 00:00:00'),(19,'testing','2010-01-01 00:00:00','2010-01-01 00:00:00'),(21,'testing+++','2023-09-04 23:29:17','2023-09-04 23:29:17');
/*!40000 ALTER TABLE `grades` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-06 22:43:52
