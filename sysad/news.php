<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}

$op= $_GET['op'] ? $_GET['op'] :'news';
if($op=='news'){
	if($_POST['open']==''){
		$where = 'id';
	}else{
		$sname = trim($_POST['soname']);
		$where = 'zxname like "%'.$sname.'%"';
	}
	$pagesize=15;
	$sql = "select id from newslist where $where order by times desc "; 
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
	$pagenum = $pagecount; 
	if($pagecount<="1"){
	    
	}else{
		$bothnumleft = 2;//左侧显示几个分页
		$bothnumright = 2; //右侧显示几个分页
		if($pages== 1) {
		} else {
			$pagestr .= "<a href='sysadmin.php?to=news&pages=1'>首页</a>";
			
			
		}
		for($i=$bothnumleft; $i>=1; $i--) {//已翻页数
			if(($pages - $i) < 1 ) { 
				continue;
			}
			$pagestr .= "<a href='sysadmin.php?to=news&pages=".($pages - $i)."'>".($pages - $i)."</a>";
		}
		
		$pagestr .= "<a href='sysadmin.php?to=news&pages=".($pages)."' style='background: #60bafd;'>".($pages)."</a>";
		
		for($i=1; $i<=$bothnumright; $i++) { //剩下页数
		if(($pages + $i) > $pagenum) { 
        break;
		
		}
		$pagestr .= "<a href='sysadmin.php?to=news&pages=".($pages + $i)."'>".($pages + $i)."</a>";
		}
	
		if($pages == $pagenum) {  //最后一页
		} else {
			$pagestr .= "<a href='sysadmin.php?to=news&pages=".$pagenum."'>末页</a>";
		}
	}
	$sql = "SELECT * FROM newslist where $where order by times desc limit ".$startno.",".$pagesize.""; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$newslb[]= $value; 
	} 
	$mysqli->close();
	$tanchao->Template($op);
}
if($op=='add'){
	$sql = "SELECT id,gmname FROM gmlist where id order by times desc "; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$gmlist[]= $value; 
	} 
	$sql = "SELECT id,bqname FROM newsbq where id order by times desc "; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$bqlist[]= $value; 
	} 
	$mysqli->close();
	$tanchao->Template('news_'.$op);
}
if($op=='add_news'){//新增资讯
	if($_POST['xdata']=='go'){
		if($_POST['key']=='0'){
			if($_POST['newnms']=='' || $_POST['newjjs']=='' || $_POST['newnrs']=='' ){
				$jieguo = 2;
				echo json_encode($jieguo);
			}else{
			$gmnm = $_POST['gmnms'];
			$sql = "SELECT * FROM gmlist where gmname='".$gmnm."' order by id desc limit 1"; 
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){ //assoc
				$gid= $value['id']; 
				$gname= $value['gmname']; 
				$glogo= $value['gmlogo']; 
			}
			$newnm = $_POST['newnms'];
			$nelbs = $_POST['newlb'];
			$newjj = $_POST['newjjs'];
			$newnr = str_replace("'",'"',$_POST['newnrs']);
			$newlg = $_POST['zlogos'];
			$nllcs = $_POST['newllcs'] ? $_POST['newllcs'] : '0';
			$sftj = $_POST['nesftj'];
			$newspul = $_POST['newsp'];
			$dqtms = date('Y-m-d H:i:s');
			$sql = "insert into newslist set gid='".$gid."',gmlogo='".$glogo."',gmname='".$gname."',zxname='".$newnm."',usnick='1',zxlogo='".$newlg."',zxlb='".$nelbs."',zxllcs='".$nllcs."',zxjj='".$newjj."',zxnr='".$newnr."',spurl='".$newspul."',sftj='".$sftj."',ztai='0',times='".$dqtms."'"; 
			mysqli_query($mysqli,$sql);
			$mysqli->close();
				$jieguo = 3;
				echo json_encode($jieguo);
			}
			
		}else{
			$jieguo = 'auto';
			echo json_encode($jieguo);
		}
	}
}

if($op=='mod'){//修改资讯
	$sql = "SELECT id,gmname FROM gmlist where id order by times desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$gmlist[]= $value; 
	} 
	$sql = "SELECT id,bqname FROM newsbq where id order by times desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$bqlist[]= $value; 
	} 
	$ids = $_GET['nid'];
	$sql = "SELECT * FROM newslist where id='".$ids."' limit 1"; 
	$result = mysqli_query($mysqli,$sql);
	$newsxx = mysqli_fetch_assoc($result);
	mysqli_close($mysqli);
	$tanchao->Template('news_'.$op);
}

if($op=='set_mod'){
	if($_POST['data-xg']=='go'){
		if($_POST['key']=='0'){
			if($_POST['newnms']=='' || $_POST['newjjs']=='' || $_POST['newnrs']=='' ){
				$jieguo = 2;
				echo json_encode($jieguo);
			}else{
			$gmnm = $_POST['gmnms'];
			$sql = "SELECT * FROM gmlist where gmname='".$gmnm."' order by id desc limit 1"; 
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){ //assoc
				$gid= $value['id']; 
				$gname= $value['gmname']; 
				$glogo= $value['gmlogo']; 
			}
			$newnm = $_POST['newnms'];
			$nelbs = $_POST['newlb'];
			$newjj = $_POST['newjjs'];
			$newnr = $_POST['newnrs'];
			$newspul = $_POST['newsp'];
			if($_POST['zlogos']==''){
				$zlg = "zxlogo=zxlogo,";
			}else{
				$newlg = $_POST['zlogos'];
				$zlg = "zxlogo='".$newlg."',";
			}
			$nllcs = $_POST['newllcs'] ? $_POST['newllcs'] : '0';
			$sftj = $_POST['nesftj'];
			$dqtms = date('Y-m-d H:i:s');
			$xid = $_POST['xnid'];
			$sql = "Update newslist set $zlg gid='".$gid."',gmlogo='".$glogo."',gmname='".$gname."',zxname='".$newnm."',zxlb='".$nelbs."',zxllcs='".$nllcs."',zxjj='".$newjj."',spurl='".$newspul."',zxnr='".$newnr."',sftj='".$sftj."',ztai='0',times='".$dqtms."' where id='".$xid."'"; 
			mysqli_query($mysqli,$sql);
			mysqli_close($mysqli);
				$jieguo = 3;
				echo json_encode($jieguo);
			}
			
		}else{
			$jieguo = 'auto';
			echo json_encode($jieguo);
		}
	}
}

if($op=='dell'){ //删除资讯
	if($_POST['del-zx']=='go'){
		$idss = $_POST['did'];
		$sql = "DELETE FROM newslist where id='".$idss."'"; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		$ret = '1';
		echo json_encode($ret);
	}
}
	
if($op=='postbaidu'){
	if($_POST['bd']=='go'){
		$wdqtm = date('Y-m-d 23:59:59');
		$zdqtm = date('Y-m-d 00:00:00');
		$sql = "SELECT id FROM newslist where times between '".$zdqtm."' and '".$wdqtm."'"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$ids = $value['id'];
			bdpost($ids);
		}
	}
}
function bdpost($id){
	$urls = 'http://www.90yx.cn/index.php?to=newsxx&id='.$id.'';
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

