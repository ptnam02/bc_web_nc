import express from "express";
import newsModel from "./../sevices/newsModel";
const showAllNews = async(req, res) =>{
    const newsOfPage = 9;
  let page = 1; // Giá trị mặc định nếu không có giá trị trang được cung cấp

    if (req.params.page) {
        const pageValue = parseInt(req.params.page); // Chuyển đổi giá trị trang thành số nguyên
    
        if (!isNaN(pageValue) && pageValue > 0) {
          // Kiểm tra nếu giá trị trang là một số nguyên dương
          page = pageValue;
        }
      }
      try {
        const listNews = await newsModel.getAllNews();
        if (listNews && listNews.length > 0) {
        // Tính toán phân trang
        const totalPages = Math.ceil(listNews.length / newsOfPage);
        const startIndex = (page - 1) * newsOfPage;
        const endIndex = startIndex + newsOfPage;
        const newsOnPage = listNews.slice(startIndex, endIndex);
  
        // Dữ liệu hợp lệ, tiếp tục xử lý
        res.render("index", {
          data: {
            title: "Danh sach tin tuc",
            page: "pages/news/news",
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
}
const newsDetail = async(req, res)=>{
    let newsId = req.params.newsId;
    const news = await newsModel.getNewsById(newsId);
    return res.render('index',{data: { title:"xem tin", page: 'pages/news/newsDetail',req: req,  news : news}});
}

export default {showAllNews,newsDetail};