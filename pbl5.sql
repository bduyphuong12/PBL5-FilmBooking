-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 19, 2022 lúc 11:55 AM
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
-- Cấu trúc bảng cho bảng `chi_tiet_giao_dich`
--

CREATE TABLE `chi_tiet_giao_dich` (
  `id` int(11) NOT NULL,
  `id_giao_dich` int(10) NOT NULL,
  `id_hang` varchar(10) NOT NULL,
  `so_luong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dien_vien`
--

CREATE TABLE `dien_vien` (
  `ten_dien_vien` varchar(20) NOT NULL,
  `avatar` varchar(1000) NOT NULL,
  `ngay_sinh` datetime NOT NULL,
  `quoc_tich` varchar(10) NOT NULL,
  `id_phim` varchar(10) NOT NULL,
  `id_dien_vien` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `dien_vien`
--

INSERT INTO `dien_vien` (`ten_dien_vien`, `avatar`, `ngay_sinh`, `quoc_tich`, `id_phim`, `id_dien_vien`) VALUES
('Chris Pratt', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzGnI__Ul05wKYDq3QYeoy1QbXXdWMvJpLezay515H6OiORtH-', '1979-06-21 07:00:00', 'Hoa Kỳ', '1', 1),
('Xochitl Gomez', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjpTPxKqXkH_or333MTdBOHtgR_EJMsxHBNiAE17STnkaOsbow', '2006-04-29 07:00:00', 'Hoa Kỳ', '2', 2),
('Patrick Stewart', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Patrick_Stewart_by_Gage_Skidmore_2.jpg/330px-Patrick_Stewart_by_Gage_Skidmore_2.jpg', '1940-07-13 07:00:00', 'Hoa Kỳ', '2', 3),
('Benedict Wong', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Benedict_Wong_by_Gage_Skidmore.jpg/300px-Benedict_Wong_by_Gage_Skidmore.jpg', '1971-06-03 07:00:00', 'Anh', '2', 4),
('Rachel McAdams', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rachel_McAdams_by_Gage_Skidmore.jpg/375px-Rachel_McAdams_by_Gage_Skidmore.jpg', '1978-11-17 07:00:00', 'Canada', '2', 5),
('Chiwetel Ejiofor', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Chiwetel_Ejiofor_by_Gage_Skidmore.jpg/330px-Chiwetel_Ejiofor_by_Gage_Skidmore.jpg', '1977-07-10 07:00:00', 'Anh', '2', 6),
('Ryo Yoshizawa', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/MJK_07977_Ryo_Yoshizawa_%28Berlinale_2018%29.jpg/330px-MJK_07977_Ryo_Yoshizawa_%28Berlinale_2018%29.jpg', '1994-02-01 07:00:00', 'Nhật Bản', '3', 7),
('Tetsu Inada', 'https://m.media-amazon.com/images/M/MV5BMGM1ZWNlZmItZTQzMC00NDI1LTljNDYtNDJkZWZmYjg5Yjc2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UX214_CR0,0,214,317_AL_.jpg', '1972-07-01 07:00:00', 'Nhật Bản', '3', 8),
('Nobuhiko Okamoto', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSuyEpQ4T-f2CyOoA1SG4vYJfqwhu9De0nnBP7OyXd6uh7YCHt', '1986-10-24 07:00:00', 'Nhật Bản', '3', 9),
('Benedict Cumberbat', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe20WzHzT8bz29yR7iy9h9y3RdG7zskA3P--HS-kM_ClV9TSrF', '1976-07-19 07:00:00', 'Anh', '2', 10),
('Daiki Yamashita', 'https://cdn.myanimelist.net/images/voiceactors/1/57424.jpg', '1989-07-07 07:00:00', 'Nhật Bản', '3', 11),
('Isabella Sermon', 'https://litecelebrities.com/wp-content/uploads/2022/03/Isabella-Sermon-Image.jpg', '2006-07-08 07:00:00', 'Anh', '1', 12),
('Jeff Goldblum', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Jeff_Goldblum_by_Gage_Skidmore_3.jpg/330px-Jeff_Goldblum_by_Gage_Skidmore_3.jpg', '1952-10-22 07:00:00', 'Hoa Kỳ', '1', 13),
('Kristoffer Polaha', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kristoffer_Polaha_%285983197878%29.jpg/330px-Kristoffer_Polaha_%285983197878%29.jpg', '1977-02-18 07:00:00', 'Hoa Kỳ', '1', 14),
('Bryce Dallas Howard', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bryce_Dallas_Howard_June_2018.jpg/330px-Bryce_Dallas_Howard_June_2018.jpg', '1981-03-02 07:00:00', 'Hoa Kỳ', '1', 15),
('Sam Neill', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Sam_Neill_2017_%28cropped%29.jpg/330px-Sam_Neill_2017_%28cropped%29.jpg', '1947-09-14 07:00:00', 'Anh', '1', 16),
('Elizabeth Olsen', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Elizabeth_Olsen_by_Gage_Skidmore_2.jpg/375px-Elizabeth_Olsen_by_Gage_Skidmore_2.jpg', '1989-02-16 07:00:00', 'Hoa Kỳ', '2', 17);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `doanh_thu`
--

CREATE TABLE `doanh_thu` (
  `id` varchar(10) NOT NULL,
  `ngay` date NOT NULL,
  `doanh_thu` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `doanh_thu`
--

INSERT INTO `doanh_thu` (`id`, `ngay`, `doanh_thu`) VALUES
('1', '2022-05-02', 50000000),
('2', '2022-05-03', 51000000),
('3', '2022-05-04', 52000000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giao_dich`
--

CREATE TABLE `giao_dich` (
  `id` int(11) NOT NULL,
  `ngay` datetime NOT NULL,
  `id_user` int(11) NOT NULL,
  `so_tien` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `giao_dich`
--

INSERT INTO `giao_dich` (`id`, `ngay`, `id_user`, `so_tien`) VALUES
(13, '2022-06-19 11:34:40', 10, 125);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lich_chieu`
--

CREATE TABLE `lich_chieu` (
  `id_phim` varchar(10) NOT NULL,
  `thoi_gian_chieu` datetime NOT NULL,
  `room_id` int(11) NOT NULL,
  `id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lich_chieu`
--

INSERT INTO `lich_chieu` (`id_phim`, `thoi_gian_chieu`, `room_id`, `id`) VALUES
('1', '2022-06-16 13:00:00', 1, 32),
('2', '2022-06-17 15:00:00', 1, 33),
('1', '2022-06-19 17:04:00', 1, 35),
('3', '2022-06-18 19:00:00', 1, 36),
('1', '2022-06-16 10:00:00', 1, 37),
('1', '2022-06-18 23:54:58', 2, 38);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `mat_hang`
--

CREATE TABLE `mat_hang` (
  `id_hang` varchar(10) NOT NULL,
  `ten` varchar(20) NOT NULL,
  `gia` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `mat_hang`
--

INSERT INTO `mat_hang` (`id_hang`, `ten`, `gia`) VALUES
('2', 'CocaCola', 25),
('3', 'Bắp', 20),
('4', 'Combo 1 bắp + 2 nước', 60),
('5', 'Combo 2 bắp + 2 nước', 80);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ma_vach`
--

CREATE TABLE `ma_vach` (
  `id_ma_vach` varchar(10) NOT NULL,
  `id_giao_dich` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permision`
--

CREATE TABLE `permision` (
  `per_id` varchar(10) NOT NULL,
  `per_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `permision`
--

INSERT INTO `permision` (`per_id`, `per_name`) VALUES
('1', 'admin'),
('2', 'user');

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
  `poster` varchar(1000) NOT NULL,
  `so_ve` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `phim`
--

INSERT INTO `phim` (`id_phim`, `ten_phim`, `noi_dung`, `thoi_luong`, `so_sao`, `nha_san_xuat`, `dao_dien`, `the_loai`, `trailer`, `poster`, `so_ve`) VALUES
('1', 'JURASSIC WORLD DOMINION', 'Bốn năm sau kết thúc Jurassic World: Fallen Kingdom, những con khủng long đã thoát khỏi nơi giam cầm và tiến vào thế giới loài người. Giờ đây, chúng xuất hiện ở khắp mọi nơi. Sinh vật to lớn ấy không còn chỉ ở trên đảo như trước nữa mà gần ngay trước mắt, thậm chí còn có thể chạm tới. Owen Grady may mắn gặp lại cô khủng long mà anh và khán giả vô cùng yêu mến - Blue. Tuy nhiên, Blue không đi một mình mà còn đem theo một chú khủng long con khác. Điều này khiến Owen càng quyết tâm bảo vệ mẹ con cô được sinh sống an toàn. Thế nhưng, hai giống loài quá khác biệt. Liệu có thể tồn tại một kỷ nguyên mà khủng long và con người sống chung một cách hòa bình? Chris Pratt và Bryce Dallas Howard tiếp tục vào vai hai nhân vật chính Owen Grady và Claire Dearing. Ngoài ra, thật tuyệt vời khi Laura Dern, Sam Neill, Jeff Goldblum và BD Wong quay lại diễn những nhân vật thời Jurassic Parkl: Tiến sĩ Ellie Sattler, Tiến sĩ Alan Grant, Tiến sĩ Ian Malcolm và Tiến sĩ Henry Wu. ', '01:45:02', 9, 'Universal Pictures', 'Colin Trevorrow', 'Action, Horror', 'https://www.youtube.com/embed/X0Peh-AClUM', 'https://cafecomnerd.com.br/wp-content/uploads/2022/04/JURASSIC-WORLD-DOMINION-Novo-poster-divulgado-pela-Universal-Pictures-combina-passado-com-presente.jpg', 25000),
('2', 'Doctor Strange In The Multiverse Of Madness', 'Lỡ tay làm phép khiến đa vũ trụ nảy sinh vấn đề ở Spider-Man: No Way Home, Doctor Strange “trả nghiệp” thế nào trong Doctor Strange In The Multiverse Of Madness? Có thể nói, chưa bao giờ Stephen Strange phải đối mặt với nhiều mối nguy như hiện tại. “Scarlet Witch” Wanda Maximoff tẩy não cả thị trấn (WandaVision), Loki và Sylvie quậy tung Cơ quan quản lí phương sai \nthời gian (Loki) và đỉnh điểm là điều ước thay đổi quá nhiều lần của Spider-Man Peter Parker khiến mọi thứ vô cùng hỗn loạn. Cố gắng giải quyết vấn đề, Stephen Strange tìm đến Wanda, nhờ cô \ngiúp đỡ. Tuy nhiên, nữ phù thủy vừa trải qua nỗi đau mất đi những người thân yêu cộng thêm tâm tính bất ổn có phải là cộng sự thích hợp? Wanda đáng thương sẽ thành phản diện ở phần này? Người bạn cũ Mordo nay đã quay lưng và trở thành kẻ thù không đội trời chung với  Strange quay trở lại. Gần như chắc chắn, hắn là kẻ ngáng đường. Chưa dừng lại ở đó, một phiên bản hắc ám của Doctor Strange – mạnh hơn và điên cuồng hơn cũng góp mặt. Gã đến từ đâu và mục đích của gã là gì? Strange hắc ám này là Strange Supreme từng khuấy đảo series What If…? Bi đát hơn, cô người yêu \nChristine của Strange sắp bước vào lễ đường mà chú rể chẳng phải là anh.', '02:07:01', 9, 'Sam Raimi', 'Marvel Studios', 'Action, Horror', 'https://www.youtube.com/embed/ijQGIHy88JM', 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/278577098_385580690243466_9220501655297017119_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=of4j9HXv-qsAX8tNyQ-&_nc_ht=scontent.fdad3-6.fna&oh=00_AT_6-Ty-hrHGhqP9_bcL0QoXxYCYOKM8JBfooFaJYqYVQg&oe=62A8BC43', 100000),
('3', 'My Hero Academia: World Heroes\' Mission', 'Một nhóm những người chống đối những người có năng lực đã phá hủy một thành phố bằng việc giải phóng một loại khí, khiến cho tất cả năng lực của những người dân nơi đây bị vượt tầm kiểm soát, những người hùng vĩ đại nhất của Nhật Bản đã phân tán khắp thế giới để tìm kiếm kẻ cầm đầu và đưa hắn ta ra trước công lý. Là một phần của đội Endeavour, Deku, Bakugo và Todoroki đi đến quốc gia Otheon ở Châu Âu. Nhưng sau khi ngăn chặn một vụ cướp không thành công, Deku vô tình bị buộc tội giết người hàng loạt và đang chạy trốn với một tên tội phạm, cùng dưới sự truy đuổi gắt gao của cảnh sát và những kẻ khủng bố đang theo dõi mình.', '01:30:00', 9, 'Bones', 'Kenji Nagasaki', 'Anime', 'https://www.youtube.com/embed/XGUh4WeOJFw', 'https://truthan.vn/giai-cuu-the-gioi-phan-3/imager_42981.jpg', 40000),
('5', 'DORAEMON: NOBITA VÀ CUỘC CHIẾN VŨ TRỤ TÍ HON 2021', 'Nobita tình cờ gặp được người ngoài hành tinh tí hon Papi, vốn là Tổng thống của hành tinh Pirika, chạy trốn tới Trái Đất để thoát khỏi những kẻ nổi loạn nơi quê nhà. Doraemon, Nobita và hội bạn thân dùng bảo bối đèn pin thu nhỏ biến đổi theo kích cỡ giống Papi để chơi cùng cậu bé. Thế nhưng, một tàu chiến không gian tấn công cả nhóm. Cảm thấy có trách nhiệm vì liên lụy mọi người, Papi quyết định một mình đương đầu với quân phiến loạn tàn ác. Doraemon và các bạn lên đường đến hành tinh Pirika, sát cánh bên người bạn của mình.', '01:39:00', 9, 'NB', 'Yamaguchi Susumu', 'Family, Anime', 'https://www.youtube.com/embed/bALKXsKhEEs', 'https://i.rada.vn/data/image/2022/04/21/Doraemon-Nobita-no-Little-Wars-1.jpg', 70000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `refreshtoken`
--

CREATE TABLE `refreshtoken` (
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `refreshtoken`
--

INSERT INTO `refreshtoken` (`token`) VALUES
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU2MzE1MTEsImV4cCI6MTY1ODIyMzUxMX0.aYD322nsGjFHPLkhd7031Vz3b0RxcSxtO9F8CA_965c');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `room`
--

CREATE TABLE `room` (
  `Room_Id` int(11) NOT NULL,
  `Room_Name` varchar(20) NOT NULL,
  `Status` varchar(5) NOT NULL,
  `Id_lich_chieu` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `room`
--

INSERT INTO `room` (`Room_Id`, `Room_Name`, `Status`, `Id_lich_chieu`) VALUES
(1, 'Room1', 'ON', 32),
(2, 'Room2', 'ON', 33),
(3, 'Room3', 'ON', 35),
(4, 'Room4', 'ON', 36),
(5, 'Room5', 'ON', 37);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `seat`
--

CREATE TABLE `seat` (
  `Seat_Id` varchar(10) NOT NULL,
  `Room_Id` int(11) NOT NULL,
  `Row_No` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `seat`
--

INSERT INTO `seat` (`Seat_Id`, `Room_Id`, `Row_No`) VALUES
('1', 1, 'A'),
('10', 1, 'J'),
('11', 2, 'A'),
('12', 2, 'B'),
('13', 2, 'C'),
('14', 2, 'D'),
('15', 2, 'E'),
('16', 2, 'F'),
('17', 2, 'G'),
('18', 2, 'H'),
('19', 2, 'I'),
('2', 1, 'B'),
('20', 2, 'J'),
('21', 3, 'A'),
('22', 3, 'B'),
('23', 3, 'C'),
('24', 3, 'D'),
('25', 3, 'E'),
('26', 3, 'F'),
('27', 3, 'G'),
('28', 3, 'H'),
('29', 3, 'I'),
('3', 1, 'C'),
('30', 3, 'J'),
('31', 4, 'A'),
('32', 4, 'B'),
('33', 4, 'C'),
('34', 4, 'D'),
('35', 4, 'E'),
('36', 4, 'F'),
('37', 4, 'G'),
('38', 4, 'H'),
('39', 4, 'I'),
('4', 1, 'D'),
('40', 4, 'J'),
('41', 5, 'A'),
('42', 5, 'B'),
('43', 5, 'C'),
('44', 5, 'D'),
('45', 5, 'E'),
('46', 5, 'F'),
('47', 5, 'G'),
('48', 5, 'H'),
('49', 5, 'I'),
('5', 1, 'E'),
('50', 5, 'J'),
('6', 1, 'F'),
('7', 1, 'G'),
('8', 1, 'H'),
('9', 1, 'I');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `seat_no`
--

CREATE TABLE `seat_no` (
  `id` int(11) NOT NULL,
  `Seat_Id` varchar(10) NOT NULL,
  `Seat_No` varchar(10) NOT NULL,
  `Status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `seat_no`
--

INSERT INTO `seat_no` (`id`, `Seat_Id`, `Seat_No`, `Status`) VALUES
(1, '1', '1', '1'),
(2, '1', '2', 'null'),
(3, '1', '3', 'null'),
(4, '1', '4', 'null'),
(5, '1', '5', 'null'),
(6, '1', '6', 'null'),
(7, '1', '7', 'null'),
(8, '1', '8', 'null'),
(9, '1', '9', 'null'),
(10, '1', '10', 'null'),
(11, '2', '3', 'null'),
(12, '2', '4', 'null'),
(13, '2', '5', 'null'),
(14, '2', '6', 'null'),
(15, '2', '7', 'null'),
(16, '2', '8', 'null'),
(17, '2', '9', 'null'),
(18, '2', '10', 'null'),
(19, '2', '2', 'null'),
(20, '2', '1', 'null'),
(21, '3', '3', 'null'),
(22, '3', '4', 'null'),
(23, '3', '5', 'null'),
(24, '3', '6', 'null'),
(25, '3', '7', 'null'),
(26, '3', '8', 'null'),
(27, '10', '10', 'null'),
(28, '3', '9', 'null'),
(29, '3', '10', 'null'),
(30, '3', '2', 'null'),
(31, '3', '1', 'null'),
(32, '4', '3', 'null'),
(33, '4', '4', 'null'),
(34, '4', '5', 'null'),
(35, '4', '6', 'null'),
(36, '4', '7', 'null'),
(37, '4', '8', 'null'),
(38, '4', '9', 'null'),
(39, '4', '10', 'null'),
(40, '4', '2', 'null'),
(41, '4', '1', 'null'),
(42, '5', '3', 'null'),
(43, '5', '4', 'null'),
(44, '5', '5', 'null'),
(45, '5', '6', 'null'),
(46, '5', '7', 'null'),
(47, '5', '8', 'null'),
(48, '5', '9', 'null'),
(49, '5', '10', 'null'),
(50, '5', '2', 'null'),
(51, '5', '1', 'null'),
(52, '6', '1', 'null'),
(53, '7', '1', 'null'),
(54, '8', '1', 'null'),
(55, '9', '1', 'null'),
(56, '10', '1', 'null'),
(57, '6', '2', 'null'),
(58, '6', '3', 'null'),
(59, '6', '4', 'null'),
(60, '6', '5', 'null'),
(61, '6', '6', 'null'),
(62, '6', '7', 'null'),
(63, '6', '8', 'null'),
(64, '6', '9', 'null'),
(65, '6', '10', 'null'),
(66, '7', '2', 'null'),
(67, '7', '3', 'null'),
(68, '7', '4', 'null'),
(69, '7', '5', 'null'),
(70, '7', '6', 'null'),
(71, '7', '7', 'null'),
(72, '7', '8', 'null'),
(73, '7', '9', 'null'),
(74, '7', '10', 'null'),
(75, '8', '2', 'null'),
(76, '8', '3', 'null'),
(77, '8', '4', 'null'),
(78, '8', '5', 'null'),
(79, '8', '6', 'null'),
(80, '8', '7', 'null'),
(81, '8', '8', 'null'),
(82, '8', '9', 'null'),
(83, '8', '10', 'null'),
(84, '9', '2', 'null'),
(85, '9', '3', 'null'),
(86, '9', '4', 'null'),
(87, '9', '5', 'null'),
(88, '9', '6', 'null'),
(89, '9', '7', 'null'),
(90, '9', '8', 'null'),
(91, '9', '9', 'null'),
(92, '9', '10', 'null'),
(93, '10', '2', 'null'),
(94, '10', '3', 'null'),
(95, '10', '4', 'null'),
(96, '10', '5', 'null'),
(97, '10', '6', 'null'),
(98, '10', '7', 'null'),
(99, '10', '8', 'null'),
(100, '10', '9', 'null'),
(101, '11', '1', 'null'),
(102, '11', '2', 'null'),
(103, '11', '3', 'null'),
(104, '11', '4', 'null'),
(105, '11', '5', 'null'),
(106, '11', '6', 'null'),
(107, '11', '7', 'null'),
(108, '11', '8', 'null'),
(109, '11', '9', 'null'),
(110, '11', '10', 'null'),
(111, '12', '3', 'null'),
(112, '12', '4', 'null'),
(113, '12', '5', 'null'),
(114, '12', '6', 'null'),
(115, '12', '7', 'null'),
(116, '12', '8', 'null'),
(117, '12', '9', 'null'),
(118, '12', '10', 'null'),
(119, '12', '2', 'null'),
(120, '12', '1', 'null'),
(121, '13', '3', 'null'),
(122, '13', '4', 'null'),
(123, '13', '5', 'null'),
(124, '13', '6', 'null'),
(125, '13', '7', 'null'),
(126, '13', '8', 'null'),
(127, '20', '10', 'null'),
(128, '13', '9', 'null'),
(129, '13', '10', 'null'),
(130, '13', '2', 'null'),
(131, '13', '1', 'null'),
(132, '14', '3', 'null'),
(133, '14', '4', 'null'),
(134, '14', '5', 'null'),
(135, '14', '6', 'null'),
(136, '14', '7', 'null'),
(137, '14', '8', 'null'),
(138, '14', '9', 'null'),
(139, '14', '10', 'null'),
(140, '14', '2', 'null'),
(141, '14', '1', 'null'),
(142, '15', '3', 'null'),
(143, '15', '4', 'null'),
(144, '15', '5', 'null'),
(145, '15', '6', 'null'),
(146, '15', '7', 'null'),
(147, '15', '8', 'null'),
(148, '15', '9', 'null'),
(149, '15', '10', 'null'),
(150, '15', '2', 'null'),
(151, '15', '1', 'null'),
(152, '16', '1', 'null'),
(153, '17', '1', 'null'),
(154, '18', '1', 'null'),
(155, '19', '1', 'null'),
(156, '20', '1', 'null'),
(157, '16', '2', 'null'),
(158, '16', '3', 'null'),
(159, '16', '4', 'null'),
(160, '16', '5', 'null'),
(161, '16', '6', 'null'),
(162, '16', '7', 'null'),
(163, '16', '8', 'null'),
(164, '16', '9', 'null'),
(165, '16', '10', 'null'),
(166, '17', '2', 'null'),
(167, '17', '3', 'null'),
(168, '17', '4', 'null'),
(169, '17', '5', 'null'),
(170, '17', '6', 'null'),
(171, '17', '7', 'null'),
(172, '17', '8', 'null'),
(173, '17', '9', 'null'),
(174, '17', '10', 'null'),
(175, '18', '2', 'null'),
(176, '18', '3', 'null'),
(177, '18', '4', 'null'),
(178, '18', '5', 'null'),
(179, '18', '6', 'null'),
(180, '18', '7', 'null'),
(181, '18', '8', 'null'),
(182, '18', '9', 'null'),
(183, '18', '10', 'null'),
(184, '19', '2', 'null'),
(185, '19', '3', 'null'),
(186, '19', '4', 'null'),
(187, '19', '5', 'null'),
(188, '19', '6', 'null'),
(189, '19', '7', 'null'),
(190, '19', '8', 'null'),
(191, '19', '9', 'null'),
(192, '19', '10', 'null'),
(193, '20', '2', 'null'),
(194, '20', '3', 'null'),
(195, '20', '4', 'null'),
(196, '20', '5', 'null'),
(197, '20', '6', 'null'),
(198, '20', '7', 'null'),
(199, '20', '8', 'null'),
(200, '20', '9', 'null'),
(201, '21', '1', 'null'),
(202, '21', '2', 'null'),
(203, '21', '3', 'null'),
(204, '21', '4', 'null'),
(205, '21', '5', 'null'),
(206, '21', '6', 'null'),
(207, '21', '7', 'null'),
(208, '21', '8', 'null'),
(209, '21', '9', 'null'),
(210, '21', '10', 'null'),
(211, '22', '3', 'null'),
(212, '22', '4', 'null'),
(213, '22', '5', 'null'),
(214, '22', '6', 'null'),
(215, '22', '7', 'null'),
(216, '22', '8', 'null'),
(217, '22', '9', 'null'),
(218, '22', '10', 'null'),
(219, '22', '2', 'null'),
(220, '22', '1', 'null'),
(221, '23', '3', 'null'),
(222, '23', '4', 'null'),
(223, '23', '5', 'null'),
(224, '23', '6', 'null'),
(225, '23', '7', 'null'),
(226, '23', '8', 'null'),
(227, '30', '10', 'null'),
(228, '23', '9', 'null'),
(229, '23', '10', 'null'),
(230, '23', '2', 'null'),
(231, '23', '1', 'null'),
(232, '24', '3', 'null'),
(233, '24', '4', 'null'),
(234, '24', '5', 'null'),
(235, '24', '6', 'null'),
(236, '24', '7', 'null'),
(237, '24', '8', 'null'),
(238, '24', '9', 'null'),
(239, '24', '10', 'null'),
(240, '24', '2', 'null'),
(241, '24', '1', 'null'),
(242, '25', '3', 'null'),
(243, '25', '4', 'null'),
(244, '25', '5', 'null'),
(245, '25', '6', 'null'),
(246, '25', '7', 'null'),
(247, '25', '8', 'null'),
(248, '25', '9', 'null'),
(249, '25', '10', 'null'),
(250, '25', '2', 'null'),
(251, '25', '1', 'null'),
(252, '26', '1', 'null'),
(253, '27', '1', 'null'),
(254, '28', '1', 'null'),
(255, '29', '1', 'null'),
(256, '30', '1', 'null'),
(257, '26', '2', 'null'),
(258, '26', '3', 'null'),
(259, '26', '4', 'null'),
(260, '26', '5', 'null'),
(261, '26', '6', 'null'),
(262, '26', '7', 'null'),
(263, '26', '8', 'null'),
(264, '26', '9', 'null'),
(265, '26', '10', 'null'),
(266, '27', '2', 'null'),
(267, '27', '3', 'null'),
(268, '27', '4', 'null'),
(269, '27', '5', 'null'),
(270, '27', '6', 'null'),
(271, '27', '7', 'null'),
(272, '27', '8', 'null'),
(273, '27', '9', 'null'),
(274, '27', '10', 'null'),
(275, '28', '2', 'null'),
(276, '28', '3', 'null'),
(277, '28', '4', 'null'),
(278, '28', '5', 'null'),
(279, '28', '6', 'null'),
(280, '28', '7', 'null'),
(281, '28', '8', 'null'),
(282, '28', '9', 'null'),
(283, '28', '10', 'null'),
(284, '29', '2', 'null'),
(285, '29', '3', 'null'),
(286, '29', '4', 'null'),
(287, '29', '5', 'null'),
(288, '29', '6', 'null'),
(289, '29', '7', 'null'),
(290, '29', '8', 'null'),
(291, '29', '9', 'null'),
(292, '29', '10', 'null'),
(293, '30', '2', 'null'),
(294, '30', '3', 'null'),
(295, '30', '4', 'null'),
(296, '30', '5', 'null'),
(297, '30', '6', 'null'),
(298, '30', '7', 'null'),
(299, '30', '8', 'null'),
(300, '30', '9', 'null'),
(301, '31', '1', 'NULL'),
(302, '31', '2', '1'),
(303, '31', '3', '1'),
(304, '31', '4', 'NULL'),
(305, '31', '5', '1'),
(306, '31', '6', 'NULL'),
(307, '31', '7', '1'),
(308, '31', '8', 'NULL'),
(309, '31', '9', 'NULL'),
(310, '31', '10', 'NULL'),
(311, '32', '3', '1'),
(312, '32', '4', '1'),
(313, '32', '5', 'NULL'),
(314, '32', '6', 'NULL'),
(315, '32', '7', '1'),
(316, '32', '8', '1'),
(317, '32', '9', 'NULL'),
(318, '32', '10', 'NULL'),
(319, '32', '2', 'NULL'),
(320, '32', '1', 'NULL'),
(321, '33', '3', 'NULL'),
(322, '33', '4', '1'),
(323, '33', '5', '1'),
(324, '33', '6', '1'),
(325, '33', '7', '1'),
(326, '33', '8', '1'),
(327, '40', '10', 'NULL'),
(328, '33', '9', '1'),
(329, '33', '10', 'NULL'),
(330, '33', '2', '1'),
(331, '33', '1', 'NULL'),
(332, '34', '3', '1'),
(333, '34', '4', '1'),
(334, '34', '5', '1'),
(335, '34', '6', '1'),
(336, '34', '7', '1'),
(337, '34', '8', 'NULL'),
(338, '34', '9', 'NULL'),
(339, '34', '10', 'NULL'),
(340, '34', '2', 'NULL'),
(341, '34', '1', 'NULL'),
(342, '35', '3', 'NULL'),
(343, '35', '4', '1'),
(344, '35', '5', '1'),
(345, '35', '6', '1'),
(346, '35', '7', '1'),
(347, '35', '8', '1'),
(348, '35', '9', 'NULL'),
(349, '35', '10', 'NULL'),
(350, '35', '2', 'NULL'),
(351, '35', '1', 'NULL'),
(352, '36', '1', '1'),
(353, '37', '1', '1'),
(354, '38', '1', 'NULL'),
(355, '39', '1', 'NULL'),
(356, '40', '1', '1'),
(357, '36', '2', 'NULL'),
(358, '36', '3', '1'),
(359, '36', '4', '1'),
(360, '36', '5', '1'),
(361, '36', '6', '1'),
(362, '36', '7', 'NULL'),
(363, '36', '8', 'NULL'),
(364, '36', '9', '1'),
(365, '36', '10', 'NULL'),
(366, '37', '2', '1'),
(367, '37', '3', '1'),
(368, '37', '4', '1'),
(369, '37', '5', '1'),
(370, '37', '6', '1'),
(371, '37', '7', '1'),
(372, '37', '8', '1'),
(373, '37', '9', '1'),
(374, '37', '10', 'NULL'),
(375, '38', '2', 'NULL'),
(376, '38', '3', 'NULL'),
(377, '38', '4', '1'),
(378, '38', '5', '1'),
(379, '38', '6', '1'),
(380, '38', '7', 'NULL'),
(381, '38', '8', 'NULL'),
(382, '38', '9', '1'),
(383, '38', '10', '1'),
(384, '39', '2', '1'),
(385, '39', '3', '1'),
(386, '39', '4', '1'),
(387, '39', '5', '1'),
(388, '39', '6', '1'),
(389, '39', '7', 'NULL'),
(390, '39', '8', '1'),
(391, '39', '9', '1'),
(392, '39', '10', '1'),
(393, '40', '2', 'NULL'),
(394, '40', '3', 'NULL'),
(395, '40', '4', '1'),
(396, '40', '5', '1'),
(397, '40', '6', 'NULL'),
(398, '40', '7', '1'),
(399, '40', '8', '1'),
(400, '40', '9', '1'),
(401, '41', '1', 'NULL'),
(402, '41', '2', '1'),
(403, '41', '3', '1'),
(404, '41', '4', 'NULL'),
(405, '41', '5', '1'),
(406, '41', '6', 'NULL'),
(407, '41', '7', '1'),
(408, '41', '8', 'NULL'),
(409, '41', '9', 'NULL'),
(410, '41', '10', 'NULL'),
(411, '42', '3', '1'),
(412, '42', '4', '1'),
(413, '42', '5', 'NULL'),
(414, '42', '6', 'NULL'),
(415, '42', '7', '1'),
(416, '42', '8', '1'),
(417, '42', '9', 'NULL'),
(418, '42', '10', 'NULL'),
(419, '42', '2', 'NULL'),
(420, '42', '1', 'NULL'),
(421, '43', '3', 'NULL'),
(422, '43', '4', '1'),
(423, '43', '5', '1'),
(424, '43', '6', '1'),
(425, '43', '7', '1'),
(426, '43', '8', '1'),
(427, '50', '10', 'NULL'),
(428, '43', '9', '1'),
(429, '43', '10', 'NULL'),
(430, '43', '2', '1'),
(431, '43', '1', 'NULL'),
(432, '44', '3', '1'),
(433, '44', '4', '1'),
(434, '44', '5', '1'),
(435, '44', '6', '1'),
(436, '44', '7', '1'),
(437, '44', '8', 'NULL'),
(438, '44', '9', 'NULL'),
(439, '44', '10', 'NULL'),
(440, '44', '2', 'NULL'),
(441, '44', '1', 'NULL'),
(442, '45', '3', 'NULL'),
(443, '45', '4', '1'),
(444, '45', '5', '1'),
(445, '45', '6', '1'),
(446, '45', '7', '1'),
(447, '45', '8', '1'),
(448, '45', '9', 'NULL'),
(449, '45', '10', 'NULL'),
(450, '45', '2', 'NULL'),
(451, '45', '1', 'NULL'),
(452, '46', '1', '1'),
(453, '47', '1', '1'),
(454, '48', '1', 'NULL'),
(455, '49', '1', 'NULL'),
(456, '50', '1', '1'),
(457, '46', '2', 'NULL'),
(458, '46', '3', '1'),
(459, '46', '4', '1'),
(460, '46', '5', '1'),
(461, '46', '6', '1'),
(462, '46', '7', 'NULL'),
(463, '46', '8', 'NULL'),
(464, '46', '9', '1'),
(465, '46', '10', 'NULL'),
(466, '47', '2', '1'),
(467, '47', '3', '1'),
(468, '47', '4', '1'),
(469, '47', '5', '1'),
(470, '47', '6', '1'),
(471, '47', '7', '1'),
(472, '47', '8', '1'),
(473, '47', '9', '1'),
(474, '47', '10', 'NULL'),
(475, '48', '2', 'NULL'),
(476, '48', '3', 'NULL'),
(477, '48', '4', '1'),
(478, '48', '5', '1'),
(479, '48', '6', '1'),
(480, '48', '7', 'NULL'),
(481, '48', '8', 'NULL'),
(482, '48', '9', '1'),
(483, '48', '10', '1'),
(484, '49', '2', '1'),
(485, '49', '3', '1'),
(486, '49', '4', '1'),
(487, '49', '5', '1'),
(488, '49', '6', '1'),
(489, '49', '7', 'NULL'),
(490, '49', '8', '1'),
(491, '49', '9', '1'),
(492, '49', '10', '1'),
(493, '50', '2', 'NULL'),
(494, '50', '3', 'NULL'),
(495, '50', '4', '1'),
(496, '50', '5', '1'),
(497, '50', '6', 'NULL'),
(498, '50', '7', '1'),
(499, '50', '8', '1'),
(500, '50', '9', '1');

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
('2', '2022-05-25', 'thong bao ngay 25'),
('3', '2022-06-12', 'eiyo \n'),
('4', '2022-06-12', 'yuuuu');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `ID_User` int(11) NOT NULL,
  `User_Name` varchar(20) NOT NULL,
  `User_Password` varchar(255) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Phone_Number` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`ID_User`, `User_Name`, `User_Password`, `Email`, `Phone_Number`) VALUES
(1, 'Ho Minh Hieu', '$2b$10$2n0g3xrUN9aFaPy7KxAaD.lvrB/Jy6Ah5dDD6lQNsGE8mtBKS4KWK', 'oppahd96@gmail.com', '0928488738'),
(2, 'Bui Duy Phuong', '002002', 'user2@gmail.com', '0123456789'),
(3, 'Phan Huu Minh Tri', '003003', 'user3@gmail.com', '0123456789'),
(4, 'Le  Thi Le', '$2a$12$EHf3F5MfxloVWFXXTdUWPOCE.rO.WHi3yU9L6j0oSqgXr5kVGzHvy', 'lethile@gmail.com', '0928488738'),
(5, 'Tran Xuan Trong', '01', 'TranXuanTrong@gmail.', '0123456788'),
(6, 'Hoang Trong Thai', '011', 'htthai@gmail.com', '0123456788'),
(7, 'Dinh Gia Bao', '012', 'DinhGiaBao@gmail.com', '0927382134'),
(8, 'Duy Hoa', '014', 'DuyHoa@gmail.com', '0123456783'),
(9, 'Thai Van Tho', '$2a$12$EHf3F5MfxloVWFXXTdUWPOCE.rO.WHi3yU9L6j0oSqgXr5kVGzHvy', 'thaivantho@gmail.com', '0909239222'),
(16, 'DuyPhuong', '$2b$10$RA2Q8XdiMbu5RIJPTQTzK.IhhHeI/0WiN5gAvON0YNN95mMC/CVRe', 'bduyphuong12@gmail.c', '0123456456');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_per`
--

CREATE TABLE `user_per` (
  `id` varchar(10) NOT NULL,
  `user_id` int(11) NOT NULL,
  `per_id` varchar(10) NOT NULL,
  `licensed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user_per`
--

INSERT INTO `user_per` (`id`, `user_id`, `per_id`, `licensed`) VALUES
('1', 1, '1', 1),
('2', 2, '1', 1),
('9', 9, '1', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `action`
--
ALTER TABLE `action`
  ADD PRIMARY KEY (`action_id`);

--
-- Chỉ mục cho bảng `chi_tiet_giao_dich`
--
ALTER TABLE `chi_tiet_giao_dich`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_hang` (`id_hang`),
  ADD KEY `id_giao_dich` (`id_giao_dich`);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

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
  ADD PRIMARY KEY (`id_hang`),
  ADD UNIQUE KEY `id_phim` (`id_hang`);

--
-- Chỉ mục cho bảng `ma_vach`
--
ALTER TABLE `ma_vach`
  ADD PRIMARY KEY (`id_ma_vach`),
  ADD KEY `ma_vach_ibfk_1` (`id_giao_dich`);

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
  ADD PRIMARY KEY (`Room_Id`),
  ADD KEY `Id_lich_chieu` (`Id_lich_chieu`);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `Seat_Id` (`Seat_Id`);

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
  ADD KEY `per_id` (`per_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `chi_tiet_giao_dich`
--
ALTER TABLE `chi_tiet_giao_dich`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `dien_vien`
--
ALTER TABLE `dien_vien`
  MODIFY `id_dien_vien` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `giao_dich`
--
ALTER TABLE `giao_dich`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `lich_chieu`
--
ALTER TABLE `lich_chieu`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT cho bảng `seat_no`
--
ALTER TABLE `seat_no`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=501;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `ID_User` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chi_tiet_giao_dich`
--
ALTER TABLE `chi_tiet_giao_dich`
  ADD CONSTRAINT `chi_tiet_giao_dich_ibfk_2` FOREIGN KEY (`id_hang`) REFERENCES `mat_hang` (`id_hang`),
  ADD CONSTRAINT `chi_tiet_giao_dich_ibfk_3` FOREIGN KEY (`id_giao_dich`) REFERENCES `giao_dich` (`id`);

--
-- Các ràng buộc cho bảng `dien_vien`
--
ALTER TABLE `dien_vien`
  ADD CONSTRAINT `dien_vien_ibfk_1` FOREIGN KEY (`id_phim`) REFERENCES `phim` (`id_phim`);

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
  ADD CONSTRAINT `ma_vach_ibfk_1` FOREIGN KEY (`id_giao_dich`) REFERENCES `giao_dich` (`id`);

--
-- Các ràng buộc cho bảng `per_action`
--
ALTER TABLE `per_action`
  ADD CONSTRAINT `per_action_ibfk_1` FOREIGN KEY (`per_id`) REFERENCES `permision` (`per_id`),
  ADD CONSTRAINT `per_action_ibfk_2` FOREIGN KEY (`action_id`) REFERENCES `action` (`action_id`);

--
-- Các ràng buộc cho bảng `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`Id_lich_chieu`) REFERENCES `lich_chieu` (`id`);

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
  ADD CONSTRAINT `user_per_ibfk_2` FOREIGN KEY (`per_id`) REFERENCES `permision` (`per_id`),
  ADD CONSTRAINT `user_per_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `user` (`ID_User`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
