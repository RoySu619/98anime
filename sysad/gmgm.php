<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}

$op = $_GET['op'] ? $_GET['op'] : 'gmgm';
if($op=='gmgm'){
	$sql = "SELECT id,urlname,urls FROM gmurl where id limit 1"; 
	$result = mysqli_query($mysqli,$sql);
	$value = mysqli_fetch_assoc($result);
	mysqli_close($mysqli);
	$tanchao->Template($op);
}

if($op=='seturl'){
	if($_POST['xg-urls']=='go'){
		if($_POST['key']=='0'){
			$ids = $_POST['ulsid'];
			$urls = $_POST['urlss'];
			$sql = "Update gmurl set urls='".$urls."' where id='".$ids."'"; 
			mysqli_query($mysqli,$sql);
			mysqli_close($mysqli);
			$jieguo = 1;
			echo json_encode($jieguo);
		}
	}
}




