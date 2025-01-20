<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'gifts';
if($op=='gifts'){
	$lbsyss = GET('type') ? GET('type') :'qb';
	if($lbsyss=='qb'){
		$where="id order by id desc limit";
		$where1="id";
	}
	if($lbsyss=='ios'){
		$where='lbxt LIKE "%苹果%" or lbxt LIKE "%通用%" order by times desc limit';
		$where1='lbxt LIKE "%苹果%" or lbxt LIKE "%通用%" order by times desc';
	}
	if($lbsyss=='an'){
		$where='lbxt LIKE "%安卓%" or lbxt LIKE "%通用%" order by times desc limit';
		$where1='lbxt LIKE "%安卓%" or lbxt LIKE "%通用%" order by times desc';
	}
	if($lbsyss){
		$pagesize=10;
		$sql = "select id from lblist where $where1 "; 
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
	$sql = "SELECT id,gmname,lbname,lblogo,lbjj,lbsy,lbxt,lbzs,jtimes FROM lblist where $where $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
	    $lblb[]= $value; 
	}
	$sql = "SELECT COUNT(id) as lbmun FROM lblist where id"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$zlbmun= $value['lbmun']; 
	}
	//热门礼包
	$sql = "SELECT id,lblogo,lbname,lbsy,lbzs,gmname FROM lblist where lbsy>'0' order by lbsy limit 10"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
	    $hotgmlb[]= $value; 
	}


	mysqli_close($mysqli);
	}
}
//---------------SEO-----------------//
$config['gmlb_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gmlb_title']);
$config['gmlb_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gmlb_keyword']);
$config['gmlb_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gmlb_description']);
//---------------SEO-----------------//
$tanchao->Template($op);