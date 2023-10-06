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
-- Table structure for table `time_table`
--

DROP TABLE IF EXISTS `time_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `time_table` (
  `id` int NOT NULL AUTO_INCREMENT,
  `day_name` varchar(45) DEFAULT NULL,
  `grade_id` int DEFAULT NULL,
  `time_7AM_8AM` varchar(45) DEFAULT NULL,
  `time_8AM_9AM` varchar(45) DEFAULT NULL,
  `time_9AM_10AM` varchar(45) DEFAULT NULL,
  `time_10AM_11AM` varchar(45) DEFAULT NULL,
  `time_11AM_12PM` varchar(45) DEFAULT NULL,
  `time_12PM_1PM` varchar(45) DEFAULT NULL,
  `time_1PM_2PM` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time_table`
--

LOCK TABLES `time_table` WRITE;
/*!40000 ALTER TABLE `time_table` DISABLE KEYS */;
INSERT INTO `time_table` VALUES (2,'adasdkajd',6,'addadadadj','addadadadj','asdadaddsd++++','addadadadj','addadadadj','addadadadj','addadadadj',NULL,NULL),(4,'Tuesday',11,'adadaad','asdadadad','adadad','adassdada','aadad','adadad','adadasd',NULL,NULL),(5,'daldkjdlkj',3,'jlkjkljlkjlkj','kljkljlkjlkj','ljlkjlkj','lkjlkjlkjlkj','lkjklkjljl','lkjlkjlk','lkjlkjlkj',NULL,NULL),(6,'addadadadj',1,'addadadadj','addadadadj','addadadadj','addadadadj','addadadadj','addadadadj','addadadadj',NULL,NULL),(7,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--','Break','2023-09-27 00:03:17','2023-09-27 00:03:17'),(8,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--','Break','2023-09-27 00:03:28','2023-09-27 00:03:28'),(9,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--','Break','2023-09-27 00:03:41','2023-09-27 00:03:41'),(10,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--','Break','2023-09-27 00:04:00','2023-09-27 00:04:00'),(11,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--000','Break','2023-09-27 00:04:05','2023-09-27 00:04:05'),(12,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--','Break','2023-09-27 00:04:28','2023-09-27 00:04:28'),(13,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--000','Break','2023-09-27 00:04:35','2023-09-27 00:04:35'),(14,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--000','Break','2023-09-27 00:05:15','2023-09-27 00:05:15'),(15,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--000','Break','2023-09-27 00:05:47','2023-09-27 00:05:47'),(16,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--000','Break','2023-09-27 00:06:05','2023-09-27 00:06:05'),(17,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--000','Break','2023-09-27 00:06:07','2023-09-27 00:06:07'),(18,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--000','Break','2023-09-27 00:06:20','2023-09-27 00:06:20'),(19,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--000','Break','2023-09-27 00:06:22','2023-09-27 00:06:22'),(20,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--000','Break','2023-09-27 00:06:34','2023-09-27 00:06:34'),(21,'Monday',1,'English','Urdu','Maths','Pak Study','Islamyat','--000','Break','2023-09-27 00:06:37','2023-09-27 00:06:37');
/*!40000 ALTER TABLE `time_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-06 22:43:51
