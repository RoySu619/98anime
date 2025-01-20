<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}

$op= $_GET['op'] ? $_GET['op'] :'list';
if($op=='list'){
	$pagesize=15;
	$sql = "select uid from user where uid"; 
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
	$total = $pagecount; 
	$pagenum = $total ;
	if($pagecount<="1"){
	    
	}else{
		$bothnumleft = 2;//左侧显示几个分页
		$bothnumright = 2; //右侧显示几个分页
		if($pages== 1) {
		} else {
			$pagestr .= "<a href='sysadmin.php?to=user&pages=1'>首页</a>";
			
			
		}
		for($i=$bothnumleft; $i>=1; $i--) {//已翻页数
			if(($pages - $i) < 1 ) { 
				continue;
			}
			$pagestr .= "<a href='sysadmin.php?to=user&pages=".($pages - $i)."'>".($pages - $i)."</a>";
		}
		
		$pagestr .= "<a href='sysadmin.php?to=user&pages=".($pages)."' style='background: #60bafd;'>".($pages)."</a>";
		
		for($i=1; $i<=$bothnumright; $i++) { //剩下页数
		if(($pages + $i) > $pagenum) { 
        break;
		
		}
		$pagestr .= "<a href='sysadmin.php?to=user&pages=".($pages + $i)."'>".($pages + $i)."</a>";
		}
	
		if($pages == $pagenum) {  //最后一页
		} else {
			$pagestr .= "<a href='sysadmin.php?to=user&pages=".$pagenum."'>末页</a>";
		}
	}
	$sql="SELECT uid,username,userlogo,nickname,usly,fid,fusname,jifen,qian,dlzt FROM user where uid order by uid desc limit ".$startno.",".$pagesize."";
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){
		$userlist[]= $value; 
	}
	$tanchao->Template('user_'.$op);
}
if($op=='add'){
	if($_POST['user-qy']=='go'){
		if($_POST['ids']!=''){
			$uids= $_POST['ids'];
			$qids= $_POST['qid'];
			$sql = "Update user set dlxz='".$qids."' where uid='".$uids."'"; 
			mysqli_query($mysqli,$sql);
			mysqli_close($mysqli);
			echo json_encode(1);
		}
	}
}
if($op=='dell'){
	if($_POST['user-del']=='go'){
		if($_POST['ids']!=''){
			$uids= $_POST['ids'];
			$sql = "DELETE FROM user where uid='".$uids."'"; 
			mysqli_query($mysqli,$sql);
			mysqli_close($mysqli);
			echo json_encode(1);
		}
	}
}

if($op=='set_myzl'){//修改资料
	if($_POST['myzl']=='go'){
		$nick = $_POST['nicks'];
		$email = $_POST['emails'];
		$tell = $_POST['tells'];
		$qq = $_POST['qqs'];
		$wx = $_POST['weixs'];
		if($_POST['ulogo']==''){
			$logos='userlogo=userlogo,';
		}else{
			 
			$logos="userlogo='".$_POST['ulogo']."',";
		}
		$sql = "Update user set $logos nickname='".$nick."',email='".$email."',tell='".$tell."',qq='".$qq."', weixi='".$wx."' where uid='".$G_uid."'"; 
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		echo json_encode(1);
	}
}