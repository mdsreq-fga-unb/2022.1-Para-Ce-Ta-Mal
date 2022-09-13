import { prisma } from "../config/database.js";
import { CreateDrugData } from "../interfaces/drugs.interface.js";

async function getDrugs() {
  return prisma.drug.findMany();
}

async function createDrug(drugData: CreateDrugData) {
  return prisma.drug.create({
    data: { ...drugData },
  });
}

async function updateDrugById(id: number, data: CreateDrugData) {
  return prisma.drug.update({
    where: { id },
    data,
  });
}

async function deleteDrugById(id: number) {
  return prisma.drug.delete({
    where: { id },
  });
}

async function findDrugByEAN(ean: number) {
  return prisma.drug.findUnique({
    where: {},
  });
}

export default {
  getDrugs,
  createDrug,
  updateDrugById,
  deleteDrugById,
  findDrugByEAN,
};
