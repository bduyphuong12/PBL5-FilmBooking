-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 24, 2022 lúc 03:35 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `pbl5`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `action`
--

CREATE TABLE `action` (
  `action_id` varchar(10) NOT NULL,
  `action_name` int(20) NOT NULL,
  `action_code` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dien_vien`
--

CREATE TABLE `dien_vien` (
  `id_dien_vien` varchar(10) NOT NULL,
  `ten_dien_vien` varchar(20) NOT NULL,
  `avatar` varchar(1000) NOT NULL,
  `ngay_sinh` date NOT NULL,
  `quoc_tich` varchar(10) NOT NULL,
  `id_phim` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `doanh_thu`
--

CREATE TABLE `doanh_thu` (
  `id` varchar(10) NOT NULL,
  `ngay` date NOT NULL,
  `doanh_thu` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giao_dich`
--

CREATE TABLE `giao_dich` (
  `id_giao_dich` varchar(10) NOT NULL,
  `ngay_giao_dich` date NOT NULL,
  `id_user` varchar(10) NOT NULL,
  `so_tien` bigint(20) NOT NULL,
  `id_hang` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lich_chieu`
--

CREATE TABLE `lich_chieu` (
  `id` varchar(10) NOT NULL,
  `id_phim` varchar(10) NOT NULL,
  `thoi_gian_chieu` datetime NOT NULL,
  `room_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `mat_hang`
--

CREATE TABLE `mat_hang` (
  `id_hang` varchar(10) NOT NULL,
  `ten` varchar(20) NOT NULL,
  `gia` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ma_vach`
--

CREATE TABLE `ma_vach` (
  `id_ma_vach` varchar(10) NOT NULL,
  `id_giao_dich` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permision`
--

CREATE TABLE `permision` (
  `per_id` varchar(10) NOT NULL,
  `per_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `per_action`
--

CREATE TABLE `per_action` (
  `id` varchar(10) NOT NULL,
  `per_id` varchar(10) NOT NULL,
  `action_id` varchar(10) NOT NULL,
  `licensed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phim`
--

CREATE TABLE `phim` (
  `id_phim` varchar(10) NOT NULL,
  `ten_phim` text NOT NULL,
  `noi_dung` text NOT NULL,
  `thoi_luong` time NOT NULL,
  `so_sao` tinyint(4) NOT NULL,
  `nha_san_xuat` varchar(20) NOT NULL,
  `dao_dien` varchar(50) NOT NULL,
  `the_loai` varchar(20) NOT NULL,
  `trailer` varchar(1000) NOT NULL,
  `poster` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `phim`
--

INSERT INTO `phim` (`id_phim`, `ten_phim`, `noi_dung`, `thoi_luong`, `so_sao`, `nha_san_xuat`, `dao_dien`, `the_loai`, `trailer`, `poster`) VALUES
('1', 'phu thuy toi thương ', 'da update thanh cong', '03:19:21', 4, 'ma', 'sam', 'sah', 'gfdgfdhthrt', 'gfdhthrhwehrwh'),
('2', 'iron ', 'dfdfdfsdsdsdsf', '03:19:21', 4, 'ma', 'sam', 'sah', 'gfdgfdhthrt', 'gfdhthrhwehrwh'),
('3', 'avartar', 'nguoi xanh le', '03:19:21', 4, 'ma', 'sam', 'vien tương', 'sdgdfhrthfdvxv', 'shdbfdjtrrj');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `room`
--

CREATE TABLE `room` (
  `Room_Id` varchar(10) NOT NULL,
  `Room_Name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `seat`
--

CREATE TABLE `seat` (
  `Seat_Id` varchar(10) NOT NULL,
  `Room_Id` varchar(10) NOT NULL,
  `Room_Name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `seat_no`
--

CREATE TABLE `seat_no` (
  `Seat_Id` varchar(10) NOT NULL,
  `Seat_No` varchar(10) NOT NULL,
  `Status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thong_bao`
--

CREATE TABLE `thong_bao` (
  `id` varchar(10) NOT NULL,
  `ngay` date NOT NULL,
  `noi_dung` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `thong_bao`
--

INSERT INTO `thong_bao` (`id`, `ngay`, `noi_dung`) VALUES
('1', '2022-05-24', 'thong bao ngay 25 da update'),
('2', '2022-05-25', 'thong bao ngay 25');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `ID_User` varchar(10) NOT NULL,
  `User_Name` varchar(20) NOT NULL,
  `User_Password` varchar(20) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Phone_Number` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`ID_User`, `User_Name`, `User_Password`, `Email`, `Phone_Number`) VALUES
('1', 'user1', '0011', 'dcroima.com', '01234'),
('2', 'user002', '002002', 'user2@gmail.com', '0123456'),
('3', 'user003', '003003', 'user3@gmail.com', '0123456'),
('4', 'user4', '0011', 'dcroima.com', '01234');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_per`
--

CREATE TABLE `user_per` (
  `id` varchar(10) NOT NULL,
  `user_id` varchar(10) NOT NULL,
  `per_id` varchar(10) NOT NULL,
  `licensed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `action`
--
ALTER TABLE `action`
  ADD PRIMARY KEY (`action_id`);

--
-- Chỉ mục cho bảng `dien_vien`
--
ALTER TABLE `dien_vien`
  ADD PRIMARY KEY (`id_dien_vien`),
  ADD KEY `id_phim` (`id_phim`);

--
-- Chỉ mục cho bảng `doanh_thu`
--
ALTER TABLE `doanh_thu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `giao_dich`
--
ALTER TABLE `giao_dich`
  ADD PRIMARY KEY (`id_giao_dich`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_hang` (`id_hang`);

--
-- Chỉ mục cho bảng `lich_chieu`
--
ALTER TABLE `lich_chieu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_phim` (`id_phim`),
  ADD KEY `room_id` (`room_id`);

--
-- Chỉ mục cho bảng `mat_hang`
--
ALTER TABLE `mat_hang`
  ADD PRIMARY KEY (`id_hang`);

--
-- Chỉ mục cho bảng `ma_vach`
--
ALTER TABLE `ma_vach`
  ADD PRIMARY KEY (`id_ma_vach`),
  ADD KEY `id_giao_dich` (`id_giao_dich`);

--
-- Chỉ mục cho bảng `permision`
--
ALTER TABLE `permision`
  ADD PRIMARY KEY (`per_id`);

--
-- Chỉ mục cho bảng `per_action`
--
ALTER TABLE `per_action`
  ADD PRIMARY KEY (`id`),
  ADD KEY `per_id` (`per_id`),
  ADD KEY `action_id` (`action_id`);

--
-- Chỉ mục cho bảng `phim`
--
ALTER TABLE `phim`
  ADD PRIMARY KEY (`id_phim`);

--
-- Chỉ mục cho bảng `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`Room_Id`);

--
-- Chỉ mục cho bảng `seat`
--
ALTER TABLE `seat`
  ADD PRIMARY KEY (`Seat_Id`),
  ADD KEY `Room_Id` (`Room_Id`);

--
-- Chỉ mục cho bảng `seat_no`
--
ALTER TABLE `seat_no`
  ADD PRIMARY KEY (`Seat_Id`);

--
-- Chỉ mục cho bảng `thong_bao`
--
ALTER TABLE `thong_bao`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID_User`);

--
-- Chỉ mục cho bảng `user_per`
--
ALTER TABLE `user_per`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `per_id` (`per_id`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `dien_vien`
--
ALTER TABLE `dien_vien`
  ADD CONSTRAINT `dien_vien_ibfk_1` FOREIGN KEY (`id_phim`) REFERENCES `phim` (`id_phim`);

--
-- Các ràng buộc cho bảng `giao_dich`
--
ALTER TABLE `giao_dich`
  ADD CONSTRAINT `giao_dich_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`ID_User`),
  ADD CONSTRAINT `giao_dich_ibfk_2` FOREIGN KEY (`id_hang`) REFERENCES `mat_hang` (`id_hang`);

--
-- Các ràng buộc cho bảng `lich_chieu`
--
ALTER TABLE `lich_chieu`
  ADD CONSTRAINT `lich_chieu_ibfk_1` FOREIGN KEY (`id_phim`) REFERENCES `phim` (`id_phim`),
  ADD CONSTRAINT `lich_chieu_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`Room_Id`);

--
-- Các ràng buộc cho bảng `ma_vach`
--
ALTER TABLE `ma_vach`
  ADD CONSTRAINT `ma_vach_ibfk_1` FOREIGN KEY (`id_giao_dich`) REFERENCES `giao_dich` (`id_giao_dich`);

--
-- Các ràng buộc cho bảng `per_action`
--
ALTER TABLE `per_action`
  ADD CONSTRAINT `per_action_ibfk_1` FOREIGN KEY (`per_id`) REFERENCES `permision` (`per_id`),
  ADD CONSTRAINT `per_action_ibfk_2` FOREIGN KEY (`action_id`) REFERENCES `action` (`action_id`);

--
-- Các ràng buộc cho bảng `seat`
--
ALTER TABLE `seat`
  ADD CONSTRAINT `seat_ibfk_1` FOREIGN KEY (`Room_Id`) REFERENCES `room` (`Room_Id`);

--
-- Các ràng buộc cho bảng `seat_no`
--
ALTER TABLE `seat_no`
  ADD CONSTRAINT `seat_no_ibfk_1` FOREIGN KEY (`Seat_Id`) REFERENCES `seat` (`Seat_Id`);

--
-- Các ràng buộc cho bảng `user_per`
--
ALTER TABLE `user_per`
  ADD CONSTRAINT `user_per_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`ID_User`),
  ADD CONSTRAINT `user_per_ibfk_2` FOREIGN KEY (`per_id`) REFERENCES `permision` (`per_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
