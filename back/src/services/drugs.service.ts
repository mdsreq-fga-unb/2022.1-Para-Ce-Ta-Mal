import { CreateDrugData } from "../interfaces/drugs.interface.js";
import * as drugsRepository from "../repositories/drugs.repository.js";

export async function getAllDrugs() {
  return drugsRepository.getAllDrugs();
}

export async function createDrug(drugData: CreateDrugData) {
  return drugsRepository.createDrug(drugData);
}

export async function updateDrugById(id: number, drugData: CreateDrugData) {
  return drugsRepository.updateDrugById(id, drugData);
}

export async function deleteDrugById(id: number) {
  return drugsRepository.deleteDrugById(id);
}
