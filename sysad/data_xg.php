<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'data_xg';
if($op=='data_xg'){//游戏信息
	$sql = "SELECT id,bqname FROM gmbq where id order by id desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$gmbq[]= $value; 
	}
    $gid = $_GET['gmid'];
	$sql = "SELECT * FROM gmlist where id=".$gid." limit 1"; 
	$result = mysqli_query($mysqli,$sql);
	$value = mysqli_fetch_assoc($result);
	
	$sql = "SELECT id,cpid,imgs FROM gmimg where cpid='".$value['gmtuid']."' "; 
	$result = mysqli_query($mysqli,$sql);
	while($valueimg = mysqli_fetch_assoc($result)){
		$gmimg[]= $valueimg; 
	}
	mysqli_close($mysqli);
	$tanchao->Template($op);
} 


if(@$_POST['dd']=='go'){ //游戏截图
	$gmjts = $_POST['logs'];
	$gmjtid = $_POST['jtids'];
	$sql = "insert into gmimg set cpid='".$gmjtid."',imgs='".$gmjts."'"; 
	mysqli_query($mysqli,$sql);
	mysqli_close($mysqli);
	$jieguo = $gmjtid;
    echo json_encode($jieguo);
}

if($op=='delimg'){
	if($_POST['delimg']=='go'){//删除产品图片
		$imids = $_POST['imid'];
		$sql = "DELETE FROM gmimg where id='".$imids."'"; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		$ret = 1;
		echo json_encode($ret);
	}
}
if($op=='setdata'){
if($_POST['data-xg']=='go'){//修改游戏信息
	if($_POST['key']=='0'){
		if($_POST['gmname']=='' && $_POST['cpjj']=='' && $_POST['gmmb']=='' && $_POST['gmjs']=='' ){
			$jieguo = 2;
            echo json_encode($jieguo);
		}else{
			$gmids = trim($_POST['gid']);
			if($_POST['gmlogo']!='1'){
				$gmlogos = trim($_POST['gmlogo']);
			}else{
				$gmlogos = 'gmlogo';
			}
			$pctus = trim($_POST['pctu']);
			$apptus = trim($_POST['apptu']);
			$gmimgids = trim($_POST['gmimg']);
			$gmnames = trim($_POST['gmname']);
			$gmdowss = $_POST['gmdow'] ? $_POST['gmdow'] : '0';
			$gmdows = trim($gmdowss);
			$gmpfss = $_POST['gmpf'] ? $_POST['gmpf'] : '3';
			$gmpfs = trim($gmpfss);
			$gmdjss = $_POST['gmdj'] ? $_POST['gmdj'] : '0';
			$gmdjs = trim($gmdjss);
			$gmmbs = trim($_POST['gmmb']);
			$gmbqs = trim($_POST['gmbq']);
			$gmlxs = '1';
			$gmjjs = $_POST['gmjj'];
			$gmjss = $_POST['gmjs'];
			$anurlss = $_POST['anurl'] ? $_POST['anurl'] :'';
			$anurls = trim($anurlss);
			$iourlss = $_POST['iourl'] ? $_POST['iourl'] :'';
			$iourls = trim($iourlss);
			$dqtms = date('Y-m-d H:i:s');		
			$sql = "Update gmlist set gmlogo='".$gmlogos."',gmname='".$gmnames."',gmjj='".$gmjjs."',gmjs='".$gmjss."',gmbq='".$gmbqs."',gmlx='".$gmlxs."',gmmb='".$gmmbs."',gmdow='".$gmdows."',gmtuid='".$gmimgids."',gmpf='".$gmpfs."',gmdj='".$gmdjs."',gmtj='0' ,gmpclbt ='".$pctus."',gmapplbt='".$apptus."',Android='".$anurls."',ios='".$iourls."' where id='".$gmids."'"; 
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
if($op=='xgimg'){
	if($_POST['xzimg']=='go'){ //修改图片
		$xtid= $_POST['tid'];
		if($xtid=="1"){
			$xtids= time();
		}else{
			$xtids= $xtid;
		}
		$cplogos = $_POST['logs'];
		$sql = "insert into gmimg set cpid='".$xtids."',imgs='".$cplogos."'"; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		$jieguo = $xtids;
		echo json_encode($jieguo);
	}
}

if($_POST['sy-gm']=='go'){//设置首页轮播图
    $ids = trim($_POST['gmids']);//游戏ID
    $tid = trim($_POST['tids']);//是否展示
	$px = trim($_POST['pxi']);//展示排序
    $sql = "Update gmlist set pid=".$px.",gmsy=".$tid." where id=".$ids.""; 
	mysqli_query($mysqli,$sql);
	mysqli_close($mysqli);
	$jieguo = '1';
    echo json_encode($jieguo);
}

if($_POST['tj-gm']=='go'){//设置推荐
    $ids = trim($_POST['gmids']);//游戏ID
    $tid = trim($_POST['tids']);//是否推荐
    $sql = "Update gmlist set gmtj=".$tid." where id=".$ids.""; 
	mysqli_query($mysqli,$sql);
	mysqli_close($mysqli);
	$jieguo = '1';
    echo json_encode($jieguo);
}



