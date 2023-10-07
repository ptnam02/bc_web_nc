import express from "express";
import loginModel from "../../sevices/admin/loginModel";
const home = (req, res) => {
  return res.render("admin/index", {
    data: { title: "dashboard", page: "pages/dashboard" ,req: req,},
  });
};
const login = (req, res) => {
  return res.render("admin/index", {
    data: { title: "Login", page: "loginAdmin" ,req: req,},
  });
};
const checkLogin = async (req, res) => {
  let { username, password } = req.body;
  const check = await loginModel.checkLogin(username, password);
  if (check) {
    req.session.admin = { username };
    res.redirect("/admin/");
  } else {
    res.render("index", {
      data: {
        title: "Đăng nhập",
        page: "admin/loginAdmin",
        errorMessage: "Đăng nhập không thành công",
        req: req,
      },
    });
  }
};
const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Lỗi khi đăng xuất:", err);
      res.send("Có lỗi xảy ra khi đăng xuất.");
    } else {
      res.redirect("/admin/login");
    }
  });
};
export default { home, login, checkLogin,logout };
