<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$imgid = time();
$op = $_GET['op'] ? $_GET['op'] : 'data';
if($op=='data'){
	if($_GET['open']==''){
		$screen="id order by id desc";
	}
	if($_GET['open']=='screen1'){
		$screen="gmapplbt!='' order by id desc";
	}
	if($_GET['open']=='screen01'){
		$screen="gmpclbt!='' order by id desc";
	}
	if($_GET['open']=='screen2'){
		$screen="pid!='0' order by pid ";
	}
	if($_GET['open']=='screen3'){
		$screen="id order by gmdow desc";
	}
	if($_GET['open']=='screen4'){
		$screen="gmtj='1' order by times desc";
	}
	if($_GET['open']=='soso'){
		$sname = $_GET['soname'];
		if($sname){
			$screen="gmname like '%".$sname."%' order by times desc";
		}else{
			$screen="id order by id desc";
		}
	}
	$gmtype=$_GET['type'] ? $_GET['type'] :'0';
	if($gmtype!='' && $gmtype!='0'){
		$type ="gmlx='".$gmtype."' and";
	}
	$pagesize=15;
	$sql = "select id from gmlist where $type $screen "; 
	$rs=mysqli_query($mysqli,$sql);
	$recordcount=mysqli_num_rows($rs); 
	$pagecount=($recordcount-1)/$pagesize+1;
	$pagecount=(int)$pagecount;
	if($_GET['pages']==""){ 
		$pages=1;
	}else{
		$pages=$_GET["pages"];
	}
	$startno=($pages-1)*$pagesize;
	$pagenum = $pagecount ;
	if($pagecount<="1"){
	    
	}else{
		$bothnumleft = 3;//左侧显示几个分页
		$bothnumright = 3; //右侧显示几个分页
		if($pages == 1) {
			
		} else {
			$pagestr .= "<a href='sysadmin.php?to=data&type=".$gmtype."&open=".$_GET['open']."&pages=1'>首页</a>";
			if($pages<5 && $pages>2){
			  $pagestr .= "<a href='sysadmin.php?to=data&type=".$gmtype."&open=".$_GET['open']."&pages=".($pages-2)."'>".($pages-2)."</a>";
			}
			if($pages<4 && $pages>1){
			  $pagestr .= "<a href='sysadmin.php?to=data&type=".$gmtype."&open=".$_GET['open']."&pages=".($pages-1)."'>".($pages-1)."</a>";
			}
			
		}
		for($i=$bothnumleft; $i>=1; $i--) {//已翻页数
		if(($pages - $i) < 3 ) { 
		continue;
		}
		  $pagestr .= "<a href='sysadmin.php?to=data&type=".$gmtype."&open=".$_GET['open']."&pages=".($pages - $i)."'>".($pages - $i)."</a>";
		}
		
		$pagestr .= "<a href='sysadmin.php?to=data&type=".$gmtype."&open=".$_GET['open']."&pages=".($pages)."' style='background: #60bafd;'>".($pages)."</a>";
		
		for($i=1; $i<=$bothnumright; $i++) { //剩下页数
		if(($pages + $i) > $pagenum) { 
        break;
		
		}
		$pagestr .= "<a href='sysadmin.php?to=data&type=".$gmtype."&open=".$_GET['open']."&pages=".($pages + $i)."'>".($pages + $i)."</a>";
		}
	
		if($pages == $pagenum) {  //最后一页
		} else {
			$quchu = $pagenum-3;
			if($pages<$quchu){
			$pagestr .= "<a href='sysadmin.php?to=data&type=".$gmtype."&open=".$_GET['open']."&pages=".($pages + $i)."'>..</a>";
			}
			$pagestr .= "<a href='sysadmin.php?to=data&type=".$gmtype."&open=".$_GET['open']."&pages=".$pagenum."'>末页</a>";
		}
	}
	$sql = "SELECT id,pid,gmname,gmlogo,gmlx,gmapplbt,gmpclbt,gmbq,gmdow,gmsy,gmtj,times FROM gmlist where $type $screen  limit $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ //assoc
	$data[]= $value; 
	}
	$sql = "SELECT COUNT(1) AS Znumber FROM gmlist"; 
	$result = mysqli_query($mysqli,$sql);
	$ztjgmnum = mysqli_fetch_assoc($result);
	$ztjgmnum['Znumber'];
	$sql = "SELECT COUNT(1) AS tnumber FROM gmlist where to_days(times) = to_days(now());"; 
	$result = mysqli_query($mysqli,$sql);
	$tjgmnum = mysqli_fetch_assoc($result);
	$tjgmnum['tnumber'];
	mysqli_close($mysqli);
	$tanchao->Template($op);
}

