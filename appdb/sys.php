<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'sys_gg';
if($op=='sys_gg'){
	$pagesize=5;
	$sql = "select id from gg"; 
	$rs=mysqli_query($mysqli,$sql);
	$recordcount=mysqli_num_rows($rs); 
	$pagecount=($recordcount-1)/$pagesize+1;
	$pagecount=(int)$pagecount;
	if(is_numeric(GET('pages'))==""){ 
		$pages=1;
	}else{
		$pages=GET("pages");
	}
	$startno=($pages-1)*$pagesize;
	$pagenum = $pagecount;
	$sql = "SELECT id,ggtp,mygg,times FROM gg where id order by id desc limit $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
	    $gglist[]= $value; 

	}
	$arr =array('data'=>$gglist,'pagenum'=>$pagenum);
	echo json_encode($arr);	
}
if($op=='sys_gg_xx'){
	$id = GET('id');
	if($id){
		$sql = "SELECT id,ggtp,mygg,times FROM gg where id='".$id."' limit 1"; 
		$result = mysqli_query($mysqli,$sql);
		$value = mysqli_fetch_assoc($result);
		$arr =array('name'=>$value['ggtp'],'times'=>$value['times'],'nr'=>$value['mygg']);
		echo json_encode($arr);	
	}
}


