<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'help';
if($op=='help'){
	$sql = "SELECT nr FROM helplist where tp='1'"; 
	$result = mysqli_query($mysqli,$sql);
	$hp1 = mysqli_fetch_assoc($result);
	$hp1['nr'] =str_replace(array("\n","\r"), "<br/>", $hp1['nr']);
	$sql = "SELECT nr FROM helplist where tp='2'"; 
	$result = mysqli_query($mysqli,$sql);
	$hp2 = mysqli_fetch_assoc($result);
	$hp2['nr'] =str_replace(array("\n","\r"), "<br/>", $hp2['nr']);
	$sql = "SELECT nr FROM helplist where tp='4'"; 
	$result = mysqli_query($mysqli,$sql);
	$hp4 = mysqli_fetch_assoc($result);
	$hp4['nr'] =str_replace(array("\n","\r"), "<br/>", $hp4['nr']);
	$sql = "SELECT nr FROM helplist where tp='6'"; 
	$result = mysqli_query($mysqli,$sql);
	$hp6 = mysqli_fetch_assoc($result);
	$hp6['nr'] =str_replace(array("\n","\r"), "<br/>", $hp6['nr']);  
}
$tanchao->Template($op);
