import { Router } from "express";
import authRouter from "./auth.router.js";
import drugRouter from "./drugs.router.js";

const router = Router();

router.use("/drugs", drugRouter);
router.use("/auth", authRouter);

export default router;
