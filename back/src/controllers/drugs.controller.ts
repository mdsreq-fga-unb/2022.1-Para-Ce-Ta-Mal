import { Request, Response } from "express";
import drugsService from "../services/drugs.service.js";

export async function getDrugs(req: Request, res: Response) {
  const dbDrugs = await drugsService.getDrugs();

  res.send(dbDrugs);
}

export async function getOneDrug(req: Request, res: Response) {
  const { id } = req.params;

  const dbDrug = await drugsService.getOneDrug(Number(id));

  res.send(dbDrug);
}

export async function createDrug(req: Request, res: Response) {
  const { body } = req;

  await drugsService.createDrug(body);

  res.sendStatus(200);
}

export async function updateDrugById(req: Request, res: Response) {
  const { body } = req;

  const id = Number(req.params.id);

  await drugsService.updateDrugById(id, body);

  res.sendStatus(200);
}

export async function deleteDrugById(req: Request, res: Response) {
  const id = Number(req.params.id);

  await drugsService.deleteDrugById(id);

  res.sendStatus(200);
}
