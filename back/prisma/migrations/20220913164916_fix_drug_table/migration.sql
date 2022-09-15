/*
  Warnings:

  - A unique constraint covering the columns `[ean]` on the table `drugs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "drugs_ean_key" ON "drugs"("ean");
