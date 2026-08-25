-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: localhost    Database: chill_db
-- ------------------------------------------------------
-- Server version	8.0.45

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
-- Dumping data for table `cast`
--

LOCK TABLES `cast` WRITE;
/*!40000 ALTER TABLE `cast` DISABLE KEYS */;
/*!40000 ALTER TABLE `cast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cast_mapping`
--

LOCK TABLES `cast_mapping` WRITE;
/*!40000 ALTER TABLE `cast_mapping` DISABLE KEYS */;
/*!40000 ALTER TABLE `cast_mapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `creator`
--

LOCK TABLES `creator` WRITE;
/*!40000 ALTER TABLE `creator` DISABLE KEYS */;
/*!40000 ALTER TABLE `creator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `creator_mapping`
--

LOCK TABLES `creator_mapping` WRITE;
/*!40000 ALTER TABLE `creator_mapping` DISABLE KEYS */;
/*!40000 ALTER TABLE `creator_mapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `daftar_saya`
--

LOCK TABLES `daftar_saya` WRITE;
/*!40000 ALTER TABLE `daftar_saya` DISABLE KEYS */;
INSERT INTO `daftar_saya` VALUES (4,'2026-08-05 18:20:30',3,14),(5,'2026-08-05 19:49:53',3,1),(6,'2026-08-05 19:50:42',3,16),(7,'2026-08-05 19:51:09',3,18),(8,'2026-08-05 19:51:18',3,13),(9,'2026-08-05 20:32:14',3,20),(10,'2026-08-05 20:32:23',3,21),(11,'2026-08-05 20:32:24',3,32);
/*!40000 ALTER TABLE `daftar_saya` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `episode_movie`
--

LOCK TABLES `episode_movie` WRITE;
/*!40000 ALTER TABLE `episode_movie` DISABLE KEYS */;
/*!40000 ALTER TABLE `episode_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `genre_mapping`
--

LOCK TABLES `genre_mapping` WRITE;
/*!40000 ALTER TABLE `genre_mapping` DISABLE KEYS */;
/*!40000 ALTER TABLE `genre_mapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `paket`
--

LOCK TABLES `paket` WRITE;
/*!40000 ALTER TABLE `paket` DISABLE KEYS */;
/*!40000 ALTER TABLE `paket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pembayaran`
--

LOCK TABLES `pembayaran` WRITE;
/*!40000 ALTER TABLE `pembayaran` DISABLE KEYS */;
/*!40000 ALTER TABLE `pembayaran` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `series_film`
--

LOCK TABLES `series_film` WRITE;
/*!40000 ALTER TABLE `series_film` DISABLE KEYS */;
INSERT INTO `series_film` VALUES (1,'dont-look-up-portrait.jpg','dont-look-up-landscape.jpg','Don\'t Look Up',2021,'film','17+','Dua astronom rendahan harus melakukan tur media raksasa untuk memperingatkan umat manusia tentang komet yang mendekat dan akan menghancurkan planet Bumi.'),(2,'all-of-us-are-dead-portrait.jpg','all-of-us-are-dead-landscape.jpg','All of Us Are Dead',2022,'series','17+','Terperangkap di sekolah yang dilanda wabah virus zombi, para siswa harus berjuang untuk bertahan hidup atau berubah menjadi salah satu yang terinfeksi.'),(3,'blue-lock-portrait.jpg','blue-lock-landscape.jpg','Blue Lock',2022,'series','13+','Untuk memenangkan Piala Dunia, Asosiasi Sepak Bola Jepang mengumpulkan 300 penyerang muda berbakat dalam program pelatihan ketat dan terisolasi bernama Blue Lock.'),(4,'a-man-called-otto-portrait.jpg','a-man-called-otto-landscape.jpg','A Man Called Otto',2022,'film','13+','Otto adalah seorang pria pemarah yang menyerah pada kehidupannya. Namun, pertemanannya dengan tetangga baru yang ceria perlahan mengubah pandangannya tentang dunia.'),(5,'avatar-portrait.jpg','avatar-landscape.jpg','Avatar: The Way of Water',2022,'film','13+','Jake Sully tinggal bersama keluarga barunya di planet Pandora. Ketika ancaman lama kembali, Jake harus bekerja sama dengan Neytiri dan pasukan ras Na\'vi untuk melindungi planet mereka dari eksploitasi.'),(6,'rio-portrait.jpg','rio-landscape.jpg','Rio',2011,'film','SU','Blu, seekor burung macaw langlang yang jinak, melakukan perjalanan dari Amerika ke Rio de Janeiro untuk bertemu Jewel, satu-satunya betina dari spesiesnya yang tersisa.'),(7,'ted-lasso-portrait.jpg','ted-lasso-landscape.jpg','Ted Lasso',2020,'series','17+','Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke London untuk mengelola AFC Richmond, tim sepak bola Liga Utama Inggris yang kesulitan.'),(8,'alice-in-borderland-portrait.jpg','alice-in-borderland-landscape.jpg','Alice in Borderland',2020,'series','17+','Seorang pemuda yang terobsesi dengan video game menemukan dirinya berada di versi Tokyo yang sepi, di mana ia harus bersaing dalam berbagai permainan mematikan untuk bertahan hidup.'),(9,'suzume-portrait.jpg','suzume-landscape.jpg','Suzume no Tojimari',2022,'film','13+','Kisah perjalanan Suzume, seorang gadis berusia 17 tahun, yang harus melintasi penjuru Jepang untuk menutup Pintu Bencana yang terbuka dan mengancam keselamatan dunia.'),(10,'jurassic-world-portrait.jpg','jurassic-world-landscape.jpg','Jurassic World Dominion',2022,'film','13+','Empat tahun setelah Isla Nublar hancur, dinosaurus kini hidup berdampingan dengan manusia di seluruh dunia. Keseimbangan rapuh ini akan menentukan nasib umat manusia.'),(11,'sonic-2-portrait.jpg','sonic-2-landscape.jpg','Sonic the Hedgehog 2',2022,'film','SU','Sonic bekerja sama dengan sahabat barunya, Tails, untuk mencegah Dr. Robotnik dan Knuckles dari menemukan zamrud gaib yang memiliki kekuatan untuk menghancurkan peradaban.'),(12,'big-hero-6-portrait.jpg','big-hero-6-landscape.jpg','Big Hero 6',2014,'film','SU','Hiro Hamada, seorang anak ajaib di bidang robotika, membentuk tim pahlawan super bersama robot perawat ciptaan kakaknya, Baymax, untuk mengungkap kejahatan di San Fransokyo.'),(13,'duty-after-school-portrait.jpg','duty-after-school-landscape.jpg','Duty After School',2023,'series','17+','Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.'),(14,'missing-portrait.jpg','missing-landscape.jpg','Missing',2023,'film','13+','Ketika ibunya menghilang secara misterius saat berlibur di Kolombia, June menggunakan semua teknologi digital yang bisa diaksesnya untuk melacak jejaknya dari ribuan mil jauhnya.'),(15,'the-tomorrow-war-portrait.jpg','the-tomorrow-war-landscape.jpg','The Tomorrow War',2021,'film','13+','Sekelompok penjelajah waktu tiba dari tahun 2051 untuk menyampaikan pesan mendesak: umat manusia di masa depan sedang kalah dalam perang global melawan spesies alien mematikan.'),(16,'antman-portrait.jpg','-landscape.jpg','Ant-Man: Quantumania',2023,'film','13+','Scott Lang dan Hope Van Dyne menjelajahi Alam Kuantum, berinteraksi dengan makhluk aneh, dan memulai petualangan yang mendorong batas-batas dari apa yang mereka pikir mungkin.'),(17,'guardians-of-the-galaxy-portrait.jpg','guardians-of-the-galaxy-landscape.jpg','Guardians of the Galaxy Vol. 3',2023,'film','13+','Masih berduka karena kehilangan Gamora, Peter Quill harus mengumpulkan timnya untuk mempertahankan alam semesta dan menyelamatkan nyawa salah satu sahabat terbaik mereka.'),(18,'the-little-mermaid-portrait.jpg','the-little-mermaid-landscape.jpg','The Little Mermaid',2023,'film','SU','Ariel, seorang putri duyung muda yang memiliki rasa ingin tahu tinggi, membuat kesepakatan dengan penyihir laut demi mendapatkan kaki manusia dan menjelajahi dunia daratan.'),(19,'my-perfect-stranger-portrait.jpg','my-perfect-stranger-landscape.jpg','My Perfect Stranger',2023,'series','17+','Dua orang yang secara tidak sengaja terlempar ke masa lalu tahun 1987 menyadari bahwa tujuan mereka saling terhubung saat mereka menyelidiki serangkaian pembunuhan.'),(20,'shazam-portrait.jpg','shazam-landscape.jpg','Shazam! Fury of the Gods',2023,'film','13+','Billy Batson dan saudara-saudara asuhnya yang memiliki kekuatan super harus kembali beraksi untuk melawan kelompok dewa kuno yang dikenal sebagai Daughters of Atlas.'),(21,'fast-x-portrait.jpg','fast-x-landscape.jpg','Fast X',2023,'film','13+','Dom Toretto dan keluarganya harus menghadapi musuh paling mematikan yang pernah mereka temui: ancaman yang datang dari masa lalu untuk menghancurkan segalanya yang Dom cintai.'),(22,'the-batman-portrait.jpg','the-batman-landscape.jpg','The Batman',2022,'film','13+','Ketika seorang pembunuh berantai misterius mulai menargetkan elit politik Gotham, Batman terpaksa menyelidiki korupsi tersembunyi yang melibatkan keluarganya sendiri.'),(23,'megan-portrait.jpg','megan-landscape.jpg','M3GAN',2022,'film','13+','Seorang insinyur robotika menciptakan boneka AI yang dirancang sebagai pelindung anak, tetapi sistem boneka tersebut mulai bertindak ekstrem demi melindungi pemiliknya.'),(24,'my-hero-academia-portrait.jpg','my-hero-academia-landscape.jpg','My Hero Academia',2016,'series','13+','Di dunia di mana memiliki kekuatan super adalah hal yang wajar, seorang anak laki-laki yang lahir tanpa kekuatan bertekad mendaftar di akademi pahlawan yang paling bergengsi.'),(25,'doctor-strange-portrait.jpg','doctor-strange-landscape.jpg','Doctor Strange in the Multiverse of Madness',2022,'film','13+','Doctor Strange bekerja sama dengan seorang gadis remaja yang memiliki kemampuan melompati berbagai realitas multiverse untuk melindungi alam semesta dari penyihir sakti yang lepas kendali.'),(26,'black-adam-portrait.jpg','black-adam-landscape.jpg','Black Adam',2022,'film','13+','Hampir 5.000 tahun setelah dianugerahi kekuatan para dewa dan segera dipenjara, Black Adam dibebaskan dari makamnya, siap untuk melepaskan bentuk keadilannya sendiri ke dunia modern.'),(27,'the-devil-all-the-time-portrait.jpg','the-devil-all-the-time-landscape.jpg','The Devil All the Time',2020,'film','17+','Karakter-karakter gelap dan berbahaya saling bersilangan di sekitar seorang pemuda yang bertekad melindungi orang yang ia cintai di sebuah kota terpencil pasca-Perang Dunia II.'),(28,'stuart-little-portrait.jpg','stuart-little-landscape.jpg','Stuart Little',1999,'film','SU','Keluarga Little membuat keputusan tak terduga dengan mengadopsi seekor tikus cerdas bernama Stuart, memicu persaingan kocak dengan kucing peliharaan mereka, Snowbell.'),(29,'baymax-portrait.jpg','baymax-landscape.jpg','Baymax!',2022,'series','SU','Baymax, pendamping robot medis yang polos dan menggemaskan, kembali berpetualang menavigasi jalanan kota San Fransokyo untuk membantu orang-orang di sekitarnya.'),(30,'dilan-portrait.jpg','dilan-landscape.jpg','Dilan 1991',2019,'film','13+','Kelanjutan kisah asmara masa SMA antara Dilan dan Milea. Kini, mereka harus menghadapi berbagai ujian berat, mulai dari ego, kesetiaan, hingga masa depan hubungan mereka.'),(31,'happiness-portrait.jpg','happiness-landscape.jpg','Happiness',2021,'series','17+','Penghuni gedung apartemen bertingkat tinggi harus berjuang untuk bertahan hidup ketika wabah penyakit menular baru yang mematikan mengubah korbannya menjadi zombie haus darah.'),(32,'spiderman-across-portrait.jpg','spiderman-across-landscape.jpg','Spider-Man: Across the Spider-Verse',2023,'film','SU','Miles Morales melesat melintasi Multiverse, di mana ia bertemu tim Spider-People yang saling berselisih tentang cara menangani ancaman baru yang bisa menghancurkan semua semesta.');
/*!40000 ALTER TABLE `series_film` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'Aidil Hashfi','GreenFlag','karasubang@gmail.com','$2b$10$cSsoi1429Y9Ezh/qLJHxDOEnxyCphTpYq//Lh/062DvyEt17udy.q',NULL,1,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-25 12:55:12
