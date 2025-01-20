<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}

$op = $_GET['op'] ? $_GET['op'] : 'data';
if($op=='data'){
	$sql = "SELECT id,bqname,bqjj,times FROM gmbq where id order by id desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ //assoc
	$gmbq[]= $value; 
	}
	mysqli_close($mysqli);
	$tanchao->Template('gmbq');
}
//新增标签
if($op=='setbq'){
	if(@$_POST['xgmbq']=='go'){
		if($_POST['key']=='0'){
			if($_POST['bqname']==''){
				$jieguo = 2;
				echo json_encode($jieguo);
			}else{
			$bqlogos = $_POST['bqlogo'] ? $_POST['bqlogo'] : '';
			$bqnames = $_POST['bqname'];
			$bqjja = $_POST['bqjjs'];
			$dqtms = date('Y-m-d H:i:s');
			$sql = "insert into gmbq set bqlogo='".$bqlogos."',bqfl='0',bqname='".$bqnames."',bqjj='".$bqjja."',times='".$dqtms."'"; 
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
if($op=='postbq'){//修改标签
	if(@$_POST['bq-xg']=='go'){
		if($_POST['key']=='0'){
			if($_POST['bqname']==''){
				$jieguo = 2;
				echo json_encode($jieguo);
			}else{
			$bqnames = $_POST['bqname'];
			$bqjja = $_POST['bqjjs'];
			$bqids = $_POST['bqid'];
			$bqlogos = $_POST['bqlogo'] ? $_POST['bqlogo'] : '';
			$sql = "Update gmbq set bqlogo='".$bqlogos."',bqname='".$bqnames."',bqjj='".$bqjja."' where id='".$bqids."'"; 
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

if($op=='dellbq'){ //删除标签
	if(@$_POST['del-bq']=='go'){
		$idss = $_POST['did'];
		$sql = "DELETE FROM gmbq where id='".$idss."'"; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		$ret = '1';
		echo json_encode($ret);
	}
}