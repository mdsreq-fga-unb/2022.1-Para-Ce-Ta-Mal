import { Router } from "express";
import * as drugsController from "../controllers/drugs.controller.js";
import { ensureAuthentication } from "../middlewares/ensure-authentication.middleware.js";
import { validateSchema } from "../middlewares/validate-schema.middleware.js";
import { drugSchema } from "../schemas/drugs.schema.js";

const drugRouter = Router();

drugRouter.get("/", ensureAuthentication, drugsController.getDrugs);

drugRouter.get("/:id", ensureAuthentication, drugsController.getOneDrug);

drugRouter.post(
  "/",
  ensureAuthentication,
  validateSchema(drugSchema),
  drugsController.createDrug
);

drugRouter.put("/:id", ensureAuthentication, drugsController.updateDrugById);

drugRouter.delete("/:id", ensureAuthentication, drugsController.deleteDrugById);

export default drugRouter;
