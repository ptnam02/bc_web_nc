import connection from "./../configs/connectDB";
const getAllNews = async () => {
    try {
        const [rows, fields] = await connection.execute(
          "SELECT * FROM `news` WHERE `status` = 1"
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
const detailNews = async(newsId)=>{
    try {
        const [rows, fields] = await connection.execute(
          "SELECT * FROM `news` WHERE `id` = ? AND `status` = 1 ",[newsId]
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
}
const getNewsNew= async() =>{
    try {
        const [rows, fields] = await connection.execute(
          "SELECT * FROM `news` WHERE `status` = 1 ORDER BY id DESC limit 3"
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
}
export default { getAllNews, detailNews,getNewsNew };
