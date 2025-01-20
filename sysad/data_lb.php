<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'data_lb';
if($op=='data_lb'){//礼包列表
	$dqtm = date('Y-m-d H:i:s');
	$nm = $_GET['gmid'];
	$pagesize=15;
	$sql = "select id from lblist where gid='".$nm."'  order by id desc "; 
	$rs=mysqli_query($mysqli,$sql);
	$recordcount=mysqli_num_rows($rs); 
	$pagecount=($recordcount-1)/$pagesize+1;
	$pagecount=(int)$pagecount;
		if($_POST['pages']==""){ 
			$pages=1;
		}else{
			$pages=$_POST["pages"];
		}
	$startno=($pages-1)*$pagesize;
	$total = $pagecount; 
	$pagenum = $total ;
	if($pagecount<="1"){
			
	}else{
		$bothnumleft = 3;//左侧显示几个分页
		$bothnumright = 3; //右侧显示几个分页
		if($pages == 1) {
				
		} else {
			$pagestr .= "<i id='1' onclick='pagego(this);'>首页</i>";
			if($pages<5 && $pages>2){
				  $pagestr .= "<i id=".($pages-2)." onclick='pagego(this);'>".($pages-2)."</i>";
			}
			if($pages<4 && $pages>1){
				  $pagestr .= "<i id=".($pages-1)." onclick='pagego(this);'>".($pages-1)."</i>";
			}
				
			}
			for($i=$bothnumleft; $i>=1; $i--) {//已翻页数
			if(($pages - $i) < 3 ) { 
			continue;
			}
			  $pagestr .= "<i id=".($pages - $i)." onclick='pagego(this);'>".($pages - $i)."</i>";
			}
			
			$pagestr .= "<i id=".($pages)." onclick='pagego(this);' style='background: #60bafd;'>".($pages)."</i>";
			
			for($i=1; $i<=$bothnumright; $i++) { //剩下页数
			if(($pages + $i) > $pagenum) { 
			break;
			
			}
			$pagestr .= "<i id=".($pages + $i)." onclick='pagego(this);'>".($pages + $i)."</i>";
			}
		
			if($pages == $pagenum) {  //最后一页
			} else {
				$quchu = $pagenum-3;
				if($pages<$quchu){
				$pagestr .= "<i id=".($pages + $i)." onclick='pagego(this);'>..</i>";
				}
				$pagestr .= "<i id=".$pagenum." onclick='pagego(this);'>末页</i>";
			}
		}
		$sql="SELECT id,gid,keyid,lbname,lqfs,lbxh,gmname,lbxt,jtimes,lbsy,times FROM lblist where gid='".$nm."' order by id desc limit $startno,$pagesize"; 
		$result=mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$lblist[]= $value; 
		}
		mysqli_close($mysqli);
	$tanchao->Template($op);
}
if($op=='dellb'){//删除礼包
	if($_POST['del-lb']=='go'){ //删除礼包
		$idss = $_POST['did'];
		$sql = "DELETE FROM lblist where id='".$idss."'"; 
		mysqli_query($mysqli,$sql);
		$gids = $_POST['gid'];
		$sql="SELECT COUNT(gid) as lbnum FROM lblist where gid='".$gids."' limit 1"; 
		$result=mysqli_query($mysqli,$sql);
		$lbnum= mysqli_fetch_assoc($result);
		if($lbnum['lbnum']=='1'){
			$sql = "Update gmlist set gmlbid='' where id='".$gids."'"; 
			mysqli_query($mysqli,$sql);
		}
		$dkys = $_POST['dky'];
		$sql = "DELETE FROM lbkey where lbid='".$dkys."'"; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		$ret = '1';
		echo json_encode($ret);
	}
}
if($op=='lb_bj'){//修改信息
	$lbid= $_GET['lid'];
	$sql="SELECT * FROM lblist where id='".$lbid."' limit 1"; 
	$result=mysqli_query($mysqli,$sql);
	$getlb= mysqli_fetch_assoc($result);
	mysqli_close($mysqli);
	$tanchao->Template('data_'.$op);
}
if($op=='lb_bj_bc'){
	if(@$_POST['lb-xg']=='go'){
		if($_POST['key']=='0'){
			if($_POST['gmname']=='' || $_POST['lbnm']=='' || $_POST['tke']=='' || $_POST['lblog']==''){
				$jieguo = 2;
				echo json_encode($jieguo);
			}else{
			$lgs = $_POST['lblog'];
			$gmnames = $_POST['gmname'];
			$lbids = $_POST['lbid'];
			$lbnames = $_POST['lbnm'];
			$glxss= $_POST['gmlx'];
			$keyids = $_POST['tke'];
			$lqfss = $_POST['lqfs'];
			$lbxhs = $_POST['lqxh'] ? $_POST['lqxh'] : '0';
			$lbjjs = $_POST['lqjj'];
			$lbsms = $_POST['lqsm'];
			$lbxts = $_POST['lqxt'];
			$ktimess = $_POST['kstm'];
			$jtimess = $_POST['jstm'];
			$kmsls = $_POST['kmsl'];
			$kmsys = $_POST['kmsl'];
			$dqtms = date('Y-m-d H:i:s');
			$sql = "Update lblist set keyid='".$keyids."',lblx='".$glxss."',lbname='".$lbnames."',lblogo='".$lgs."',lqfs='".$lqfss."',lbxh='".$lbxhs."',lbjj ='".$lbjjs."',lbsm='".$lbsms."',lbxt='".$lbxts."',ktimes='".$ktimess."',jtimes='".$jtimess."',fwq='通用',lbzt='0' ,times='".$dqtms."',lbzs='".$kmsls."',lbsy='".$kmsys."' where id='".$lbids."'"; 
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
if($op=='lb_con'){//礼包详细
	$gid=$_GET['gmid'];
	$sql="SELECT id,gmname,gmlogo,gmlx FROM gmlist where id='".$gid."' limit 1"; 
	$result=mysqli_query($mysqli,$sql);
	$gmxx = mysqli_fetch_assoc($result);
	mysqli_close($mysqli);
	$tanchao->Template('data_'.$op);
}
if($op=='lb_con_con'){
	if($_POST['x-lb']=='go'){//新增礼包
		if($_POST['key']=='0'){
			if($_POST['kstm']=='' || $_POST['jstm']=='' || $_POST['gmid']=='' || $_POST['gmname']=='' || $_POST['lbnm']=='' || $_POST['tke']=='' || $_POST['lblog']==''){
				$jieguo = 2;
				echo json_encode($jieguo);
			}else{
			$lgs = $_POST['lblog'];
			$gmnames = $_POST['gmname'];
			$lbnames = $_POST['lbnm'];
			$keyids = $_POST['tke'];
			$glxss= $_POST['gmlx'];
			$lqfss = $_POST['lqfs'];
			$lbxhs = $_POST['lqxh'] ? $_POST['lqxh'] : '0';
			$lbjjs = $_POST['lqjj'];
			$lbsms = $_POST['lqsm'];
			$lbxts = $_POST['lqxt'];
			$ktimess = $_POST['kstm'];
			$jtimess = $_POST['jstm'];
			$kmsls = $_POST['kmsl'];
			$kmsys = $_POST['kmsl'];
			$dqtms = date('Y-m-d H:i:s');
			$gmids = $_POST['gmid'];
			$sql = "insert into lblist set keyid='".$keyids."',gid='".$gmids."',gmname='".$gmnames."',lblx='".$glxss."',lbname='".$lbnames."',lblogo='".$lgs."',lqfs='".$lqfss."',lbxh='".$lbxhs."',lbjj ='".$lbjjs."',lbsm='".$lbsms."',lbxt='".$lbxts."',ktimes='".$ktimess."',jtimes='".$jtimess."',fwq='通用',lbzt='0' ,lbzs='".$kmsls."',lbsy='".$kmsys."',times='".$dqtms."'"; 
			mysqli_query($mysqli,$sql);
			$sql = "Update gmlist set gmlbid='".$keyids."' where id='".$gmids."'"; 
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
/*
if(@$_POST['solb']=='soso'){//搜索礼包
    $so = $_POST['soids'];
	$sql = "SELECT * FROM gmlist where gmname LIKE '%".$so."%' order by id desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ //assoc
	$gmlbso[]= $value; 
	}
	if(@$gmlbso==null){
		$gmlbso = '';
		echo json_encode($gmlbso);
	}else{
    	echo json_encode($gmlbso);	
	}
}





if(@$_POST['bjlb']=='go'){//礼包
    $kids = $_POST['kid'];
	$sql = "SELECT * FROM lblist where keyid='$kids'"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ //assoc
	$bjlb[]= $value; 
	}
    echo json_encode($bjlb);
} 
 
*/







