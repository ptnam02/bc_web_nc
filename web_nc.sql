-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 08, 2023 lúc 01:00 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `web_nc`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `group`
--

CREATE TABLE `group` (
  `id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `group`
--

INSERT INTO `group` (`id`, `role`) VALUES
(1, 'Người dùng'),
(2, 'Quản trị viên');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `publish_date` datetime DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `status` int(1) DEFAULT 1,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `publish_date`, `author`, `category`, `status`, `update_date`) VALUES
(1, 'Tiêu đề tin tức 1', 'Nội dung tin tức số 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-26 00:00:00', 'Tác giả A', 'Thể loại A', 1, '2023-10-09 15:31:40'),
(2, 'Tiêu đề tin tức 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-27 00:00:00', 'Tác giả B', 'Thể loại B', 1, '2023-10-07 20:33:20'),
(3, 'Tiêu đề tin tức 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-28 00:00:00', 'Tác giả C', 'Thể loại A', 1, NULL),
(4, 'Tiêu đề tin tức 10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-29 00:00:00', 'Tác giả D', 'Thể loại C', 1, NULL),
(5, 'Tiêu đề tin tức 11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-29 00:00:00', 'Tác giả D', 'Thể loại F', 1, NULL),
(6, 'Tiêu đề tin tức 12', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-29 00:00:00', 'Tác giả D', 'Thể loại A', 1, NULL),
(7, 'Tiêu đề tin tức 13', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-29 00:00:00', 'Tác giả D', 'Thể loại B', 1, NULL),
(8, 'Tiêu đề tin tức 14', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-29 00:00:00', 'Tác giả D', 'Thể loại B', 1, NULL),
(9, 'login', 'thành công chức năng thêm tin tức', '2023-10-07 00:00:00', 'thanh nam', NULL, 0, NULL),
(10, 'login', 'thành công chức năng thêm tin tức', '2023-10-07 00:00:00', 'thanh nam', NULL, 1, NULL),
(11, 'logout', 'them tin thanh cong\r\n', '2023-10-07 00:00:00', 'thanh nam', NULL, 1, NULL),
(12, 'tin mowi nhat', 'content', '2023-10-07 00:00:00', 'nam phan', NULL, 1, NULL),
(13, 'hot', 'hot hot hot', '0000-00-00 00:00:00', 'nam', NULL, 0, NULL),
(14, 'test', 'testttttttttt', '2023-10-07 00:00:00', 'nam phan', NULL, 1, NULL),
(15, 'test1', 'tét1\r\n', '2023-10-07 15:21:19', 'nam', NULL, 1, NULL),
(16, 'test2', 'test 2', '0000-00-00 00:00:00', 'thanh nam', NULL, 0, NULL),
(17, 'tin nog hom nay', 'abc', '2023-10-07 15:25:27', 'nam', NULL, 0, NULL),
(18, 'tin mowi nhat', '123445', '2023-10-07 15:30:23', 'nam phan', NULL, 0, NULL),
(19, 'test 000001', 'abbacy', '2023-10-07 15:33:39', 'nâmmmm', NULL, 0, '2023-10-07 20:24:56'),
(20, 'Tin tức quan trọng về sức khỏe 1', 'Hôm nay, chúng ta hãy nói về tình hình sức khỏe thế giới và các vấn đề liên quan đến nó. Sức khỏe là một khía cạnh quan trọng trong cuộc sống của chúng ta và ảnh hưởng đến mọi khía cạnh khác của cuộc sống.\r\n\r\nSức khỏe của bạn quan trọng không chỉ vì bạn muốn cảm thấy tốt và có năng lượng hàng ngày, mà còn vì nó ảnh hưởng đến khả năng làm việc, học tập, và thậm chí là hạnh phúc. Hiểu về cách duy trì và cải thiện sức khỏe của bạn là một phần quan trọng của cuộc sống.\r\n\r\nTrong thời đại hiện đại, có nhiều thông tin về sức khỏe trên internet và trong sách báo. Tuy nhiên, điều quan trọng là bạn nên luôn kiểm tra và xác minh thông tin từ các nguồn đáng tin cậy và tìm sự hỗ trợ từ các chuyên gia y tế khi cần thiết.\r\n\r\nHãy để chúng tôi giúp bạn có kiến thức về cách duy trì một lối sống lành mạnh và quan tâm đến sức khỏe của bạn. Chúng tôi sẽ cung cấp các bài viết, tin tức, và hướng dẫn hữu ích để bạn tiến bộ trong hành trình chăm sóc sức khỏe của mình.\r\n\r\nCảm ơn bạn đã đọc tin tức của chúng tôi. Hãy luôn chăm sóc sức khỏe của mình và tìm kiếm sự hỗ trợ khi cần thiết. Chúng tôi chúc bạn một cuộc sống khỏe mạnh và hạnh phúc!', '2023-10-07 16:01:25', 'Phan Thanh Nam', NULL, 1, '2023-10-07 20:24:17'),
(21, 'Hội nghị TW lần thứ 8 khóa XIII: Đẩy mạnh xây dựng đội ngũ trí thức', 'Các đại biểu đã phân tích thực trạng, cũng như đề xuất các giải pháp cụ thể nhằm tiếp tục xây dựng đội ngũ trí thức theo tinh thần của Trung ương trong thời gian tới.\r\n\r\nToàn cảnh phiên khai mạc Hội nghị Trung ương 8 khóa XIII. (Ảnh: Phương Hoa/TTXVN)\r\nToàn cảnh phiên khai mạc Hội nghị Trung ương 8 khóa XIII. (Ảnh: Phương Hoa/TTXVN)\r\n© Phương Hoa/TTXVN\r\nHội nghị Trung ương lần thứ 8 khóa XIII diễn ra từ ngày 2-8/10/2023.\r\n\r\nThảo luận tại Hội trường về tổng kết 15 năm thực hiện Nghị quyết số 27-NQ/TW ngày 6/8/2008 của Ban Chấp hành Trung ương khóa X về xây dựng đội ngũ trí thức trong thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước, các vị Ủy viên Trung ương Đảng đã đóng góp nhiều ý kiến về những kết quả đạt được cho đến nay, phân tích thực trạng, cũng như đề xuất các giải pháp cụ thể nhằm tiếp tục xây dựng đội ngũ trí thức theo tinh thần của Trung ương trong thời gian tới.\r\n\r\nCác đại biểu dự Hội nghị Trung ương 8 khóa XIII. (Ảnh: Phương Hoa/TTXVN)\r\nCác đại biểu dự Hội nghị Trung ương 8 khóa XIII. (Ảnh: Phương Hoa/TTXVN)\r\n© Phương Hoa/TTXVN\r\nXây dựng đội ngũ trí thức đáp ứng các yêu cầu về phát triển đất nước\r\n\r\nTrong mọi thời đại, tri thức luôn là nền tảng tiến bộ xã hội, đội ngũ trí thức là lực lượng nòng cốt sáng tạo và truyền bá tri thức.\r\n\r\nNgày nay, cùng với sự phát triển nhanh chóng của cách mạng khoa học và công nghệ hiện đại, đội ngũ trí thức trở thành nguồn lực đặc biệt quan trọng, tạo nên sức mạnh của mỗi quốc gia trong chiến lược phát triển.\r\n\r\nAspose.Cloud - Top Choice for Doc Automation - Secure Cloud Docs Automation\r\nAspose.Cloud - Top Choice for Doc Automation - Secure Cloud Docs Automation\r\nAd\r\nwww.aspose.cloud\r\nThảo luận tại Hội trường, các vị Ủy viên Trung ương Đảng thống nhất với dự thảo Nghị quyết của Ban Chấp hành Trung ương về xây dựng đội ngũ trí thức, nhất trí tầm quan trọng của việc ban hành một Nghị quyết mới, đồng thời đưa ra ý kiến đối với vấn đề quan điểm tổng quát nhằm xây dựng một đội ngũ trí thức đáp ứng các yêu cầu về phát triển đất nước trong tình hình mới, cũng như trong bối cảnh toàn cầu hóa.\r\nBộ trưởng Bộ Giáo dục và Đào tạo Nguyễn Kim Sơn cho rằng việc xây dựng đội ngũ trí thức trong thời đại mới phải là việc kiến tạo cho được về tinh thần, tư tưởng, phẩm chất, đặc trưng của một đội ngũ trí thức mới. Đội ngũ trí thức mới, vừa kế thừa tinh thần trí thức của dân tộc, với truyền thống “lo trước vui sau thiên hạ,” tinh thần “thiên hạ hưng vong sỹ phu hữu trách,” dấn thân gánh vác trách nhiệm với dân tộc, với nhân dân, vừa phải có tinh thần phát triển xã hội, phát triển đất nước theo lý tưởng của Đảng Cộng sản, vừa phải có những phẩm chất phù hợp với trí thức thời kỳ toàn cầu hóa.\r\n\r\nMicrosoft Start: Không chỉ cập nhật tin tức, bạn có thể chơi game, giải toán và hơn thế nữa\r\nMicrosoft Start: Không chỉ cập nhật tin tức, bạn có thể chơi game, giải toán và hơn thế nữa\r\nAd\r\nMicrosoft News\r\nCũng tại phiên thảo luận, các vị Ủy viên Trung ương Đảng chỉ rõ những hạn chế trong xây dựng, phát triển đội ngũ trí thức. Đơn cử như công tác phát triển đảng trong đội ngũ trí thức chưa đáp ứng được kỳ vọng. Bên cạnh đó là những hạn chế trong thu hút các nhà khoa học, các chuyên gia đầu ngành.\r\n\r\nTheo Giám đốc Đại học Quốc gia Thành phố Hồ Chí Minh Vũ Hải Quân, hiện nay có hơn 60.000 người đang làm trong các lĩnh vực khoa học và công nghệ nhưng số người có trình độ tiến sỹ chỉ khoảng 5.000. Con số này rất mỏng so với các nước trên thế giới và chủ yếu chỉ phân bổ ở các đơn vị lớn như Đại học Quốc gia, một số trường đại học trọng điểm hay Viện Hàn lâm, ở các thành phố lớn. Điều này đặt ra đối với các địa phương đặc biệt là với các vùng sâu, vùng xa sẽ khó phát triển được đội ngũ trí thức để các công việc ở địa phương...\r\n\r\nPhó Thủ tướng Chính phủ Trần Hồng Hà nhấn mạnh thực tế liên minh giai cấp công nhân, nông dân và trí thức ngày nay có những mối quan hệ cả về hình thức và nội dung đã có thay đổi nhất định, cần phải cập nhật. Hiện nay công nhân cũng có thể là công nhân trí thức, nông dân là nông dân thông minh. Lực lượng trí thức sẽ là tiên phong dẫn dắt đi đầu trong việc chuyển đổi lớn của nền kinh tế và dẫn dắt trong việc ứng dụng các thành tựu khoa học kỹ thuật. Nhấn mạnh lại mối quan hệ này để phát huy trong thời đại sắp tới, phải xây dựng đội ngũ trí thức tiên phong, mở đường. Xây dựng đội ngũ trí thức phải tiến hành đồng bộ cuộc cách mạng chuyển đổi mô hình kinh tế từ kinh tế dựa vào tài nguyên sang kinh tế tri thức, kinh tế xanh, kinh tế tuần hoàn.\r\n\r\nBí thư Tỉnh ủy Bình Định Hồ Quốc Dũng chia sẻ khi có chủ trương của Đảng phải kịp thời thể chế hóa để triển khai thực hiện trong thực tế. Khi chưa kịp thời thể chế hóa mà địa phương mạnh dạn làm theo nghị quyết của Đảng, thì phải tổng kết thực tiễn để cho một cơ chế báo cáo.\r\n\r\nTiếp tục đẩy mạnh đào tạo các nhà khoa học, chuyên gia đầu ngành\r\n\r\nVề các phương hướng phát triển đội ngũ trí thức thời gian tới, một số Ủy viên Trung ương Đảng đã đề cập tới các giải pháp cụ thể như: đẩy mạnh phân cấp phân quyền, tự chủ, tự chịu trách nhiệm, đồng thời cần xác định vai trò chủ đạo của nhà nước trong tài trợ cho các nghiên cứu khoa học, đặc biệt là nghiên cứu khoa học cơ bản; tiếp tục đẩy mạnh đào tạo các nhà khoa học, chuyên gia đầu ngành và nâng cao chế độ đãi ngộ.\r\n\r\nChủ tịch Viện Hàn lâm Khoa học và Công nghệ Việt Nam Châu Văn Minh cho rằng trong đội ngũ trí thức có một bộ phận rất quan trọng đối với các cơ quan nghiên cứu, nó mang tính quyết định cho sự thành công đấy là các trí thức đầu ngành hay gọi là các chuyên gia đầu ngành, các tổng công trình sư. Do đó đề nghị Trung ương, Bộ Chính trị cân nhắc bổ sung trong phần mục tiêu dự thảo và tương ứng trong phần giải pháp thực hiện các giải pháp để phát triển lực lượng trí thức đầu ngành, các chuyên gia giỏi tâm huyết có năng lực kiến tạo tổ chức quản lý các nhiệm vụ trọng tâm cho các ngành lĩnh vực, nhất là những lĩnh vực cần thiết cho sự phát triển của đất nước trong tình hình mới. Trong đó quan tâm tới điều kiện làm việc, giao nhiệm vụ và giao cho họ nhiều quyền quyết định hơn để giảm bớt các thủ tục hành chính, bố trí các điều kiện kinh phí để duy trì hoạt động, quan tâm đến chế độ tôn vinh đãi ngộ.\r\n\r\nTheo Bộ trưởng Bộ Khoa học và Công nghệ Huỳnh Thành Đạt, cần xác định quan điểm nhà nước phải là nguồn tài trợ chính cho nghiên cứu khoa học công nghệ. Đây là loại hình nghiên cứu vốn không có ứng dụng trước mắt và có lợi ích thương mại nhưng lại góp phần quan trọng trong việc nâng cao tiềm lực công nghệ của quốc gia và đào tạo nguồn nhân lực chất lượng cao. Hiện nay mặc định nghiên cứu phải là thành công và phải ra đúng sản phẩm như đăng ký ban đầu. Việc này gây ra tâm lý, các nhà khoa học chọn những nội dung nghiên cứu dễ có khả năng đạt hiệu quả cao chứ không dấn thân vào những nội dung nghiên cứu khó có tính mới có tính sáng tạo. Do đó, bên cạnh ưu đãi về thu nhập, môi trường làm việc, điều kiện sinh sống, cần xây dựng được những đầu bài đủ lớn mang tầm quốc gia.\r\n\r\nCác ý kiến tại phiên thảo luận cũng tập trung vào việc xây dựng trung tâm tích hợp về khoa học, giáo dục, văn hóa; tăng cường đầu tư cho giáo dục đại học, lắng nghe kiến nghị từ thực tiễn của các nhà khoa học, giới trí thức, hay chính sách về thu hút nhân tài.\r\n\r\nBí thư Tỉnh ủy Thanh Hóa Đỗ Trọng Hưng cho rằng về mục tiêu đến năm 2030 xây dựng Trung tâm tích hợp khoa học, giáo dục, văn hóa hiện đại; đề nghị bổ sung giải pháp định kỳ, hàng năm lãnh đạo cấp ủy, chính quyền các cấp phải lắng nghe tâm tư nguyện vọng của đội ngũ trí thức. Đây là việc làm quan trọng góp phần củng cố mối quan hệ bền chặt giữa cấp ủy chính quyền với trí thức.\r\n\r\nChủ nhiệm Ủy ban Văn hóa Giáo dục của Quốc hội Nguyễn Đắc Vinh nêu ý kiến đánh giá giáo dục đại học có sự tụt hậu nhất định vì vậy giáo dục đầu tư đại học phải ưu tiên. Hiện nay số lượng sinh viên học khoa học cơ bản, càng ngày càng ít đi trong khi khoa cơ bản cần những sinh viên giỏi; tiếp tục đầu tư, đào tạo nguồn sinh viên tham gia học về khoa học công nghệ; đầu tư nguồn lực cho chuyển đổi số, lĩnh vực chăm sóc sức khỏe và công nghệ sinh học, đào tạo đội ngũ giáo viên để phát triển nền giáo dục.\r\n\r\nThứ trưởng Bộ Công an Trần Quốc Tỏ mong muốn coi trọng việc xây dựng cơ chế thu hút, động viên trí thức người Việt Nam ở nước ngoài đặc biệt là đối với những nhân tài nổi trội đầu ngành, đầu lĩnh vực trở về nước cống hiến.\r\n\r\nSau 15 năm thực hiện, Nghị quyết số 27-NQ/TW, khóa X về xây dựng đội ngũ trí thức trong thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước đã đạt được một số kết quả tích cực, quan trọng.\r\n\r\nTuy nhiên, trước bối cảnh trong nước và quốc tế có nhiều thay đổi, việc ban hành một Nghị quyết mới về tiếp tục xây dựng đội ngũ trí thức là cần thiết, với mục tiêu cụ thể đến năm 2030, tầm nhìn 2045, đóng góp vào việc thực hiện mục tiêu Việt Nam trở thành nước phát triển, thu nhập cao./.\r\n\r\nĐọc bài gốc tại đây.', '2023-10-07 20:33:20', 'Câu chuyện của tác giả PV', NULL, 1, '2023-10-07 20:33:20');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `sex` char(50) DEFAULT 'Không xác định',
  `email` varchar(255) DEFAULT NULL,
  `groupid` int(11) DEFAULT NULL,
  `block` char(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `fullname`, `address`, `sex`, `email`, `groupid`, `block`) VALUES
(15, 'admin', '123', 'Phan Thanh Nam', 'thoi lai - can tho', 'Nam', 'phannam2910aa2002@gmail.com', 2, '0'),
(16, 'admin1', '123', 'Phan Thanh Nam', '319 c16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM', 'Nam', 'admin@gmail.com', 2, '0'),
(17, 'namm', '123', 'thanh nam', 'can tho', 'Nam', 'demo@gmail.com', 1, '0'),
(18, 'namdeptrai', 'abc', 'phan thanh nam', 'thoi lai', 'Nam', 'ptnam2000629@student.ctuet.edu.vn', 2, '0'),
(19, 'admin123', '123', 'nammmmm', 'can tho', 'Nam', 'nam99@gmail.com', 1, '0'),
(20, 'user1', 'password1', 'Full Name 1', 'Address 1', 'Male', 'user1@example.com', 1, '0'),
(21, 'user2', 'password2', 'Full Name 2', 'Address 2', 'Female', 'user2@example.com', 1, '0'),
(22, 'user3', 'password3', 'Full Name 3', 'Address 3', 'Male', 'user3@example.com', 1, '0'),
(23, 'user4', 'password4', 'Full Name 4', 'Address 4', 'Female', 'user4@example.com', 1, '0'),
(24, 'user5', 'password5', 'Full Name 5', 'Address 5', 'Male', 'user5@example.com', 1, '0'),
(25, 'user6', 'password6', 'Full Name 6', 'Address 6', 'Female', 'user6@example.com', 1, '0'),
(26, 'user7', 'password7', 'Full Name 7', 'Address 7', 'Male', 'user7@example.com', 1, '0'),
(27, 'user8', 'password8', 'Full Name 8', 'Address 8', 'Female', 'user8@example.com', 1, '0'),
(28, 'user9', 'password9', 'Full Name 9', 'Address 9', 'Male', 'user9@example.com', 1, '0'),
(29, 'user10', 'password10', 'Full Name 10', 'Address 10', 'Female', 'user10@example.com', 1, '0'),
(30, 'admin100', '123', 'Phan Thanh Nam', '319 c16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM', 'Nam', 'admin100@gmail.com', 2, '0'),
(31, 'admin10', '123', 'Phan Thanh Nam', '319 c16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM', 'Nam', 'admin10@gmail.com', 2, '1');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `group`
--
ALTER TABLE `group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
