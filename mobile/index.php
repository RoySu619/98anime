<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'index';
if($op=='index'){
	//轮播图
	$sql = "SELECT id,gmapplbt FROM gmlist where gmlx='1' and gmsy='1' and pid!='0' order by pid limit 4"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$sylbt[]= $value; 
	}
	//热门游戏
	$sqls ="SELECT id,gmlogo,gmapplbt,gmname,gmbq,gmjj FROM gmlist where gmlx='1'ORDER BY  RAND() LIMIT 4";
	$result = mysqli_query($mysqli,$sqls);
	while($value = mysqli_fetch_assoc($result)){
		$hotlist[]= $value; 
	}
	//精品游戏
	$sql = "SELECT id,gmlogo,gmapplbt,gmname,gmbq,gmjj FROM gmlist where gmtj='1' order by gmdow desc limit 4"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$jplist[]= $value; 
	}
	//欢迎推荐
	$sql = "SELECT id,gmlogo,gmapplbt,gmname,gmbq,gmjj FROM gmlist where gmlx='1' order by gmdj desc limit 4"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$hylist[]= $value; 
	}
	//新上游戏
	$sql = "SELECT id,gmlogo,gmapplbt,gmname,gmbq,gmjj FROM gmlist where gmlx='1' order by times desc limit 4"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$nuplist[]= $value; 
	}

	
}
$tanchao->Template($to);