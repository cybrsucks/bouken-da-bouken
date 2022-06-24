CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `encryptedPassword` varchar(100) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  `active` int NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `user` (`id`, `username`, `age`, `encryptedPassword`, `email`, `active`) VALUES (1, 'admin', 20, '$2a$10$tIzGm1B1cgIhlW13dukfd.wZMDKIWrhyC2hGL3AnTsknMWvmTR.MW', 'admin@min.com', 1);
INSERT INTO `user` (`id`, `username`, `age`, `encryptedPassword`, `email`, `active`) VALUES (2, 'test', 22, '$2a$10$ZS1jbeW16OAzm1trFxP6LOQmnPXIloilqjnob0fD09sxsaHvjIjxe', 'test@test.com', 1);
INSERT INTO `user` (`id`, `username`, `age`, `encryptedPassword`, `email`, `active`) VALUES (3, 'best', 23, '$2a$10$wAZdxjwiTZ0DtkKuBbSge.MzE8fTS1bli6/NwiJOZVncEGvjjCTZK', 'best@test.com', 1);
INSERT INTO `user` (`id`, `username`, `age`, `encryptedPassword`, `email`, `active`) VALUES (4, 'west', 24, 'west', 'west@test.com', 0);

delete from user where id > 2;
select * from user;


SELECT * FROM user where username = "admin" and password = "wz";
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;

