import connection from "../../configs/connectDB";
const checkLogin = async (username, password) => {
    try {
      const [rows, fields] = await connection.execute(
        "SELECT * FROM `users` WHERE `username` = ? AND `password` = ?  AND `groupid`=2",
        [username, password]
      );
      if (rows && rows.length > 0) {
        return true
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