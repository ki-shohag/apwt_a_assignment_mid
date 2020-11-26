-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2020 at 11:16 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `computer_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` double(10,2) NOT NULL,
  `category` varchar(20) DEFAULT NULL,
  `brand` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `price`, `category`, `brand`) VALUES
(4, 'LPX R850 RAM', 'blah blah blah', 4500.00, 'Ram', 'Corsair'),
(5, 'Ripjaws 3870TX', 'anbadafdgkajo;oaifg', 4300.00, 'Ram', 'GSkill'),
(6, 'AD-536TRX 5877', 'adgafdhsgny', 4000.00, 'Ram', 'Adata'),
(7, 'AV-165SF121', 'nasdadnnadscknknn', 4200.00, 'Ram', 'Avexir'),
(8, 'SD-165GDSG 256GB', 'aadnnnvakscndknasd', 3200.00, 'SSD', 'Corsair'),
(9, 'SD-2GD 512GB NVME M.2', 'adfhadfhrgdsrhdfb', 5000.00, 'SSD', 'Samsung'),
(10, 'GB-154GN 128GB SATA SSD', 'jaskdladfvnasdfnadsnnasdnn', 3000.00, 'SSD', 'Gigabyte'),
(11, ' Gigabyte GeForce GTX 1650 D6 WINDFORCE OC 4G Graphics Card', 'Powered by GeForce GTX 1650 80 mm unique blade fans WINDFORCE 2X Cooling System Integrated with 4GB GDDR6 128-bit', 9999.99, 'Graphics-Card', 'Gigabyte'),
(12, ' ZOTAC GAMING GeForce RTX 2060 6GB GDDR6 Twin Fan Graphics Card', 'Video Memory: 6GB PCI Express 3.0 Engine Clock:1680 MHz Resolution: 4096x2160@60Hz', 9999.99, 'Graphics-Card', 'Zotac'),
(13, ' Asus TUF Gaming GeForce GTX 1650 Super OC 4GB Graphics Card', 'Video Memory: 4GB GDDR6 Engine Clock: 1800 MHz (OC Mode) Resolution: 7680x4320 Auto-Extreme Technology', 9999.99, 'Graphics-Card', 'Asus'),
(14, ' MSI Radeon RX 5500 XT Gaming X 8GB GDDR6 Graphics Card', 'Boost Clock/ Game Clock/ Base Clock: Up to 1845 MHz / Up to 1737 MHz / 1685 MHz Dispersion Fan Blade Afterburner Overclocking Utility Customize colors and LED effects', 9999.99, 'Graphics-Card', 'MSI'),
(15, ' HP EliteBook 840 G5 AMD RADEON RX540 2GB DDR4 GRAPHICS Core i5 8th Gen Ultrabook', 'Intel Core i5-8250U (1.60 GHz up to 3.40 GHz) 8 GB DDR4 RAM 256 GB M.2 SATA SSD 14.1\" FHD backlit', 9999.99, 'Laptop', 'HP'),
(16, ' Dell Vostro 3491 Core i3 10th Gen 14\" HD Laptop', 'Intel Core i3-1005G1 Processor (4M Cache, 1.20 GHz up to 3.40 GHz) 4GB (4Gx1) DDR4 2666MHz 1TB 5400 rpm 2.5\" SATA HDD 14.0-inch HD (1366 x 768) Display', 9999.99, 'Laptop', 'Dell'),
(17, ' Lenovo ThinkPad E490 Core i5 8th Gen 14 inch FHD Laptop', 'Intel Core i5-8265U (6M Cache,1.60 GHz up to 3.90 GHz) Processor 8GB RAM 1TB HDD 14\"FHD(1920 x 1080) Anti-Glare Display', 9999.99, 'Laptop', 'Lenovo'),
(18, ' Apple MacBook Air 13.3-Inch 10th Gen Core i3-1.1GHz, 8GB RAM, 256GB SSD (MWTJ2) Space Gray 2020', 'ntel Core i3-1000NG4(4M Cache, 1.10 GHz up to 3.20 GHz) Processor 8GB LPDDR4X 3733MHz RAM 256GB SSD 13.3-inch (diagonal) Retina LED-backlit Display', 9999.99, 'Laptop', 'Apple'),
(19, ' Microsoft Surface Pro 7 10th Gen Core i5 8GB Ram 128GB SSD Touch Display Notebook with Win 10', 'Intel Core i5-1035G4 Processor (6 MB Cache, up to 3.70 GHz) Screen: 12.3” PixelSense Display Resolution: 2736 x 1824 (267 PPI) 8GB RAM & 128GB SSD', 9999.99, 'Laptop', 'Microsoft'),
(20, ' BenQ GW2480T 24 inch Full HD Eye-Care Stylish IPS Monitor', '24 Inch (1920x1080) Full HD IPS Display 178° Wide Viewing Angle Edge to Edge Slim Bezel Design Brightness Intelligence Technology', 9999.99, 'Monitor', 'BenQ'),
(21, ' Dell SE2719HR 27 Inch Full HD Monitor', 'Type LED-backlit LCD monitor Panel Type IPS Resolution Full HD 1920 x 1080', 9999.99, 'Monitor', 'Dell'),
(22, ' LG 22MK600M 21.5 inch IPS Full HD LED Monitor', 'Resolution: 1920 x 1080 Response Time: 5ms(Faster) Contrast Ratio: 1000:1(Typ.) Brightness: 250 cd/m²', 9999.99, 'Monitor', 'LG'),
(23, ' Gamdias HERMES P1A Mechanical RGB Gaming Keyboard', 'Up to 6 profiles keyboard with 2 dedicated Marco keys Play Macro via FN+G1/G2 32bit microprocessor RGB backlight', 5300.00, 'Keyboard', 'Gamdias'),
(24, ' Logitech G213 Prodigy Gaming Keyboard', 'Type: Membrane Backlight: RGB Palm Rest: Integrated', 5000.00, 'Keyboard', 'Logitech'),
(25, ' A4tech Bloody B125 Illuminated Gaming Keyboard', 'Connectivity: USB Silicon Coated Keycaps: W / A / S / D Backlit: Red Cable Length : 1.8m', 2050.00, 'Keyboard', 'A4tech'),
(26, ' Cougar Puri Mechanical Gaming Keyboard', 'Cherry MX Mechanical Switches Compact and Sturdy Design Detachable Cable for Enhanced Portability Magnetic Protective Cover', 5780.00, 'Keyboard', 'Cougar'),
(27, ' Gamdias ZEUS E3 Gaming Mouse with NYX E1 Gaming Mouse Mat Combo', 'Fatal Weapon, 3600DPI Optical Sensor Impressive Maneuver, 7 Smart Keys Multi-color Breathing Lighting NYX E1 Mouse Mat', 1200.00, 'Mouse', 'Gamdias'),
(28, 'Logitech B170 Wireless Mouse', 'Model: Logitech B170 10-meter reliable wireless range Advanced optical tracking 12-months battery life', 800.00, 'Mouse', 'Logitech'),
(29, ' A4TECH OP-730D 2X CLICK OPTICAL WIRED MOUSE', 'Type: Wired Ergonomic Design: Symmetric Sensor: Optical Resolution: 1000 DPI', 300.00, 'Mouse', 'A4tech'),
(30, 'Cougar M55 Ambidextrous Multi-Grip RGB Pro Gaming Mouse Black', 'Game Type: FPS, MOBA Grip: Type Palm, Claw, Fingertip CUE Software: Supported in iCUE Surgical Precision with 12,400 DPI', 3000.00, 'Mouse', 'Cougar'),
(31, ' Adata UV128 USB 3.2 128GB Pendrive', 'Capacity: 128GB Convenient Capless Design USB 3.2 High-Speed Interface Ultra-compact', 1800.00, 'Pen-Drive', 'Adata'),
(32, ' SanDisk Cruzer Glide 128GB USB 3.0 Flash Drive (SDCZ600-128G-G35)', 'Interface: USB 2.0 (480 Mb/s) Encryption: 128-Bit AES Storage Capacity: 128GB Fast drag-and-drop file transfer', 2000.00, 'Pen-Drive', 'Sandisk'),
(33, 'Transcend TS32GJF790 32GB USB 3.1 Flash Drive', 'Model: Transcend TS32GJF790 Capacity 32GB Super Speed USB 3.1 Lightweight and compact', 800.00, 'Pen-Drive', 'Transcend'),
(34, ' Avexir AH359 16GB USB 3.1 Gen Flash Drive', 'Securely protects files security software solution Stores & transfers content quickly 256-bit AES encryption Compatible with PC & Mac systems', 550.00, 'Pen-Drive', 'Avexir'),
(35, ' A4TECH PK-930H PC Camera (Black + Silver)', 'High-quality microphone Swivel mechanism Recording in HD Universal retainer', 2300.00, 'Webcam', 'A4tech'),
(36, ' Logitech C270 HD Webcam', 'HD video calling+ (1280 x 720 pixels) Up to 3.0 megapixels Built-in mic with', 2900.00, 'Webcam', 'Logitech'),
(37, ' Value-Top VT-WF301 Full HD Webcam', 'Light Adjustment Full HD (1920P X 1080P) Lag-free Video Streaming 2 Megapixel Camera with Mic', 2000.00, 'Webcam', 'Value-Top'),
(38, ' SAMSUNG LF22T350FHW 22\" 75Hz Full HD IPS LED Monitor', 'AMD Radeon FreeSync Max 75Hz Refresh Rate 3-sided border-less screen Full technicolor experience', 12000.00, 'Monitor', 'Samsung'),
(39, ' HP V24i 24\' Full HD IPS Monitor', 'On-screen controls; Low blue light mode 24\'FHD (1920 x 1080) IPS Display Response time: 5ms GtG VESA mount: 100mm x 100mm', 15000.00, 'Monitor', 'HP'),
(40, ' Gamdias Argus E2 Mid Tower RGB PC Gaming Case', 'RGB-Lit Y-Shaped Crater Design Front Panel MOBO Type: mini-ITX, microATX, ATX Panoramic Tempered Glass Hyper-Efficient I/O Ports', 3200.00, 'Casing', 'Gamdias'),
(41, ' Corsair Carbide Series Spec-05 Mid-Tower Gaming Case', 'Internal: 2x 3.5\" HDD, 3x 2.5\" SSD Tempered Glass (Side) Graphics Card Length: 370mm Motherboard Type: ATX, MicroATX', 3500.00, 'Casing', 'Corsair'),
(42, ' Cooler Master Masterbox MB511 ATX Mid-Tower Gaming Casing', 'Support for a Total of 6 Fans and Water Cooling Mesh Front Panel Aggressive Intakes Multiple Trim Colors Available', 5000.00, 'Casing', 'Cooler-Master'),
(44, ' Cooler Master Masterbox K501L RGB ATX Mid-Tower Gaming Casing (Black)', 'Support for a Total of 6 Fans and Water Cooling Mesh Front Panel Aggressive Intakes Multiple Trim Colors Available', 5000.00, 'Casing', 'Cooler-Master');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `body` varchar(255) NOT NULL,
  `reviewer_name` varchar(30) NOT NULL,
  `product_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`id`, `body`, `reviewer_name`, `product_id`) VALUES
(2, 'Excellent!!!', 'Randy Orton', 42),
(3, 'Good Product!', 'Randy Orton', 42),
(4, 'Excellent Product!', 'Koushikur Islam Shohag', 7);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `full_name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `type` varchar(10) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `joining_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `full_name`, `email`, `password`, `type`, `phone`, `address`, `joining_date`) VALUES
(1, 'Koushikur Islam Shohag', 'koushikur.aiub@gmail.com', '123', 'Admin', 1798452091, 'E-295, Holy Lane, Shyamoli, Adabor, Dhaka', NULL),
(3, 'Randy Orton', 'randy@gmail.com', '123', 'Customer', 171515661, 'E-295, Holy Lane, Shyamoli, Adabor, Dhaka', '2020-11-17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
