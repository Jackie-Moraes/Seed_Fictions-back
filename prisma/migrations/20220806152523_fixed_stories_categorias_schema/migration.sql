/*
  Warnings:

  - You are about to drop the column `categoryId` on the `storiesCategories` table. All the data in the column will be lost.
  - Added the required column `subCategoryId` to the `storiesCategories` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "storiesCategories" DROP CONSTRAINT "storiesCategories_categoryId_fkey";

-- AlterTable
ALTER TABLE "storiesCategories" DROP COLUMN "categoryId",
ADD COLUMN     "subCategoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "storiesCategories" ADD CONSTRAINT "storiesCategories_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "subCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
