/*
  Warnings:

  - You are about to drop the column `accountId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropIndex
DROP INDEX "User_accountId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "accountId",
ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'B',
ADD COLUMN     "image" TEXT,
ADD COLUMN     "provider" TEXT,
ADD COLUMN     "providerAccountId" TEXT;

-- DropTable
DROP TABLE "Account";
