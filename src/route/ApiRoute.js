import express from "express";
import ApiController from "../controllers/ApiController";
import { config } from "dotenv";
const Router = express.Router();
const initApiRoute = (app) => {
    Router.post("/api/v1/register", ApiController.ApiRegister);
    Router.post("/api/v1/login", ApiController.ApiLogin);
    Router.post("/api/v1/insertNews", ApiController.insertNews);
    Router.post("/api/v1/updateNews", ApiController.updateNews);
    Router.get("/api/v1/deleteNews/", ApiController.deleteNews);

  return app.use("/", Router);
};
export default initApiRoute;