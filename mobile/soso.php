<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'soso';
if($op=='soso'){
	$soname = GET('keyboard');
	$sotype = GET('ty') ? GET('ty') : '1';//1游戏 2礼包 3活动 4新服 5资讯
	if($soname){
		if($sotype=='1'){
			$pagesize=15;
			$sql = "select id from gmlist where gmname LIKE '%$soname%' "; 
			$rs=mysqli_query($mysqli,$sql);
			$recordcount=mysqli_num_rows($rs); 
			$pagecount=($recordcount-1)/$pagesize+1;
			$pagecount=(int)$pagecount;
			$sql = "SELECT id,gmname,gmlogo,gmbq,gmjj FROM gmlist where gmname LIKE '%$soname%' order by id desc limit 15"; 
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){
				$solist[]= $value; 
			}
			mysqli_close($mysqli);
		}
		
		if($sotype=='2'){
			$pagesize=15;
			$sql = "select id from lblist where gmname LIKE '%$soname%' "; 
			$rs=mysqli_query($mysqli,$sql);
			$recordcount=mysqli_num_rows($rs); 
			$pagecount=($recordcount-1)/$pagesize+1;
			$pagecount=(int)$pagecount;
			$sql = "SELECT id,lbname,gmname,lblogo,lbjj,lbsy FROM lblist where gmname LIKE '%$soname%' order by id desc limit 15"; 
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){
				$solist[]= $value; 
			}
			mysqli_close($mysqli);
		}
	}
	
	
	
	//---------------SEO-----------------//
	$config['sy_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_title']);
	$config['sy_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_keyword']);
	$config['sy_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_description']);
	//---------------SEO-----------------//
	$tanchao->Template($op);
}
if($op=='sosoname'){
	$soname = trim(GET('keyboard'));
	$sotype = trim(GET('ty'));
	if($soname){
		if($sotype=='1'){
			$pagesize=15;
			$sql = "select id from gmlist where gmname LIKE '%$soname%' "; 
			$rs=mysqli_query($mysqli,$sql);
			$recordcount=mysqli_num_rows($rs); 
			$pagecount=($recordcount-1)/$pagesize+1;
			$pagecount=(int)$pagecount;
			if(GET("pages")==""){ 
				$pages=1;
			}else{
				$pages=trim(GET("pages"));
			}
			$startno=($pages-1)*$pagesize;
			$pagenum = $pagecount; 
			$sql = "SELECT id,gmname,gmlogo,gmbq,gmbb,gmmb,gmdow,ios,Android FROM gmlist where gmname LIKE '%$soname%' order by id desc limit $startno,$pagesize"; 
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){
				$solist[]= $value; 
			}
			mysqli_close($mysqli);
			$arr = $solist;
			echo json_encode($arr);
		}
		
		if($sotype=='2'){
			$pagesize=15;
			$sql = "select id from lblist where gmname LIKE '%$soname%' "; 
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
			$sql = "SELECT id,lbname,gmname,lblogo,lbjj,lbsy,lbxt FROM lblist where gmname LIKE '%$soname%' order by id desc limit $startno,$pagesize";
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){
				$solist[]= $value; 
			}
			mysqli_close($mysqli);
			$arr = $solist;
			echo json_encode($arr);
		}
		if($sotype=='3'){
			$pagesize=15;
			$sql = "select id from newslist where gmname LIKE '%$soname%' "; 
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
			$sql = "SELECT id,zxname,zxlogo,zxjj,times FROM newslist where gmname LIKE '%$soname%' order by id desc limit $startno,$pagesize";
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){
				$solist[]= $value; 
			}
			mysqli_close($mysqli);
			$arr = $solist;
			echo json_encode($arr);
		}
		if($sotype=='4'){
			$pagesize=15;
			$sql = "select id from xflist where gmname LIKE '%$soname%' "; 
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
			$sql = "SELECT id,gid,gmname,gmlogo,xfname,kftimes FROM xflist where gmname LIKE '%$soname%' order by id desc limit $startno,$pagesize";
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){
				$solist[]= $value; 
			}
			mysqli_close($mysqli);
			$arr = $solist;
			echo json_encode($arr);
		}
		if($sotype=='5'){
			$pagesize=5;
			$sql = "select id from newslist where gmname LIKE '%$soname%' "; 
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
			$sql = "SELECT id,zxname,zxlogo,zxjj,times FROM newslist where gmname LIKE '%$soname%' order by id desc limit $startno,$pagesize";
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){
				$solist[]= $value; 
			}
			mysqli_close($mysqli);
			$arr = $solist;
			echo json_encode($arr);
		}
	}
	
}	
	




