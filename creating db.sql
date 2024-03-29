
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `encryptedPassword` varchar(255) NOT NULL,
  `groupings` longtext,
  `active` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  CREATE TABLE `studydb`.`group` (
  `groupID` int NOT NULL AUTO_INCREMENT,
  `groupName` varchar(45) NOT NULL,
  PRIMARY KEY (`groupID`),
  UNIQUE KEY `id_UNIQUE` (`groupID` ASC) VISIBLE);

-- admin, Apple2022!
INSERT INTO `user` (`id`, `username`, `email`, `encryptedPassword`, `groupings`, `active`)  
VALUES (1, 'admin', 'admin@min.com', '301a25fb3f7d45a31cfaf7819f7fee4b3bd8318fdc14f232d37504f2371ebac5', 'ADMIN,G1,G2', 1);
INSERT INTO `user` (`id`, `username`, `email`, `encryptedPassword`, `groupings`, `active`) 
VALUES (2, 'user1', 'user1@grpOne.com', '301a25fb3f7d45a31cfaf7819f7fee4b3bd8318fdc14f232d37504f2371ebac5', 'G1', 1);
INSERT INTO `user` (`id`, `username`, `email`, `encryptedPassword`, `groupings`, `active`) 
VALUES (3, 'user2', 'user2@grpOne.com', '301a25fb3f7d45a31cfaf7819f7fee4b3bd8318fdc14f232d37504f2371ebac5', 'G1,G2', 1);
INSERT INTO `user` (`id`, `username`, `email`, `encryptedPassword`, `groupings`, `active`) 
VALUES (4, 'user3', 'user3@grpTwo.com', '301a25fb3f7d45a31cfaf7819f7fee4b3bd8318fdc14f232d37504f2371ebac5', 'G2', 1);
INSERT INTO `user` (`id`, `username`, `email`, `encryptedPassword`, `groupings`, `active`) 
VALUES (5, 'user4', 'user4@grpTwo.com', '301a25fb3f7d45a31cfaf7819f7fee4b3bd8318fdc14f232d37504f2371ebac5', 'G2', 0);
INSERT INTO `user` (`id`, `username`, `email`, `encryptedPassword`, `groupings`, `active`) 
VALUES (6, 'user5', 'user5@grpThree.com', '301a25fb3f7d45a31cfaf7819f7fee4b3bd8318fdc14f232d37504f2371ebac5', 'G3', 0);

-- UPDATE user SET role = CONCAT(groupings, ',intelligent') where username = 'user55';

delete from user where id > 0;
select * from studydb.group;
select * from studydb.user;

SELECT COUNT(username) as countUsername FROM user WHERE username = 'admin';

SELECT username, groupings, active FROM studydb.user;
SELECT count(*) from user;


select * from studydb.usergroup;

-- create new usergroup usergroup
INSERT INTO `usergroup` (`groupID`, `groupName`, `username`, `role`) 
VALUES (1, 'administrator', 'admin', 'admin');

-- create new group 
INSERT INTO `group` (`groupID`, `groupName`) 
VALUES (1, 'administrator');


  


SELECT * FROM user where username = "admin" and password = "wz";
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;

