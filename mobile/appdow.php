<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'appdow';
if($op=='appdow'){
    $channel = $_GET['channel'] ? $_GET['channel'] : 'organic';
// 	$sql = "select appv,iurl,aurl from appsys where id order by id desc limit 1"; 
    $sql = "select appv,iurl,aurl from appsys where uname = '".$channel."'"; 
	$result = mysqli_query($mysqli,$sql);
	$app = mysqli_fetch_assoc($result);
	mysqli_close($mysqli);
	if(strstr($_SERVER['HTTP_USER_AGENT'],"Adr")||strstr(strtolower($_SERVER['HTTP_USER_AGENT']),"android")){
		$dows = $app['aurl'];
	}elseif(strstr($_SERVER['HTTP_USER_AGENT'],"iPh")||strstr(strtolower($_SERVER['HTTP_USER_AGENT']),"iphone")){
		$dows = $app['iurl'];
	}else{
		$dows = $app['aurl'];
	}
}
$tanchao->Template($to);