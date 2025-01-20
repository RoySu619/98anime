<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'game';
if($op=='game'){
	$sql = "SELECT id,bqname FROM gmbq where id order by id desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($values = mysqli_fetch_assoc($result)){
		$gmbqlist[]= $values; 
	}
	$get_gmxt = GET('gmsys') ? GET('gmsys') : '1';//游戏系统 || 苹果 || 安卓
	$get_type = GET('type') ? GET('type') : '1';//游戏类型
	$get_gmsort = GET('sort') ? GET('sort') : '1';//排序方式
	if($get_type==1 && $get_gmxt==1){ //如果都是全部的时候
		$gmxt="gmlx='1'";
	}
	if($get_type!=1 && $get_gmxt!=1){//如果全选
		if($get_gmxt=='an'){
			$gmxt="gmlx='1' and Android!=''";
		}
		if($get_gmxt=='ios'){
		    $gmxt="gmlx='1' and ios!=''";
		}
		$gmbq=" and gmbq LIKE '%".$get_type."%'";
	}
	if($get_gmxt!=1 && $get_type==1){ //如果只选择系统
		if($get_gmxt=='an'){
			$gmxt="gmlx='1' and Android!=''";
		}
		if($get_gmxt=='ios'){
		    $gmxt="gmlx='1' and ios!=''";
		}
	}
	if($get_gmxt==1 && $get_type!=1){//如果只选择标签
		$gmbq="gmlx='1' and gmbq LIKE '%".$get_type."%'";
	}
	if($get_gmsort=='1'){
		$gmsort="order by times desc";
	}
	if($get_gmsort=='hot'){
		$gmsort="order by gmdow desc";
	}
	if($get_gmsort=='tj'){
		$gmsort="order by gmdj desc";
	}
	$pagesize=30;
	$sql = "select id from gmlist where $gmxt $gmbq $gmsort"; 
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
	$sql = "SELECT id,gmlogo,gmname,gmmb,gmbq,gmdow,Android,ios FROM gmlist where $gmxt $gmbq $gmsort limit $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$gmlb[]= $value; 
	}
	mysqli_close($mysqli);

}
//---------------SEO-----------------//
$config['gm_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gm_title']);
$config['gm_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gm_keyword']);
$config['gm_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gm_description']);
//---------------SEO-----------------//
$tanchao->Template($op);