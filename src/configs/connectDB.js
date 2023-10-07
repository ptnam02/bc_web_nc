// import mysql from "mysql2";
// const pool = mysql2.createPool({
//   host: "localhost",
//   user: "root",
//   database: "web_nc",
//   password: ""

// });
// const connection = pool.promise();


// import mysql from "mysql2";

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "web_nc",
//   password: ""
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Lỗi khi kết nối CSDL:", err);
//   } else {
//     console.log("Kết nối CSDL thành công");
//   }
// });


import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'web_nc',
  password: '',
  waitForConnections: true, // Tuỳ chọn này cần được bật để hỗ trợ phương thức execute
  connectionLimit: 10, // Số lượng kết nối tối đa trong pool
  queueLimit: 0 // Số lượng truy vấn được chờ khi pool đã đầy
});

const connection = pool.promise();

export default connection;

