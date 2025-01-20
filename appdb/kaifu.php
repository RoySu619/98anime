<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'kaifu1';
if($op=='kaifu1'){
	//今天开服
	$ktmst = date('Y-m-d 00:00:00');
    $jtmst = date('Y-m-d 23:59');
	$pagesize=15;
	$sql = "select id from xflist where gmlx='1' and kftimes between '".$ktmst."' and '".$jtmst."'"; 
	$rs=mysqli_query($mysqli,$sql);
	$recordcount=mysqli_num_rows($rs); 
	$pagecount=($recordcount-1)/$pagesize+1;
	$pagecount=(int)$pagecount;
	if(GET('pages')==""){ 
		$pages=1;
	}else{
		$pages=GET("pages");
	}
	$startno=($pages-1)*$pagesize;
	$sql = "SELECT id,gid,gmname,gmlogo,xfname,kftimes FROM xflist where gmlx='1' and kftimes between '".$ktmst."' and '".$jtmst."' order by kftimes desc limit $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$xflb[]= $value; 
	}
	$arr = array('data'=>$xflb,'pagenum'=>$pagecount);
	echo json_encode($arr);
	mysqli_close($mysqli);
}

if($op=='kaifu2'){
	//即将开服
	$jktmst = date('Y-m-d 00:00:00',strtotime('+1 day'));
	$jjtmst = date('Y-m-d 23:59:59',strtotime('+1 day'));
	$pagesize=15;
	$sql = "select id from xflist where gmlx='1' and kftimes between '".$jktmst."' and '".$jjtmst."'"; 
	$rs=mysqli_query($mysqli,$sql);
	$recordcount=mysqli_num_rows($rs); 
	$pagecount=($recordcount-1)/$pagesize+1;
	$pagecount=(int)$pagecount;
	if(GET("pages")==""){ 
		$pages=1;
	}else{
		$pages=GET("pages");
	}
	$startno=($pages-1)*$pagesize;
	$sql = "SELECT id,gid,gmname,gmlogo,xfname,kftimes FROM xflist where gmlx='1' and kftimes between '".$jktmst."' and '".$jjtmst."' order by kftimes desc limit $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$xflb[]= $value; 
	}
	$arr = array('data'=>$xflb,'pagenum'=>$pagecount);
	echo json_encode($arr);
	mysqli_close($mysqli);
}
if($op=='kaifu3'){
	//已经开服
	$dqtmsy = date('Y-m-d H:i:s');
	$pagesize=15;
	$sql = "select id from xflist where gmlx='1' and kftimes<'".$dqtmsy."'"; 
	$rs=mysqli_query($mysqli,$sql);
	$recordcount=mysqli_num_rows($rs); 
	$pagecount=($recordcount-1)/$pagesize+1;
	$pagecount=(int)$pagecount;
	if(GET("pages")==""){ 
		$pages=1;
	}else{
		$pages=GET("pages");
	}
	$startno=($pages-1)*$pagesize;
	$sql = "SELECT id,gid,gmname,gmlogo,xfname,kftimes FROM xflist where gmlx='1' and kftimes<'".$dqtmsy."' order by kftimes desc limit $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$xflb[]= $value; 
	}
	$arr = array('data'=>$xflb,'pagenum'=>$pagecount);
	echo json_encode($arr);
	mysqli_close($mysqli);
}
?>
