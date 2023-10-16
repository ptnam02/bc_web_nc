import express from "express";
import ApiController from "../controllers/ApiController";
import { config } from "dotenv";
const Router = express.Router();
const initApiRoute = (app) => {
  //Thêm tin tức
    //Đăng nhập
    Router.post("/api/v1/login", ApiController.ApiLogin);
    //Thêm tin tức
    Router.post("/api/v1/insertNews", ApiController.insertNews);
    //Sửa tin tức
    Router.post("/api/v1/updateNews", ApiController.updateNews);
    //Xóa tin tức
    Router.get("/api/v1/deleteNews/:idNews", ApiController.deleteNews);

  return app.use("/", Router);
};
export default initApiRoute;