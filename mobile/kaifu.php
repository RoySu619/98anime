<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'kaifu';
if($op=='kaifu'){
	$open=GET('open') ? GET('open') :'t'; //t 今天 m 明天 l 历史
	if($open=='t'){
		$ktmst = date('Y-m-d 00:00');
		$jtmst = date('Y-m-d 23:59');
		$pagesize=50;
		$sql = "select id from xflist where kftimes between '".$ktmst."' and '".$jtmst."' "; 
		$rs=mysqli_query($mysqli,$sql);
		$recordcount=mysqli_num_rows($rs); 
		$pagecount=($recordcount-1)/$pagesize+1;
		$pagecount=(int)$pagecount;
		$sql = "SELECT id,gid,gmname,gmlogo,xfname,kftimes FROM xflist where id and kftimes between '".$ktmst."' and '".$jtmst."' order by kftimes asc limit 50";
		$result = mysqli_query($mysqli,$sql);	
		while($value = mysqli_fetch_assoc($result)){
			$data[]= $value; 
		}
		mysqli_close($mysqli);
	}
	if($open=='m'){
		$ktmst = date('Y-m-d 00:00',strtotime("+1 day"));
		$jtmst = date('Y-m-d 23:59',strtotime("+1 day"));
		$pagesize=50;
		$sql = "select id from xflist where kftimes between '".$ktmst."' and '".$jtmst."' "; 
		$rs=mysqli_query($mysqli,$sql);
		$recordcount=mysqli_num_rows($rs); 
		$pagecount=($recordcount-1)/$pagesize+1;
		$pagecount=(int)$pagecount;
		$sql = "SELECT id,gid,gmname,gmlogo,xfname,kftimes FROM xflist where id and kftimes between '".$ktmst."' and '".$jtmst."' order by kftimes asc limit 50";
		$result = mysqli_query($mysqli,$sql);	
		while($value = mysqli_fetch_assoc($result)){
			$data[]= $value; 
		}
		mysqli_close($mysqli);
	}
	if($open=='l'){
		$dqtmsy = date('Y-m-d 00:00');
		$pagesize=15;
		$sql = "select id from xflist where kftimes<'".$dqtmsy."' "; 
		$rs=mysqli_query($mysqli,$sql);
		$recordcount=mysqli_num_rows($rs); 
		$pagecount=($recordcount-1)/$pagesize+1;
		$pagecount=(int)$pagecount;
		$sql = "SELECT id,gid,gmname,gmlogo,xfname,kftimes FROM xflist where kftimes<'".$dqtmsy."'  order by kftimes desc limit 15";
		$result = mysqli_query($mysqli,$sql);	
		while($value = mysqli_fetch_assoc($result)){
			$data[]= $value; 
		}
		mysqli_close($mysqli);
	}
	//---------------SEO-----------------//
	$config['gmkf_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gmkf_title']);
	$config['gmkf_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gmkf_keyword']);
	$config['gmkf_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gmkf_description']);
	//---------------SEO-----------------//
	$tanchao->Template($to);
}
if($op=='getmore'){
	$xf = trim(GET('f'));
	if($xf=='go'){
		$dqtmsy = date('Y-m-d 00:00');
		$pagesize=15;
		$sql = "select id,gid,gmname,gmlogo,xfname,kftimes FROM xflist where kftimes<'".$dqtmsy."' "; 
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
		$sql = "SELECT id,gid,gmname,gmlogo,xfname,kftimes FROM xflist where kftimes<'".$dqtmsy."' order by id desc limit $startno,$pagesize";
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$solist[]= $value; 
		}
		mysqli_close($mysqli);
		$arr = $solist;
		echo json_encode($arr);
	}
}