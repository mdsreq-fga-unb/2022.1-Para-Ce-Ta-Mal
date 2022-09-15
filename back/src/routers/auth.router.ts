import { Router } from "express";
import authController from "../controllers/auth.controller.js";
import { ensureAuthentication } from "../middlewares/ensure-authentication.middleware.js";

const authRouter = Router();

authRouter.get("/check-token", ensureAuthentication, (req, res) =>
  res.sendStatus(200)
);

authRouter.post("/sign-up", authController.signUp);

authRouter.post("/sign-in", authController.signIn);

export default authRouter;
