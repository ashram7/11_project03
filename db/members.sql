-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 21-11-09 12:31
-- 서버 버전: 10.4.21-MariaDB
-- PHP 버전: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `ashram7`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `members`
--

CREATE TABLE `members` (
  `num` int(11) NOT NULL,
  `id` char(15) NOT NULL,
  `pass` char(15) NOT NULL,
  `name` char(10) NOT NULL,
  `email` char(80) DEFAULT NULL,
  `regist_day` char(20) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `point` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 테이블의 덤프 데이터 `members`
--

INSERT INTO `members` (`num`, `id`, `pass`, `name`, `email`, `regist_day`, `level`, `point`) VALUES
(1, 'admin', '1234', '관리자', 's_u_@naver.com', '2021-11-03 (10:16)', 1, 78777),
(2, 'alieen', '19991103', '김혜련', 's_u_ga_@naver.com', '2021-11-02 (12:58)', 1, 7777),
(3, 'koeyhni', '1234', '김인혁', 'dlsur1225@naver.com', '2021-11-02 (12:58)', 1, 9000),
(4, 'hminwo98', 'ay2111!!', '형민우', 'hminwo98@naver.com', '2021-11-08 (14:20)', 1, 0),
(5, 'jmkhan99', '1234', '강준모', 'jmkhana@gmail.com', '2021-11-01 (12:42)', 1, 0),
(6, 'kyk0630', '123456789', '고영관', 'master0630@naver.com', '2021-11-08 (14:21)', 1, 1100),
(7, 'tmdwn', '1234', '박승주', 'qxtse130613@naver.com', '2021-11-08 (14:22)', 1, 500);

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`num`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `members`
--
ALTER TABLE `members`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
