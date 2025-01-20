<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'index';

if($G_uname==''){
	    echo '<script>location.href="/sysadmin.php?to=login";</script>';
}else{
	if($G_isadm=='1'){
        if($op=='index'){
			$sql = "select uid,nickname,userlogo,tell,qq,weixi,email from user where  uid='".$G_uid."' "; 
			$result = mysqli_query($mysqli,$sql);
			$myadmin= mysqli_fetch_assoc($result);
			$sql = "SELECT * FROM about where msglx='0' order by times desc"; 
			$result = mysqli_query($mysqli,$sql);
			while($valueb = mysqli_fetch_assoc($result)){ 
				$msglb[]= $valueb; 
			}
			mysqli_close($mysqli);
			$tanchao->Template($op);
	    }

		if($op=='msg'){
			if($_GET['dcl']=='go'){ //MSG
				$sql = "select COUNT(1) as ddtx from usdd where ddzt='0' limit 1"; 
				$result = mysqli_query($mysqli,$sql);
				$value = mysqli_fetch_assoc($result);
				$ddtxs= $value['ddtx']; 
				if($ddtxs>0){
					$sql = "SELECT id,ddhao,laiyuan,jsnm,czml,cztm,ddzt,gmname FROM usdd where ddzt='0' order by times desc"; 
					$result = mysqli_query($mysqli,$sql);
					while($valueb = mysqli_fetch_assoc($result)){
						$ddlist[]= $valueb; 
					}
					$arrs = array('ddtx'=>$ddtxs,'gqtx'=>'','dd'=>$ddlist);
				}else{
					$arrs = array('ddtx'=>'0','gqtx'=>'','dd'=>'');
				}
				/*$jstm = Date('Y-m-d 23:59:59',strtotime("+3days"));
				$dqtm = Date('Y-m-d 00:00:00');
				$sql = 'select COUNT(1) as gqtx from sfdd where dqzt=1 and jstm between "'.$dqtm.'" and "'.$jstm.'"'; 
				$result = mysqli_query($mysqli,$sql);
				while($value = mysqli_fetch_assoc($result)){
				$gqtxs= $value['gqtx']; 
				}*/
				echo json_encode($arrs);
				mysqli_close($mysqli);
			} 
		}
		if($op=='opddlist'){
			if($_POST['usdd-fh']=='go'){
				if($_POST['ids']!=''){
					$uids= $_POST['ids']; //订单号
					$dids= $_POST['dds']; //订单ID
					$xzanniu= $_POST['xzan']; //选择的按钮 1是成功 2是失败
					if($xzanniu=='1'){
					$sql = "Update usdd set ddzt='1' where id='".$dids."'"; 
					mysqli_query($mysqli,$sql);
					mysqli_close($mysqli);
					$ret = 1;
					echo json_encode($ret);
					}
					if($xzanniu=='2'){
					$sql = "Update usdd set ddzt='0' where id='".$dids."'"; 
					mysqli_query($mysqli,$sql);
					mysqli_close($mysqli);
					$ret = 1;
					echo json_encode($ret);
					}
				}
			}
		}
		if($op=='getappfk'){
			if($_GET['ckaappfk']=='go'){
				$id = $_GET['cfkid'];
				$sql = "Update about set msglx='1' where id='".$id."'"; 
				mysqli_query($mysqli,$sql);
				$sql = "SELECT * FROM about where id='".$id."' "; 
				$result = mysqli_query($mysqli,$sql);
				while($valueb = mysqli_fetch_assoc($result)){ 
					$msglb[]= $valueb; 
				}
				mysqli_close($mysqli);
				$arr =$msglb;
				echo json_encode($arr);
			}
		}
		/*---------过期程序处理-----------*/
		/*if(@$_POST['cuscc']=='go'){
			$jstm = Date('Y-m-d 23:59:59',strtotime("+3days"));
			$dqtm = Date('Y-m-d 00:00:00');
			$sql = 'select * from sfdd where dqzt=1 and jstm between "'.$dqtm.'" and "'.$jstm.'"'; 
			$result = mysqli_query($mysqli,$sql);
			while($valuegq = mysqli_fetch_assoc($result)){
			$gqddlb[]= $valuegq; 
			}
			echo json_encode($gqddlb);
		} 
		*/
		/*---------过期程序处理-----------*/
	}else{
	    echo '<script>location.href="/index.php";</script>';
	}
}



