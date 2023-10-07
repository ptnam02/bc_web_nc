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
      return []; // Trả về mảng rỗng nếu không có dữ liệu
    }
  } catch (error) {
    console.error("Lỗi khi truy vấn dữ liệu từ CSDL:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
};
const insertNews = async (title, content, currentTime, author) => {
  try {
    // Sử dụng parameterized query để chèn dữ liệu an toàn vào CSDL
    const [rows, fields] = await connection.execute(
      "INSERT INTO news (title, content, publish_date, author, status) VALUES (?, ?, ?, ?, 1)",
      [title, content, currentTime, author]
    );
    // Kiểm tra và trả về giá trị đúng/sai
    return rows.affectedRows === 1; // Trả về true nếu đã thêm thành công, ngược lại trả về false
  } catch (error) {
    console.error("Lỗi khi chèn tin tức:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
};
const updateNews = async (title, content, currentTime, idNews) => {
  try {
    // Sử dụng parameterized query để chèn dữ liệu an toàn vào CSDL
    const [rows, fields] = await connection.execute(
      "UPDATE `news` SET `title`=?,`content`=?,`update_date`=? WHERE id = ?",
      [title, content, currentTime, idNews]
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
    console.error("Lỗi khi chèn tin tức:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
}
export default { getAllNews, getNewsById, insertNews, updateNews, deleteNews };
