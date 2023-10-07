import connection from "../../configs/connectDB";
const checkLogin = async (username, password) => {
    try {
      const [rows, fields] = await connection.execute(
        "SELECT * FROM `users` WHERE username = ? AND password = ?",
        [username, password]
      );
  
      if (rows && rows.length > 0) {
        // Nếu có dữ liệu, truy vấn để lấy giá trị "role"
        const [userRows, userFields] = await connection.execute(
          "SELECT groupid FROM `users` WHERE username = ?",
          [username]
        );
  
        if (userRows && userRows.length > 0) {
          const role = userRows[0].role;
  
          // Kiểm tra giá trị "role" và trả về true nếu là 1, ngược lại trả về false
          return role === 2;
        } else {
          // Nếu không có dữ liệu về "role", trả về false
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