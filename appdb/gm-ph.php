<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}

$op = $_GET['op'] ? $_GET['op'] : 'gm-ph';
if($op=='gm-ph'){
	if(GET('phlist')=='go'){
		$pagesize=15; 
		$sql = "select id from gmlist where id"; 
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
		$sql = "SELECT id,gmlogo,gmname,gmjj,gmbq FROM gmlist where id order by gmdow desc limit $startno,$pagesize"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$gmlist[]= $value; 
		}
		mysqli_close($mysqli);
		$arr = array('data'=>$gmlist,'pagenum'=>$pagenum);
		echo json_encode($arr);
	}
}
