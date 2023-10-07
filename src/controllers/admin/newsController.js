import { Express } from "express";
import newsModel from "../../sevices/admin/newsModel";
import moment from "moment-timezone";
moment.tz.setDefault("Asia/Ho_Chi_Minh");
const currentTime = moment().format("YYYY-MM-DD HH:mm:ss");

const createNews = async (req, res) => {
  res.render("admin/index", {
    data: { title: "Tạo tin mới", page: "pages/news/createNews", req: req },
  });
};
const listNews = async (req, res) => {
  const newsOfPage = 5;
  let page = 1; // Giá trị mặc định nếu không có giá trị trang được cung cấp

  if (req.params.page) {
    const pageValue = parseInt(req.params.page); // Chuyển đổi giá trị trang thành số nguyên

    if (!isNaN(pageValue) && pageValue > 0) {
      // Kiểm tra nếu giá trị trang là một số nguyên dương
      page = pageValue;
    }
  }

  try {
    let newsList = await newsModel.getAllNews();

    if (newsList && newsList.length > 0) {
      // Tính toán phân trang
      const totalPages = Math.ceil(newsList.length / 5);
      const startIndex = (page - 1) * newsOfPage;
      const endIndex = startIndex + newsOfPage;
      const newsOnPage = newsList.slice(startIndex, endIndex);

      // Dữ liệu hợp lệ, tiếp tục xử lý
      res.render("admin/index", {
        data: {
          title: "Quản lí tin tức",
          page: "pages/news/listNews",
          req: req,
          newsOnPage: newsOnPage,
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
const insertNews = async (req, res) => {
  const { title, content, author } = req.body;
  let result = await newsModel.insertNews(title, content, currentTime, author);
  if (result) {
    res.redirect("/admin/listNews/");
  } else {
    res.send(`
    <script>
      alert("Lỗi khi thêm tin mới");
      window.history.back(); // Quay lại trang trước đó sau khi nhấn "OK"
    </script>`);
  }
};
const editNews = async (req, res) => {
  const idNews = req.params.idNews;
  const news = await newsModel.getNewsById(idNews);
  res.render("admin/index", {
    data: {
      title: "Sửa tin",
      page: "pages/news/editNews",
      req: req,
      news: news,
    },
  });
};
const detailNews = async (req, res) => {
  const idNews = req.params.idNews;
  const news = await newsModel.getNewsById(idNews);
  res.render("admin/index", {
    data: {
      title: "Chi tiết tin",
      page: "pages/news/newsDetail",
      req: req,
      news: news,
    },
  });
};
const updateNews = async (req, res) => {
  const { title, content, idNews } = req.body;
  let result = await newsModel.updateNews(title, content, currentTime, idNews);
  if (result) {
    res.redirect("/admin/detailNews/" + idNews);
  } else {
    res.send(`<script>
    alert("Không thể cập nhật tin.");
    window.history.back(); // Quay lại trang trước đó sau khi nhấn "OK"
  </script>`);
  }
};
const deleteNews = async (req, res) => {
  const idNews = req.params.idNews;
  let result = await newsModel.deleteNews(idNews);
  if (result) {
    res.redirect("/admin/listNews/");
  } else {
    res.send(`<script>
    alert("Xóa không thành công.");
    window.history.back(); // Quay lại trang trước đó sau khi nhấn "OK"
  </script>`);
  }
};
export default {
  createNews,
  listNews,
  insertNews,
  editNews,
  detailNews,
  updateNews,
  deleteNews
};
