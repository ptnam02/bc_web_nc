import dotenv from "dotenv";
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/webRoute";
import session from "express-session";
import path from "path";
const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// ...
app.use(
  session({
    secret: "keyboard cat", // Thay đổi giá trị này bằng một chuỗi bất kỳ
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
// Kiểm tra xem phiên làm việc đã được khởi tạo thành công
app.use((req, res, next) => {
  if (req.session) {
    console.log("Phiên làm việc đã được khởi tạo!");
  } else {
    console.log("Lỗi: Phiên làm việc không được khởi tạo.");
  }
  next();
});

// ...

// Middleware để kiểm tra trạng thái đăng nhập
configViewEngine(app);
initWebRoute(app);
app.use((req, res, next) => {
  res.status(404).send("Lỗi 404 - Không tìm thấy trang");
});

app.listen(port, () => {
  console.log(`Máy chủ đang lắng nghe tại http://localhost:${port}`);
});
