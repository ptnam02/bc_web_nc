import express from "express";
import { config } from "dotenv";
import homeController from "./../controllers/admin/homeController";
import newsController from "../controllers/admin/newsController";
import UserController  from "../controllers/admin/UserController";
const Router = express.Router();
const isAuthenticatedAdmin = (req, res, next) => {
  if (req.session && req.session.admin) {
    return next();
  }
  res.redirect("/admin/login"); // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
};
const initAdminRoute = (app) => {
//router index
Router.get('/admin',isAuthenticatedAdmin,homeController.home)

    //route login
    Router.get('/admin/login',homeController.login)
    Router.post('/admin/checkLogin',homeController.checkLogin)

    //logout 
    Router.get('/admin/logout',homeController.logout)
    //news 
    Router.get('/admin/createNews',newsController.createNews)
    Router.get('/admin/listNews',newsController.listNews)
    Router.get('/admin/listNews/:page',newsController.listNews)
    Router.get('/admin/detailNews/:idNews',newsController.detailNews)
    Router.get('/admin/editNews/:idNews',newsController.editNews)
    Router.get('/admin/deteleNews/:idNews',newsController.deleteNews)
    Router.get('/admin/restore/:idNews',newsController.listNews)
    Router.post('/admin/insertNews/',newsController.insertNews)
    Router.post('/admin/updateNews/',newsController.updateNews)

  //user 
  Router.get('/admin/newUser/',UserController.getAllUsers)
  Router.get('/admin/listUsers/',UserController.getAllUsers)
  Router.get('/admin/listUsers/:page',UserController.getAllUsers)
Router.get('/admin/detailUser/:username',UserController.detailUser)
Router.get('/admin/editUser/:username',UserController.editUser)
Router.post('/admin/updateUser',UserController.updateUser)

    


  return app.use("/", Router);
};
export default initAdminRoute;
