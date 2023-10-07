import express from "express";
import loginModel from "../../sevices/admin/loginModel";
const home = (req, res) => {
  return res.render("admin/index", {
    data: { title: "dashboard", page: "pages/dashboard" },
  });
};
const login = (req, res) => {
  return res.render("admin/index", {
    data: { title: "Login", page: "loginAdmin" },
  });
};
const checkLogin = async (req, res) => {
  let { username, password } = req.body;
  const check = await loginModel.checkLogin(username, password);
  if (check) {
    req.session.admin = { username };
    res.redirect("/admin/");
  } else {
    res.redirect("/admin/login");
  }
};
export default { home, login, checkLogin };
