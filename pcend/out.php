<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}

if(@$_GET['login']=='out'){
	outlogin(); //退出方法
	header("location:/");
	
}else{
	echo json_encode('err');
}
