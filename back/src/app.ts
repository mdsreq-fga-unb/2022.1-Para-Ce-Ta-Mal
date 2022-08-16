import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import router from "./routers/index.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";

const app = express();

app.use(json());
app.use(cors());
app.use(errorHandler);
app.use(router);

export default app;
