<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'activity';
if($op=='activity'){
	$gmfl = GET('type') ? GET('type') :'new';
	$sort = GET('sort') ? GET('sort') :'new';
	if($gmfl=='new'){
		$where='zxlb LIKE "%活动%" and zxlb!="视频" ';
	}
	if($gmfl=='gl'){
		$where='zxlb LIKE "%攻略%" and zxlb!="视频" ';
	}
	if($sort=='new'){
		$sorts='order by times desc limit';
	}
	if($sort=='hot'){
		$sorts=' order by zxllcs desc limit';
	}
	if($gmfl){
		$pagesize=10;
		$sql = "select id from newslist where $where"; 
		$rs=mysqli_query($mysqli,$sql);
		$recordcount=mysqli_num_rows($rs); 
		$pagecount=($recordcount-1)/$pagesize+1;
		$pagecount=(int)$pagecount;
		if(is_numeric($_GET['pages'])==""){ 
			$pages=1;
		}else{
			$pages=trim($_GET["pages"]);
		}
		$startno=($pages-1)*$pagesize;
		if($pagecount==''){
			$pagenum = '1';
		}else{
			$pagenum = $pagecount;
		}
		if($pagecount<="1"){
			$pagestrL ='1';
			$pagestrC= '1';
			$pagestrR ='1';
		}else{
			$bothnumleft = 0;//左侧显示几个分页
			$bothnumright = 0; //右侧显示几个分页
			if($pages == 1) {
				$pagestrL ='1';
			} else {
				if($pages>1){
				  $pagestrL= $pages-1;
				}
			}
			for($i=$bothnumleft; $i>=1; $i--) {//已翻页数
				if(($pages - $i) < 1 ) { 
					continue;
				}
				$pagestrL= $pages - $i;
			}

			$pagestrC= $pages;
			
			for($i=1; $i<=$bothnumright; $i++) { 
				if(($pages + $i) > $pagenum) { 
					break;
				}
				$pagestrR= $pages + $i;
			}
			if($pages == $pagenum) {  //最后一页
				$pagestrR= $pagenum;
			} else {
				$pagestrR= $pages + 1;
			}
			
		}
		$sql = "SELECT id,zxlogo,zxname,zxjj,zxlb,times FROM newslist where $where $sorts $startno,$pagesize"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$hdlb[]= $value; 
		}
	}
	//热门资讯
	$sql = "SELECT id,zxname,zxlogo FROM newslist where zxlb LIKE '%资讯%' order by zxllcs desc limit 5"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
	    $hotnewlb[]= $value; 
	}
}
//---------------SEO-----------------//
$config['activity_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']],$config['activity_title']);
$config['activity_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']],$config['activity_keyword']);
$config['activity_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']],$config['activity_description']);
//---------------SEO-----------------//
$tanchao->Template($op);