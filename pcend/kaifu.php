<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'kaifu';
if($op=='kaifu'){
	//今天开服
	$dqtms = date('Y-m-d H:i:s');
	$open = POST('sokaiku');
	$openjtm = POST('jHsDateInput');
	if($open){
		$ktmst = $openjtm.' 00:00:00';
		$jtmst = $openjtm.' 23:59:59';
	}else{
		$ktmst = date('Y-m-d H:i:s');
		$jtmst = date('Y-m-d 23:59');
	}
	$xgstm = substr($ktmst, 0, 10);
	$sql = "SELECT id,gid,gmname,gmlogo,xfname,iosan,gmbq,kftimes FROM xflist where id and kftimes between '".$ktmst."' and '".$jtmst."' order by kftimes asc limit 50"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$xflb1[]= $value;
	}

	//今日已经开服
	$ktmsa = date('Y-m-d 00:00');
    $jtmsa = date('Y-m-d H:i:s');
	$sql = "SELECT id,gid,gmname,gmlogo,xfname,iosan,gmbq,kftimes FROM xflist where id and kftimes between '".$ktmsa."' and '".$jtmsa."' order by kftimes asc limit 30"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$xflb02[]= $value; 
	}
	//历史开服
	$dqtmsy = date('Y-m-d 00:00');
	$pagesize=10;
	$sql = "select id from xflist where kftimes<'".$dqtmsy."'"; 
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
	$sql = "SELECT id,gid,gmname,gmlogo,xfname,iosan,gmbq,kftimes FROM xflist where id and kftimes<'".$dqtmsy."' order by times desc limit  $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$xflb2[]= $value; 
	}
	mysqli_close($mysqli);
}
if($op=='kaifu-m'){
	$mtms = date('Y-m-d',strtotime("+1 day"));
	//即将开服
	$ktmsa = date('Y-m-d 00:00',strtotime("+1 day"));
    $jtmsa = date('Y-m-d 23:59:59',strtotime("+1 day"));
	$sql = "SELECT id,gid,gmname,gmlogo,xfname,iosan,gmbq,kftimes FROM xflist where id and kftimes between '".$ktmsa."' and '".$jtmsa."' order by kftimes asc limit 50"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$xflb1[]= $value; 
	}
	//****---------明天共x款游戏开服--------*//
	
	$sql = "SELECT COUNT(1) AS tnumber FROM xflist where kftimes between '".$ktmsa."' and '".$jtmsa."'"; 
	$result = mysqli_query($mysqli,$sql);
	$mrgmnum = mysqli_fetch_assoc($result);
	
	//今日已经开服
	$ktmsb = date('Y-m-d 00:00');
    $jtmsb = date('Y-m-d H:i:s');
	$sql = "SELECT id,gid,gmname,gmlogo,xfname,iosan,gmbq,kftimes FROM xflist where id and kftimes between '".$ktmsb."' and '".$jtmsb."' order by kftimes asc limit 30"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$xflb02[]= $value; 
	}
	//历史开服
	$dqtmsy = date('Y-m-d 00:00');
	$pagesize=10;
	$sql = "select id from xflist where kftimes<'".$dqtmsy."'"; 
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
	$sql = "SELECT * FROM xflist where id and kftimes<'".$dqtmsy."' order by kftimes desc limit $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$xflb2[]= $value; 
	}
	mysqli_close($mysqli);
}
if($op=='kaifu-l'){
	//历史开服
	$dqtms = date('Y-m-d H:i:s');
	$dqtmsy = date('Y-m-d 00:00');
	$pagesize=15;
	$sql = "select id from xflist where id and kftimes<'".$dqtmsy."' "; 
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
	$sql = "SELECT * FROM xflist where id and kftimes<'".$dqtmsy."' order by kftimes desc limit $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$xflb2[]= $value; 
	}
	$sql = "SELECT COUNT(1) AS tnumber FROM xflist where kftimes<'".$dqtmsy."'"; 
	$result = mysqli_query($mysqli,$sql);
	$mrgmnum = mysqli_fetch_assoc($result);
	mysqli_close($mysqli);
}
//---------------SEO-----------------//
$config['gmkf_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gmkf_title']);
$config['gmkf_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gmkf_keyword']);
$config['gmkf_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['gmkf_description']);
//---------------SEO-----------------//
$tanchao->Template($op);