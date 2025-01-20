<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['loginout'] ? $_GET['loginout'] :'loginout';
if($op=='loginout'){
	if(POST('login')=='out'){
		outlogin(); //退出方法
		$arr[] = 'ok';
		echo json_encode($arr);
	}else{
		echo json_encode('err');
	}
}
