/*
  Warnings:

  - You are about to drop the column `userId` on the `items` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `items` DROP FOREIGN KEY `Items_userId_fkey`;

-- AlterTable
ALTER TABLE `items` DROP COLUMN `userId`,
    MODIFY `description` TEXT NOT NULL;

-- DropTable
DROP TABLE `user`;
