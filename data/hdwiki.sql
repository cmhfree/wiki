-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 29, 2010 at 01:05 Ђϧ
-- Server version: 5.1.41
-- PHP Version: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hdwiki`
--

-- --------------------------------------------------------

--
-- Table structure for table `wiki_activation`
--

DROP TABLE IF EXISTS `wiki_activation`;
CREATE TABLE IF NOT EXISTS `wiki_activation` (
  `uid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `code` char(32) NOT NULL,
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  `available` tinyint(1) NOT NULL DEFAULT '1',
  `type` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wiki_activation`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_advertisement`
--

DROP TABLE IF EXISTS `wiki_advertisement`;
CREATE TABLE IF NOT EXISTS `wiki_advertisement` (
  `advid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `available` tinyint(1) NOT NULL DEFAULT '0',
  `type` varchar(50) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `targets` text NOT NULL,
  `position` tinyint(2) NOT NULL DEFAULT '0',
  `parameters` text NOT NULL,
  `code` text NOT NULL,
  `starttime` int(10) unsigned NOT NULL DEFAULT '0',
  `endtime` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`advid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_advertisement`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_attachment`
--

DROP TABLE IF EXISTS `wiki_attachment`;
CREATE TABLE IF NOT EXISTS `wiki_attachment` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `did` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  `filename` char(100) NOT NULL DEFAULT '',
  `description` char(100) NOT NULL DEFAULT '',
  `filetype` char(50) NOT NULL DEFAULT '',
  `filesize` int(10) unsigned NOT NULL DEFAULT '0',
  `attachment` char(100) NOT NULL DEFAULT '',
  `downloads` mediumint(8) NOT NULL DEFAULT '0',
  `coindown` smallint(4) NOT NULL DEFAULT '0',
  `isimage` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `uid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `state` tinyint(4) NOT NULL DEFAULT '0',
  `focus` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `did` (`did`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_attachment`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_autosave`
--

DROP TABLE IF EXISTS `wiki_autosave`;
CREATE TABLE IF NOT EXISTS `wiki_autosave` (
  `aid` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(6) unsigned NOT NULL,
  `did` int(8) unsigned NOT NULL,
  `id` int(4) NOT NULL,
  `content` mediumtext NOT NULL,
  `time` int(10) unsigned NOT NULL,
  PRIMARY KEY (`aid`),
  KEY `uid` (`uid`),
  KEY `did` (`did`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_autosave`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_banned`
--

DROP TABLE IF EXISTS `wiki_banned`;
CREATE TABLE IF NOT EXISTS `wiki_banned` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `ip1` smallint(3) NOT NULL DEFAULT '0',
  `ip2` smallint(3) NOT NULL DEFAULT '0',
  `ip3` smallint(3) NOT NULL DEFAULT '0',
  `ip4` smallint(3) NOT NULL DEFAULT '0',
  `admin` varchar(15) NOT NULL,
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  `expiration` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_banned`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_blacklist`
--

DROP TABLE IF EXISTS `wiki_blacklist`;
CREATE TABLE IF NOT EXISTS `wiki_blacklist` (
  `uid` mediumint(8) unsigned NOT NULL,
  `blacklist` text NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wiki_blacklist`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_block`
--

DROP TABLE IF EXISTS `wiki_block`;
CREATE TABLE IF NOT EXISTS `wiki_block` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `theme` varchar(50) NOT NULL DEFAULT '',
  `file` varchar(50) NOT NULL DEFAULT '',
  `area` varchar(50) NOT NULL DEFAULT '',
  `areaorder` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `block` varchar(50) NOT NULL DEFAULT '',
  `fun` varchar(30) NOT NULL DEFAULT '',
  `tpl` varchar(50) DEFAULT NULL,
  `params` longtext,
  `modified` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `wiki_block`
--

INSERT INTO `wiki_block` (`id`, `theme`, `file`, `area`, `areaorder`, `block`, `fun`, `tpl`, `params`, `modified`) VALUES
(1, 'default', 'index', 'ctop1', 0, 'doc', 'hotdocs', 'hotdocs.htm', 'a:2:{s:3:"num";s:0:"";s:5:"style";s:0:"";}', NULL),
(2, 'default', 'index', 'ctop2', 0, 'doc', 'wonderdocs', 'wonderdocs.htm', 'a:1:{s:5:"style";s:0:"";}', NULL),
(3, 'default', 'index', 'right', 0, 'user', 'login', 'login.htm', '', NULL),
(4, 'default', 'index', 'right', 1, 'news', 'recentnews', 'recentnews.htm', 'a:1:{s:5:"style";s:0:"";}', NULL),
(5, 'default', 'index', 'right', 2, 'doc', 'cooperatedocs', 'cooperatedocs.htm', 'a:1:{s:5:"style";s:0:"";}', NULL),
(6, 'default', 'index', 'cbottoml', 0, 'doc', 'recentdocs', 'recentdocs.htm', 'a:2:{s:3:"num";s:0:"";s:5:"style";s:0:"";}', NULL),
(7, 'default', 'index', 'cbottoml', 1, 'comment', 'recentcomment', 'recentcomment.htm', 'a:1:{s:3:"num";s:0:"";}', NULL),
(8, 'default', 'index', 'cbottomr', 0, 'pic', 'recentpics', 'recentpics.htm', 'a:1:{s:3:"num";s:0:"";}', NULL),
(9, 'default', 'index', 'cbottomr', 1, 'doc', 'commenddocs', 'commenddocs.htm', 'a:1:{s:5:"style";s:0:"";}', NULL),
(10, 'default', 'index', 'bottom', 0, 'doc', 'hottags', 'hottags.htm', 'a:1:{s:5:"style";s:0:"";}', NULL),
(11, 'default', 'giftlist', 'price', 0, 'gift', 'giftpricerange', 'giftpricerange.htm', '', NULL),
(12, 'default', 'giftlist', 'right', 0, 'gift', 'giftnotice', 'giftnotice.htm', '', NULL),
(13, 'default', 'categorylist', 'right', 0, 'doc', 'hottags', 'hottags.htm', 'a:1:{s:5:"style";s:0:"";}', NULL),
(14, 'default', 'categorylist', 'right', 1, 'doc', 'getletterdocs', 'getletterdocs.htm', 'a:1:{s:5:"style";s:0:"";}', NULL),
(15, 'default', 'viewcomment', 'right', 0, 'doc', 'hotcommentdocs', 'hotcommentdocs.htm', 'a:1:{s:3:"num";s:2:"10";}', NULL),
(16, 'default', 'index', 'bottom', 1, 'links', 'friendlinks', 'friendlinks.htm', 'a:1:{s:5:"style";s:0:"";}', NULL),
(17, 'default', 'index', 'right', 3, 'doc', 'getletterdocs', 'getletterdocs.htm', 'a:1:{s:5:"style";s:0:"";}', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `wiki_category`
--

DROP TABLE IF EXISTS `wiki_category`;
CREATE TABLE IF NOT EXISTS `wiki_category` (
  `cid` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `pid` smallint(6) unsigned NOT NULL DEFAULT '0',
  `name` char(50) NOT NULL DEFAULT '',
  `displayorder` tinyint(3) NOT NULL DEFAULT '0',
  `docs` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `image` varchar(255) NOT NULL DEFAULT '',
  `navigation` text NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`cid`),
  KEY `pid` (`pid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `wiki_category`
--

INSERT INTO `wiki_category` (`cid`, `pid`, `name`, `displayorder`, `docs`, `image`, `navigation`, `description`) VALUES
(1, 0, 'Default', 0, 0, '', 'a:1:{i:0;a:2:{s:3:"cid";s:1:"1";s:4:"name";s:7:"Default";}}', '');

-- --------------------------------------------------------

--
-- Table structure for table `wiki_categorylink`
--

DROP TABLE IF EXISTS `wiki_categorylink`;
CREATE TABLE IF NOT EXISTS `wiki_categorylink` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `did` int(8) unsigned NOT NULL DEFAULT '0',
  `cid` int(8) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `did` (`did`),
  KEY `cid` (`cid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_categorylink`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_channel`
--

DROP TABLE IF EXISTS `wiki_channel`;
CREATE TABLE IF NOT EXISTS `wiki_channel` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(50) NOT NULL DEFAULT '',
  `url` char(200) NOT NULL DEFAULT '',
  `displayorder` smallint(3) unsigned NOT NULL DEFAULT '0',
  `available` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_channel`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_comment`
--

DROP TABLE IF EXISTS `wiki_comment`;
CREATE TABLE IF NOT EXISTS `wiki_comment` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `did` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `comment` char(200) NOT NULL DEFAULT '',
  `reply` mediumtext NOT NULL,
  `author` varchar(15) NOT NULL DEFAULT '',
  `authorid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `oppose` tinyint(6) unsigned NOT NULL DEFAULT '0',
  `aegis` tinyint(6) unsigned NOT NULL DEFAULT '0',
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `time` (`time`),
  KEY `did` (`did`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_comment`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_creditdetail`
--

DROP TABLE IF EXISTS `wiki_creditdetail`;
CREATE TABLE IF NOT EXISTS `wiki_creditdetail` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `uid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `operation` varchar(100) NOT NULL DEFAULT '',
  `credit2` smallint(6) NOT NULL DEFAULT '0',
  `credit1` smallint(6) NOT NULL DEFAULT '0',
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `wiki_creditdetail`
--

INSERT INTO `wiki_creditdetail` (`id`, `uid`, `operation`, `credit2`, `credit1`, `time`) VALUES
(1, 1, 'user-register', 20, 20, 1293598896);

-- --------------------------------------------------------

--
-- Table structure for table `wiki_datacall`
--

DROP TABLE IF EXISTS `wiki_datacall`;
CREATE TABLE IF NOT EXISTS `wiki_datacall` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `type` varchar(60) NOT NULL,
  `category` varchar(60) NOT NULL DEFAULT '0',
  `classname` varchar(60) NOT NULL DEFAULT 'sql',
  `function` varchar(60) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `param` text NOT NULL,
  `cachetime` int(10) NOT NULL DEFAULT '0',
  `available` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `name` (`name`),
  KEY `category` (`category`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `wiki_datacall`
--

INSERT INTO `wiki_datacall` (`id`, `name`, `type`, `category`, `classname`, `function`, `desc`, `param`, `cachetime`, `available`) VALUES
(1, 'doc_most_visited', 'sql', 'doc', 'sql', 'sql', '访问最多词条', 'a:9:{s:7:"tplcode";s:175:"<dl class="col-dl "><dt><a title="[title]" href="index.php?doc-view-[did]"> [title]</a></dt><dd>[summary][<a class="entry" href="index.php?doc-view-[did]">view</a>]</dd>	</dl>";s:13:"empty_tplcode";s:0:"";s:3:"sql";s:84:"select did,title,summary from {DB_TABLEPRE}doc where 1 order by views desc limit 10;";s:6:"select";s:0:"";s:4:"from";s:0:"";s:5:"where";s:0:"";s:5:"other";s:0:"";s:7:"orderby";s:0:"";s:5:"limit";s:4:"0,10";}', 1000, 1),
(2, 'user_total_num', 'sql', 'user', 'sql', 'sql', '注册会员数', 'a:9:{s:7:"tplcode";s:9:"[usernum]";s:13:"empty_tplcode";s:0:"";s:3:"sql";s:49:"SELECT COUNT(*) AS usernum FROM {DB_TABLEPRE}user";s:6:"select";s:0:"";s:4:"from";s:0:"";s:5:"where";s:0:"";s:5:"other";s:0:"";s:7:"orderby";s:0:"";s:5:"limit";s:4:"0,10";}', 1000, 1),
(3, 'doc_total_num', 'sql', 'doc', 'sql', 'sql', '网站所有词条数', 'a:9:{s:7:"tplcode";s:20:"doc total num: [num]";s:13:"empty_tplcode";s:0:"";s:3:"sql";s:0:"";s:6:"select";s:18:"count(did) as num ";s:4:"from";s:16:"{DB_TABLEPRE}doc";s:5:"where";s:1:"1";s:5:"other";s:0:"";s:7:"orderby";s:0:"";s:5:"limit";s:3:"0,1";}', 1000, 1),
(4, 'doc_most_comment', 'sql', 'doc', 'sql', 'sql', '评论最多词条列表', 'a:9:{s:7:"tplcode";s:181:"<dl class="col-dl "><dt><a title="[title]" href="index.php?doc-view-[did]"> [title]([num])</a></dt><dd>[comment][<a class="entry" href="index.php?doc-view-[did]">view</a>]</dd></dl>";s:13:"empty_tplcode";s:0:"";s:3:"sql";s:0:"";s:6:"select";s:44:"d.did,d.title,c.comment, count(c.did) AS num";s:4:"from";s:68:"{DB_TABLEPRE}doc AS d LEFT JOIN {DB_TABLEPRE}comment AS c USING(did)";s:5:"where";s:0:"";s:5:"other";s:14:"GROUP BY c.did";s:7:"orderby";s:8:"num desc";s:5:"limit";s:4:"0,10";}', 1000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wiki_doc`
--

DROP TABLE IF EXISTS `wiki_doc`;
CREATE TABLE IF NOT EXISTS `wiki_doc` (
  `did` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `cid` int(6) unsigned NOT NULL,
  `letter` char(1) NOT NULL,
  `title` varchar(80) NOT NULL DEFAULT '',
  `tag` varchar(250) NOT NULL,
  `summary` varchar(250) NOT NULL,
  `content` mediumtext NOT NULL,
  `author` varchar(15) NOT NULL DEFAULT '',
  `authorid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  `lastedit` int(10) unsigned NOT NULL DEFAULT '0',
  `lasteditor` char(15) NOT NULL DEFAULT '',
  `lasteditorid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `views` int(10) unsigned NOT NULL DEFAULT '0',
  `edits` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `editions` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `comments` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `votes` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `locked` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`did`),
  KEY `title` (`title`),
  KEY `cid` (`cid`),
  KEY `authorid` (`authorid`),
  KEY `letter` (`letter`),
  KEY `lastedit` (`lastedit`),
  KEY `time` (`time`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_doc`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_docfavorite`
--

DROP TABLE IF EXISTS `wiki_docfavorite`;
CREATE TABLE IF NOT EXISTS `wiki_docfavorite` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `uid` mediumint(8) NOT NULL,
  `did` mediumint(8) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_docfavorite`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_docreference`
--

DROP TABLE IF EXISTS `wiki_docreference`;
CREATE TABLE IF NOT EXISTS `wiki_docreference` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `did` int(11) NOT NULL DEFAULT '0',
  `name` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `did` (`did`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_docreference`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_edition`
--

DROP TABLE IF EXISTS `wiki_edition`;
CREATE TABLE IF NOT EXISTS `wiki_edition` (
  `eid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `cid` smallint(6) unsigned NOT NULL DEFAULT '0',
  `did` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `author` varchar(15) NOT NULL DEFAULT '',
  `authorid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  `ip` varchar(15) NOT NULL DEFAULT '',
  `title` varchar(80) NOT NULL DEFAULT '',
  `tag` varchar(250) NOT NULL,
  `summary` varchar(250) NOT NULL,
  `content` mediumtext NOT NULL,
  `words` int(10) unsigned NOT NULL DEFAULT '0',
  `images` int(10) unsigned NOT NULL DEFAULT '0',
  `type` tinyint(1) NOT NULL DEFAULT '0',
  `judge` tinyint(1) NOT NULL DEFAULT '0',
  `excellent` tinyint(1) NOT NULL DEFAULT '0',
  `big` tinyint(1) NOT NULL DEFAULT '0',
  `reason` varchar(250) NOT NULL DEFAULT '',
  `coins` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`eid`),
  KEY `cid` (`cid`),
  KEY `authorid` (`authorid`),
  KEY `time` (`time`),
  KEY `did` (`did`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_edition`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_focus`
--

DROP TABLE IF EXISTS `wiki_focus`;
CREATE TABLE IF NOT EXISTS `wiki_focus` (
  `did` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `title` varchar(80) NOT NULL DEFAULT '',
  `tag` varchar(250) NOT NULL DEFAULT '',
  `summary` varchar(250) NOT NULL DEFAULT '',
  `image` varchar(255) NOT NULL DEFAULT '',
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  `displayorder` tinyint(4) NOT NULL DEFAULT '0',
  `type` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`did`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wiki_focus`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_friendlink`
--

DROP TABLE IF EXISTS `wiki_friendlink`;
CREATE TABLE IF NOT EXISTS `wiki_friendlink` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `logo` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `displayorder` tinyint(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_friendlink`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_gift`
--

DROP TABLE IF EXISTS `wiki_gift`;
CREATE TABLE IF NOT EXISTS `wiki_gift` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL,
  `description` varchar(250) NOT NULL,
  `image` varchar(250) NOT NULL,
  `credit` int(10) NOT NULL DEFAULT '0',
  `time` int(11) NOT NULL,
  `available` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_gift`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_giftlog`
--

DROP TABLE IF EXISTS `wiki_giftlog`;
CREATE TABLE IF NOT EXISTS `wiki_giftlog` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(6) unsigned NOT NULL,
  `gid` smallint(6) NOT NULL,
  `extra` text NOT NULL,
  `time` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_giftlog`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_innerlinkcache`
--

DROP TABLE IF EXISTS `wiki_innerlinkcache`;
CREATE TABLE IF NOT EXISTS `wiki_innerlinkcache` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `did` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `titleid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `did` (`did`),
  KEY `title` (`title`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_innerlinkcache`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_language`
--

DROP TABLE IF EXISTS `wiki_language`;
CREATE TABLE IF NOT EXISTS `wiki_language` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  `available` tinyint(1) NOT NULL DEFAULT '1',
  `path` varchar(100) NOT NULL,
  `copyright` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `wiki_language`
--

INSERT INTO `wiki_language` (`id`, `name`, `available`, `path`, `copyright`) VALUES
(1, '简体中文', 1, 'zh', 'hudong.com');

-- --------------------------------------------------------

--
-- Table structure for table `wiki_lock`
--

DROP TABLE IF EXISTS `wiki_lock`;
CREATE TABLE IF NOT EXISTS `wiki_lock` (
  `did` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `uid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`did`,`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wiki_lock`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_mailqueue`
--

DROP TABLE IF EXISTS `wiki_mailqueue`;
CREATE TABLE IF NOT EXISTS `wiki_mailqueue` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `touid` mediumint(8) NOT NULL DEFAULT '0',
  `tomail` varchar(100) NOT NULL,
  `frommail` varchar(100) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `html` tinyint(1) NOT NULL DEFAULT '0',
  `priority` tinyint(1) NOT NULL DEFAULT '1',
  `time` int(10) unsigned NOT NULL,
  `failures` tinyint(3) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_mailqueue`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_plugin`
--

DROP TABLE IF EXISTS `wiki_plugin`;
CREATE TABLE IF NOT EXISTS `wiki_plugin` (
  `pluginid` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `available` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(40) NOT NULL DEFAULT '',
  `identifier` varchar(40) NOT NULL DEFAULT '',
  `description` varchar(255) NOT NULL DEFAULT '',
  `datatables` varchar(255) NOT NULL DEFAULT '',
  `type` tinyint(1) NOT NULL DEFAULT '1',
  `copyright` varchar(100) NOT NULL DEFAULT '',
  `homepage` varchar(100) NOT NULL DEFAULT '',
  `version` varchar(100) NOT NULL DEFAULT 'v1.0',
  `suit` varchar(100) NOT NULL DEFAULT '',
  `modules` text,
  PRIMARY KEY (`pluginid`),
  UNIQUE KEY `identifier` (`identifier`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_plugin`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_pluginhook`
--

DROP TABLE IF EXISTS `wiki_pluginhook`;
CREATE TABLE IF NOT EXISTS `wiki_pluginhook` (
  `pluginhookid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `pluginid` smallint(6) unsigned NOT NULL DEFAULT '0',
  `available` tinyint(1) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `description` mediumtext NOT NULL,
  `code` mediumtext NOT NULL,
  PRIMARY KEY (`pluginhookid`),
  KEY `pluginid` (`pluginid`),
  KEY `available` (`available`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_pluginhook`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_pluginvar`
--

DROP TABLE IF EXISTS `wiki_pluginvar`;
CREATE TABLE IF NOT EXISTS `wiki_pluginvar` (
  `pluginvarid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `pluginid` smallint(6) unsigned NOT NULL DEFAULT '0',
  `displayorder` tinyint(3) NOT NULL DEFAULT '0',
  `title` varchar(100) NOT NULL DEFAULT '',
  `description` varchar(255) NOT NULL DEFAULT '',
  `variable` varchar(40) NOT NULL DEFAULT '',
  `type` varchar(20) NOT NULL DEFAULT 'text',
  `value` text NOT NULL,
  `extra` text NOT NULL,
  PRIMARY KEY (`pluginvarid`),
  KEY `pluginid` (`pluginid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_pluginvar`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_pms`
--

DROP TABLE IF EXISTS `wiki_pms`;
CREATE TABLE IF NOT EXISTS `wiki_pms` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `from` varchar(15) NOT NULL,
  `fromid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `toid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `to` varchar(15) NOT NULL,
  `drafts` tinyint(1) NOT NULL DEFAULT '0',
  `new` tinyint(1) NOT NULL DEFAULT '0',
  `subject` varchar(75) NOT NULL,
  `message` text NOT NULL,
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  `delstatus` tinyint(1) NOT NULL DEFAULT '0',
  `og` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `toid` (`toid`,`drafts`,`time`),
  KEY `fromid` (`fromid`,`drafts`,`time`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_pms`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_privatetitle`
--

DROP TABLE IF EXISTS `wiki_privatetitle`;
CREATE TABLE IF NOT EXISTS `wiki_privatetitle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_privatetitle`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_recycle`
--

DROP TABLE IF EXISTS `wiki_recycle`;
CREATE TABLE IF NOT EXISTS `wiki_recycle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` char(30) NOT NULL,
  `keyword` varchar(250) NOT NULL,
  `content` mediumtext NOT NULL,
  `file` text NOT NULL,
  `adminid` int(11) NOT NULL,
  `admin` char(30) NOT NULL,
  `dateline` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `keyword` (`keyword`),
  KEY `type` (`type`),
  KEY `adminid` (`adminid`),
  KEY `admin` (`admin`),
  KEY `dateline` (`dateline`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_recycle`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_regular`
--

DROP TABLE IF EXISTS `wiki_regular`;
CREATE TABLE IF NOT EXISTS `wiki_regular` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  `regular` varchar(255) NOT NULL,
  `type` tinyint(1) NOT NULL DEFAULT '0',
  `regulargroupid` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=298 ;

--
-- Dumping data for table `wiki_regular`
--

INSERT INTO `wiki_regular` (`id`, `name`, `regular`, `type`, `regulargroupid`) VALUES
(1, '首页', 'index-default', 0, 18),
(2, '更改风格', 'index-settheme', 0, 18),
(3, '图片上传', 'attachment-uploadimg', 0, 20),
(4, '附件下载（附件）', 'attachment-download', 0, 18),
(5, '删除附件（附件）', 'attachment-remove', 0, 20),
(6, '浏览分类', 'category-default|category-ajax', 0, 18),
(7, '浏览具体分类', 'category-view', 0, 18),
(8, '分类下字母顺序浏览', 'category-letter', 0, 18),
(9, '按字母顺序浏览（排行榜）', 'list-letter', 0, 18),
(10, '最近更新词条（排行榜）', 'list-default|list-recentupdate', 0, 18),
(13, '用户人气词条列表(排行榜)', 'list-popularity', 0, 18),
(14, '推荐词条列表(排行榜)', 'list-focus', 0, 18),
(15, '浏览词条', 'doc-view', 0, 18),
(16, '创建词条', 'doc-create', 0, 20),
(17, '验证词条是否存在', 'doc-verify', 0, 20),
(18, '编辑词条', 'doc-edit', 0, 20),
(19, '分段编辑词条', 'doc-editsection', 0, 20),
(20, '刷新编辑锁', 'doc-refresheditlock', 0, 20),
(21, '取消编辑锁', 'doc-unseteditlock', 0, 20),
(22, '浏览词条内链', 'doc-innerlink', 0, 18),
(23, '浏览词条摘要', 'doc-summary', 0, 18),
(24, '浏览词条贡献者', 'doc-editor', 0, 18),
(25, '沙盒', 'doc-sandbox', 0, 20),
(26, '设置推荐词条（前台词条管理）', 'doc-setfocus', 0, 20),
(27, '移动词条分类（前台词条管理）', 'doc-getcategroytree|doc-changecategory', 0, 20),
(28, '更改词条名（前台词条管理）', 'doc-changename', 0, 20),
(29, '锁定词条（前台词条管理）', 'doc-lock', 0, 20),
(30, '解除词条锁定（前台词条管理）', 'doc-unlock', 0, 20),
(31, '审核词条（前台词条管理）', 'doc-audit', 0, 20),
(32, '删除词条（前台词条管理）', 'doc-remove', 0, 20),
(33, '查看评论', 'comment-view|comment-report|comment-oppose|comment-aegis', 0, 18),
(34, '删除评论（前台评论管理）', 'comment-remove', 0, 20),
(35, '添加评论（前台评论管理）', 'comment-add', 0, 20),
(36, '编辑评论（前台评论管理）', 'comment-edit', 0, 20),
(37, '版本列表（历史版本）', 'edition-list', 0, 18),
(38, '浏览版本（历史版本）', 'edition-view', 0, 18),
(39, '版本对比（历史版本）', 'edition-compare', 0, 18),
(40, '删除版本（历史版本）', 'edition-remove', 0, 20),
(41, '优秀版本（历史版本）', 'edition-excellent', 0, 20),
(42, '取消优秀（历史版本）', 'edition-unexcellent', 0, 20),
(43, '复制版本（历史版本）', 'edition-copy', 0, 20),
(44, '进入词条（搜索）', 'search-default', 0, 18),
(45, '全文搜索（搜索）', 'search-fulltext|search-kw', 0, 18),
(46, 'TAG搜索（搜索）', 'search-tag', 0, 18),
(47, '用户注册（用户）', 'user-register', 0, 19),
(48, '用户登录（用户）', 'user-login', 0, 19),
(49, '检测用户（用户）', 'user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail', 0, 19),
(50, '用户注销（用户）', 'user-logout', 0, 19),
(51, '个人信息（用户）', 'user-profile', 0, 19),
(52, '个人信息设置（用户）', 'user-editprofile', 0, 19),
(53, '修改密码（用户）', 'user-editpass', 0, 19),
(54, '修改头像（用户）', 'user-editimage|user-editimageifeam|user-cutimage', 0, 19),
(55, '找回密码（用户）', 'user-getpass', 0, 19),
(56, '显示验证码（用户）', 'user-code', 0, 19),
(57, '个人空间（用户）', 'user-space', 0, 19),
(58, '清除cookies（用户）', 'user-clearcookies', 0, 19),
(59, 'IP禁止', 'admin_banned-default', 1, 21),
(60, '分类管理列表（分类管理）', 'admin_category-default|admin_category-list', 1, 25),
(61, '添加分类（分类管理）', 'admin_category-add', 1, 25),
(62, '编辑分类（分类管理）', 'admin_category-edit', 1, 25),
(63, '删除分类（分类管理）', 'admin_category-remove', 1, 25),
(64, '分类排序（分类管理）', 'admin_category-reorder', 1, 25),
(65, '分类合并（分类管理）', 'admin_category-merge', 1, 25),
(66, '数据库备份（数据库管理）', 'admin_db-backup', 1, 27),
(67, '数据库还原（数据库管理）', 'admin_db-import', 1, 27),
(68, '删除数据文件（数据库管理）', 'admin_db-remove', 1, 27),
(69, '数据库列表（数据库管理）', 'admin_db-tablelist', 1, 27),
(70, '数据库优化（数据库管理）', 'admin_db-optimize', 1, 27),
(71, '数据库修复（数据库管理）', 'admin_db-repair', 1, 27),
(72, '下载数据文件（数据库管理）', 'admin_db-downloadfile', 1, 27),
(73, '词条列表（管理词条）', 'admin_doc-default', 1, 23),
(74, '搜索词条（管理词条）', 'admin_doc-search', 1, 23),
(75, '审核词条（管理词条）', 'admin_doc-audit', 1, 23),
(76, '推荐词条（管理词条）', 'admin_doc-recommend', 1, 23),
(77, '锁定词条（管理词条）', 'admin_doc-lock', 1, 23),
(78, '解锁词条（管理词条）', 'admin_doc-unlock', 1, 23),
(79, '删除词条（管理词条）', 'admin_doc-remove', 1, 23),
(80, '移动词条（管理词条）', 'admin_doc-move', 1, 23),
(81, '重命名词条（管理词条）', 'admin_doc-rename', 1, 23),
(82, '搜索评论（后台管理评论）', 'admin_comment-default|admin_comment-search', 1, 23),
(83, '删除评论（后台管理评论）', 'admin_comment-delete', 1, 23),
(84, '搜索附件（后台管理附件）', 'admin_attachment-default|admin_attachment-search', 1, 23),
(85, '删除附件（后台管理附件）', 'admin_attachment-remove', 1, 23),
(86, '下载附件（后台管理附件）', 'admin_attachment-download', 1, 23),
(87, '推荐词条列表（推荐词条）', 'admin_focus-focuslist', 1, 23),
(88, '删除推荐词条（推荐词条）', 'admin_focus-remove', 1, 23),
(89, '更改推荐词条顺序（推荐词条）', 'admin_focus-reorder', 1, 23),
(90, '编辑推荐词条（推荐词条）', 'admin_focus-edit', 1, 23),
(91, '更新图片（推荐词条）', 'admin_focus-updateimg', 1, 23),
(92, '词条显示数量设置（推荐词条）', 'admin_focus-numset', 1, 23),
(93, '友情链接列表（友情链接）', 'admin_friendlink-default', 1, 21),
(94, '添加友情链接（友情链接）', 'admin_friendlink-add', 1, 21),
(95, '编辑友情链接（友情链接）', 'admin_friendlink-edit', 1, 21),
(96, '删除友情链接（友情链接）', 'admin_friendlink-remove', 1, 21),
(97, '更新友情链接顺序（友情链接）', 'admin_friendlink-updateorder', 1, 21),
(98, '语言列表（语言）', 'admin_language-default', 1, 26),
(99, '添加语言（语言）', 'admin_language-addlang', 1, 26),
(100, '编辑语言（语言）', 'admin_language-editlang', 1, 26),
(101, '更新语言（语言）', 'admin_language-updatelanguage', 1, 26),
(102, '设置默认语言（语言）', 'admin_language-setdefaultlanguage', 1, 26),
(103, '管理员登录（后台登录）', 'admin_main-login|admin_main-default', 1, 21),
(104, '管理员退出（后台登录）', 'admin_main-logout', 1, 21),
(105, '后台框架（后台登录）', 'admin_main-mainframe', 1, 21),
(106, '后台新版本提示（后台登录）', 'admin_main-update', 1, 21),
(107, '插件列表（插件管理）', 'admin_plugin-list|admin_plugin-default|admin_plugin-manage|admin_plugin-will|admin_plugin-find|admin_plugin-share', 1, 22),
(108, '安装插件（插件管理）', 'admin_plugin-install', 1, 22),
(109, '卸载插件（插件管理）', 'admin_plugin-uninstall', 1, 22),
(110, '启用插件（插件管理）', 'admin_plugin-start', 1, 22),
(111, '停用插件（插件管理）', 'admin_plugin-stop', 1, 22),
(112, '插件变量（插件管理）', 'admin_plugin-setvar', 1, 22),
(113, '插件钩子（插件管理）', 'admin_plugin-hook', 1, 22),
(114, '规则列表(管理权限)', 'admin_regular-list|admin_regular-default', 1, 24),
(115, '添加规则(管理权限)', 'admin_regular-add', 1, 24),
(116, '编辑规则(管理权限)', 'admin_regular-edit', 1, 24),
(117, '删除规则(管理权限)', 'admin_regular-remove', 1, 24),
(118, '基本设置(网站管理)', 'admin_setting-base', 1, 21),
(119, '上传logo(网站管理)', 'admin_setting-logo', 1, 21),
(120, '经验设置(网站管理)', 'admin_setting-credit', 1, 21),
(121, 'seo设置(网站管理)', 'admin_setting-seo', 1, 21),
(122, '缓存页面(网站管理)', 'admin_setting-cache', 1, 21),
(123, '更新缓存设置(网站管理)', 'admin_setting-updatecache', 1, 21),
(124, '清除缓存(网站管理)', 'admin_setting-removecache', 1, 21),
(125, '附件设置(网站管理)', 'admin_setting-attachment', 1, 21),
(126, '邮件设置(网站管理)', 'admin_setting-mail', 1, 21),
(127, '风格列表（风格）', 'admin_style-default', 1, 26),
(128, '创建模版风格页面（风格）', 'admin_style-create', 1, 26),
(129, '删除风格（风格）', 'admin_style-removestyle', 1, 26),
(131, '设置默认风格（风格）', 'admin_style-setdefaultstyle', 1, 26),
(132, '热门标签设置（热门标签）', 'admin_tag-hottag', 1, 23),
(133, '列表|添加|删除（定时任务）', 'admin_task-default', 1, 21),
(134, '启用|停用（定时任务）', 'admin_task-taskstatus', 1, 21),
(135, '编辑定时任务（定时任务）', 'admin_task-edittask', 1, 21),
(136, '执行定时任务（定时任务）', 'admin_task-run', 1, 21),
(137, '用户列表（管理用户）', 'admin_user-default|admin_user-list', 1, 24),
(138, '添加用户（管理用户）', 'admin_user-add', 1, 24),
(139, '编辑用户（管理用户）', 'admin_user-edit', 1, 24),
(140, '删除用户（管理用户）', 'admin_user-remove', 1, 24),
(141, '用户组列表（管理用户组）', 'admin_usergroup-default|admin_usergroup-list', 1, 24),
(142, '添加用户组（管理用户组）', 'admin_usergroup-add', 1, 24),
(143, '编辑用户组（管理用户组）', 'admin_usergroup-edit', 1, 24),
(144, '删除用户组（管理用户组）', 'admin_usergroup-remove', 1, 24),
(145, '关键词过滤(词语过滤)', 'admin_word-default', 1, 23),
(146, '裁剪图片', 'user-cutoutimage', 0, 19),
(147, '上周贡献榜', 'list-weekuserlist', 0, 18),
(148, '总贡献榜', 'list-allcredit', 0, 18),
(149, '修改用户组(管理用户组)', 'admin_usergroup-change', 1, 24),
(150, 'Rss订阅', 'list-rss', 0, 18),
(151, '后台操作记录(网站管理)', 'admin_log-default', 1, 21),
(152, '查收短消息', 'pms-default|pms-box|pms-setread', 0, 19),
(153, '删除短消息', 'pms-remove', 0, 19),
(154, '发送短消息', 'pms-sendmessage|pms-checkrecipient', 0, 19),
(155, '忽略列表', 'pms-blacklist', 0, 19),
(156, '站内公告(网站管理)', 'admin_setting-notice', 1, 21),
(157, '删除同义词(前台同义词管理)', 'synonym-removesynonym', 0, 20),
(158, '查看同义词(前台同义词管理)', 'synonym-view', 0, 20),
(159, '编辑同义词(前台同义词管理)', 'synonym-savesynonym', 0, 20),
(160, '同义词列表(后台同义词管理)', 'admin_synonym-default', 1, 23),
(161, '搜索同义词(后台同义词管理)', 'admin_synonym-search', 1, 23),
(162, '删除同义词(后台同义词管理)', 'admin_synonym-delete', 1, 23),
(163, '编辑同义词(后台同义词管理)', 'admin_synonym-save', 1, 23),
(164, '基本概况统计(后台统计)', 'admin_statistics-stand', 1, 28),
(165, '分类排行榜(后台统计)', 'admin_statistics-cat_toplist', 1, 28),
(166, '词条排行榜(后台统计)', 'admin_statistics-doc_toplist', 1, 28),
(167, '编辑排行榜(后台统计)', 'admin_statistics-edit_toplist', 1, 28),
(168, '经验排行榜(后台统计)', 'admin_statistics-credit_toplist', 1, 28),
(169, '管理团队(后台统计)', 'admin_statistics-admin_team', 1, 28),
(170, 'UC经验兑换', 'exchange-default', 2, 19),
(174, '词条免检', 'doc-immunity', 0, 20),
(176, '编辑模版文件（风格）', 'admin_style-editxml', 1, 26),
(177, '编辑模版描述文件（风格）', 'admin_style-edit', 1, 26),
(178, '读取模版文件（风格）', 'admin_style-readfile', 1, 26),
(179, '保存模版文件（风格）', 'admin_style-savefile', 1, 26),
(181, '卸载模版（风格）', 'admin_style-removestyle', 1, 26),
(183, '可安装模版列表（风格）', 'admin_style-list', 1, 26),
(184, '安装模版（风格）', 'admin_style-install', 1, 26),
(185, '显示广告列表', 'admin_adv-default', 0, 21),
(186, '设置广告加载方式', 'admin_adv-config', 0, 21),
(187, '搜索广告(后台)', 'admin_adv-search', 0, 21),
(188, '添加广告', 'admin_adv-add', 0, 21),
(189, '编辑广告', 'admin_adv-edit', 0, 21),
(190, '删除广告', 'admin_adv-remove', 0, 21),
(191, '审核用户', 'admin_user-checkup', 1, 24),
(192, '待审核用户列表', 'admin_user-uncheckeduser', 1, 24),
(193, '注册控制', 'admin_setting-baseregister', 0, 21),
(201, '随便看看', 'doc-random', 0, 18),
(202, '此词条对我有用', 'doc-vote', 0, 18),
(203, '创建新风格页面', 'admin_style-add', 0, 26),
(204, '创建新风格', 'admin_style-createstyle', 0, 26),
(206, '频道列表（频道）', 'admin_channel-default', 1, 21),
(207, '添加频道（频道）', 'admin_channel-add', 1, 21),
(208, '编辑频道（频道）', 'admin_channel-edit', 1, 21),
(209, '删除频道（频道）', 'admin_channel-remove', 1, 21),
(210, '修改频道显示顺序（频道）', 'admin_channel-updateorder', 1, 21),
(211, '添加修改参考资料', 'reference-add', 0, 20),
(212, '删除参考资料', 'reference-remove', 0, 20),
(213, '上传附件', 'attachment-upload', 0, 20),
(214, '取消焦点词条', 'doc-removefocus', 0, 20),
(215, '自动保存', 'doc-autosave', 0, 20),
(216, '删除自动保存的词条', 'doc-delsave', 0, 24),
(217, '自动保存管理', 'doc-managesave', 0, 24),
(218, '通行证权限', 'passport_client-login|passport_client-logout', 0, 21),
(219, '取消推荐词条（管理词条）', 'admin_doc-cancelrecommend', 0, 23),
(220, '相关词条权限', 'doc-getrelateddoc|doc-addrelatedoc', 0, 20),
(251, '回收站管理', 'admin_recycle-default|admin_recycle-search|admin_recycle-remove|admin_recycle-recover|admin_recycle-clear', 1, 23),
(252, 'SQL查询窗口（数据库管理）', 'admin_db-sqlwindow', 1, 27),
(253, '服务器信息', 'admin_log-phpinfo', 1, 21),
(254, '模版高级编辑', 'admin_style-advancededit', 1, 26),
(255, '待完善词条', 'admin_cooperate-default', 1, 23),
(256, '热门搜索', 'admin_hotsearch-default', 1, 23),
(257, '图片百科', 'admin_image-default|admin_image-editimage|admin_image-remove', 1, 23),
(258, '相关词条', 'admin_relation-default', 1, 23),
(259, '前台相关词条', 'doc-cooperate', 0, 18),
(260, '版本评审', 'admin_edition-default|admin_edition-search|admin_edition-addcoin|admin_edition-excellent|admin_edition-remove', 1, 23),
(261, '添加金币(管理用户)', 'admin_user-addcoins', 1, 24),
(262, '礼品商店', 'admin_gift-default|admin_gift-view|admin_gift-search|admin_gift-add|admin_gift-edit|admin_gift-remove|admin_gift-available|admin_gift-price|admin_gift-notice|admin_gift-log|admin_gift-verify', 1, 23),
(263, '礼品商店', 'gift-default|gift-view|gift-search|gift-apply', 0, 18),
(264, '通行证设置', 'admin_setting-passport', 1, 21),
(265, '图片百科', 'pic-piclist|pic-view|pic-ajax|pic-search', 0, 18),
(266, '群发短消息', 'pms-publicmessage', 0, 19),
(267, '防采集设置', 'admin_setting-anticopy', 1, 21),
(268, '图片水印', 'admin_setting-watermark|admin_setting-preview', 1, 21),
(269, '后台列表显示', 'admin_setting-listdisplay', 1, 21),
(270, '防灌水设置', 'admin_setting-sec', 1, 21),
(271, '验证码设置', 'admin_setting-code', 0, 21),
(272, '时间设置', 'admin_setting-time', 0, 21),
(273, 'COOKIE设置', 'admin_setting-cookie', 0, 21),
(274, '词条设置', 'admin_setting-docset', 0, 21),
(275, '首页设置', 'admin_setting-index', 0, 21),
(276, '搜索设置', 'admin_setting-search', 0, 21),
(277, '数据JS调用', 'datacall-js', 2, 18),
(278, '收藏词条', 'user-addfavorite', 2, 20),
(279, '删除词条收藏', 'user-removefavorite|user-exchange', 2, 20),
(280, '添加编辑分类（分类管理）', 'admin_category-batchedit', 1, 25),
(281, '云搜索-词条列表', 'archiver-default|archiver-list|archiver-view', 2, 20),
(282, '邀请注册', 'user-invite', 0, 19),
(283, '邮件提醒设置(网站管理)', 'admin_setting-noticemail', 1, 21),
(284, 'Sitemap管理', 'admin_sitemap-default|admin_sitemap-setting|admin_sitemap-createdoc|admin_sitemap-updatedoc|admin_sitemap-submit|admin_sitemap-baiduxml', 1, 21),
(285, '云搜索中介页面', 'search-agent', 2, 18),
(286, '百科联盟', 'admin_hdapi-set|admin_hdapi-nosynset|admin_hdapi-down|admin_hdapi-info|admin_hdapi-default|admin_hdapi-siteuserinfo|admin_hdapi-titles|admin_hdapi-import|admin_hdapi-rolldocs|admin_hdapi-registercheck|admin_hdapi-login|admin_hdapi-privatedoc', 1, 21),
(287, '数据库大小', 'admin_main-datasize', 2, 27),
(288, '后台快捷菜单', 'admin_setting-shortcut', 2, 21),
(289, '数据库存储设置', 'admin_db-storage|admin_db-convert', 2, 27),
(290, '设置词条首字母', 'doc-editletter', 0, 20),
(291, '分享词条', 'admin_share-default|admin_share-search|admin_share-share|admin_share-set', 2, 23),
(292, '模板编辑', 'admin_theme-default|admin_theme-editxml|admin_theme-add|admin_theme-create|admin_theme-createstyle|admin_theme-edit|admin_theme-codeedit|admin_theme-delbak|admin_theme-baseedit|admin_theme-advancededit|admin_theme-readfile|admin_theme-savefile|admin_theme', 0, 21),
(293, '数据调用相关操作', 'admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacal', 2, 23),
(294, '后台菜单搜索', 'admin_actions-default', 1, 20),
(295, '木马扫描', 'admin_filecheck-docreate|admin_safe-default|admin_safe-setting|admin_safe-scanfile|admin_safe-validate|admin_safe-scanfuns|admin_safe-list|admin_safe-editcode|admin_safe-del', 2, 21),
(296, '自动升级', 'admin_upgrade-default|admin_upgrade-check|admin_upgrade-initpage|admin_upgrade-install', 1, 21),
(297, 'Map', 'admin_actions-map', 1, 20);

-- --------------------------------------------------------

--
-- Table structure for table `wiki_regulargroup`
--

DROP TABLE IF EXISTS `wiki_regulargroup`;
CREATE TABLE IF NOT EXISTS `wiki_regulargroup` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `title` char(30) NOT NULL DEFAULT '',
  `size` int(11) NOT NULL DEFAULT '0',
  `type` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=29 ;

--
-- Dumping data for table `wiki_regulargroup`
--

INSERT INTO `wiki_regulargroup` (`id`, `title`, `size`, `type`) VALUES
(18, '页面浏览', 0, 0),
(19, '用户操作', 0, 0),
(20, '词条管理', 0, 0),
(21, '网站管理', 0, 1),
(22, '插件管理', 0, 1),
(23, '内容管理', 0, 1),
(24, '用户管理', 0, 1),
(25, '分类管理', 0, 1),
(26, '语言/风格', 0, 1),
(27, '数据库管理', 0, 1),
(28, '站内统计', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wiki_regular_relation`
--

DROP TABLE IF EXISTS `wiki_regular_relation`;
CREATE TABLE IF NOT EXISTS `wiki_regular_relation` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `idleft` int(11) NOT NULL DEFAULT '0',
  `idright` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=88 ;

--
-- Dumping data for table `wiki_regular_relation`
--

INSERT INTO `wiki_regular_relation` (`id`, `idleft`, `idright`) VALUES
(1, 5, 3),
(2, 5, 18),
(3, 19, 18),
(4, 21, 20),
(5, 30, 29),
(6, 34, 36),
(7, 40, 43),
(8, 40, 41),
(9, 40, 42),
(10, 48, 50),
(11, 52, 51),
(12, 53, 51),
(13, 54, 51),
(14, 62, 60),
(15, 63, 64),
(16, 63, 65),
(17, 63, 60),
(18, 63, 61),
(19, 63, 62),
(20, 65, 64),
(21, 67, 70),
(22, 67, 69),
(23, 67, 71),
(24, 67, 72),
(25, 67, 68),
(26, 67, 66),
(27, 68, 72),
(28, 68, 71),
(29, 68, 70),
(30, 68, 69),
(31, 68, 66),
(32, 71, 69),
(33, 79, 162),
(34, 79, 83),
(35, 79, 80),
(36, 79, 78),
(37, 79, 77),
(38, 79, 75),
(39, 79, 85),
(40, 79, 81),
(41, 79, 73),
(42, 88, 87),
(43, 88, 89),
(44, 88, 90),
(45, 88, 92),
(46, 88, 91),
(47, 96, 95),
(48, 96, 93),
(49, 96, 94),
(50, 96, 97),
(51, 100, 98),
(52, 100, 99),
(53, 100, 101),
(54, 100, 102),
(55, 102, 101),
(56, 109, 108),
(57, 109, 113),
(58, 109, 112),
(59, 109, 111),
(60, 109, 110),
(61, 109, 107),
(62, 117, 114),
(63, 117, 116),
(64, 117, 115),
(65, 129, 127),
(66, 129, 131),
(67, 129, 130),
(68, 129, 128),
(69, 131, 130),
(70, 140, 137),
(71, 140, 138),
(72, 140, 139),
(73, 144, 143),
(74, 144, 142),
(75, 144, 141),
(76, 152, 51),
(77, 153, 51),
(78, 153, 154),
(79, 153, 155),
(80, 153, 152),
(81, 154, 51),
(82, 155, 51),
(83, 157, 159),
(84, 157, 158),
(85, 162, 161),
(86, 162, 160),
(87, 162, 163);

-- --------------------------------------------------------

--
-- Table structure for table `wiki_relation`
--

DROP TABLE IF EXISTS `wiki_relation`;
CREATE TABLE IF NOT EXISTS `wiki_relation` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `did` mediumint(8) NOT NULL,
  `title` varchar(80) NOT NULL,
  `relatedtitle` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `title` (`title`),
  KEY `did` (`did`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_relation`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_session`
--

DROP TABLE IF EXISTS `wiki_session`;
CREATE TABLE IF NOT EXISTS `wiki_session` (
  `sid` char(6) NOT NULL DEFAULT '',
  `uid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `username` char(15) NOT NULL DEFAULT '',
  `code` char(4) NOT NULL DEFAULT '',
  `islogin` tinyint(1) NOT NULL DEFAULT '0',
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  `referer` varchar(150) DEFAULT NULL,
  UNIQUE KEY `sid` (`sid`),
  KEY `uid` (`uid`)
) ENGINE=HEAP DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wiki_session`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_setting`
--

DROP TABLE IF EXISTS `wiki_setting`;
CREATE TABLE IF NOT EXISTS `wiki_setting` (
  `variable` varchar(32) NOT NULL,
  `value` text,
  PRIMARY KEY (`variable`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wiki_setting`
--

INSERT INTO `wiki_setting` (`variable`, `value`) VALUES
('site_name', '我的HDWiki'),
('site_url', 'http://www.p.com/hdwiki'),
('site_icp', ''),
('cookie_domain', ''),
('cookie_pre', 'hd_'),
('app_url', 'http://kaiyuan.hudong.com'),
('auth_key', '5O0r1ScG5T3d8tbp6Zdif2bS8u2ecfdS0S8y56fv0I1p7h2C6r4za33mdRdX7IbR'),
('verify_doc', '0'),
('cat_intro_set', '0'),
('time_offset', '8'),
('time_diff', '0'),
('time_format', ''),
('date_format', 'm-d'),
('style_user_select', '1'),
('credit_create', '5'),
('credit_edit', '3'),
('credit_upload', '2'),
('credit_register', '20'),
('credit_login', '1'),
('credit_pms', '1'),
('credit_comment', '2'),
('list_prepage', '20'),
('list_focus', '10'),
('list_recentupdate', '10'),
('list_weekuser', '10'),
('list_allcredit', '10'),
('list_popularity', '10'),
('list_letter', '10'),
('login_show', '1'),
('category_view', '10'),
('category_letter', '10'),
('index_commend', '15'),
('index_recentupdate', '6'),
('index_recentcomment', '5'),
('index_hotdoc', '3'),
('index_wonderdoc', '6'),
('index_picture', '9'),
('index_cooperate', '20'),
('seo_prefix', 'index.php?'),
('seo_separator', '-'),
('seo_suffix', ''),
('seo_title', ''),
('seo_keywords', ''),
('seo_description', ''),
('seo_headers', ''),
('seo_type', '0'),
('seo_type_doc', '0'),
('attachment_size', '2048'),
('attachment_open', '0'),
('attachment_type', 'jpg|jpeg|bmp|gif|png|gz|bz2|zip|rar|doc|ppt|mp3|xls|txt|swf|flv|php|pdf'),
('index_cache_time', '300'),
('list_cache_time', '300'),
('doc_cache_time', '300'),
('tpl_name', 'default'),
('theme_name', 'default'),
('lang_name', 'zh'),
('auto_picture', '0'),
('checkcode', '3'),
('sandbox_id', ''),
('logowidth', '220px'),
('site_notice', '本站是由<span style="color:#FF0000">1</span>位网民共同撰写的百科全书，目前已收录词条<span style="color:#FF0000"> 0</span>个'),
('search_time', '1'),
('search_tip_switch', '1'),
('search_num', '10000'),
('close_register_reason', '对不起，网站暂停注册！给您带来的不便还请谅解。'),
('error_names', '管理员'),
('register_check', '0'),
('name_min_length', '3'),
('name_max_length', '15'),
('register_least_minute', '30'),
('reg_status', '3'),
('inviter_credit', '5'),
('invitee_credit', '0'),
('invite_subject', '您收到_USERNAME_的邀请了！'),
('invite_content', '你好，我是_USERNAME_，在_SITENAME_上注册了会员，里面有很多有用的知识，邀请你也加入进来。\r\n\r\n邀请附言：\r\n\r\n_PS_\r\n\r\n请你点击以下链接，接受好友邀请：_LINK_\r\n\r\n_SITENAME_ 敬上'),
('welcome_subject', '_USERNAME_，您好，欢迎您的加入^_^'),
('welcome_content', '尊敬的_USERNAME_，\r\n\r\n您好！您已成功注册为_SITENAME_的会员，欢迎您与大家积极分享知识。\r\n\r\n_SITENAME_ 敬上\r\n_TIME_'),
('send_welcome', '0'),
('close_website', '0'),
('forbidden_edit_time', '0'),
('comments', '1'),
('base_toplist', '0'),
('base_createdoc', '0'),
('doc_verification_edit_code', '0'),
('doc_verification_create_code', '0'),
('relateddoc', ''),
('isrelate', '0'),
('close_website_reason', '网站暂时关闭，马上就会恢复，请稍候关注，谢谢。'),
('coin_register', '20'),
('coin_login', '1'),
('coin_create', '2'),
('coin_edit', '1'),
('coin_upload', '1'),
('coin_pms', '0'),
('coin_comment', '1'),
('credit_exchangeRate', '5'),
('coin_exchangeRate', '1'),
('credit_exchange', '0'),
('coin_exchange', '0'),
('credit_download', '0'),
('coin_download', '10'),
('img_width_big', '300'),
('img_height_big', '300'),
('img_width_small', '140'),
('img_height_small', '140'),
('cloud_search', '0'),
('cloud_search_close_time', '30'),
('cloud_search_timeout', '5'),
('cloud_search_cache', '300'),
('gift_range', 'a:4:{i:0;s:2:"50";i:50;s:3:"100";i:100;s:3:"200";i:200;s:3:"500";}'),
('watermark', 'a:8:{s:8:"imagelib";s:1:"0";s:11:"imageimpath";s:0:"";s:15:"watermarkstatus";s:1:"0";s:17:"watermarkminwidth";s:3:"180";s:18:"watermarkminheight";s:3:"180";s:13:"watermarktype";s:1:"0";s:14:"watermarktrans";s:2:"60";s:16:"watermarkquality";s:3:"100";}'),
('coin_unit', ''),
('mail_config', 'a:10:{s:11:"maildefault";s:15:"admin@admin.com";s:8:"mailsend";s:1:"1";s:10:"mailserver";s:0:"";s:8:"mailport";s:2:"25";s:8:"mailauth";s:1:"0";s:8:"mailfrom";s:0:"";s:17:"mailauth_username";s:0:"";s:17:"mailauth_password";s:0:"";s:13:"maildelimiter";s:1:"0";s:12:"mailusername";s:1:"1";}'),
('sitemap_config', 'a:5:{s:8:"use_gzip";s:1:"1";s:14:"idx_changefreq";s:5:"daily";s:14:"doc_changefreq";s:7:"monthly";s:10:"textcolumn";s:7:"summary";s:10:"updateperi";s:2:"30";}'),
('auto_baiduxml', '0'),
('random_open', '0'),
('random_text', ''),
('check_useragent', '0'),
('ua_allow_first', '1'),
('allow_ua_both', '1'),
('ua_whitelist', ''),
('ua_blacklist', ''),
('check_visitrate', '0'),
('visitrate', 'a:3:{s:8:"duration";i:60;s:5:"pages";i:30;s:8:"ban_time";i:1;}'),
('compatible', '1'),
('hdapi_bklm', '1'),
('hdapi_sharetosns', '1'),
('hdapi_autoshare_edit', '0'),
('hdapi_autoshare_create', '0'),
('hdapi_autoshare_comment', '0'),
('hdapi_autoshare_ding', '0'),
('base_isreferences', '1'),
('doc_verification_reference_code', '0'),
('visitrate_ip_exception', '127.0.0.*');

-- --------------------------------------------------------

--
-- Table structure for table `wiki_synonym`
--

DROP TABLE IF EXISTS `wiki_synonym`;
CREATE TABLE IF NOT EXISTS `wiki_synonym` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `srctitle` varchar(80) NOT NULL,
  `destdid` int(10) NOT NULL,
  `desttitle` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `srctitle` (`srctitle`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_synonym`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_task`
--

DROP TABLE IF EXISTS `wiki_task`;
CREATE TABLE IF NOT EXISTS `wiki_task` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `url` varchar(50) NOT NULL,
  `lastrun` int(10) unsigned NOT NULL DEFAULT '0',
  `nextrun` int(10) unsigned NOT NULL DEFAULT '0',
  `weekday` tinyint(1) NOT NULL,
  `day` tinyint(1) NOT NULL,
  `hour` tinyint(2) NOT NULL,
  `minute` tinyint(2) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_task`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_theme`
--

DROP TABLE IF EXISTS `wiki_theme`;
CREATE TABLE IF NOT EXISTS `wiki_theme` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  `available` tinyint(1) NOT NULL DEFAULT '1',
  `path` varchar(100) NOT NULL,
  `copyright` varchar(100) NOT NULL,
  `css` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `wiki_theme`
--

INSERT INTO `wiki_theme` (`id`, `name`, `available`, `path`, `copyright`, `css`) VALUES
(1, '默认风格', 1, 'default', 'hudong.com', 'a:18:{s:8:"bg_color";s:11:"transparent";s:14:"left_framcolor";s:7:"#e6e6e6";s:16:"leftitle_bgcolor";s:7:"#f7f7f8";s:18:"leftitle_framcolor";s:7:"#efefef";s:16:"middle_framcolor";s:7:"#eaf1f6";s:19:"middletitle_bgcolor";s:7:"#eaf6fd";s:21:"middletitle_framcolor";s:7:"#c4d2db";s:15:"right_framcolor";s:7:"#cef2e0";s:17:"rightitle_bgcolor";s:7:"#cef2e0";s:19:"rightitle_framcolor";s:7:"#a3bfb1";s:13:"nav_framcolor";s:7:"#e1e1e1";s:11:"nav_bgcolor";s:7:"#aaaeb1";s:13:"nav_linkcolor";s:4:"#fff";s:13:"nav_overcolor";s:4:"#ff0";s:8:"nav_size";s:4:"14px";s:10:"bg_imgname";s:11:"html_bg.jpg";s:13:"titbg_imgname";s:10:"col_bg.jpg";s:4:"path";s:7:"default";}');

-- --------------------------------------------------------

--
-- Table structure for table `wiki_uniontitle`
--

DROP TABLE IF EXISTS `wiki_uniontitle`;
CREATE TABLE IF NOT EXISTS `wiki_uniontitle` (
  `did` int(11) unsigned NOT NULL DEFAULT '0',
  `docdeclaration` text NOT NULL,
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`did`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wiki_uniontitle`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_user`
--

DROP TABLE IF EXISTS `wiki_user`;
CREATE TABLE IF NOT EXISTS `wiki_user` (
  `uid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `username` char(20) NOT NULL DEFAULT '',
  `password` char(32) NOT NULL DEFAULT '',
  `email` char(50) NOT NULL DEFAULT '',
  `gender` tinyint(1) NOT NULL DEFAULT '0',
  `credit2` int(10) NOT NULL DEFAULT '0',
  `credit1` int(10) NOT NULL DEFAULT '0',
  `birthday` int(10) unsigned NOT NULL DEFAULT '0',
  `image` varchar(255) NOT NULL DEFAULT '',
  `postcode` varchar(30) NOT NULL DEFAULT '',
  `location` varchar(30) NOT NULL DEFAULT '',
  `regip` char(15) NOT NULL DEFAULT '',
  `regtime` int(10) unsigned NOT NULL DEFAULT '0',
  `lastip` char(15) NOT NULL DEFAULT '',
  `lasttime` int(10) unsigned NOT NULL DEFAULT '0',
  `groupid` smallint(6) unsigned NOT NULL DEFAULT '0',
  `timeoffset` varchar(20) NOT NULL DEFAULT '8',
  `style` varchar(20) NOT NULL DEFAULT 'default',
  `language` varchar(20) NOT NULL DEFAULT 'zh',
  `signature` text NOT NULL,
  `truename` varchar(30) NOT NULL DEFAULT '',
  `telephone` varchar(30) NOT NULL DEFAULT '',
  `qq` varchar(12) NOT NULL DEFAULT '',
  `msn` varchar(100) NOT NULL DEFAULT '',
  `authstr` varchar(20) NOT NULL DEFAULT '',
  `creates` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `edits` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `views` int(10) unsigned NOT NULL DEFAULT '0',
  `checkup` int(10) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`uid`),
  UNIQUE KEY `username` (`username`),
  KEY `email` (`email`),
  KEY `credit2` (`credit2`),
  KEY `views` (`views`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `wiki_user`
--

INSERT INTO `wiki_user` (`uid`, `username`, `password`, `email`, `gender`, `credit2`, `credit1`, `birthday`, `image`, `postcode`, `location`, `regip`, `regtime`, `lastip`, `lasttime`, `groupid`, `timeoffset`, `style`, `language`, `signature`, `truename`, `telephone`, `qq`, `msn`, `authstr`, `creates`, `edits`, `views`, `checkup`) VALUES
(1, 'admin', '5f4dcc3b5aa765d61d8327deb882cf99', 'admin@admin.com', 0, 20, 20, 0, '', '', '', '', 1293598896, '127.0.0.1', 0, 4, '8', 'default', 'zh', '', '', '', '', '', '', 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wiki_usergroup`
--

DROP TABLE IF EXISTS `wiki_usergroup`;
CREATE TABLE IF NOT EXISTS `wiki_usergroup` (
  `groupid` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `grouptitle` char(30) NOT NULL DEFAULT '',
  `regulars` text NOT NULL,
  `default` text,
  `type` tinyint(1) NOT NULL DEFAULT '0',
  `creditslower` int(10) NOT NULL DEFAULT '0',
  `creditshigher` int(10) NOT NULL DEFAULT '0',
  `stars` tinyint(3) NOT NULL DEFAULT '0',
  `color` char(7) NOT NULL DEFAULT '',
  `groupavatar` char(60) NOT NULL DEFAULT '',
  PRIMARY KEY (`groupid`),
  KEY `creditsrange` (`creditslower`,`creditshigher`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `wiki_usergroup`
--

INSERT INTO `wiki_usergroup` (`groupid`, `grouptitle`, `regulars`, `default`, `type`, `creditslower`, `creditshigher`, `stars`, `color`, `groupavatar`) VALUES
(1, '匿名用户', 'index-default|index-settheme|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-getpass|user-code|user-space|user-clearcookies|synonym-view|passport_client-login|passport_client-logout|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|search-agent', 'index-default|index-settheme|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-getpass|user-code|user-space|user-clearcookies|synonym-view|passport_client-login|passport_client-logout|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|search-agent', 1, 0, 0, 0, '', ''),
(3, '词条管理员', 'admin_actions-default|admin_actions-map|index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|doc-setfocus|doc-getcategroytree|doc-changecategory|doc-changename|doc-lock|doc-unlock|doc-audit|doc-remove|comment-remove|comment-add|comment-edit|edition-remove|edition-excellent|edition-unexcellent|edition-copy|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-removefocus|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|admin_doc-cancelrecommend|doc-delsave|doc-managesave|admin_main-login|admin_main-default|admin_main-logout|admin_main-mainframe|admin_main-update|admin_doc-default|admin_doc-search|admin_doc-audit|admin_doc-recommend|admin_doc-lock|admin_doc-unlock|admin_doc-remove|admin_doc-move|admin_doc-rename|admin_comment-default|admin_comment-search|admin_comment-delete|admin_attachment-default|admin_attachment-search|admin_attachment-remove|admin_attachment-download|admin_focus-focuslist|admin_focus-remove|admin_focus-reorder|admin_focus-edit|admin_focus-updateimg|admin_focus-numset|admin_tag-hottag|admin_word-default|admin_synonym-default|admin_synonym-search|admin_synonym-delete|admin_synonym-save|admin_cooperate-default|admin_hotsearch-default|admin_image-default|admin_image-editimage|admin_image-remove|admin_relation-default|admin_edition-default|admin_edition-search|admin_edition-addcoin|admin_edition-excellent|admin_editi|exchange-default|admin_share-default|admin_share-search|admin_share-share|admin_main-datasize|doc-editletter', 'admin_actions-default|admin_actions-map|index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|doc-setfocus|doc-getcategroytree|doc-changecategory|doc-changename|doc-lock|doc-unlock|doc-audit|doc-remove|comment-remove|comment-add|comment-edit|edition-remove|edition-excellent|edition-unexcellent|edition-copy|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-removefocus|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|admin_doc-cancelrecommend|doc-delsave|doc-managesave|admin_main-login|admin_main-default|admin_main-logout|admin_main-mainframe|admin_main-update|admin_doc-default|admin_doc-search|admin_doc-audit|admin_doc-recommend|admin_doc-lock|admin_doc-unlock|admin_doc-remove|admin_doc-move|admin_doc-rename|admin_comment-default|admin_comment-search|admin_comment-delete|admin_attachment-default|admin_attachment-search|admin_attachment-remove|admin_attachment-download|admin_focus-focuslist|admin_focus-remove|admin_focus-reorder|admin_focus-edit|admin_focus-updateimg|admin_focus-numset|admin_tag-hottag|admin_word-default|admin_synonym-default|admin_synonym-search|admin_synonym-delete|admin_synonym-save|admin_cooperate-default|admin_hotsearch-default|admin_image-default|admin_image-editimage|admin_image-remove|admin_relation-default|admin_edition-default|admin_edition-search|admin_edition-addcoin|admin_edition-excellent|admin_editi|exchange-default|admin_share-default|admin_share-search|admin_share-share|admin_main-datasize|doc-editletter', 1, 0, 0, 2, '', ''),
(4, '超级管理员', '', '', 1, 0, 0, 3, '', ''),
(5, '白丁', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|doc-edit|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-view|synonym-savesynonym|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|doc-edit|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-view|synonym-savesynonym|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 2, -999999, 0, 0, '', ''),
(2, '书童', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-removesynonym|synonym-view|synonym-savesynonym|attachment-upload|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-removesynonym|synonym-view|synonym-savesynonym|attachment-upload|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 2, 0, 100, 1, '', ''),
(6, '秀才', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-removesynonym|synonym-view|synonym-savesynonym|reference-add|reference-remove|attachment-upload|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-removesynonym|synonym-view|synonym-savesynonym|reference-add|reference-remove|attachment-upload|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 2, 100, 300, 4, '', ''),
(7, '举人', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-removesynonym|synonym-view|synonym-savesynonym|reference-add|reference-remove|attachment-upload|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-removesynonym|synonym-view|synonym-savesynonym|reference-add|reference-remove|attachment-upload|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 2, 300, 600, 5, '', ''),
(8, '进士', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 2, 600, 1000, 8, '', ''),
(9, '状元', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 2, 1000, 1500, 16, '', ''),
(10, '翰林', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|comment-add|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 2, 1500, 2100, 18, '', ''),
(11, '太傅', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|doc-setfocus|doc-changename|doc-lock|doc-unlock|doc-audit|comment-remove|comment-add|comment-edit|edition-excellent|edition-unexcellent|edition-copy|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-removefocus|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|doc-setfocus|doc-changename|doc-lock|doc-unlock|doc-audit|comment-remove|comment-add|comment-edit|edition-excellent|edition-unexcellent|edition-copy|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-removefocus|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 2, 2100, 2800, 24, '', ''),
(12, '圣贤', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|doc-setfocus|doc-getcategroytree|doc-changecategory|doc-changename|doc-lock|doc-unlock|doc-audit|comment-remove|comment-add|comment-edit|edition-excellent|edition-unexcellent|edition-copy|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-removefocus|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|doc-setfocus|doc-getcategroytree|doc-changecategory|doc-changename|doc-lock|doc-unlock|doc-audit|comment-remove|comment-add|comment-edit|edition-excellent|edition-unexcellent|edition-copy|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-removefocus|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 2, 2800, 999999999, 33, '', ''),
(13, '荣誉宰相', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|doc-setfocus|doc-changename|doc-lock|doc-unlock|doc-audit|comment-remove|comment-add|comment-edit|edition-excellent|edition-unexcellent|edition-copy|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-removefocus|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 'index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|doc-setfocus|doc-changename|doc-lock|doc-unlock|doc-audit|comment-remove|comment-add|comment-edit|edition-excellent|edition-unexcellent|edition-copy|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-removefocus|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|doc-delsave|doc-managesave|exchange-default|doc-editletter', 0, 0, 0, 5, '', '');
INSERT INTO `wiki_usergroup` (`groupid`, `grouptitle`, `regulars`, `default`, `type`, `creditslower`, `creditshigher`, `stars`, `color`, `groupavatar`) VALUES
(14, '管理员', 'admin_actions-default|admin_actions-map|index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|doc-setfocus|doc-getcategroytree|doc-changecategory|doc-changename|doc-lock|doc-unlock|doc-audit|doc-remove|comment-remove|comment-add|comment-edit|edition-remove|edition-excellent|edition-unexcellent|edition-copy|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-removefocus|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|admin_doc-cancelrecommend|doc-delsave|doc-managesave|admin_banned-default|admin_friendlink-default|admin_friendlink-add|admin_friendlink-edit|admin_friendlink-remove|admin_friendlink-updateorder|admin_main-login|admin_main-default|admin_main-logout|admin_main-mainframe|admin_main-update|admin_setting-base|admin_setting-code|admin_setting-time|admin_setting-cookie|admin_setting-logo|admin_setting-credit|admin_setting-seo|admin_setting-cache|admin_setting-updatecache|admin_setting-removecache|admin_setting-attachment|admin_setting-mail|admin_setting-noticemail|admin_task-default|admin_task-taskstatus|admin_task-edittask|admin_task-run|admin_log-default|admin_setting-notice|admin_setting-anticopy|admin_setting-listdisplay|admin_setting-sec|admin_setting-index|admin_setting-docset|admin_setting-search|admin_plugin-list|admin_plugin-default|admin_plugin-manage|admin_plugin-will|admin_plugin-find|admin|admin_plugin-install|admin_plugin-uninstall|admin_plugin-start|admin_plugin-stop|admin_plugin-setvar|admin_plugin-hook|admin_doc-default|admin_doc-search|admin_doc-audit|admin_doc-recommend|admin_doc-lock|admin_doc-unlock|admin_doc-remove|admin_doc-move|admin_doc-rename|admin_comment-default|admin_comment-search|admin_comment-delete|admin_attachment-default|admin_attachment-search|admin_attachment-remove|admin_attachment-download|admin_focus-focuslist|admin_focus-remove|admin_focus-reorder|admin_focus-edit|admin_focus-updateimg|admin_focus-numset|admin_tag-hottag|admin_word-default|admin_synonym-default|admin_synonym-search|admin_synonym-delete|admin_synonym-save|admin_recycle-default|admin_recycle-search|admin_recycle-remove|admin_recycle-recover|admin_recycle-|admin_cooperate-default|admin_hotsearch-default|admin_image-default|admin_image-editimage|admin_image-remove|admin_relation-default|admin_edition-default|admin_edition-search|admin_edition-addcoin|admin_edition-excellent|admin_editi|admin_gift-default|admin_gift-view|admin_gift-search|admin_gift-add|admin_gift-edit|admin_gift-remove|admin_user-default|admin_user-list|admin_user-add|admin_user-edit|admin_usergroup-default|admin_usergroup-list|admin_category-default|admin_category-list|admin_category-add|admin_category-batchedit|admin_category-edit|admin_category-reorder|admin_statistics-stand|admin_statistics-cat_toplist|admin_statistics-doc_toplist|admin_statistics-edit_toplist|admin_statistics-credit_toplist|admin_statistics-admin_team|exchange-default|admin_share-default|admin_share-search|admin_share-share|doc-editletter|admin_sitemap-default|admin_sitemap-setting|admin_sitemap-createdoc|admin_sitemap-updatedoc|admin_sitemap-submit|admin_sitemap-baiduxml|admin_filecheck-docreate|admin_safe-default|admin_safe-setting|admin_safe-scanfile|admin_safe-validate|admin_safe-scanfuns|admin_safe-list|admin_safe-editcode|admin_safe-del', 'admin_actions-default|admin_actions-map|index-default|index-settheme|attachment-download|user-removefavorite|user-exchange|user-addfavorite|archiver-default|archiver-list|archiver-view|datacall-js|search-agent|category-default|category-ajax|category-view|category-letter|list-letter|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-login|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-logout|user-profile|user-editprofile|user-editpass|user-editimage|user-editimageifeam|user-cutimage|admin_datacall-default|admin_datacall-list|admin_datacall-search|admin_datacall-view|admin_datacall-operate|admin_datacall-remove|admin_datacall-addsql|admin_datacall-editsql|user-getpass|user-code|user-space|user-clearcookies|user-cutoutimage|user-invite|pms-default|pms-box|pms-setread|pms-remove|pms-sendmessage|pms-checkrecipient|pms-blacklist|pms-publicmessage|attachment-uploadimg|attachment-remove|doc-create|doc-verify|doc-edit|doc-editsection|doc-refresheditlock|doc-unseteditlock|doc-sandbox|doc-setfocus|doc-getcategroytree|doc-changecategory|doc-changename|doc-lock|doc-unlock|doc-audit|doc-remove|comment-remove|comment-add|comment-edit|edition-remove|edition-excellent|edition-unexcellent|edition-copy|synonym-removesynonym|synonym-view|synonym-savesynonym|doc-immunity|reference-add|reference-remove|attachment-upload|doc-removefocus|doc-autosave|doc-getrelateddoc|doc-addrelatedoc|passport_client-login|passport_client-logout|admin_doc-cancelrecommend|doc-delsave|doc-managesave|admin_banned-default|admin_friendlink-default|admin_friendlink-add|admin_friendlink-edit|admin_friendlink-remove|admin_friendlink-updateorder|admin_main-login|admin_main-default|admin_main-logout|admin_main-mainframe|admin_main-update|admin_setting-base|admin_setting-code|admin_setting-time|admin_setting-cookie|admin_setting-logo|admin_setting-credit|admin_setting-seo|admin_setting-cache|admin_setting-updatecache|admin_setting-removecache|admin_setting-attachment|admin_setting-mail|admin_setting-noticemail|admin_task-default|admin_task-taskstatus|admin_task-edittask|admin_task-run|admin_log-default|admin_setting-notice|admin_setting-anticopy|admin_setting-listdisplay|admin_setting-sec|admin_setting-index|admin_setting-docset|admin_setting-search|admin_plugin-list|admin_plugin-default|admin_plugin-manage|admin_plugin-will|admin_plugin-find|admin|admin_plugin-install|admin_plugin-uninstall|admin_plugin-start|admin_plugin-stop|admin_plugin-setvar|admin_plugin-hook|admin_doc-default|admin_doc-search|admin_doc-audit|admin_doc-recommend|admin_doc-lock|admin_doc-unlock|admin_doc-remove|admin_doc-move|admin_doc-rename|admin_comment-default|admin_comment-search|admin_comment-delete|admin_attachment-default|admin_attachment-search|admin_attachment-remove|admin_attachment-download|admin_focus-focuslist|admin_focus-remove|admin_focus-reorder|admin_focus-edit|admin_focus-updateimg|admin_focus-numset|admin_tag-hottag|admin_word-default|admin_synonym-default|admin_synonym-search|admin_synonym-delete|admin_synonym-save|admin_recycle-default|admin_recycle-search|admin_recycle-remove|admin_recycle-recover|admin_recycle-|admin_cooperate-default|admin_hotsearch-default|admin_image-default|admin_image-editimage|admin_image-remove|admin_relation-default|admin_edition-default|admin_edition-search|admin_edition-addcoin|admin_edition-excellent|admin_editi|admin_gift-default|admin_gift-view|admin_gift-search|admin_gift-add|admin_gift-edit|admin_gift-remove|admin_user-default|admin_user-list|admin_user-add|admin_user-edit|admin_usergroup-default|admin_usergroup-list|admin_category-default|admin_category-list|admin_category-add|admin_category-batchedit|admin_category-edit|admin_category-reorder|admin_statistics-stand|admin_statistics-cat_toplist|admin_statistics-doc_toplist|admin_statistics-edit_toplist|admin_statistics-credit_toplist|admin_statistics-admin_team|exchange-default|admin_share-default|admin_share-search|admin_share-share|doc-editletter|admin_sitemap-default|admin_sitemap-setting|admin_sitemap-createdoc|admin_sitemap-updatedoc|admin_sitemap-submit|admin_sitemap-baiduxml|admin_filecheck-docreate|admin_safe-default|admin_safe-setting|admin_safe-scanfile|admin_safe-validate|admin_safe-scanfuns|admin_safe-list|admin_safe-editcode|admin_safe-del', 1, 0, 0, 2, '', ''),
(15, '被冻结', 'index-default|index-settheme|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-profile|user-editpass|user-getpass|user-code|user-space|user-clearcookies|pms-blacklist|synonym-view|doc-editletter', 'index-default|index-settheme|category-default|category-ajax|category-view|category-letter|list-letter|list-default|list-recentupdate|list-popularity|list-focus|doc-view|doc-innerlink|doc-summary|doc-editor|comment-view|comment-report|comment-oppose|comment-aegis|edition-list|edition-view|edition-compare|search-default|search-fulltext|search-kw|search-tag|list-weekuserlist|list-allcredit|list-rss|doc-random|doc-vote|doc-cooperate|gift-default|gift-view|gift-search|gift-apply|pic-piclist|pic-view|pic-ajax|pic-search|user-register|user-check|user-checkusername|user-checkcode|user-checkpassword|user-checkoldpass|user-checkemail|user-profile|user-editpass|user-getpass|user-code|user-space|user-clearcookies|pms-blacklist|synonym-view|doc-editletter', 1, 0, 0, 1, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `wiki_visitlist`
--

DROP TABLE IF EXISTS `wiki_visitlist`;
CREATE TABLE IF NOT EXISTS `wiki_visitlist` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `ip` varchar(40) NOT NULL DEFAULT '',
  `useragent` varchar(255) NOT NULL DEFAULT '',
  `time` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_visitlist`
--


-- --------------------------------------------------------

--
-- Table structure for table `wiki_word`
--

DROP TABLE IF EXISTS `wiki_word`;
CREATE TABLE IF NOT EXISTS `wiki_word` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `admin` varchar(15) NOT NULL DEFAULT '',
  `find` varchar(255) NOT NULL DEFAULT '',
  `replacement` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `wiki_word`
--


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
