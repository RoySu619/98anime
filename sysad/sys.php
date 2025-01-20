<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}

$op= $_GET['op'] ? $_GET['op'] :'sys';
if($op=='config'){
	$yxzdtm = get_cfg_var("max_execution_time")."秒 ";//最大执行时间
	$zdupxz = get_cfg_var ("upload_max_filesize")?get_cfg_var ("upload_max_filesize"):"不允许";//最大上传限制
	$Zend = Zend_Version();//获取Zend版本
	$phpbb = PHP_VERSION;//php版本
	$fwqsys = php_uname();//服务器系统
	$fwqbb = php_uname('s').php_uname('r');//服务器版本 
	$syss= $_SERVER['SERVER_SOFTWARE'];//服务器运行环境
	$yxfs= php_sapi_name();//PHP运行方式
	$dates= date('Y-m-d H:i:s');//服务器当前时间
	$opcache= '已开启opcache';//opcache
	//-------------------------------------------------

	$sql = "SELECT COUNT(1) AS Znumber FROM user"; 
	$result = mysqli_query($mysqli,$sql);
	$usnum = mysqli_fetch_assoc($result);

	$aatm = date('Y-m-d 23:59:59');
	$bbtm = date('Y-m-d 00:00:00', strtotime("-3 day"));
	$sql = "SELECT COUNT(1) AS Znumber FROM user where sctime BETWEEN '".$bbtm."' and '".$aatm."'"; 
	$result = mysqli_query($mysqli,$sql);
	$ushy = mysqli_fetch_assoc($result);

	$sql = "SELECT COUNT(1) AS Znumber FROM newslist"; 
	$result = mysqli_query($mysqli,$sql);
	$ltnum = mysqli_fetch_assoc($result);
	//---------------------帖子总数----------------------------
	$ztaatm = date('Y-m-d 00:00:00', strtotime("-1 day"));//昨天开始
	$ztbbtm = date('Y-m-d 23:59:59', strtotime("-1 day"));//昨天结束
	$bzaatm = date('Y-m-d 00:00:00', (time() - ((date('w') == 0 ? 7 : date('w')) - 1) * 24 * 3600));//本周开始
	$bzbbtm = date('Y-m-d 23:59:59');//本周结束
	$byaatm = date('Y-m-d 00:00:00', strtotime(date('Y-m', time()) . '-01 00:00:00'));//本月开始
	$bybbtm = date('Y-m-d 23:59:59');//本月结束
	$syaatm = date('Y-m-0 00:00:00', strtotime("-1 month"));//上月开始
	$sybbtm = date('Y-m-31 23:59:59', strtotime("-1 month"));//上月结束



	$tanchao->Template('sys_'.$op);
}

