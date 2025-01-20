<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$imgid = time();
$op = $_GET['op'] ? $_GET['op'] : 'xf';
if($op=='xf'){//新服列表 
	$pagesize=500;
	$sql = "select id from xflist where id "; 
	$rs=mysqli_query($mysqli,$sql);
	$recordcount=mysqli_num_rows($rs); 
	$pagecount=($recordcount-1)/$pagesize+1;
	$pagecount=(int)$pagecount;
	if($_GET['pages']==""){ 
		$pages=1;
	}else{
		$pages=$_GET["pages"];
	}
	$startno=($pages-1)*$pagesize;
	$pagenum = $pagecount ;
	if($pagecount<="1"){
	    
	}else{
		$bothnumleft = 3;//左侧显示几个分页
		$bothnumright = 3; //右侧显示几个分页
		if($pages == 1) {
			
		} else {
			$pagestr .= "<a href='sysadmin.php?to=data_xf&pages=1'>首页</a>";
			if($pages<5 && $pages>2){
			  $pagestr .= "<a href='sysadmin.php?to=data_xf&pages=".($pages-2)."'>".($pages-2)."</a>";
			}
			if($pages<4 && $pages>1){
			  $pagestr .= "<a href='sysadmin.php?to=data_xf&pages=".($pages-1)."'>".($pages-1)."</a>";
			}
			
		}
		for($i=$bothnumleft; $i>=1; $i--) {//已翻页数
		if(($pages - $i) < 3 ) { 
		continue;
		}
		  $pagestr .= "<a href='sysadmin.php?to=data_xf&pages=".($pages - $i)."'>".($pages - $i)."</a>";
		}
		
		$pagestr .= "<a href='sysadmin.php?to=data_xf&pages=".($pages)."' style='background: #60bafd;'>".($pages)."</a>";
		
		for($i=1; $i<=$bothnumright; $i++) { //剩下页数
		if(($pages + $i) > $pagenum) { 
        break;
		
		}
		$pagestr .= "<a href='sysadmin.php?to=data_xf&pages=".($pages + $i)."'>".($pages + $i)."</a>";
		}
	
		if($pages == $pagenum) {  //最后一页
		} else {
			$quchu = $pagenum-3;
			if($pages<$quchu){
			$pagestr .= "<a href='sysadmin.php?to=data_xf&pages=".($pages + $i)."'>..</a>";
			}
			$pagestr .= "<a href='sysadmin.php?to=data_xf&pages=".$pagenum."'>末页</a>";
		}
	}
	$sql = "SELECT * FROM xflist where id order by id desc limit $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value= mysqli_fetch_assoc($result)){
		$xflist[]= $value;
	}
	$sql = "SELECT id,gmname FROM gmlist where id order by times desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$gmlist[]= $value; 
	} 
	if($_POST['pltu']=='sc'){
		$arrid = $_POST['delid'];
		foreach ($arrid as $key=>$val) {
			$sql = "SELECT id,gmlogo,gmname,gmbq,gmlbid FROM gmlist where gmname='".$val."' limit 1"; 
			$result = mysqli_query($mysqli,$sql);
			$gmxx = mysqli_fetch_assoc($result);
			
			$sql = "SELECT id,gmlogo FROM xflist where gmname='".$val."' limit 1"; 
			$result = mysqli_query($mysqli,$sql);
			$xfgmname = mysqli_fetch_assoc($result);
				$sql = "update xflist set gmlogo='".$gmxx['gmlogo']."',gid='".$gmxx['id']."',gmbq='".$gmxx['gmbq']."',gmlb='".$gmxx['gmlbid']."' where gmname='".$val."'";
				mysqli_query($mysqli,$sql);
				$sql = "DELETE FROM xflist where gid='' and gmname='".$val."'"; 
				mysqli_query($mysqli,$sql);
		}
		echo "<script>alert('获取成功,并清除了无效的开服信息'); location.href='sysadmin.php?to=data_xf';</script>";
	}
	$tanchao->Template('data_'.$op);
	mysqli_close($mysqli);
} 




if($_POST['solb']=='soso'){//搜索新服
    $so = $_POST['soids'];
	$sql = "SELECT * FROM gmlist where gmname LIKE '%".$so."%' order by id desc"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
	$gmlbso[]= $value; 
	}
    echo json_encode($gmlbso);	
	mysqli_close($mysqli);
}



