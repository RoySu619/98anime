<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}

$op= $_GET['op'] ? $_GET['op'] :'news_bq';
if($op=='news_bq'){
	$sql = "SELECT id,bqname,times FROM newsbq where id order by id desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ //assoc
		$newbqlist[]= $value; 
	}
	mysqli_close($mysqli);
	$tanchao->Template($op);	
}
if($op=='add'){//新增标签
	if($_POST['xnewsbq']=='go'){
		if($_POST['key']=='0'){
			if($_POST['bqname']==''){
				$jieguo = 2;
				echo json_encode($jieguo);
			}else{
			$bqlogos = $_POST['bqlogo'] ? $_POST['bqlogo'] : '';
			$bqnames = $_POST['bqname'];
			$dqtms = date('Y-m-d H:i:s');
			$sql = "insert into newsbq set bqlogo='".$bqlogos."',bqfl='0',bqname='".$bqnames."',times='".$dqtms."'"; 
			mysqli_query($mysqli,$sql);
				$jieguo = 3;
				echo json_encode($jieguo);
				mysqli_close($mysqli);
			}
		}else{
			$jieguo = 'auto';
			echo json_encode($jieguo);
		}

	}
}
if($op=='mod'){//修改标签
	if($_POST['bq-xg']=='go'){
		if($_POST['key']=='0'){
			if($_POST['bqname']==''){
				$jieguo = 2;
				echo json_encode($jieguo);
			}else{
			$bqnames = $_POST['bqname'];
			$bqids = $_POST['bqid'];
			$sql = "Update newsbq set bqname='".$bqnames."' where id='".$bqids."'"; 
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
if($op=='dell'){//删除标签
	if($_POST['del-bq']=='go'){
		$idss = $_POST['did'];
		$sql = "DELETE FROM newsbq where id='".$idss."'"; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		$ret = 1;
		echo json_encode($ret);
	}
}