if($op=='sys'){//基本设置
	if($G_uid){
		if($_POST['tsubmit']){
		include_once("upimg.php");
		if($uplogo!=''){
		   $logo="wzlogo='".$uplogo."',";
		}
		if($upico!=''){
		   $ioc="wzico='".$upico."',";
		}
		if($upewm!=''){
		   $wxewm="wzwxewm='".$upewm."',";
		}
		$name = $_POST['wname'];
		$urls = $_POST['wurl'];
		$wqq1 = $_POST['wqq1'];
		$wqq2 = $_POST['wqq2'];
		$wqq3 = $_POST['wqq3'];
		$whzq = $_POST['whzq'];
		$wtel = $_POST['wtel'];
		$qun1 = $_POST['qun1'];
		$qun2 = $_POST['qun2'];
		$footinf = $_POST['footinf'];
		$keyword = $_POST['keyword'];
		$description = $_POST['description'];
		$sql = "Update config set $logo $ioc $wxewm wzname='".$name."',wzurl='".$urls."',wzkf1='".$wqq1."',wzkf2='".$wqq2."',wzkf3='".$wqq3."',wzhzqq='".$whzq."',wztel='".$wtel."',qunhao1='".$qun1."',qunhao2='".$qun2."',footinfos='".$footinf."' where id='1' "; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		echo "<script>location.href='sysadmin.php?to=sys';</script>";
		}
	}
	$tanchao->Template('sys_'.$op);
}
if($op=='sys_seo'){//关键词
	if($G_uid){
		if($_POST['tsubmit']){
		$sy_titlea = $_POST['sy_titles'];
		$sy_keyworda = $_POST['sy_keywords'];
		$sy_descriptiona = $_POST['sy_descriptions'];
		
		$gm_titlea = $_POST['gm_titles'];
		$gm_keyworda = $_POST['gm_keywords'];
		$gm_descriptiona = $_POST['gm_descriptions'];
		
		$gmxx_titlea = $_POST['gmxx_titles'];
		$gmxx_keyworda = $_POST['gmxx_keywords'];
		$gmxx_descriptiona = $_POST['gmxx_descriptions'];
		
		$newgm_titlea = $_POST['newgm_titles'];
		$newgm_keyworda = $_POST['newgm_keywords'];
		$newgm_descriptiona = $_POST['newgm_descriptions'];
		
		$gmkf_titlea = $_POST['gmkf_titles'];
		$gmkf_keyworda = $_POST['gmkf_keywords'];
		$gmkf_descriptiona = $_POST['gmkf_descriptions'];
		
		$gmlb_titlea = $_POST['gmlb_titles'];
		$gmlb_keyworda = $_POST['gmlb_keywords'];
		$gmlb_descriptiona = $_POST['gmlb_descriptions'];
		
		$lbxx_titlea = $_POST['lbxx_titles'];
		$lbxx_keyworda = $_POST['lbxx_keywords'];
		$lbxx_descriptiona = $_POST['lbxx_descriptions'];
		
		$hotgm_titlea = $_POST['hotgm_titles'];
		$hotgm_keyworda = $_POST['hotgm_keywords'];
		$hotgm_descriptiona = $_POST['hotgm_descriptions'];
		
		$news_titlea = $_POST['news_titles'];
		$news_keyworda = $_POST['news_keywords'];
		$news_descriptiona = $_POST['news_descriptions'];
		
		$newsxx_titlea = $_POST['newsxx_titles'];
		$newsxx_keyworda = $_POST['newsxx_keywords'];
		$newsxx_descriptiona = $_POST['newsxx_descriptions'];
		
		$activity_titlea = $_POST['activity_titles'];
		$activity_keyworda = $_POST['activity_keywords'];
		$activity_descriptiona = $_POST['activity_descriptions'];
		
		$activityxx_titlea = $_POST['activityxx_titles'];
		$activityxx_keyworda = $_POST['activityxx_keywords'];
		$activityxx_descriptiona = $_POST['activityxx_descriptions'];

		$forum_titlea = $_POST['forum_titles'];
		$forum_keyworda = $_POST['forum_keywords'];
		$forum_descriptiona = $_POST['forum_descriptions'];
		
		$forumxx_titlea = $_POST['forumxx_titles'];
		$forumxx_keyworda = $_POST['forumxx_keywords'];
		$forumxx_descriptiona = $_POST['forumxx_descriptions'];

		$video_titlea = $_POST['video_titles'];
		$video_keyworda = $_POST['video_keywords'];
		$video_descriptiona = $_POST['video_descriptions'];
		$sql = "Update config set sy_title='".$sy_titlea."',sy_keyword='".$sy_keyworda."',sy_description='".$sy_descriptiona."',gm_title='".$gm_titlea."',gm_keyword='".$gm_keyworda."',gm_description='".$gm_descriptiona."' ,gmxx_title='".$gmxx_titlea."',gmxx_keyword='".$gmxx_keyworda."',gmxx_description='".$gmxx_descriptiona."' ,newgm_title='".$newgm_titlea."',newgm_keyword='".$newgm_keyworda."',newgm_description='".$newgm_descriptiona."' ,gmkf_title='".$gmkf_titlea."',gmkf_keyword='".$gmkf_keyworda."',gmkf_description='".$gmkf_descriptiona."' ,gmlb_title='".$gmlb_titlea."',gmlb_keyword='".$gmlb_keyworda."',gmlb_description='".$gmlb_descriptiona."' ,lbxx_title='".$lbxx_titlea."',lbxx_keyword='".$lbxx_keyworda."',lbxx_description='".$lbxx_descriptiona."' ,hotgm_title='".$hotgm_titlea."',hotgm_keyword='".$hotgm_keyworda."',hotgm_description='".$hotgm_descriptiona."' ,news_title='".$news_titlea."',news_keyword='".$news_keyworda."',news_description='".$news_descriptiona."' ,newsxx_title='".$newsxx_titlea."',newsxx_keyword='".$newsxx_keyworda."',newsxx_description='".$newsxx_descriptiona."',activity_title='".$activity_titlea."',activity_keyword='".$activity_keyworda."',activity_description='".$activity_descriptiona."',activityxx_title='".$activityxx_titlea."',activityxx_keyword='".$activityxx_keyworda."',activityxx_description='".$activityxx_descriptiona."',forum_title='".$forum_titlea."',forum_keyword='".$forum_keyworda."',forum_description='".$forum_descriptiona."',forumxx_title='".$forumxx_titlea."',forumxx_keyword='".$forumxx_keyworda."',forumxx_description='".$forumxx_descriptiona."',video_title='".$video_titlea."',video_keyword='".$video_keyworda."',video_description='".$video_descriptiona."' where id='1' "; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		echo "<script>alert('添加成功');location.href='sysadmin.php?to=sys&op=sys_seo';</script>";
		}
	}
	$tanchao->Template($op);
}

