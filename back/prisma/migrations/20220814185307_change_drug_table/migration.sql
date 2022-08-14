/*
  Warnings:

  - You are about to drop the column `composition` on the `drugs` table. All the data in the column will be lost.
  - You are about to drop the column `miligram` on the `drugs` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `drugs` table. All the data in the column will be lost.
  - Added the required column `category` to the `drugs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ean` to the `drugs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchasePrice` to the `drugs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salePrice` to the `drugs` table without a default value. This is not possible if the table is not empty.
  - Made the column `amount` on table `drugs` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "drugs" DROP COLUMN "composition",
DROP COLUMN "miligram",
DROP COLUMN "price",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "ean" TEXT NOT NULL,
ADD COLUMN     "fixedCommissionValue" INTEGER,
ADD COLUMN     "maxDiscountPercentage" DOUBLE PRECISION,
ADD COLUMN     "percentageOfCommission" DOUBLE PRECISION,
ADD COLUMN     "purchasePrice" INTEGER NOT NULL,
ADD COLUMN     "salePrice" INTEGER NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "amount" SET NOT NULL;
