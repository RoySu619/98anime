<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'game';
if($op=='game'){
	//游戏标签
	$sql = "SELECT id,bqname FROM gmbq where id order by id desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($values = mysqli_fetch_assoc($result)){
		$gmbqlist[]= $values; 
	}
	$get_types = GET('b') ? GET('b') : '1';//游戏标签
	if($get_types!='1'){
		$get_type = "and gmbq LIKE '%".$get_types."%'";
	}
	$pagesize=15;
	$sql = "select id from gmlist where gmlx='1' $get_type"; 
	$rs=mysqli_query($mysqli,$sql);
	$recordcount=mysqli_num_rows($rs); 
	$pagecount=($recordcount-1)/$pagesize+1;
	$pagecount=(int)$pagecount;
	$sql = "SELECT id,gmname,gmlogo,gmbq,gmjj,gmlx FROM gmlist where gmlx='1' $get_type order by times desc limit 0,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$gmlist[]= $value; 
	}
	$tanchao->Template($to);
}
if($op=='getmore'){
	$g = GET('gm');
	if($g=='go'){
		$get_types = GET('b') ? GET('b') : '1';
		if($get_types!='1'){
			$get_type = "and gmbq LIKE '%".$get_types."%'";
		}
		$pagesize=15;
		$sql = "select id from gmlist where gmlx='1' $get_type"; 
		$rs=mysqli_query($mysqli,$sql);
		$recordcount=mysqli_num_rows($rs); 
		$pagecount=($recordcount-1)/$pagesize+1;
		$pagecount=(int)$pagecount;
		if(is_numeric(GET('pages'))==""){ 
			$pages=1;
		}else{
			$pages=trim(GET("pages"));
		}
		$startno=($pages-1)*$pagesize;
		$sql = "SELECT id,gmname,gmlogo,gmbq,gmjj,gmlx FROM gmlist where gmlx='1' $get_type order by times desc limit $startno,$pagesize"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$gmlist[]= $value; 
		}
		$arr = $gmlist;
		echo json_encode($arr);
	}
}