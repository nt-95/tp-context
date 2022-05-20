
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `data` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `data`;
DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` char(255) NOT NULL,
  `author` char(255) NOT NULL,
  `content` text NOT NULL,
  `date` datetime NOT NULL,
  `movie_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES
(21,'Johnny Mnemonic','pamela666','💖 KEANU 💖 REEVES 💖JTM 💖','2022-05-20 17:27:29',9886),
(23,'X-Files','pamela666','J\'ADOR','2022-05-20 17:30:44',846),
(24,'Prix Génie','naiara','Johnny Mnemonic a été nommé au prix Génie dans les catégories des meilleurs décors et du meilleur son, alors que Keanu Reeves a été nommé pour le Razzie Award du pire acteur. \r\n\r\nLe film a été un échec commercial aux États-Unis mais a eu plus de succès dans le reste du monde, rapportant environ 52 375 000 $ au box-office mondial, dont seulement 19 075 000 $ en Amérique du Nord, pour un budget de 26 000 000 $. En France, il a réalisé 332 341 entrées.','2022-05-20 17:31:48',9886),
(25,'Combattre le futur','naiara','Alors que les agents Fox Mulder et Dana Scully sont affectés à Dallas, ils sont confrontés à un attentat terroriste contre un bâtiment fédéral. Leurs investigations, aidés d\'un médecin paranoïaque, les mèneront à la découverte d\'indices d\'un complot mondial, et de l\'existence d\'un virus mortel, d\'origine extraterrestre. Ils seront confrontés au puissant Syndicat, et notamment à L\'homme à la cigarette, bien décidé à compromettre leur enquête et à les empêcher de découvrir la vérité. Mulder et Scully la poursuivront néanmoins du Texas à l\'Antarctique, jusqu\'à découvrir de terribles secrets. ','2022-05-20 17:47:11',846);
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(255) NOT NULL,
  `password` char(255) NOT NULL,
  `email` char(255) NOT NULL,
  `token` char(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `token` (`token`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'naiara','naiara','naiara@naiara.com',' bmFpYXJhbmFpYXJh'),
(6,'pamela666','pamela666','pam@pam.com',' cGFtZWxhNjY2cGFtZWxhNjY2');
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

