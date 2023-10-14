/*
  Warnings:

  - You are about to drop the column `invitedBy` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `invites` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `invitedBy`;

-- DropTable
DROP TABLE `invites`;
