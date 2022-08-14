import express from "express";
import router from "./routers/index.js";

const app = express();

app.use(router);

export default app;
