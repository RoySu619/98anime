<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'index';
if($op=='index'){
	if(GET('topgm')=='go'){
	$sql = "SELECT id,gmapplbt FROM gmlist where gmlx='1' and gmsy='1' and pid!='0' order by pid limit 4"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$lblist[]= $value; 
	}
	//热门游戏
	$sqls ="SELECT id,gmlogo,gmapplbt,gmname,gmbq,gmjj FROM gmlist where gmlx='1' ORDER BY  RAND() LIMIT 4";
	$result = mysqli_query($mysqli,$sqls);
	while($value = mysqli_fetch_assoc($result)){
		$hotlist[]= $value; 
	}
	//精品推荐
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
	$arr = array('lbt'=>$lblist,'hotgm'=>$hotlist,'jp'=>$jplist,'hy'=>$hylist,'ne'=>$nuplist);
	echo json_encode($arr);
	mysqli_close($mysqli);
	}
}


if($op=='openallgm'){ //全部游戏
	if(GET('allgm')=='go'){ 
		$pagesize=4;
		$sql = "select id from gmlist where gmlx='1'"; 
		$rs=mysqli_query($mysqli,$sql);
		$recordcount=mysqli_num_rows($rs); 
		$pagecount=($recordcount-1)/$pagesize+1;
		$pagecount=(int)$pagecount;
		if(GET('pages')==""){ 
			$pages=1;
		}else{
			$pages=GET("pages");
		}
		$startno=($pages-1)*$pagesize;
		$total = $pagecount; 
		$pagenum = $total ;
		$sql = "SELECT id,gmname,gmlogo,gmapplbt,gmmb,gmbq,gmjj FROM gmlist where gmlx='1' order by times desc limit $startno,$pagesize"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$alllist[]= $value; 
		}
		$arr = array('allgm'=>$alllist,'pagecount'=>$pagecount);
		echo json_encode($arr);
		mysqli_close($mysqli);
	}
}

if($op=='synews'){ //资讯
	if(GET('opnews')=='go'){ 
		//news轮播图
		$sql = "SELECT id,zxlogo FROM newslist where sftj='推荐' and zxlogo!='' order by times desc limit 3"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$lblist[]= $value; 
		}

		//资讯
		$sql = "SELECT id,zxlogo,zxname,times FROM newslist where zxlb='资讯' order by times desc limit 3"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$nelist[]= $value; 
		}
		//资讯视频
		$sql = "SELECT id,zxlogo,zxname,times,spurl FROM newslist where zxlb='资讯' and spurl!='' order by times desc limit 1"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$nesplists[]= $value; 
		}
		if($nesplists){//缺省
			$nesplist=$nesplists;
		}else{
			$sql = "SELECT id,zxlogo,zxname,times FROM newslist where zxlb='资讯' and sftj='推荐' order by zxllcs desc limit 1"; 
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){
				$qnelist[]= $value; 
			}
			$nesplist = $qnelist;
		}
		
		//活动
		$sql = "SELECT id,zxlogo,zxname,times FROM newslist where zxlb='活动' order by times desc limit 3"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$hdlist[]= $value; 
		}
		//活动视频
		$sql = "SELECT id,zxlogo,zxname,times,spurl FROM newslist where zxlb='活动' and spurl!='' order by times desc limit 1"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$hdsplists[]= $value; 
		}
		if($hdsplists){//缺省
			$hdsplist=$hdsplists;
		}else{
			$sql = "SELECT id,zxlogo,zxname,times FROM newslist where zxlb='活动' and sftj='推荐' order by zxllcs desc limit 1"; 
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){
				$qhdlist[]= $value; 
			}
			$hdsplist = $qhdlist;
		}
		
		
		//攻略
		$sql = "SELECT id,zxlogo,zxname,times FROM newslist where zxlb='攻略' order by times desc limit 3"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$gllist[]= $value; 
		}
		//攻略视频
		$sql = "SELECT id,zxlogo,zxname,times,spurl FROM newslist where zxlb='攻略' and spurl!='' order by times desc limit 1"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$glsplist[]= $value; 
		}
		
		
		
		$arr = array('nelbt'=>$lblist,'newslist'=>$nelist,'newssp'=>$nesplist,'hdlist'=>$hdlist,'hdsplist'=>$hdsplist,'gllist'=>$gllist,'glsplist'=>$glsplist);
		echo json_encode($arr);
		mysqli_close($mysqli);
	}
}
?>
