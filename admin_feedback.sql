-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 14, 2024 at 10:39 AM
-- Server version: 5.5.68-MariaDB
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admin_feedback`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `mobilenumber` bigint(12) NOT NULL,
  `profileimg` varchar(200) NOT NULL,
  `email` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`id`, `username`, `password`, `mobilenumber`, `profileimg`, `email`) VALUES
(1, 'admin', 'admin@', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_feedback`
--

CREATE TABLE `tbl_feedback` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `country` varchar(250) NOT NULL,
  `state` varchar(200) NOT NULL,
  `city` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `star` int(10) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_feedback1`
--

CREATE TABLE `tbl_feedback1` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phonecode` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `country` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `rate` varchar(50) NOT NULL,
  `overall_experience` varchar(80) NOT NULL,
  `hosting_services` varchar(100) NOT NULL,
  `performance` varchar(100) NOT NULL,
  `customer` varchar(100) NOT NULL,
  `uptime` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `scale` varchar(15) NOT NULL,
  `specific_features` varchar(1000) NOT NULL,
  `regarding_our_services` varchar(1000) NOT NULL,
  `improve_our_services` varchar(1000) NOT NULL,
  `favorite_feature` varchar(1000) NOT NULL,
  `communication` varchar(100) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_feedback1`
--

INSERT INTO `tbl_feedback1` (`id`, `firstname`, `lastname`, `email`, `phonecode`, `phone`, `country`, `state`, `city`, `rate`, `overall_experience`, `hosting_services`, `performance`, `customer`, `uptime`, `price`, `scale`, `specific_features`, `regarding_our_services`, `improve_our_services`, `favorite_feature`, `communication`, `date`) VALUES
(1, 'Shubham ', 'Singh', 'ershubham2017@gmail.com', '+91', '8840065330', 'India', 'Uttar Pradesh', 'Lucknow ', '5', 'Very satisfied', ' Very easy', 'Extremely satisfied', 'Excellent', 'Very reliable', 'Good value', '8', 'Nothing ', 'Nothing ', 'Nothing ', 'Easy to use ', 'Satisfied', '2024-02-09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Mobile Number` (`id`,`username`);

--
-- Indexes for table `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_feedback1`
--
ALTER TABLE `tbl_feedback1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_feedback1`
--
ALTER TABLE `tbl_feedback1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
