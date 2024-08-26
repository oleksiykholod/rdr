/*
  Warnings:

  - You are about to drop the column `category` on the `accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "category";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'В';
