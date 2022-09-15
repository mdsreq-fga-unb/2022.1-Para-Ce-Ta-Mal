import { CreateDrugData } from "../interfaces/drugs.interface.js";
import drugsRepository from "../repositories/drugs.repository.js";

async function getDrugs() {
  return drugsRepository.getDrugs();
}

async function createDrug(drugData: CreateDrugData) {
  return drugsRepository.createDrug(drugData);
}

async function updateDrugById(id: number, drugData: CreateDrugData) {
  return drugsRepository.updateDrugById(id, drugData);
}

async function deleteDrugById(id: number) {
  return drugsRepository.deleteDrugById(id);
}

export default { getDrugs, createDrug, updateDrugById, deleteDrugById };
