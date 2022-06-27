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


INSERT INTO `user` (`id`, `username`, `age`, `encryptedPassword`, `email`, `active`) VALUES (1, 'admin', 20, 'e5584918cd080eecde3a8847976918746781718352dd0ee5d998764e349d8a8d', 'admin@min.com', 1);
INSERT INTO `user` (`id`, `username`, `age`, `encryptedPassword`, `email`, `active`) VALUES (2, 'test', 22, '0329a06b62cd16b33eb6792be8c60b158d89a2ee3a876fce9a881ebb488c0914', 'test@test.com', 1);
INSERT INTO `user` (`id`, `username`, `age`, `encryptedPassword`, `email`, `active`) VALUES (3, 'best', 23, 'd901c7b6ebb76b0fda2538a7371d7927d9fc186ef2bbf4f97d07a6d74583e027', 'best@test.com', 1);
INSERT INTO `user` (`id`, `username`, `age`, `encryptedPassword`, `email`, `active`) VALUES (4, 'west', 24, 'be8de223c95e90146525d13c6edeb62c31dcb93b3b32ad0d977495ff2a53c668', 'west@test.com', 0);

delete from user where id > 0;
select * from user;


SELECT * FROM user where username = "admin" and password = "wz";
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;

