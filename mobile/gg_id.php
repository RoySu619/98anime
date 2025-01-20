<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'gg_id';
if($op=='gg_id'){
	$id = GET('id');
	$sql = "SELECT id,ggtp,mygg,times FROM gg where id='".$id."'"; 
	$result = mysqli_query($mysqli,$sql);
	$gginfo = mysqli_fetch_assoc($result);
	mysqli_close($mysqli);
}
$tanchao->Template($op);