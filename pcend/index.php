<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'list';
if($op=='list'){
	//轮播图
	$sql = "SELECT id,gmname,gmpclbt FROM gmlist where  pid!='0'  order by pid asc limit 4"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$sylbt[]= $value; 
	}
	
	//热门游戏
	$sql = "SELECT id,gmname,gmlogo,gmjj,gmpclbt FROM gmlist where gmlx='1' order by gmdow desc limit 6"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$hotlist[]= $value; 
	}
	//开服
	$dtims = date('Y-m-d 23:59:59');
	$sql = "SELECT id,gmname,kftimes,xfname,gid,gmlogo FROM xflist where gmlx='1' and kftimes<'".$dtims."' order by kftimes desc limit 6"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$kflist[]= $value; 
	}
	//游戏资讯推荐
	$sql = "SELECT id,zxname FROM newslist where sftj='推荐' and zxlb LIKE '%资讯%' order by times desc limit 1"; 
	$result = mysqli_query($mysqli,$sql);
	$tjnews = mysqli_fetch_assoc($result);
	//游戏资讯
	$sql = "SELECT id,zxname,zxlogo,zxjj FROM newslist where zxlb LIKE '%资讯%' order by times desc limit 13"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$news[]= $value; 
	}
	//精品游戏
	$sql = "SELECT id,gmname,gmlogo,gmjj,gmpclbt FROM gmlist where gmlx='1' order by gmpf desc limit 18"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$jplist[]= $value; 
	}
	
	// 热门活动 
	$sql = "SELECT id,zxlogo,zxname,gmname FROM newslist where zxlb='活动' and zxlogo!='' order by times desc limit 4"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$rmnew[]= $value; 
	}
	
	//游戏视频
	$sql = "SELECT id,zxname,zxlogo,zxjj,spurl FROM newslist where spurl!='' and zxlb LIKE '%视频%' order by times desc limit 8"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$newgmvd[]= $value; 
	}
	
	
	//热门榜单
	$sql = "SELECT id,gmlogo,gmname,gmbq FROM gmlist where gmlx='1' order by gmdj desc limit 10"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
	    $hotgmbd[]= $value; 
	}
	
	//新游榜单
	$sql = "SELECT id,gmlogo,gmname,gmbq FROM gmlist where gmlx='1' order by gmpf desc limit 10"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
	    $newdowlb[]= $value; 
	}
	//下载榜单
	$sql = "SELECT id,gmlogo,gmname,gmbq FROM gmlist where id order by gmdow desc limit 10"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
	    $gmdowlb[]= $value; 
	}
	mysqli_close($mysqli);

}

//---------------SEO-----------------//
$config['sy_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_title']);
$config['sy_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_keyword']);
$config['sy_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_description']);
//---------------SEO-----------------//
$tanchao->Template('index');