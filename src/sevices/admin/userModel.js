import connection from "../../configs/connectDB";

const getRole = async () => {
  try {
    const [rows, fields] = await connection.execute("SELECT * FROM `group`");
    //   Kiểm tra xem có dữ liệu trả về không
    if (rows && rows.length > 0) {
      return rows; // Trả về mảng chứa dữ liệu
    } else {
      return []; // Trả về mảng rỗng nếu không có dữ liệu
    }
  } catch (error) {
    console.error("Lỗi khi truy vấn dữ liệu từ CSDL:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
};

const getAllUsers = async () => {
  try {
    const [rows, fields] = await connection.execute(
      "SELECT users.*, `group`.role FROM users JOIN `group` ON users.groupid = `group`.id WHERE users.block = 0 order by users.groupid DESC"
    );
    //SELECT users.*, `group`.role FROM users JOIN `group` ON users.groupid = `group`.id
    //   Kiểm tra xem có dữ liệu trả về không
    if (rows && rows.length > 0) {
      return rows; // Trả về mảng chứa dữ liệu
    } else {
      return []; // Trả về mảng rỗng nếu không có dữ liệu
    }
  } catch (error) {
    console.error("Lỗi khi truy vấn dữ liệu từ CSDL:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
};

const isUserExist = async (username, email) => {
  try {
    // Truy vấn kiểm tra xem người dùng đã tồn tại chưa
    const [rows, fields] = await connection.execute(
      "SELECT * FROM users WHERE username = ? OR email = ?",
      [username, email]
    );

    // Nếu có dòng dữ liệu trả về, người dùng đã tồn tại
    if (rows && rows.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Lỗi khi kiểm tra người dùng tồn tại:", error);
    throw error;
  }
};
const insertUser = async (
  username,
  password,
  fullname,
  sex,
  email,
  address,
  role
) => {
  try {
    // Sử dụng parameterized query để chèn dữ liệu an toàn vào CSDL
    const [rows, fields] = await connection.execute(
      "INSERT INTO users (username, password, fullname, sex, email, address, groupid) VALUES (?, ?, ?, ?, ?, ?,?)",
      [username, password, fullname, sex, email, address, role]
    );

    // Trả về kết quả của truy vấn nếu cần
    return rows;
  } catch (error) {
    console.error("Lỗi khi chèn người dùng:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
};

const getUserByName = async (name) => {
  try {
    // Thực hiện truy vấn SQL để lấy người dùng theo tên
    const [rows, fields] = await connection.execute(
      "SELECT users.*, `group`.role FROM users JOIN `group` ON users.groupid = `group`.id WHERE users.username = ?",
      [name]
    );

    // Kiểm tra xem có dữ liệu trả về không
    if (rows && rows.length > 0) {
      // Nếu có dữ liệu, trả về thông tin người dùng
      return rows[0]; // Trả về người dùng đầu tiên (nếu có nhiều kết quả)
    } else {
      // Nếu không có dữ liệu, trả về null hoặc thông báo tùy ý
      return false;
    }
  } catch (error) {
    console.error("Lỗi khi truy vấn người dùng theo tên:", error);
    throw error;
  }
};
const checkUserisExits = async (name) => {
  try {
    // Thực hiện truy vấn SQL để lấy người dùng theo tên
    const [rows, fields] = await connection.execute(
      "SELECT users.*, `group`.role FROM users JOIN `group` ON users.groupid = `group`.id WHERE users.username = ?",
      [name]
    );

    // Kiểm tra xem có dữ liệu trả về không
    if (rows && rows.length > 0) {
      // Nếu có dữ liệu, trả về thông tin người dùng
      return true; // Trả về người dùng đầu tiên (nếu có nhiều kết quả)
    } else {
      // Nếu không có dữ liệu, trả về null hoặc thông báo tùy ý
      return false;
    }
  } catch (error) {
    console.error("Lỗi khi truy vấn người dùng theo tên:", error);
    throw error;
  }
};
const updateUser = async (fullname, address,sex, username) => {
  try {
    // Sử dụng parameterized query để chèn dữ liệu an toàn vào CSDL
    const [rows, fields] = await connection.execute(
      "UPDATE `users` SET `fullname`= ? ,`address`= ? ,`sex`= ?  WHERE `username` =  ? ",
      [fullname, address, sex, username]
    );
    // Trả về kết quả của truy vấn nếu cần
    return rows;
  } catch (error) {
    console.error("Lỗi khi cập nhật thông tin người dùng:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
};

const checkLogin = async (username, password) => {
  try {
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `users` WHERE username = ? AND password = ?",
      [username, password]
    );
    if (rows && rows.length > 0) {
      // Nếu có dữ liệu, trả về true nếu tài khoản và mật khẩu đúng
      return true;
    } else {
      // Nếu không có dữ liệu hoặc tài khoản/mật khẩu không đúng, trả về false
      return false;
    }
  } catch (error) {
    console.error("Lỗi khi truy cập thông tin người dùng:", error);
    throw error;
  }
};
const deleteUser = async(username)=>{
  try {
    // Sử dụng parameterized query để chèn dữ liệu an toàn vào CSDL
    const [rows, fields] = await connection.execute(
      "UPDATE `users` SET `block`= 1  WHERE `username` =  ? ",
      [username]
    );
    // Trả về kết quả của truy vấn nếu cần
    return rows;
  } catch (error) {
    console.error("Lỗi khi cập nhật thông tin người dùng:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
}
const countUsers = async () => {
  try {
    const [rows] = await connection.execute("SELECT COUNT(*) AS total FROM users WHERE block = 0");
    if (rows.length > 0) {
      return rows[0].total; // Trả về tổng số tài khoản người dùng
    } else {
      return 0; // Trường hợp không có dữ liệu người dùng
    }
  } catch (error) {
    console.error("Lỗi khi truy vấn cơ sở dữ liệu:", error);
    throw error;
  }
};
export default {
  getAllUsers,
  insertUser,
  isUserExist,
  getUserByName,
  getRole,
  updateUser,
  checkLogin, deleteUser,countUsers,checkUserisExits
};
