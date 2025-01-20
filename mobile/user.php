<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'user';
if($op=='user'){
	
}
if($op=='lb_list'){
	$sql = "SELECT lbname,lbkey,gmname,gmlogo,lbtm FROM uslbkey where uid='".$G_uid."' order by id desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$data[]= $value; 
	}
}
if($op=='cz_list'){
	$sql = "SELECT gmname,czml,ddzt,times FROM usdd where uid='".$G_uid."' order by id desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$data[]= $value; 
	}
}
if($op=='set_list'){
	
}
if($op=='kefu'){
	
}
$tanchao->Template('user_'.$op);