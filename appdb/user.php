<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'user';
if($op=='user'){
	if(GET('myusapp')=='go'){
		$uids = $G_uid;
		if($uids!=''){
			$sql = "select userlogo,uid,username,nickname from user where uid='".$uids."' limit 1"; 
			$result = mysqli_query($mysqli,$sql);
			$user = mysqli_fetch_assoc($result);
			mysqli_close($mysqli);
			$jieguo = array('msg'=>'yes','id'=>$user['uid'],'ulogo'=>$user['userlogo'],'unick'=>$user['nickname']); 
		}else{
			$jieguo = array('msg'=>'no'); 
		}
		echo json_encode($jieguo);	
	}
}
if($op=='uszxdll'){//注销账户
	if(POST('ddel')=='go'){
		if($G_uid){
			$sql ="DELETE FROM user where uid='".$G_uid."'"; 
			mysqli_query($mysqli,$sql);
			mysqli_close($mysqli);
			$arr =array('msg'=>'66');
		}else{
			$arr =array('msg'=>'1');
		}
		echo json_encode($arr);
	}
}
if($op=='user_kf'){
	if(GET('myuskf')=='go'){
		$jieguo = array('kf1'=>$config['wzkf1'],'kf2'=>$config['wzkf2'],'kf3'=>$config['wzkf3'],'hz'=>$config['wzhzqq'],'qh1'=>$config['qunhao1'],'qh2'=>$config['qunhao2']);
		echo json_encode($jieguo);
	}
}
if($op=='user_logo'){//修改logo
	if($G_uid){
		if(POST('xlogo')=='go'){
			if($_FILES["upfile"]["type"] == "image/jpeg" || $_FILES["upfile"]["type"] == "image/pjpeg"){
				$houzui = '.jpg';
			}
			if($_FILES["upfile"]["type"] == "image/png"){
				$houzui = '.png';
			}
			if($_FILES["upfile"]["type"] == "image/gif"){
				$houzui = '.gif';
			}
			$newName = date('Ymdhis');
			$uploadfile = $newName.$houzui; 
			if (move_uploaded_file($_FILES['upfile']['tmp_name'],'./upload/uslogo/'.$uploadfile)){
				$files = '/upload/uslogo/'.$uploadfile; 
				$sql = "UPDATE user set userlogo='".$files."' where uid='".$G_uid."'"; 
				mysqli_query($mysqli,$sql);
				$jieguo[] = 66 ;
				echo json_encode($jieguo);
			} else {
				$files[] = 2;
				echo json_encode($files);
			}
		}
	}else{
		$files[] = 1;
		echo json_encode($files);
	}
}
if($op=='user_nick'){//修改昵称
	if(POST('xnick')=='go'){
		$uids = $G_uid;
		if($uids){
			$unick = POST('mynick');
			if($unick!=''){
				$sql = "UPDATE user set nickname='".$unick."' where uid='".$uids."'"; 
				mysqli_query($mysqli,$sql);
				$jieguo[] = '66' ;
				echo json_encode($jieguo);
			}else{
				$jieguo[] = '2' ;
				echo json_encode($jieguo);
			}
		}else{
			$jieguo[] = '1' ;
			echo json_encode($jieguo);
		}
	}
}


if($op=='user_xpas'){ //修改密码
	if(POST('xpass')=='go'){
			$uids = $G_uid;
			if($uids){
			$upass1= POST('mypass1');
			$upass2= POST('mypass2');
			//$upass3= POST('mypass3');
			if($upass1!='' && $upass2!=''){
				if($upass2){
					$sql = "select password,pas from user where  uid='".$uids."'"; 
					$result = mysqli_query($mysqli,$sql);
					while($value = mysqli_fetch_array($result)){
					$fpass = $value['password']; 
					$fpas = $value['pas']; 
					}
					$yzpas = md5(md5($upass1).$fpas);
					$nepas = md5(md5($upass2).$fpas);
					if($fpass==$yzpas){
						$sql = "UPDATE user set password='".$nepas."' where uid='".$uids."'"; 
						mysqli_query($mysqli,$sql);
						$jieguo[] = '66' ;
						echo json_encode($jieguo);
					}else{
						$jieguo[] = '4' ;//原密码错误
						echo json_encode($jieguo);
					}
				}else{
					$jieguo[] = '3' ;//2次密码不一致
					echo json_encode($jieguo);
				}
			}else{
				$jieguo[] = '2' ;//不能为空
				echo json_encode($jieguo);
			}
		}else{
			$jieguo[] = '1' ;
			echo json_encode($jieguo);
		}
	}
}
if($op=='user_zhpas'){ //修改密码
	if(POST('zhpass')=='go'){
			$uids = $G_uid;
			if($uids!=''){
				$upass= POST('mypass');
				$yzmas= $_POST['yzma'];
				if($_SESSION['autocode']==$yzmas){
					if($upass!='' ){
						$sql = "select * from user where  uid='".$uids."'"; 
						$result = mysqli_query($mysqli,$sql);
						while($value = mysqli_fetch_array($result)){
							$fpas = $value['pas']; 
						}
						$xpass = md5(md5($upass).$fpas);
						$sql = "UPDATE user set password='".$xpass."' where uid='".$uids."'"; 
						mysqli_query($mysqli,$sql);
						$jieguo[] = '66' ;
						echo json_encode($jieguo);
					}else{
						$jieguo[] = '2' ;
						echo json_encode($jieguo);
					}
				}else{
					$jieguo[] = '1' ;
					echo json_encode($jieguo);
				}
			}else{
				$jieguo[] = '0' ;
				echo json_encode($jieguo);
			}
	}
}
if($op=='user-lblist'){
	if(GET('myuslb')=='go'){
		if($G_uid==''){
			$jieguo = '1' ;
			echo json_encode($jieguo);
		}else{
		$pagesize=15;//20为一页
		$sql = "select id from uslbkey where uid='".$G_uid."' "; 
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
		$sql = "select id,lbname,lbkey,gmlogo,gmname,lbtm from uslbkey where uid='".$G_uid."' order by times desc limit $startno,$pagesize"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){
			$myuslb[] = $value; 
		}
			$jieguo =array('data'=>$myuslb,'pagenum'=>$pagenum) ;
			echo json_encode($jieguo);
		}
	}
}
