<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'game_id';
if($op=='game_id'){
	$id =trim($_GET['id']);
	if(is_numeric($id)){
		$sql = "SELECT id,gmname,gmlogo,gmbq,gmdow,gmjj,gmjs,gmtuid,gmlx,Android,ios FROM gmlist where id='".$id."' limit 1"; 
		$result = mysqli_query($mysqli,$sql);
		$appinfo = mysqli_fetch_assoc($result);
		$cgid = $appinfo['id'];
		$sql = "UPDATE gmlist set gmdj=gmdj+1 where id='".$cgid."' limit 1"; //查看数
		//截图
		$sql = "SELECT imgs FROM gmimg where cpid='".$appinfo['gmtuid']."' "; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){ 
			$imgss[] = $value;
		}
		
		if(strstr($_SERVER['HTTP_USER_AGENT'],"Adr")||strstr(strtolower($_SERVER['HTTP_USER_AGENT']),"android")){
			$appdow = $appinfo['Android'];
		}elseif(strstr($_SERVER['HTTP_USER_AGENT'],"iPh")||strstr(strtolower($_SERVER['HTTP_USER_AGENT']),"iphone")){
			$appdow = $appinfo['ios'];
		}else{
			$appdow = $appinfo['Android'];
		}
		
		
		mysqli_query($mysqli,$sql);
		
		$tanchao->Template($to);
	}
}