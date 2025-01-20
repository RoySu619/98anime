<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op =$_GET['op'] ? $_GET['op'] : 'appqd';
if($op=='appqd'){
	if($_GET['syspt']=='go'){
		$sql ="SELECT imgurl,urls,imgtp FROM appopen where id limit 1"; 
		$result = mysqli_query($mysqli,$sql);
		$data = mysqli_fetch_assoc($result);
		echo json_encode($data);
	}
}