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
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `registration_no` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `gender` varchar(1) DEFAULT NULL,
  `cnic` varchar(45) DEFAULT NULL,
  `age` varchar(3) DEFAULT NULL,
  `father_name` varchar(45) DEFAULT NULL,
  `father_cnic` varchar(45) DEFAULT NULL,
  `post_office` varchar(45) DEFAULT NULL,
  `tehsil` varchar(45) DEFAULT NULL,
  `district` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (13,'100','Rehan+','Shah+','1','313131223131312','12','adadadad','adadadadadad','dadasd','adaadasd','adasd+','1','2023-09-01 11:49:12','2023-09-01 11:49:12',1,1),(14,NULL,'frrf','Shah','1','313131223131312','12','adadadad','adadadadadad','dadasd','adaadasd','adasd','1','2023-09-01 12:04:15','2023-09-01 12:04:15',1,1),(15,NULL,'hmama','gmamam','0','11233-131313-1','12','24234-2434242-2','adadad-ada','adadad-adada','asdad','adadad','1','2023-09-01 12:05:17','2023-09-01 12:05:17',1,1),(17,NULL,'googl','sdfsfs','0','adaddadadad','123','adadadadad','adadadadadad','adadad','adadad','adadad','1','2023-09-01 12:17:17','2023-09-01 12:17:17',1,1),(18,NULL,'hadid','shah','0','13123-131313-1313','24','Younas Ali','13134-1313113-1','barikot','barrikot','swat...','1','2023-09-01 12:19:33','2023-09-01 12:19:33',1,1),(20,NULL,'hadid','adadad','0','131313-131313-13','24','younas ali','1234234-1131313-1','barikot','barikot','swwatt','1','2023-09-01 12:20:42','2023-09-01 12:20:42',1,1),(21,NULL,'sfaffaf','1233211232','0','1233211232','12','asfsfasf','1233211232','fasfasf','afasfaf','adfasfasf','0','2023-09-19 11:32:22','2023-09-19 11:32:22',1,1),(22,NULL,'testing','yssdfsfljk','1','ffsfsfsfsff1','ads','asadadad','asdasdadad','adadad','asdad','adadasdasd','1','2023-09-21 22:57:30','2023-09-21 22:57:30',1,1),(23,NULL,'rehan shah','shahhah','1','12310983-1312313-12312','28','google.com','google.com','thana','batkhela a','malakand','1','2023-09-21 22:58:05','2023-09-21 22:58:05',1,1),(24,NULL,'testing','tsting','0','teingeffsfklj','3','fsdfklsjlk','sflskfjslfkj','sfsfklsfj','sdfkslfjsfjkl','sklfsjfslkfj','1','2023-09-21 22:58:28','2023-09-21 22:58:28',1,1),(25,NULL,'alaksflfkj','klfjsdlkjflfjk','1','dklsdjfslkj','12','sklfajflakfjafklj','fklasjfalkfjaslfkj','sflksfj','kalfjaflkj','fasklfjafjkl','1','2023-09-21 22:59:01','2023-09-21 22:59:01',1,1),(26,NULL,'Rehan ','Shah','1','15402-6999089-9','27','Aurang Zeb','00000-0000000-0','Thana ','Batkhela ','Malakand','1','2023-09-26 20:41:25','2023-09-26 20:41:25',1,1),(27,'100','Rehan','Shah','1','13123-131311331-1','22','Aurang Zeb','12345-1313345-134','thana','thana','thana','1','2023-09-27 23:47:03','2023-09-27 23:47:03',1,1),(28,'101','hamaad','hama','1','131313-1312312313-13','31','131313-131313-13123','3131313-131313-131','adadad','asdada','dadad','1','2023-09-29 01:58:59','2023-09-29 01:58:59',1,1);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
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
