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

INSERT INTO
  `megateam`.`user` (nickname, email, password)
VALUES
  (
    'Megakrash',
    'jscattolini@gmail.com',
    '$argon2id$v=19$m=65536,t=5,p=1$cSIurvo0WyWRKz8YQTO7TQ$wwaSAUWFZrnJxtZIKIMujmTTXagxQN2CbsoaoWscDtM'
  ),
  (
    'Patator',
    'jonathanscattolini@hotmail.com',
    '$argon2id$v=19$m=65536,t=5,p=1$GCcGZUbvHOtx8jh90s8DzA$GBLdNKCtgMGpXchvG5YBcqGc1pyFKa9VfS9OKYJZuac'
  );

-- -----------------------------------------------------
-- Table `megateam`.`team`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `megateam`.`team` ;

CREATE TABLE IF NOT EXISTS `megateam`.`team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `h1` INT NULL DEFAULT NULL,
  `h2` INT NULL DEFAULT NULL,
  `h3` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `megateam`.`team_user`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `megateam`.`team_user` ;

CREATE TABLE IF NOT EXISTS `megateam`.`team_user` (
  `team_id` INT NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  INDEX `fk_user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_team_id_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `megateam`.`user` (`id`),
  CONSTRAINT `fk_team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `megateam`.`team` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `megateam`.`hero`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `megateam`.`hero` ;

CREATE TABLE IF NOT EXISTS `megateam`.`hero` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `url` VARCHAR(255) NULL DEFAULT NULL,
  `intelligence` INT NULL DEFAULT NULL,
  `strength` INT NULL DEFAULT NULL,
  `speed` INT NULL DEFAULT NULL,
  `durability` INT NULL DEFAULT NULL,
  `power` INT NULL DEFAULT NULL,
  `combat` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;