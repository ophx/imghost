-- AlterTable
ALTER TABLE `user` ADD COLUMN `discordId` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `discordUsername` VARCHAR(191) NOT NULL DEFAULT '';