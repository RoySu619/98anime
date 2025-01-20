<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'login';
if($op=='login'){
	if(POST('logins')=='go'){
		$name=POST('uname');//账号
		$pass=POST('upass');//密码
		if($name!='' && $pass!=''){
			$sql = "select * from user where  username='".$name."'"; 
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_array($result)){
			$fpass = $value['password']; 
			$fpas = $value['pas']; 
			$uids = $value['uid'];
			}
			if($uids!=''){
			$zspas = md5(md5($pass).$fpas);
			if($fpass==$zspas){
				$dqtm = date('Y-m-d h:i:s');
				$sql = "UPDATE user set dlcs=dlcs+'1',sctime ='".$dqtm."' where username='".$name."' "; 
				mysqli_query($mysqli,$sql);
				$zuid = md5(md5($uids).'Kmdlopqa2531sdx1313=*025452022222dailis34zwqfi2qwe!@123$#!');//zUID
				$juid = $uids;//JUID
				setcookie("Z_uid",$zuid,time()+86400);//s
				setcookie("J_uid",$juid,time()+86400);//s
				$jieguo[] = '66';//登陆成功
				echo json_encode($jieguo);
			}else{
				$jieguo[] = '2'; // 密码错误
				echo json_encode($jieguo); 
			}
			}else{
			$jieguo[] = '1'; // 账号不存在
			echo json_encode($jieguo);	
			}
		}else{
			$jieguo[] = '0'; // 请输入账号密码
			echo json_encode($jieguo);	
		}
	}else{
	   $jieguo[] = '0'; //
	   echo json_encode($jieguo);	
	}
}