
CREATE TABLE `studydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NULL,
  `encryptedPassword` VARCHAR(255) NOT NULL,
  `token` VARCHAR(255) DEFAULT NULL,
  `active` int NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);
  
  CREATE TABLE `studydb`.`group` (
  `groupID` int NOT NULL AUTO_INCREMENT,
  `groupName` varchar(45) NOT NULL,
  PRIMARY KEY (`groupID`),
  UNIQUE KEY `id_UNIQUE` (`groupID` ASC) VISIBLE);

CREATE TABLE `usergroup` (
  `groupID` int NOT NULL,
  `groupName` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `groupID_UNIQUE` (`groupID`),
  CONSTRAINT `groupID` FOREIGN KEY (`groupID`) REFERENCES `group` (`groupID`),
  CONSTRAINT `username` FOREIGN KEY (`username`) REFERENCES `user` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `user` (`id`, `username`, `email`, `encryptedPassword`, `token`, `active`) 
VALUES (1, 'admin', 'admin@min.com', 'e5584918cd080eecde3a8847976918746781718352dd0ee5d998764e349d8a8d', '', 1);
INSERT INTO `user` (`id`, `username`, `email`, `encryptedPassword`, `token`, `active`) 
VALUES (2, 'user1', 'user1@grAup.com', 'e5584918cd080eecde3a8847976918746781718352dd0ee5d998764e349d8a8d', '', 1);
INSERT INTO `user` (`id`, `username`, `email`, `encryptedPassword`, `token`, `active`) 
VALUES (3, 'user2', 'user2@grAup.com', 'e5584918cd080eecde3a8847976918746781718352dd0ee5d998764e349d8a8d', '', 1);
INSERT INTO `user` (`id`, `username`, `email`, `encryptedPassword`, `token`, `active`) 
VALUES (4, 'user3', 'user3@grBup.com', 'e5584918cd080eecde3a8847976918746781718352dd0ee5d998764e349d8a8d', '', 1);
INSERT INTO `user` (`id`, `username`, `email`, `encryptedPassword`, `token`, `active`) 
VALUES (5, 'user4', 'user4@grBup.com', 'e5584918cd080eecde3a8847976918746781718352dd0ee5d998764e349d8a8d', '', 0);

delete from user where id > 0;
select * from studydb.group;
select * from studydb.user;
select * from studydb.usergroup;

-- create new usergroup 
INSERT INTO `usergroup` (`groupID`, `groupName`, `username`, `role`) 
VALUES (1, 'administrator', 'admin', 'admin');

-- create new group 
INSERT INTO `group` (`groupID`, `groupName`) 
VALUES (1, 'administrator');


  


SELECT * FROM user where username = "admin" and password = "wz";
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;

