import dotenv from "dotenv";
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/webRoute";
import initAdminRoute from "./route/AdminRoute";
import initApiRoute from "./route/ApiRoute";
import session from "express-session";
import path from "path";
import moment from "moment-timezone";
import { link } from "fs";
import RedisStore from "connect-redis"
import {createClient} from "redis"
// Định nghĩa múi giờ Việt Nam
moment.tz.setDefault('Asia/Ho_Chi_Minh');
// Lấy thời gian hiện tại theo múi giờ Việt Nam
const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// Initialize store.
// let redisStore = new RedisStore({
//   client: redisClient,
//   prefix: "myapp:",
//  })

// ...



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "keyboard cat", // Thay đổi giá trị này bằng một chuỗi bất kỳ
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
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
initApiRoute(app);
initAdminRoute(app);
app.use((req, res, next) => {
  res.status(404).send("Lỗi 404 - Không tìm thấy trang");
});

app.listen(port, () => {
  console.log(`Máy chủ đang lắng nghe tại http://localhost:${port}`);
});
