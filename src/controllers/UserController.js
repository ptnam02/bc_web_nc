import express from "express";

import userModel from "./../sevices/userModel.js";

var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const checkLogin = async (req, res) => {
  let { username, password } = req.body;
  let check = await userModel.checkLogin(username, password);
  if (check) {
    req.session.user = { username };
    let user = req.session.user;
    // res.redirect("/detail-user/" + user.username);
    res.render("index", {
      data: {
        title: "Đăng nhập",
        page: "login",
        errorMessage: "Đăng nhập thành công",
        req: req,
      },
    });
  } else {
    res.render("index", {
      data: {
        title: "Đăng nhập",
        page: "login",
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
      res.redirect("/login");
    }
  });
};

const getAllUsers = async (req, res) => {
  const userOfPage = 5;
  let page = 1; // Giá trị mặc định nếu không có giá trị trang được cung cấp

  if (req.params.page) {
    const pageValue = parseInt(req.params.page); // Chuyển đổi giá trị trang thành số nguyên

    if (!isNaN(pageValue) && pageValue > 0) {
      // Kiểm tra nếu giá trị trang là một số nguyên dương
      page = pageValue;
    }
  }

  try {
    let userList = await userModel.getAllUsers();

    if (userList && userList.length > 0) {
      // Tính toán phân trang
      const totalPages = Math.ceil(userList.length / 5);
      const startIndex = (page - 1) * userOfPage;
      const endIndex = startIndex + userOfPage;
      const usersOnPage = userList.slice(startIndex, endIndex);

      // Dữ liệu hợp lệ, tiếp tục xử lý
      res.render("index", {
        data: {
          title: "Danh sach",
          page: "pageUsers/listUser",
          usersOnPage: usersOnPage,
          req: req,
          totalPages: totalPages,
          currentPage: page,
        },
      });
    } else {
      // Dữ liệu không tồn tại hoặc không hợp lệ, xử lý lỗi hoặc thông báo
      res.status(404).send("Không tìm thấy dữ liệu người dùng.");
    }
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Lỗi khi truy vấn dữ liệu từ CSDL:", error);
    res.status(500).send("Lỗi trong quá trình xử lý dữ liệu.");
  }
};

const createNewUser = async (req, res) => {
  try {
    let role = await userModel.getRole(); // Chờ cho Promise hoàn thành
    res.render("index", {
      data: { title: "home", page: "pageUsers/newUser", role: role, req: req },
    });
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Lỗi khi lấy danh sách vai trò:", error);
    res.status(500).send("Lỗi trong quá trình xử lý dữ liệu.");
  }
};

const insertUser = async (req, res) => {
  let { username, password, fullname, sex, email, address, role } = req.body;
  password = bcrypt.hashSync(password, salt);
  if (await userModel.isUserExist(username, email)) {
    let role = await userModel.getRole(); // Chờ cho Promise hoàn thành
    
    console.log(await userModel.isUserExist(username, email));
    const warning = "Tên đăng nhập hoặc email đã tồn tại !!!!";
    res.render("index", {
      data: { title: "dang ky", page: "pageUsers/newUser", role: role, req: req, warning: warning },
    });

  } else {
    await userModel.insertUser(
      username,
      password,
      fullname,
      sex,
      email,
      address,
      role
    );
    res.redirect("list-user");
  }
};
const detailUser = async (req, res) => {
  let username = req.params.username;
  let user = await userModel.getUserByName(username);
  res.render("index", {
    data: {
      title: "Thông tin tài khoản",
      page: "pageUsers/detailUser",
      user: user,
      req: req,
    },
  });
};
const editUser = async (req, res) => {
  let username = req.params.username;
  let user = await userModel.getUserByName(username);
  res.render("index", {
    data: {
      title: "Cập nhật thông tin",
      page: "pageUsers/editUser",
      user: user,
      req: req,
    },
  });
};
const updateUser = async (req, res) => {
  let { username, fullname, sex, address } = req.body;
  await userModel.updateUser(fullname, address, sex, username);
  res.redirect("detail-user/" + username);
};
const login = async (req, res) => {
  res.render("index", {
    data: { title: "Đăng nhập", page: "login", req: req },
  });
};

export default {
  createNewUser,
  getAllUsers,
  insertUser,
  detailUser,
  editUser,
  updateUser,
  login,
  checkLogin,
  logout,
};
