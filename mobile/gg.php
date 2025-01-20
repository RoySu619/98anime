<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'gg';
if($op=='gg'){
	$open = GET('o') ? GET('o') :'1';
	if($open){
		$sql = "SELECT id,ggtp,times FROM gg where gglx='".$open."' order by id desc limit 50"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$gglist[]= $value; 
		}
		mysqli_close($mysqli);
	}
}
$tanchao->Template($op);