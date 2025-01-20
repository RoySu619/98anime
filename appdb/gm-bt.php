<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'gm-bt';
if($op=='gm-bt'){
	if(GET('topgm')=='go'){
	$sql = "SELECT id,gmapplbt FROM gmlist where gmlx='2' and gmsy='1' and pid!='0' order by pid limit 1"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$lblist[]= $value; 
	}
	//精品推荐
	$sql = "SELECT id,gmname,gmlogo,gmdow FROM gmlist where gmlx='2' and gmtj='1' order by gmdow desc limit 4"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$jplist[]= $value; 
	}
	//更多
	$sql = "SELECT id,gmname,gmlogo,gmmb,gmbq,gmjj FROM gmlist where gmlx='2' order by times desc limit 4"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$morelist[]= $value; 
	}
	$arr = array('lbt'=>$lblist,'jp'=>$jplist,'more'=>$morelist);
	echo json_encode($arr);
	mysqli_close($mysqli);
	}
}


if($op=='openallgm'){ //全部游戏
	if(GET('allgm')=='go'){ 
		$pagesize=4;
		$sql = "select id from gmlist where gmlx='2'"; 
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
		$total = $pagecount; 
		$pagenum = $total ;
		$sql = "SELECT id,gmname,gmlogo,gmmb,gmbq,gmjj FROM gmlist where gmlx='2' order by times desc limit $startno,$pagesize"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$alllist[]= $value; 
		}
		$arr = array('allgm'=>$alllist,'pagecount'=>$pagecount);
		echo json_encode($arr);
		mysqli_close($mysqli);
	}
}

?>
