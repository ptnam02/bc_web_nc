import connection from "../../configs/connectDB";
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
// const checkLogin = async (username, password) => {
//     try {
//       const [rows, fields] = await connection.execute(
//         "SELECT * FROM `users` WHERE `username` = ? AND `password` = ?  AND `groupid`=2",
//         [username, password]
//       );
//       if (rows && rows.length > 0) {
//         return true
//       } else {
//         // Nếu không có dữ liệu hoặc tài khoản/mật khẩu không đúng, trả về false
//         return false;
//       }
//     } catch (error) {
//       console.error("Lỗi khi truy cập thông tin người dùng:", error);
//       throw error;
//     }
//   };
  const checkLogin = async (username, password) => {
    try {
      const [rows, fields] = await connection.execute(
        "SELECT password FROM `users` WHERE username = ? AND `groupid`=2",
        [username]
      );
  
      if (rows && rows.length > 0) {
        const password_db = rows[0].password;
  
        // Sử dụng await để đợi kết quả của bcrypt.compare
        const isPasswordMatch = await bcrypt.compare(password, password_db);
  
        if (isPasswordMatch) {
          // Mật khẩu nhập vào khớp với mật khẩu đã băm
          return true;
        } else {
          // Mật khẩu nhập vào không khớp với mật khẩu đã băm
          return false;
        }
      } else {
        // Nếu không có dữ liệu hoặc tài khoản/mật khẩu không đúng, trả về false
        return false;
      }
    } catch (error) {
      console.error("Lỗi khi truy cập thông tin người dùng:", error);
      throw error;
    }
  };
  
  export default{checkLogin}