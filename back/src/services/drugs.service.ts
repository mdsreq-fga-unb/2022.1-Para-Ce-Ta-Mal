import { CreateDrugData } from "../interfaces/drugs.interface.js";
import drugsRepository from "../repositories/drugs.repository.js";

async function getDrugs() {}

async function createDrug(drugData: CreateDrugData) {
  return drugsRepository.createDrug(drugData);
}

async function deleteDrug() {}
export default { getDrugs, createDrug, deleteDrug };
