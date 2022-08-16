import { prisma } from "../config/database.js";
import { CreateDrugData } from "../interfaces/drugs.interface.js";

async function getDrugs() {}

async function createDrug(drugData: CreateDrugData) {
  return prisma.drug.create({
    data: { ...drugData },
  });
}

async function deleteDrug() {}
export default { getDrugs, createDrug, deleteDrug };
