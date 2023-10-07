-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 07, 2023 lúc 03:58 AM
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
  `publish_date` date DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `status` int(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `publish_date`, `author`, `category`, `status`) VALUES
(1, 'Tiêu đề tin tức 1', 'Nội dung tin tức số 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-26', 'Tác giả A', 'Thể loại A', 1),
(2, 'Tiêu đề tin tức 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-27', 'Tác giả B', 'Thể loại B', 1),
(3, 'Tiêu đề tin tức 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-28', 'Tác giả C', 'Thể loại A', 1),
(4, 'Tiêu đề tin tức 10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-29', 'Tác giả D', 'Thể loại C', 1),
(5, 'Tiêu đề tin tức 11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-29', 'Tác giả D', 'Thể loại F', 1),
(6, 'Tiêu đề tin tức 12', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-29', 'Tác giả D', 'Thể loại A', 1),
(7, 'Tiêu đề tin tức 13', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-29', 'Tác giả D', 'Thể loại B', 1),
(8, 'Tiêu đề tin tức 14', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sit amet velit vitae lectus luctus dignissim. Cras fringilla, quam ut posuere rhoncus, lorem purus consectetur libero, nec bibendum lectus odio id risus.', '2023-09-29', 'Tác giả D', 'Thể loại B', 1);

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
(15, 'admin', '123', 'phan thanh nam', 'can tho', 'Nam', 'phannam2910aa2002@gmail.com', 2, '0'),
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
(29, 'user10', 'password10', 'Full Name 10', 'Address 10', 'Female', 'user10@example.com', 1, '0');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
