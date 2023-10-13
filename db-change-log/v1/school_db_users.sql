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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(1024) DEFAULT NULL,
  `is_admin` varchar(1) DEFAULT NULL,
  `status` varchar(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Rehan','Shah','flyrehan786@gmail.com','flyrehan786','12345678','1','1','2010-01-01 00:00:00','2010-01-10 00:00:00',1,1),(3,'Rehan','Shah','email@domain.com','flyrehan786xx','$2b$10$g1lpjZwr97pe966MXZdG8uacERDK.mD06RykM3Exxef5tsNIwNjSS','0',NULL,'2023-08-13 14:15:44','2023-08-13 14:15:44',1,1),(4,'Rehan','Shah','email@domain.com','flyrehan786xxx','$2b$10$X.qv7R6e6ea1KqbCs63AHuZENf5pVUX0V8tK4Hc7TlyVSRFFnK58G','0',NULL,'2023-08-13 14:20:32','2023-08-13 14:20:32',1,1),(6,'Rehan','Shah','email@domain.com','flyrehan786xxxxx','$2b$10$K1BrSrLL/qPXvRnMUyFkGOb64GOeRFA1BlnHmFzXYQGOidK20tEsO','0',NULL,'2023-08-13 14:23:57','2023-08-13 14:23:57',1,1),(7,'Rehan','Shah','email@domain.com','flyrehan786xxxxxx','$2b$10$f2xQ3MWS.hzj6jWT2uzzR.Ij3serA6Mc70jI2VQ1xdRbfSzTflizm','0',NULL,'2023-08-13 14:24:33','2023-08-13 14:24:33',1,1),(8,'Rehan','Shah','email@domain.com','flyrehan786xxxxxxx','$2b$10$Du/gWXPxBATyoNKxvOz2YOk920MLq.af8BuMvMigZjlcId6L3ccEG','0',NULL,'2023-08-13 14:27:52','2023-08-13 14:27:52',1,1),(9,'Rehan','Shah','email@domain.com','flyrehan786xxxxxxxx','$2b$10$QXLp2JEyX9xtCD2b4a7VsO37UeSI7LVeab/P4.fOkzthdM8LjsYSi','0',NULL,'2023-08-13 14:28:36','2023-08-13 14:28:36',1,1),(10,'Rehan','Shah','email@domain.com','flyrehan786xxxxxxxxx','$2b$10$tfFfaeZ4dx7sv4eYrZoKKO6Omyv4pLe3bD3xVnLuZSmmGN5c..Sxq','0',NULL,'2023-08-13 14:29:56','2023-08-13 14:29:56',1,1),(11,'Rehan','Shah','email@domain.com','flyrehan786xxxxxxxxxx','$2b$10$qbgpT0c.l99.QpgTYXf2neRnazSrVGN7T0xoVo9jEAh7Gq.GgvYy.','0',NULL,'2023-08-13 14:30:16','2023-08-13 14:30:16',1,1),(12,'Rehan','Shah','email@domain.com','flyrehan786xxxxxxxxxxx','$2b$10$A6483cuiuBZj0OqlqsW6NeFbkeO6RFBI1YOOIt1gjHgl3IRe8mI2q','0',NULL,'2023-08-13 14:31:15','2023-08-13 14:31:15',1,1),(13,'Rehan','Shah','email@domain.com','a@domain.com','$2b$10$e8rOk9FcA8D3sWa.kSZmGO7l9zjqe9ZQVFGUIlNgMltYszwhA3P/u','0',NULL,'2023-08-13 14:43:22','2023-08-13 14:43:22',1,1),(14,'Rehan','Shah','email@domain.com','a@domain.comx','$2b$10$IyWEnkdIJ0zWupeQV409AuTq99rXGuMZJnBNdOsLnO.P8YNKUQmLi','0',NULL,'2023-08-13 14:44:38','2023-08-13 14:44:38',1,1),(15,'Rehan','Shah','email@domain.com','a@domain.comxxx','$2b$10$ROF4eDKwEDIM1GQ6Ux56z.XEHPG7EsSTTjyqUKw6qwNPprFVgjJGy','0',NULL,'2023-08-13 14:57:57','2023-08-13 14:57:57',1,1),(16,'Rehan','Shah','email@domain.com','mynameisrehan','$2b$10$WASiJrinaILU9KV2g3Qvke7YL9YAYpnO2oPa6xglsF6rS.2VCQtHa','0',NULL,'2023-08-13 22:21:48','2023-08-13 22:21:48',1,1),(17,'Rehan','Shah','email@domain.com','mynameisrehan1','$2b$10$j.77lBD0Uc3iDP9HF4gnNe6VVL7otqfyH7W4.d6bzpgK3H3ikGFzi','0',NULL,'2023-08-14 11:16:47','2023-08-14 11:16:47',1,1),(18,'Rehan','Shah','email@domain.com','flyrehan786xxxxxxxxxxxxxx','$2b$10$TBox9otqgqNab.lXQSnBg.Tr3dNwbdSwYdzGzkalM5WZwMpbTuwoS','0','1','2023-08-15 12:16:15','2023-08-15 12:16:15',1,1),(19,'Rehan','Shah','email@domain.com','flyrehan786xxxxxxxxxxxxxxxx','$2b$10$LQpW10gNWSD7E2Ta.bxGVOhrw6hjsgZG1Ls41RhPrubkyHjtCyONq','0','1','2023-08-15 12:16:49','2023-08-15 12:16:49',1,1),(20,'Haaaamza','shah','abc@domain','uaername131312','$2b$10$FJ6Qfid15Ba..UyrxIKtTuL4ccGIsSAUP82Rl6H/vXUzeVpvwERjS','0','1','2023-09-12 00:22:41','2023-09-12 00:22:41',1,1),(21,'asdaslkadj','klajsdakldjadsklj','asdklajdalksdjadklj@domin.com','uaername131312','$2b$10$46mAseFwdTKJWO.oy.HlVORLe5ChWtxzrUw7n02y43jXcHe4QyN3K','0','1','2023-09-12 00:24:29','2023-09-12 00:24:29',1,1),(22,'Rehan','Shah','email@domain.com','rehanx7788','$2b$10$iakzJD/dtlXe.EZoF74WHuZxOU.xE.VrpZIWdBEMBXuEcfTMKjUd6','0','1','2023-09-12 00:35:38','2023-09-12 00:35:38',1,1),(23,'Rehan','Shah','email@domain.com','rehan12345','$2b$10$Qs0Q1r8xl2N4tjblix3OPOMj6W.ic4/3fHex/bbrDlJmp0BhrQ8GO','0','1','2023-09-12 00:42:17','2023-09-12 00:42:17',1,1),(24,'admin','admin','admin@domain.com','admin','$2b$10$VhWUKXNsISu1APmKkTiKnON05kEuMvzAMMF7iN31.96Pt6Ej02h36','0','1','2023-09-12 00:49:08','2023-09-12 00:49:08',1,1),(25,'admin','admin','admin@domain.com','admin','$2b$10$ZRps5yZmDaqqOj1Jr39DLuENE1b9Eqz7uJfjBMmToGZLJRXKxiwva','1','1','2023-10-06 22:39:28','2023-10-06 22:39:28',1,1),(26,'admin','admin','admin@domain.com','admin','$2b$10$W6yLgbc7nFKpSltwfgQ7ruqz3mGicWKwWuS7gK6ZFGp60iGL.2fNm','1','1','2023-10-06 22:39:53','2023-10-06 22:39:53',1,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-11 17:39:55
