<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'gmlist';
if($op=='gmlist'){
	if(GET('gmlist')=='go'){
		$types = GET('type') ? GET('type') : '1';
		if($types==1){
			$where = "gmlx='1'";
		}else{
			$where = "gmlx='1' and gmbq LIKE '%".$types."%'";
		}
		$pagesize=15;
		$sql = "select id from gmlist where $where "; 
		$rs=mysqli_query($mysqli,$sql);
		$recordcount=mysqli_num_rows($rs); 
		$pagecount=($recordcount-1)/$pagesize+1;
		$pagecount=(int)$pagecount;
		if(GET('pages')==""){ 
			$pages=1;
		}else{
			$pages=GET("pages");
		}
			$startno=($pages-1)*$pagesize;
			$pagenum = $pagecount ;
			$sql = "SELECT id,gmlogo,gmname,gmjj,gmbq,gmmb FROM gmlist where $where order by id desc limit $startno,$pagesize"; 
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){
				$gmlist[]= $value; 
			}
			mysqli_close($mysqli);
			$arr = array('data'=>$gmlist,'pagenum'=>$pagenum);
			echo json_encode($arr);
	}
}
if($op=='game_bq'){ //游戏标签
	if(GET('game_bq')=='go'){
		$sql = "SELECT id,bqname FROM gmbq where id order by id desc"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$gmbq[]= $value; 
		}
		mysqli_close($mysqli);
		$arr =array('data'=>$gmbq);
		echo json_encode($arr);
	}
}