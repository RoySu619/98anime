<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'news_id';
if($op=='news_id'){
	$nid= trim($_GET['id']);
	if(is_numeric($nid)){
	$sql = "SELECT id,zxname,zxlogo,zxnr,times,usnick,gid,spurl,zxjj,zxlb,zxllcs FROM newslist where id='".$nid."'  limit 1"; 
	$result = mysqli_query($mysqli,$sql);
	$newsxx = mysqli_fetch_assoc($result);
	if(!$newsxx){header("location:/");die;}
	$newsxx['zxnr'] = str_replace("&lt;","<",$newsxx['zxnr']);
	$newsxx['zxnr'] = str_replace('&gt;','>', $newsxx['zxnr']);
	$newsxx['zxnr'] = str_replace('&#39;','"', $newsxx['zxnr']);
	$newsxx['zxnr'] = str_replace('&quot;','', $newsxx['zxnr']);

	
	$newsgm= $newsxx['gid'];
	$sql = "UPDATE newslist set zxllcs=zxllcs+1 where id='".$nid."'"; //查看数
	mysqli_query($mysqli,$sql);
	$sql = "SELECT id,gmname,gmlogo,gmmb,gmjj,gmbq,gmczhd FROM gmlist where id='".$newsgm."' limit 1"; 
	$result = mysqli_query($mysqli,$sql);
	$newsgm = mysqli_fetch_assoc($result);
	
	//热门资讯
	$sql = "SELECT id,zxname,zxlogo FROM newslist where spurl!='' order by zxllcs desc limit 5"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
	    $hotnewlb[]= $value; 
	}

	mysqli_close($mysqli);
	}else{
		header("location:/");
	}
}
//---------------SEO-----------------//
$config['newsxx_title'] = str_replace(["%getwebname%","%getweburl%","%getnewsname%","%getgmname%"],[$config['wzname'],$config['wzurl'],$newsxx['zxname'],$newsgm['gmname']], $config['newsxx_title']);
$config['newsxx_keyword'] = str_replace(["%getwebname%","%getweburl%","%getnewsname%","%getgmname%"],[$config['wzname'],$config['wzurl'],$newsxx['zxname'],$newsgm['gmname']], $config['newsxx_keyword']);
$config['newsxx_description'] = str_replace(["%getwebname%","%getweburl%","%getexplain%","%getgmname%"],[$config['wzname'],$config['wzurl'],$newsxx['zxjj'],$newsgm['gmname']], $config['newsxx_description']);
//---------------SEO-----------------//
$tanchao->Template($op);