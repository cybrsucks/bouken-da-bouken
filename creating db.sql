CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `user` (`id`, `username`, `age`, `password`, `email`) VALUES (1, 'admin', 20, 'wz', 'admin@min.com');
INSERT INTO `user` (`id`, `username`, `age`, `password`, `email`) VALUES (2, 'test', 22, 'test', 'test@test.com');
INSERT INTO `user` (`id`, `username`, `age`, `password`, `email`) VALUES (3, 'vest', 23, 'vest', 'vest@test.com');

select * from user;
delete from user where id > 0;