if($op=='delgm'){
	if($_GET['degm']=='go'){//删除图片
		$ids = $_GET['gmid'];
		$sql = "DELETE FROM gmlist where id='".$ids."'"; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		echo "<script>alert('删除成功！'); location.href='./sysadmin.php?to=data';</script>";
	}
}

if($op=='tjgm'){
	if($_POST['tj-gm']=='go'){//设置推荐
		$ids = $_POST['gmids'];//游戏ID
		$tid = $_POST['tids'];//是否推荐
		$sql = "Update gmlist set gmtj='".$tid."' where id='".$ids."'"; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		$jieguo = 1;
		echo json_encode($jieguo);
	}
}
if($op=='pxgm'){
	if($_POST['sy-gm']=='go'){//设置首页轮播图
		$ids = $_POST['gmids'];//游戏ID
		$tid = $_POST['tids'];//是否展示
		$px = $_POST['pxi'];//展示排序
		$sql = "Update gmlist set pid='".$px."',gmsy='".$tid."' where id='".$ids."'"; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		$jieguo = '1';
		echo json_encode($jieguo);
	}
}
if($op=='postbaidu'){
	if($_POST['bd']=='go'){
		$wdqtm = date('Y-m-d 23:59:59');
		$zdqtm = date('Y-m-d 00:00:00');
		$sql = "SELECT id FROM gmlist where times between '".$zdqtm."' and '".$wdqtm."'"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$ids = $value['id'];
			bdpost($ids);
		}
		$sql = "SELECT id FROM lblist where times between '".$zdqtm."' and '".$wdqtm."'"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$ids = $value['id'];
			bdlbpost($ids);
		}
	}
}
function bdpost($id){//游戏
	$urls = 'http://www.90yx.cn/index.php?to=gmxx&id='.$id.'';
	$api = 'http://data.zz.baidu.com/urls?site=www.90yx.cn&token=mLoQvXDhaBs2esSu';
	$ch = curl_init();
		$options =  array(
			CURLOPT_URL => $api,
			CURLOPT_POST => true,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_POSTFIELDS => $urls,
			CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
		);
	curl_setopt_array($ch, $options);
	$result = curl_exec($ch);
	$arr = json_decode($result, true);
	$arrs= $arr['success'];
	if($arrs){
		$arrrrr[] ='1';
		echo json_encode($arrrrr);
	}
 
}
function bdlbpost($id){//礼包
	$urls = 'http://www.90yx.cn/index.php?to=libaoxx&id='.$id.'';
	$api = 'http://data.zz.baidu.com/urls?site=www.90yx.cn&token=mLoQvXDhaBs2esSu';
	$ch = curl_init();
		$options =  array(
			CURLOPT_URL => $api,
			CURLOPT_POST => true,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_POSTFIELDS => $urls,
			CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
		);
	curl_setopt_array($ch, $options);
	$result = curl_exec($ch);
	$arr = json_decode($result, true);
	$arrs= $arr['success'];
	if($arrs){
		$arrrrr[] ='1';
		echo json_encode($arrrrr);
	}
 
}