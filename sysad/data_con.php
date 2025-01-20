<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'data';
$imgid = time();
if($op=='data'){
	$sql = "SELECT id,bqname,bqjj,times FROM gmbq where id order by id desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ //assoc
		$gmbq[]= $value; 
	}
	mysqli_close($mysqli);
	$tanchao->Template($to);
}

if($op=='gmimg'){
	if($_POST['dd']=='go'){ //游戏截图
		$cplogos = $_POST['logs'];
		$sql = "insert into gmimg set cpid='".$imgid."',imgs='".$cplogos."'"; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		$jieguo =$imgid;
		echo json_encode($jieguo);
	}
}

if($op=='setdata'){
	if($_POST['xdata']=='go'){//新增游戏
	if($_POST['key']=='0'){
		if($_POST['gmname']=='' && $_POST['cpjj']=='' && $_POST['gmmb']=='' && $_POST['gmjs']=='' ){
			$jieguo = 2;
            echo json_encode($jieguo);
		}else{
			if($_POST['gmlogo']!='1'){
				$gmlogos = $_POST['gmlogo'];
			}else{
				$gmlogos = 'gmlogo';
			}
			if($_POST['pctu']=='undefined'  || $_POST['pctu']=='null'){
				$pctus = '';
			}else{
				$pctus = $_POST['pctu'];
			}
			if($_POST['apptu']=='undefined' || $_POST['apptu']=='null'){
				$apptus = '';
			}else{
				$apptus = $_POST['apptu'];
			}
			$gmimgids = trim($_POST['gmimg']);
			$gmnames = trim($_POST['gmname']);
			$gmdowss = $_POST['gmdow'] ? $_POST['gmdow'] : '0';
			$gmdows =trim($gmdowss);
			$gmpfss = $_POST['gmpf'] ? $_POST['gmpf'] : '3';
			$gmpfs = trim($gmpfss);
			$gmdjss = $_POST['gmdj'] ? $_POST['gmdj'] : '0';
			$gmdjs = trim($gmdjss);
			$gmmbs = trim($_POST['gmmb']);
			$gmbqs = trim($_POST['gmbq']);
			$gmlxs ='1';
			$gmjjs = $_POST['gmjj'];
			$gmjss = $_POST['gmjs'];
			$anurlss = $_POST['anurl'] ? $_POST['anurl'] :'';
			$anurls = trim($anurlss);
			$iourlss = $_POST['iourl'] ? $_POST['iourl'] :'';
			$iourls = trim($iourlss);
			$dqtms = date('Y-m-d H:i:s');
			$sql = "insert into gmlist set gmlogo='".$gmlogos."',gmname='".$gmnames."',gmjj='".$gmjjs."',gmjs='".$gmjss."',gmbq='".$gmbqs."',gmlx='".$gmlxs."',gmmb='".$gmmbs."',gmdow='".$gmdows."',gmtuid='".$gmimgids."',gmpf='".$gmpfs."',gmdj='".$gmdjs."',gmtj='0' ,gmpclbt ='".$pctus."',gmapplbt='".$apptus."',Android='".$anurls."',ios='".$iourls."',times='".$dqtms."'"; 
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