if($op=='qldrxf_tj'){
	if ($_POST['pdaoru']=='upup') { 
		$filename = $_FILES['file']['tmp_name']; 
		if(empty ($filename)){ 
			$arr = array('msg'=>'10');
			echo json_encode($arr);//'请选择要导入的CSV文件！'; 
			exit; 
		} 
		$handle = fopen($filename, 'rb'); 
		$result = input_csv($handle);
		$len_result = count($result); 
		if($len_result==0){ 
			$arr = array('msg'=>'12');
			echo json_encode($arr);
			exit; 
		} 
		for($i = 1; $i < $len_result; $i++){ 
		$times = iconv('gb2312', 'utf-8', $result[$i][0]); //中文转码 
		$gmname = iconv('gb2312', 'utf-8', $result[$i][1]); 
		$xfname = iconv('gb2312', 'utf-8', $result[$i][2]); 
		$id = iconv('gb2312', 'utf-8', $result[$i][3]);
		$dqtimes = date('Y-m-d H:i:s'); 
		$values .= "('$times','$gmname','$xfname','$id','双端','$dqtimes','0'),";
		}
		$values = substr($values,0,-1);
		fclose($handle);
		$sql="insert into xflist (kftimes,gmname,xfname,yyshang,iosan,times,ztai) values $values";
		$query = mysqli_query($mysqli,$sql); 
		mysqli_close($mysqli);		
		if($query){ 
			$arr = array('msg'=>'1');
			echo json_encode($arr); 
		}else{ 
			$arr = array('msg'=>'2');
			echo json_encode($arr);//失败	
		}
	}

}

function input_csv($handle){ 
	$out = array (); 
	$n = 0; 
	while ($data = fgetcsv($handle, 10000)){ 
		$num = count($data); 
		for ($i = 0; $i < $num; $i++){ 
			$out[$n][$i] = $data[$i]; 
		} 
	$n++; 
	} 
	return $out; 
} 

if($op=='xf_tj'){
	if($_POST['xf-tj']=='go'){//新增新服
		if($_POST['key']=='0'){
			if($_POST['xnm']=='' || $_POST['xxt']=='' || $_POST['xtm']=='' || $_POST['gnm']==''){
				$jieguo = 2;
				echo json_encode($jieguo);
			}else{
			$gmlxs =  '1';
			$xnms = $_POST['xnm'];
			$xxts = $_POST['xxt'];
			$xtms = $_POST['xtm'];
			$gnms = $_POST['gnm'];
			$dqtms = date('Y-m-d H:i:s');
			$sql = "SELECT id,gmlogo,gmlbid,gmbq FROM gmlist where gmname='".$gnms."' limit 1"; 
			$result = mysqli_query($mysqli,$sql);
			$gmxx = mysqli_fetch_assoc($result);
			$sql = "insert into xflist set gid='".$gmxx['id']."',gmlb='".$gmxx['gmlbid']."',gmbq='".$gmxx['gmbq']."',gmlogo='".$gmxx['gmlogo']."',gmname='".$gnms."',xfname='".$xnms."',gmlx='".$gmlxs."',kftimes='".$xtms."',iosan='".$xxts."',ztai='0',times='".$dqtms."'"; 
			mysqli_query($mysqli,$sql);
			//更新了预约	
			$sql = "SELECT id,COUNT(id) AS fnum FROM xflist where gid='".$gmxx['id']."'"; 
			$result = mysqli_query($mysqli,$sql);
			$getnum = mysqli_fetch_assoc($result);
			if($getnum['fnum']==1){
			$sql = "Update gmyylist set optimes='".$xtms."',xfid='".$getnum['id']."' where gid='".$gmxx['id']."' "; 
			mysqli_query($mysqli,$sql);
			}
			//更新了预约
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

if($op=='dellxf'){
	if($_POST['del-xf']=='go'){ //删除新服
		$idss = $_POST['did'];
		$sql = "DELETE FROM xflist where id='".$idss."'"; 
		mysqli_query($mysqli,$sql);
		$sql = "Update gmyylist set optimes='',xfid='' where xfid='".$idss."' "; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		$ret = '1';
		echo json_encode($ret);
	}
}
if($op=='xf_xg'){
	if($_POST['xf-xg']=='go'){//修改新服信息
		if($_POST['key']=='0'){
			if($_POST['xnm']=='' || $_POST['xxt']=='' || $_POST['xtm']==''){
				$jieguo = 2;
				echo json_encode($jieguo);
			}else{
			$bjid = $_POST['bjid'];
			$xnms = $_POST['xnm'];
			$xxts = $_POST['xxt'];
			$xtms = $_POST['xtm'];
			$gnms = $_POST['gnm'];
			$sql = "SELECT id,gmlogo,gmlbid,gmbq FROM gmlist where gmname='".$gnms."' limit 1"; 
			$result = mysqli_query($mysqli,$sql);
			$gmxx = mysqli_fetch_assoc($result);
			$sql = "Update xflist set gmlb='".$gmxx['gmlbid']."',gmbq='".$gmxx['gmbq']."',gmlogo='".$gmxx['gmlogo']."',gmname='".$gnms."',xfname='".$xnms."',kftimes='".$xtms."',iosan='".$xxts."' where id='".$bjid."'"; 
			mysqli_query($mysqli,$sql);
			$sql = "Update gmyylist set optimes='".$xtms."' where xfid='".$bjid."'"; 
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


