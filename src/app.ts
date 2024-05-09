import express, { json } from "express";
import router from "./routes/routes";
import cors from "cors";

function createApp() {
    const appExpress = express();

    appExpress.use(json());

    appExpress.use("/api/v1", router);
    appExpress.use(cors());

    return appExpress;
}

export default createApp;
