import express from "express";
import router from "./routers";

const app = express();

app.use(router);

export default app;