if($op=='yq'){//友情链接
	if($G_uid){
		$youqings = $_POST['sys_yq'];
		if($youqings){
			$sql = "Update config set youqing='".$youqings."' where id='1'"; 
			mysqli_query($mysqli,$sql);
			mysqli_close($mysqli);
			echo "<script>alert('添加友情链接成功！');location.href='sysadmin.php?to=sys&op=yq';</script>";
		}
	}
	$tanchao->Template('sys_'.$op);
}

if($op=='appopen'){//APP启动图
	$sql="SELECT id,imgurl,urls,sfxs,imgtp from appopen where id order by id asc limit 0,4"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$data_appopen[]= $value; 
	}
	mysqli_close($mysqli);
	$tanchao->Template('sys_'.$op);
}
//提交启动APP广告图
if($op=='tupian_appopen'){
	if($G_uid){
		if(POST('lbtimg')=='go'){
			$imgs = POSTIMG('img');
			$imgids = POSTML('imgid');
			if($imgs){
				$sql = "Update `appopen` set `imgurl`='".$imgs."' where `id`='".$imgids."'"; 
				mysqli_query($mysqli,$sql);
				mysqli_close($mysqli);
				$ret ='1';
				echo json_encode($ret);
			}
		}
	}
}
//修改APP启动广告游戏ID
if($op=='tjgmid_appopen'){
	if($G_uid){
		if(POST('tjid')=='go'){
			$id =POST('id');
			$ur =POST('xurls');
			if($id && $ur){
				$sql = "Update appopen set urls='".$ur."' where id='".$id."'"; 
				mysqli_query($mysqli,$sql);
				mysqli_close($mysqli);
				$ret[] ='1';
				echo json_encode($ret);
			}else{
				$ret[] ='2';
				echo json_encode($ret);	
			}
		}
	}
}
if($op=='gg'){
	$sql = "SELECT id,ggtp,times FROM gg where id order by id desc limit 5"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$gglist[]= $value; 
	}
	mysqli_close($mysqli);
	$tanchao->Template('sys_'.$op);
}
if($op=='gg-con'){
	if($G_uid){
		if($_POST['fbgg']=='go'){
			if($_POST['ggnr']!=''){ 
				$gnr = $_POST['ggnr'];
				$ggtits = $_POST['ggtit'];
				$dqtm = date('Y-m-d H:i');
				$sql = "insert into gg set ggtp='".$ggtits."',mygg='".$gnr."',gglx=1,times='".$dqtm."'"; 
				mysqli_query($mysqli,$sql);
				$jieguo = 1;
				echo json_encode($jieguo);
				mysqli_close($mysqli);
				echo "<script>alert('发表成功！');location.href='sysadmin.php?to=sys&op=gg';</script>";
			}
		}
	}
	$tanchao->Template('sys_'.$op);
}

if($op=='gg-xg'){
	if($G_uid){
		$id = $_GET['ggid'];
		$sql = "SELECT * FROM gg where id='".$id."' limit 1"; 
		$result = mysqli_query($mysqli,$sql);
		$ggxx = mysqli_fetch_assoc($result);
		if($_POST['xggg']=='go'){
			if($_POST['ggnr']!=''){ 
				$gnr = $_POST['ggnr'];
				$ggtits = $_POST['ggtit'];
				$ggid = $_POST['ggid'];
				$sql = "Update gg set ggtp='".$ggtits."',mygg='".$gnr."' where id='".$id."'"; 
				mysqli_query($mysqli,$sql);
				echo "<script>alert('修改成功！');location.href='sysadmin.php?to=sys&op=gg';</script>";
			}
		}
		mysqli_close($mysqli);
	}
	$tanchao->Template('sys_'.$op);
}

if($op=='gg-del'){
	if($G_uid){
		$gid = $_GET['ggid'];
		$sql = "DELETE FROM gg where id='".$gid."' "; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		echo "<script>alert('删除成功！');location.href='sysadmin.php?to=sys&op=gg';</script>";
	}

}