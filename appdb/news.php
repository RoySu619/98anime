<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'news';
if($op=='news'){
	
	if(GET('nelist')=='go'){
		$pagesize=15;
		$sql = "select id from newslist where zxlb!='攻略'"; 
		$rs=mysqli_query($mysqli,$sql);
		$recordcount=mysqli_num_rows($rs); 
		$pagecount=($recordcount-1)/$pagesize+1;
		$pagecount=(int)$pagecount;
		if(is_numeric(GET('pages'))==""){ 
			$pages=1;
		}else{
			$pages=trim(GET("pages"));
		}
		$startno=($pages-1)*$pagesize;
		$pagenum = $pagecount; 
		$sql = "SELECT id,zxname,zxjj,times FROM newslist where zxlb!='攻略' order by times desc limit $startno,$pagesize"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$newslb[]= $value; 
		}
		$arr = array('data'=>$newslb,'pagenum'=>$pagenum);
		echo json_encode($arr);
	}

}