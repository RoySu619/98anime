<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'out';
if($op=='out'){
	outlogin(); //退出方法
	header("location:/mobile.php?to=user");
}
