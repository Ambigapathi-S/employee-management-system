-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: employee_management_db
-- ------------------------------------------------------
-- Server version	8.0.36

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
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`),
  UNIQUE KEY `UK_r43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@gmail.com','admin','$2a$10$8KloUgFk5YeIlMfq6QDja.PU81Hr19D4/Mwx6pgJT.65erhvZWRoC','admin@gmail.com'),(2,'raji@gmail.com','raji','$2a$10$qS3eUi7Qf7/LhdFvvjiaAek1oVEG4Ng7hW9KVANoRnZ4QX0NvRlfi','raji@gmail.com'),(3,'sadmin@gmail.com','Super Admin','$2a$10$1swbSLwwRdD6S6kJzYxn1uriIxnWARtDrxorcqGowXDGQMu1uzomm','sadmin'),(4,'ambiga@admin.me','Ambigapathi S ','$2a$10$nCqWaP/I9dUH8poJTVQUEuWUQyXg448xFxzBhLLnNdL4qoavHhoE2','ambiga'),(5,'elakki@gmail.com','Elakkiya','$2a$10$RjE4TOQ1hdel557x3Hhf3.WOMunEIlRrJQaqlb.MXfehK.V2Pymfu','elakki'),(6,'rajis@gmail.com','raji','$2a$10$xkJ.Mn5oWSFPl.9QPjqKaOJg/W8voxS97F9JOOnxvHBfDSLGBkexi','raji'),(7,'','','$2a$10$FIojvZIvM/z9SJayoQ8JUeyZ/Qsgu.aW.yoF4Ah8AiKVfTjnaF1qO',''),(8,'sasi@gmail.com','Sasi','$2a$10$0wFGCT531KsB5d0ljql2nu34cRAUqcneuQOkfGqy5HSrmtYDPyTKG','Sasii');
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

-- Dump completed on 2024-04-25 21:50:00
