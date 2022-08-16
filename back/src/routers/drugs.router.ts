import { Router } from "express";
import drugsController from "../controllers/drugs.controller.js";
import { validateSchema } from "../middlewares/validate-schema.middleware.js";
import { drugSchema } from "../schemas/drugs.schema.js";

const drugRouter = Router();

drugRouter.get("/drugs", drugsController.getDrugs);

drugRouter.post(
  "/drugs",
  validateSchema(drugSchema),
  drugsController.createDrug
);

drugRouter.delete("/drugs/:id", drugsController.deleteDrug);

export default drugRouter;
