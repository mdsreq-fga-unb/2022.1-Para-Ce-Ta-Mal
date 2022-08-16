import { Router } from "express";
import drugRouter from "./drugs.router.js";

const router = Router();

router.use(drugRouter);

export default router;
