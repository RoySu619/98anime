<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'help';
if($op=='yszc'){
    $sql = "SELECT nr FROM helplist where tp='2'"; 
	$result = mysqli_query($mysqli,$sql);
	$hp = mysqli_fetch_assoc($result);
	$hp['nr'] =str_replace(array("\n","\r"), "<br/>", $hp['nr']);
}
if($op=='fwxy'){
    $sql = "SELECT nr FROM helplist where tp='1'"; 
	$result = mysqli_query($mysqli,$sql);
	$hp = mysqli_fetch_assoc($result);
	$hp['nr'] =str_replace(array("\n","\r"), "<br/>", $hp['nr']);
}
$tanchao->Template('help_'.$op);