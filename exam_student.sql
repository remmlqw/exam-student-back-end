/*
Navicat MySQL Data Transfer

Source Server         : 我的服务器
Source Server Version : 50639
Source Host           : 119.29.111.28:3306
Source Database       : exam_student

Target Server Type    : MYSQL
Target Server Version : 50639
File Encoding         : 65001

Date: 2018-03-02 14:32:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `instId` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `classId` varchar(11) DEFAULT NULL,
  `stuId` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`instId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'lqw', '123456', '1', '1');
