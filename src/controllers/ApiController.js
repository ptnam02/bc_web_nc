import { Express } from "express";
import userModel from "../sevices/userModel";
import newsModel from "../sevices/admin/newsModel";
import newsController from "./admin/newsController";
import moment from "moment-timezone";
moment.tz.setDefault("Asia/Ho_Chi_Minh");
const currentTime = moment().format("YYYY-MM-DD HH:mm:ss");


const ApiLogin = async (req, res) => {
  let { username, password } = req.body;
  // console.log(username, password);
  try {
    let check = await userModel.checkLogin(username, password);
    if (check) {
      req.session.user = { username };
      let user = req.session.user;
      res.status(200).json({
        data: user,
        message: "login successful",
      });
    } else {
      res.status(400).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid username or password" });
  }
};

const insertNews = async (req, res) => {
  const { title, content, author } = req.body;

  try {
    let result = await newsModel.insertNews(title, content, author);

    if (result) {
      res.status(201).json({
        data: { title: title, content: content, author: author },
        message: "Đã thêm thành công tin",
      });
    } else {
      res.status(400).json({ message: "Chưa thêm được tin" });
    }
  } catch (error) {
    console.error("Lỗi khi thêm tin tức:", error);
    res.status(500).json({ message: "Lỗi trong quá trình thêm tin tức" });
  }
};

const updateNews = async (req, res) => {
  const { title, content, idNews } = req.body;
  try {
    const checkNews = await newsModel.getNewsById(idNews);
    if (!checkNews) {
      res.status(400).json({ message: "tin không tồn tại" });
    } else {
      try {
        const result = await newsModel.updateNews(
          title,
          content,
          idNews
        );
        if (result) {
          res.status(200).json({
            data: { title: title, content: content},
            message: "Cập nhật thành công",
          });
        } else {
          res.status(400).json({ message: "Cập nhật thất bại" });
        }
      } catch (error) {
        console.error("Lỗi khi cập nhật tin tức:", error);
        res
          .status(500)
          .json({ message: "Lỗi trong quá trình cập nhật tin tức" });
      }
    }
  } catch (error) {
    console.error("Lỗi khi truy vấn", error);
    res.status(500).json({ message: "Lỗi khi truy vấn" });
  }
};

const deleteNews = async (req, res) => {
  const idNews = req.params.idNews;
  try {
    const checkNews = await newsModel.getNewsById(idNews);
    if (!checkNews) {
      res.status(400).json({ message: "tin không tồn tại" });
    } else {
      try {
        const result = await newsModel.deleteNews(idNews);

        if (result) {
          res.status(200).json({
            message: "Xóa thành công",
            idNews : idNews
          });
        } else {
          res.status(400).json({ message: "Chưa xóa được tin" });
        }
      } catch (error) {
        console.error("Lỗi khi xóa tin tức:", error);
        res.status(500).json({ message: "Lỗi trong quá trình xóa tin tức" });
      }
    }
  } catch (error) {
    console.error("Lỗi khi truy vấn:", error);
    res.status(500).json({ message: "Lỗi khi truy vấn" });
  }
};

export default {
  ApiRegister,
  ApiLogin,
  insertNews,
  updateNews,
  deleteNews,
};
