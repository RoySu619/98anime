<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'news';
if($op=='news'){
	$nefl = GET('type') ? GET('type') :'qb';
	if($nefl=='qb'){
		$where='zxlb LIKE "%资讯%" or zxlb LIKE "%攻略%"';
	}
	if($nefl=='new'){
		$where='zxlb LIKE "%资讯%" and zxlb!="视频" ';
	}
	if($nefl=='gl'){
		$where='zxlb LIKE "%攻略%" and zxlb!="视频" ';
	}
	if($nefl){
		$pagesize=10;
		$sql = "select id from newslist where $where "; 
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
		$sql = "SELECT id,zxlogo,zxname,zxjj,zxlb,times FROM newslist where $where order by zxllcs desc limit $startno,$pagesize"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$newslb[]= $value; 
		}
	}
	//热门资讯
	$sql = "SELECT id,zxname,zxlogo FROM newslist where zxlb LIKE '%资讯%' order by zxllcs desc limit 5"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
	    $hotnewlb[]= $value; 
	}
	//预告视频
	$sql = "SELECT id,zxname,zxlogo,spurl FROM newslist where zxlb LIKE '%视频%' order by zxllcs desc limit 4"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
	    $spnewlb[]= $value; 
	}
}
//---------------SEO-----------------//
$config['news_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['news_title']);
$config['news_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['news_keyword']);
$config['news_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['news_description']);
//---------------SEO-----------------//
$tanchao->Template($op);