/*
  Warnings:

  - You are about to drop the column `number` on the `chapters` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "chapters_number_storyId_key";

-- AlterTable
ALTER TABLE "chapters" DROP COLUMN "number";
