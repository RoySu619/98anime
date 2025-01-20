<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'helplist';
if($op=='helplist'){
	$sql = "SELECT * FROM helplist where id order by id desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
	$list[]= $value; 
	}
	mysqli_close($mysqli);
}

if($op=='helplist_con'){
	if($_POST['fbgg']){
		if($_POST['nr']){ 
			$tp = $_POST['tp'];
			$nr = $_POST['nr'];
			$dqtm = date('Y-m-d H:i');
			$sql="insert into helplist (tp,nr,times)VALUES('','".$nr."','".$dqtm."');"; 
			mysqli_query($mysqli,$sql);
			mysqli_close($mysqli);
			echo "<script>location.href='../sysadmin.php?to=helplist';</script>";
		}
	}
}
if($op=='helplist_xg'){
	if($G_uid){
		$id = $_GET['id'];
		$tp = $_GET['tp'];
		$sql =$sql="SELECT tp,nr FROM helplist where tp='".$tp."' limit 1";
		$result = mysqli_query($mysqli,$sql);
	    $xx = mysqli_fetch_assoc($result);
		$xx['nr'] =str_replace(array("<br/>"), "\r\n", $xx['nr']);  
		if($_POST['xg']=='go'){
			if($_POST['nr']){ 
				$nr = $_POST['nr'];
				$tm=date('Y-m-d H:i');
				$sql="Update `helplist` set `tp`='".$tp."',nr='".$nr."',`times`='".$tm."' where `id`='".$id."'"; 
				mysqli_query($mysqli,$sql);
				echo "<script>alert('修改成功！');location.href='../sysadmin.php?to=helplist';</script>";
			}
		}
		mysqli_close($mysqli);
	}
}
$tanchao->Template($op);