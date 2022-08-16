import { prisma } from "../config/database.js";
import { CreateDrugData } from "../interfaces/drugs.interface.js";

export async function getAllDrugs() {
  return prisma.drug.findMany();
}

export async function createDrug(drugData: CreateDrugData) {
  return prisma.drug.create({
    data: { ...drugData },
  });
}

export async function updateDrugById(id: number, data: CreateDrugData) {
  return prisma.drug.update({
    where: { id },
    data,
  });
}

export async function deleteDrugById(id: number) {
  return prisma.drug.delete({
    where: { id },
  });
}
