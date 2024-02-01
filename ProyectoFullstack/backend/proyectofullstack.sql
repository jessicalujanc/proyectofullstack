-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 31-01-2024 a las 16:26:39
-- Versión del servidor: 8.0.35
-- Versión de PHP: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectofullstack`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comunidad`
--

DROP TABLE IF EXISTS `comunidad`;
CREATE TABLE IF NOT EXISTS `comunidad` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `email` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `comentario` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `comunidad`
--

INSERT INTO `comunidad` (`id`, `nombre`, `email`, `comentario`, `img_id`) VALUES
(1, 'Romina', 'romina@gmail.com', 'Hola comunidad!\r\nProbé la mascara de Vit C de Sinergia. Me pareció un producto excelente! Quisiera consultarles si recomiendan combinarla con otro producto de la línea?\r\nMuchas gracias.', NULL),
(2, 'Carla', 'carla@gmail.com', 'Hola...\r\nCuales productos para biotipo de piel grasa me recomiendan? Que no sea muy astringente, ya que en donde vivo el clima es muy seco y es importante mantener la piel hidratada.\r\nGracias!', NULL),
(3, 'Agustin', 'agustin@hotmail.com', 'Hola, estoy usando el protector solar efecto seco. Ideal para todo tipo de pieles, recomiendo!', NULL),
(4, 'Gloria', 'gloria@hotmail.com', '¿Como se aplica la limpieza de la linea detox? Gracias!', NULL),
(5, 'Sebastian', 'sebastian@hotmail.com', 'Recomiendo', 'df13glnvvptrfaio64es'),
(13, 'Laura', 'laura@gmail.com', '¿Algun protector solar de 50 FPS para pieles sensibles?', ''),
(14, 'Lara', 'lara@hotmail.com', '¿Alguna referencia sobre este producto?', 'rzjp4iedwoi5q7ubbz6j');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb3_unicode_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
