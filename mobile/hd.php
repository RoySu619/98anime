<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'hd';
if($op=='hd'){
	$pagesize=15;
	$sql = "select id from newslist where zxlb='活动' "; 
	$rs=mysqli_query($mysqli,$sql);
	$recordcount=mysqli_num_rows($rs); 
	$pagecount=($recordcount-1)/$pagesize+1;
	$pagecount=(int)$pagecount;
	$sql = "SELECT id,zxname,zxlogo,zxjj,times,usnick FROM newslist where zxlb='活动' order by id desc limit 15"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$hdlist[]= $value; 
	}
	mysqli_close($mysqli);
	//---------------SEO-----------------//
	$config['activity_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']],$config['activity_title']);
	$config['activity_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']],$config['activity_keyword']);
	$config['activity_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']],$config['activity_description']);
	//---------------SEO-----------------//
	$tanchao->Template($to);
}
if($op=='getmore'){
	$hd = trim(GET('h'));
	if($hd=='go'){
		$pagesize=15;
		$sql = "select id from newslist where zxlb='活动' "; 
		$rs=mysqli_query($mysqli,$sql);
		$recordcount=mysqli_num_rows($rs); 
		$pagecount=($recordcount-1)/$pagesize+1;
		$pagecount=(int)$pagecount;
		if(trim(GET("pages"))==""){ 
			$pages=1;
		}else{
			$pages=trim(GET("pages"));
		}
		$startno=($pages-1)*$pagesize;
		$pagenum = $pagecount; 
		$sql = "SELECT id,zxname,zxlogo,zxjj,times FROM newslist where zxlb='活动' order by id desc limit $startno,$pagesize";
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$solist[]= $value; 
		}
		mysqli_close($mysqli);
		$arr = $solist;
		echo json_encode($arr);
	}
}