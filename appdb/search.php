<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'search';
$soname = GET('keyboard');
$soid = GET('id');
if($soname && $soid){
	if($soid=='1'){
		$sql = "SELECT id,gmname,gmlogo,gmjj,gmbq FROM gmlist where gmname LIKE '%$soname%'"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$sogmlist[]= $value; 
		}
		mysqli_close($mysqli);
		$arr = array('data'=>$sogmlist);
		echo json_encode($arr);
	}
	if($soid=='2'){
		$sql = "SELECT id,lbname,gmname,lblogo,lbjj,lbsy FROM lblist where gmname LIKE '%$soname%'"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){ 
			$solb[]= $value; 
		}
		mysqli_close($mysqli);
		$arr = array('data'=>$solb);
		echo json_encode($arr);
	}
}else{
	$arr[] = 'no';
	echo json_encode($arr);
}

