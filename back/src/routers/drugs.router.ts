import { Router } from "express";
import * as drugsController from "../controllers/drugs.controller.js";
import { ensureAuthentication } from "../middlewares/ensure-authentication.middleware.js";
import { validateSchema } from "../middlewares/validate-schema.middleware.js";
import { drugSchema } from "../schemas/drugs.schema.js";

const drugRouter = Router();

drugRouter.get("/", ensureAuthentication, drugsController.getDrugs);

drugRouter.post("/", validateSchema(drugSchema), drugsController.createDrug);

drugRouter.put("/:id", drugsController.updateDrugById);

drugRouter.delete("/:id", drugsController.deleteDrugById);

export default drugRouter;
