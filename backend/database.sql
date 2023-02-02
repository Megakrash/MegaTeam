-- Active: 1667902495509@@127.0.0.1@3306@megateam


-- -----------------------------------------------------
-- Schema megateam
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `megateam` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `megateam` ;

-- -----------------------------------------------------
-- Table `megateam`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `megateam`.`user` ;

CREATE TABLE IF NOT EXISTS `megateam`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `avatar` VARCHAR(255) NULL DEFAULT NULL,
  `nickname` VARCHAR(80) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `token` VARCHAR(256) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;