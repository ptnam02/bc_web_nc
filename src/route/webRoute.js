import express from "express";
import about from "./../controllers/aboutController";
import home from "./../controllers/homeController";
import UserController from "../controllers/UserController";
import newsController from "../controllers/newsController";
import { config } from "dotenv";

//Admin

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// viewEngine(app);
const Router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  } else {
    res.redirect("/login");
  }
  // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
};
const checkUserName = async(req, res, next)=>{
  let username = req.params.username;
  if ( req.session && req.session.user) {
    const user = req.session.user
    if(user.username == username){
      return next();
    }else{
      res.send(`
  <script>
    alert("Không thể cập nhật thông tin của người khác.");
    window.history.back(); // Quay lại trang trước đó sau khi nhấn "OK"
  </script>
`);

    }
  }
}
const isAuthenticatedAdmin = (req, res, next) => {
  if (req.session && req.session.admin) {
    return next();
  }
  res.redirect("/admin/login"); // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
};
const initWebRoute = (app) => {
  //Test

  //route login
  Router.get("/login", UserController.login);
  Router.post("/check-login", UserController.checkLogin);
  //route logout
  Router.all("/logout", UserController.logout);
  //route Home
  Router.get("/", home);
  //route User
  Router.get("/list-user/:page", isAuthenticated, UserController.getAllUsers);
  Router.get("/list-user", isAuthenticated, UserController.getAllUsers);


  Router.get("/create-new-user", UserController.createNewUser);
  Router.post("/insert-new-user", UserController.insertUser);
  
  Router.get("/detail-user/:username",isAuthenticated,UserController.detailUser);

  Router.get("/edit-user/:username", isAuthenticated,checkUserName, UserController.editUser);
  Router.post("/update-user", isAuthenticated, UserController.updateUser);

  //route About
  Router.get("/about", about);
// route news
Router.get("/news", newsController.showAllNews);
Router.get("/news/:page", newsController.showAllNews);
Router.get("/newsDetail/:newsId", newsController.newsDetail)
  //route admin
  // Router.get("/admin", isAuthenticatedAdmin, homeController.home);
  // Router.get("/admin/login", homeController.login);
  // Router.get("/admin/checkLogin", homeController.checkLogin);




  return app.use("/", Router);
};
export default initWebRoute;
