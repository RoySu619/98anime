<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'news_id';
if($op=='news_id'){
	$id = GET('id');
	$sql = "SELECT id,zxname,gmname,zxnr,times FROM newslist where id='".$id."'"; 
	$result = mysqli_query($mysqli,$sql);
	$neinfo = mysqli_fetch_assoc($result);
	mysqli_close($mysqli);
}
//---------------SEO-----------------//
$config['newsxx_title'] = str_replace(["%getwebname%","%getweburl%","%getnewsname%","%getgmname%"],[$config['wzname'],$config['wzurl'],$neinfo['zxname'],$neinfo['gmname']], $config['newsxx_title']);
$config['newsxx_keyword'] = str_replace(["%getwebname%","%getweburl%","%getnewsname%","%getgmname%"],[$config['wzname'],$config['wzurl'],$neinfo['zxname'],$neinfo['gmname']], $config['newsxx_keyword']);
$config['newsxx_description'] = str_replace(["%getwebname%","%getweburl%","%getexplain%","%getgmname%"],[$config['wzname'],$config['wzurl'],$neinfo['zxjj'],$neinfo['gmname']], $config['newsxx_description']);
//---------------SEO-----------------//
$tanchao->Template($op);