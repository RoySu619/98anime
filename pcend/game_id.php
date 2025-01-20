<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'game_id';
if($op=='game_id'){
	$gid = trim($_GET['id']);
	if(is_numeric($gid)){
	$sql = "SELECT id,gmname,gmlogo,gmmb,gmbq,Android,ios,gmjj,gmjs,gmtuid,gmpclbt,gmdow FROM gmlist where id='".$gid."' limit 1 "; 
	$result = mysqli_query($mysqli,$sql);
	$appinfo = mysqli_fetch_assoc($result);
	$cgid = $appinfo['id'];
	if(!$cgid){header("location:/");die;}
	$cgmname = $appinfo['gmname'];
	$sql = "UPDATE gmlist set gmdj=gmdj+1 where id='".$cgid."' limit 1"; //查看数
	mysqli_query($mysqli,$sql);
	//-------------
	
	//热门资讯
	$sql = "SELECT id,zxlogo,zxname FROM newslist where zxlb like '%资讯%'  order by times desc limit 3"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$zxlist[]= $value; 
	}
	//热门视频
	$sql = "SELECT id,zxlogo,zxname,zxjj FROM newslist where zxlb like '%视频%'  order by times desc limit 2"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$splist[]= $value; 
	}
	//攻略
	$sql = "SELECT id,zxlb,zxname,times FROM newslist where zxlb like '%攻略%' and gid='".$cgid."' order by times desc limit 7"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$gllist[]= $value; 
	}
	//截图
	$sql = "SELECT imgs FROM gmimg where cpid='".$appinfo['gmtuid']."' "; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$imgss[] = $value;
	}
	//游戏资讯
	$sql = "SELECT id,zxlogo,zxname,zxjj FROM newslist where zxlb like '%资讯%' and gid='".$cgid."' order by times desc limit 30"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$gmzxlist[]= $value; 
	}
	
	//游戏攻略
	$sql = "SELECT id,zxlogo,zxname,zxjj FROM newslist where zxlb like '%攻略%' and gid='".$cgid."' order by times desc limit 30"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$gmgllist[]= $value; 
	}
	//游戏活动
	$sql = "SELECT id,zxlogo,zxname,zxjj FROM newslist where zxlb like '%活动%' and gid='".$cgid."' order by times desc limit 30"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$gmhdlist[]= $value; 
	}
	
	//游戏礼包
	$sql = "SELECT id,gmname,lbname,lblogo,lbjj,lbsy,lbxt,lbzs FROM lblist where gid='".$cgid."' order by id desc limit 10"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
	    $lblb[]= $value; 
	}
	mysqli_close($mysqli);
	//---------------SEO-----------------//
	$config['gmxx_title'] = str_replace(["%getgmname%","%getwebname%","%getweburl%"],[$appinfo['gmname'],$config['wzname'],$config['wzurl']], $config['gmxx_title']);
	$config['gmxx_keyword'] = str_replace(["%getgmname%","%getwebname%","%getweburl%"],[$appinfo['gmname'],$config['wzname'],$config['wzurl']], $config['gmxx_keyword']);
	$config['gmxx_description'] = str_replace(["%getgmname%","%getexplain%","%getwebname%","%getweburl%"],[$appinfo['gmname'],$appinfo['gmjj'],$config['wzname'],$config['wzurl']], $config['gmxx_description']);
	//---------------SEO-----------------//
	$tanchao->Template($op);
	}else{
		header("location:/");
	}

}




