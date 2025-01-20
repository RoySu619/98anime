<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'libao';
if($op=='libao'){
	$pagesize=15;
	$sql = "select id from lblist"; 
	$rs=mysqli_query($mysqli,$sql);
	$recordcount=mysqli_num_rows($rs); 
	$pagecount=($recordcount-1)/$pagesize+1;
	$pagecount=(int)$pagecount;
	$sql = "SELECT id,lbname,gmname,lblogo,lbjj,lbsy,lbxt FROM lblist where id order by id desc limit 15"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$lblist[]= $value; 
	}
	mysqli_close($mysqli);
	//---------------SEO-----------------//
	$config['gmlb_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gmlb_title']);
	$config['gmlb_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gmlb_keyword']);
	$config['gmlb_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gmlb_description']);
	//---------------SEO-----------------//
	$tanchao->Template($to);
}
if($op=='getmore'){
	$lb = trim(GET('libao'));
	if($lb=='go'){
		$pagesize=15;
			$sql = "select id from lblist"; 
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
			$sql = "SELECT id,lbname,gmname,lblogo,lbjj,lbsy,lbxt FROM lblist where id order by id desc limit $startno,$pagesize";
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){
				$solist[]= $value; 
			}
			mysqli_close($mysqli);
			$arr = $solist;
			echo json_encode($arr);
	}
}