import connection from "../../configs/connectDB";
const getAllNews = async () => {
  try {
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `news` where status = 1 order by publish_date desc"
    );
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
const getNewsById = async (idNews) => {
  try {
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `news` where id = ? ",
      [idNews]
    );
    //   Kiểm tra xem có dữ liệu trả về không
    if (rows && rows.length > 0) {
      return rows[0]; // Trả về mảng chứa dữ liệu
    } else {
      return false; // Trả về false
    }
  } catch (error) {
    console.error("Lỗi khi truy vấn dữ liệu từ CSDL:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
};
const insertNews = async (title, content, author) => {
  try {
    // Sử dụng parameterized query để chèn dữ liệu an toàn vào CSDL
    const [rows, fields] = await connection.execute(
      "INSERT INTO news (title, content, publish_date, author, status) VALUES (?, ?, NOW(), ?, 1)",
      [title, content, author]
    );
    
    // const [rows, fields] = await connection.execute(
    //   "INSERT INTO news (title, content, publish_date, author, status) VALUES (?, ?, NOW(), ?, 1)",
    //   [title, content, author]
    // );
    // Kiểm tra và trả về giá trị đúng/sai
    return rows.affectedRows === 1; // Trả về true nếu đã thêm thành công, ngược lại trả về false
  } catch (error) {
    console.error("Lỗi khi chèn tin tức:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
};
const updateNews = async (title, content, idNews) => {
  try {
    // Sử dụng parameterized query để chèn dữ liệu an toàn vào CSDL
    const [rows, fields] = await connection.execute(
      "UPDATE `news` SET `title`=?,`content`=?,`update_date`= NOW() WHERE id = ?",
      [title, content, idNews]
    );
    // Kiểm tra và trả về giá trị đúng/sai
    return rows.affectedRows === 1; // Trả về true nếu đã thêm thành công, ngược lại trả về false
  } catch (error) {
    console.error("Lỗi khi chèn tin tức:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
};
const deleteNews = async(idNews)=>{
  try {
    // Sử dụng parameterized query để chèn dữ liệu an toàn vào CSDL
    const [rows, fields] = await connection.execute(
      "UPDATE `news` SET `status`= 0 WHERE id = ?",
      [idNews]
    );
    // Kiểm tra và trả về giá trị đúng/sai
    return rows.affectedRows === 1; // Trả về true nếu đã thêm thành công, ngược lại trả về false
  } catch (error) {
    console.error("Lỗi khi xóa tin tức:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
}
const countNews = async () => {
  try {
    const [rows] = await connection.execute("SELECT COUNT(*) AS total FROM news WHERE status = 1");
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
export default { getAllNews, getNewsById, insertNews, updateNews, deleteNews,countNews };
