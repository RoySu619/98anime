<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'libao';
$dqtimes = date('Y-m-d H:i:s');
if($op=='libao'){
	if(GET('list')=='go'){
		$pagesize=10;
		$sql = "select id from lblist where id"; 
		$rs=mysqli_query($mysqli,$sql);
		$recordcount=mysqli_num_rows($rs); 
		$pagecount=($recordcount-1)/$pagesize+1;
		$pagecount=(int)$pagecount;
		if(GET("pages")==""){ 
			$pages=1;
		}else{
			$pages=GET("pages");
		}
		$startno=($pages-1)*$pagesize;
		$pagenum = $pagecount ;
		$sql = "SELECT id,lbname,gmname,lblogo,lbjj,lbsy FROM lblist where jtimes>'".$dqtimes."' order by times desc limit $startno,$pagesize"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){ 
			$lblb[]= $value; 
		}
		$arr = array('data'=>$lblb,'pagenum'=>$pagenum);
		echo json_encode($arr);
		mysqli_close($mysqli);
	}
}
