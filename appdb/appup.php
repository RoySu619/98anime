<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'appup';
if($op=='appup'){
	$appc = POSTML('appvc'); //APP当前版本
	$appcs  = str_replace('.','',$appc);
	$appqds = POSTML('appqd');//渠道 0官方 1 公会 
	$appsys = POST('appsys');//APP系统
	if($appc && $appqds){
		$sql = "select uid,appv,iurl,aurl from appsys where uid='1' order by id desc limit 1"; 
		$result = mysqli_query($mysqli,$sql);
		$appve = mysqli_fetch_assoc($result);
		mysqli_close($mysqli);
		$fappv = $appve['appv'];
		$newvvs  = str_replace('.','',$fappv);
		//$newvv  = str_replace('0','',$newvvs);
		$fid = $appve['uid'];
		$faurl = $appve['aurl'];
		$fiurl = $appve['iurl'];
		if($newvvs>$appcs){
			if($appsys=='ios'){
				$jieguo =array('msg'=>'yes','data'=>$fiurl) ;
				echo json_encode($jieguo);
			}else{
				$jieguo =array('msg'=>'yes','data'=>$faurl) ;
				echo json_encode($jieguo);
			}
		}else{
			$jieguo =array('msg'=>'no') ;
			echo json_encode($jieguo);
		}
	}
	
}
?>
