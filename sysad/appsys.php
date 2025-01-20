<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}

$op = $_GET['op'] ? $_GET['op'] : 'appsys';
if($op=='appsys'){
// 	$sql = "SELECT * FROM appsys where id order by id desc limit 1"; 
    $sql = "SELECT * FROM appsys where id order by id desc";
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$channellist[]= $value; 
	}
	
	mysqli_close($mysqli);
	$tanchao->Template($op);
}

if($op=='setwb'){
	if($_POST['set-wbs']=='go'){
		if($_POST['key']=='0'){
			$wbana = $_POST['wan'];
			$wbiosa = $_POST['wios'];
			$wbvsa = $_POST['wvs'];
			$sql = "INSERT INTO appsys set aurl='".$wbana."',iurl='".$wbiosa."',appv='".$wbvsa."'"; 
			mysqli_query($mysqli,$sql);
			mysqli_close($mysqli);
			$jieguo = 1;
			echo json_encode($jieguo);
		}
	}
}
if($op=='xgwb'){
	if($_POST['xg-wbs']=='go'){
		if($_POST['key']=='0'){
			$ids = $_POST['sid'];
			$wbana = $_POST['wan'];
			$wbiosa = $_POST['wios'];
			$wbvsa = $_POST['wvs'];
			$sql = "UPDATE appsys set aurl='".$wbana."',iurl='".$wbiosa."',appv='".$wbvsa."' WHERE id='".$ids."'"; 
			mysqli_query($mysqli,$sql);
			mysqli_close($mysqli);
			$jieguo = 1;
			echo json_encode($jieguo);
		}
	}
}



