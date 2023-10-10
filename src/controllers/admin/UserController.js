import express from "express";
import userModel from "../../sevices/admin/userModel";
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

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
      res.render("admin/index", {
        data: {
          title: "Danh sach",
          page: "pages/users/listUser",
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
      data: {
        title: "Tạo tài khoản",
        page: "admin/pages/users/newUser",
        role: role,
        req: req,
      },
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
    console.log(await userModel.isUserExist(username, email));
    const warning = "Ten dang nhap hoac email da ton tai";
    res.render("index", {
      data: {
        title: "tao tai khoan",
        page: "pageUsers/newUser",
        warning: warning,
        req: req,
      },
    });
    res.send("User Exists");
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
    res.redirect("/admin/detailUser/" + username);
  }
};
const detailUser = async (req, res) => {
  let username = req.params.username;
  let user = await userModel.getUserByName(username);
  res.render("admin/index", {
    data: {
      title: "Thông tin tài khoản",
      page: "pages/users/detailUser",
      user: user,
      req: req,
    },
  });
};
const editUser = async (req, res) => {
  let username = req.params.username;
  let user = await userModel.getUserByName(username);
  res.render("admin/index", {
    data: {
      title: "Cập nhật thông tin",
      page: "pages/users/editUser",
      user: user,
      req: req,
    },
  });
};
const updateUser = async (req, res) => {
  let { username, fullname, sex, address } = req.body;
  await userModel.updateUser(fullname, address, sex, username);
  res.redirect("/admin/detailUser/" + username);
};
const deleteUser = async (req, res) => {
  const username = req.params.username;
  const check = await userModel.getUserByName(username);
  if (check){
    await userModel.deleteUser(username);
  res.redirect("/admin/listUser");
  }else{
    res.send(`
  <script>
    alert("Tài khoản không tồn tại.");
    window.location.href = "/admin/listUser";
  </script>
`);
  }
  

};

export default {
  createNewUser,
  getAllUsers,
  insertUser,
  detailUser,
  editUser,
  updateUser,
  deleteUser,
};
