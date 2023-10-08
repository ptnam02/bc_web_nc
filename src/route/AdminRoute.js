import express from "express";
import { config } from "dotenv";
import homeController from "./../controllers/admin/homeController";
import newsController from "../controllers/admin/newsController";
import UserController from "../controllers/admin/UserController";
const Router = express.Router();
const isAuthenticatedAdmin = (req, res, next) => {
  if (req.session && req.session.admin) {
    return next();
  }
  res.redirect("/admin/login"); // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
};
const initAdminRoute = (app) => {
  //router index
  Router.get("/admin", isAuthenticatedAdmin, homeController.home);
  Router.get("/admin/Dashboard", isAuthenticatedAdmin, homeController.home);

  //route login
  Router.get("/admin/login", homeController.login);
  Router.post("/admin/checkLogin", homeController.checkLogin);

  //logout
  Router.get("/admin/logout", homeController.logout);
  //news
  Router.get("/admin/createNews",isAuthenticatedAdmin, newsController.createNews);
  Router.get("/admin/listNews",isAuthenticatedAdmin, newsController.listNews);
  Router.get("/admin/listNews/:page",isAuthenticatedAdmin, newsController.listNews);
  Router.get("/admin/detailNews/:idNews",isAuthenticatedAdmin, newsController.detailNews);
  Router.get("/admin/editNews/:idNews",isAuthenticatedAdmin, newsController.editNews);
  Router.get("/admin/deteleNews/:idNews",isAuthenticatedAdmin, newsController.deleteNews);
  Router.get("/admin/restore/:idNews",isAuthenticatedAdmin, newsController.listNews);
  Router.post("/admin/insertNews",isAuthenticatedAdmin, newsController.insertNews);
  Router.post("/admin/updateNews",isAuthenticatedAdmin, newsController.updateNews);

  //user
  Router.get("/admin/newUser",isAuthenticatedAdmin, UserController.getAllUsers);
  Router.get("/admin/listUser",isAuthenticatedAdmin, UserController.getAllUsers);
  Router.get("/admin/listUser/:page",isAuthenticatedAdmin, UserController.getAllUsers);
  Router.get("/admin/detailUser/:username",isAuthenticatedAdmin, UserController.detailUser);
  Router.get("/admin/editUser/:username",isAuthenticatedAdmin, UserController.editUser);
  Router.post("/admin/updateUser",isAuthenticatedAdmin, UserController.updateUser);
  Router.post("/admin/insertUser",isAuthenticatedAdmin, UserController.insertUser);
  Router.get("/admin/createUser",isAuthenticatedAdmin, UserController.createNewUser);
  Router.get("/admin/deleteUser/:username",isAuthenticatedAdmin, UserController.deleteUser);
  return app.use("/", Router);
};
export default initAdminRoute;
