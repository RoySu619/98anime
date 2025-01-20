<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'pas';
if($op=='pas'){
	$tanchao->Template($to);
}
if($op=='setpass'){ //找回密码
	if(POST('zhpass')=='go'){
		$upname= POST('myname');
		$upass= POST('mypass');
		$yzmas= POST('yzma');
		if($_SESSION['autocode']==$yzmas){
			if($upass!='' ){
				$sql = "select uid,pas from user where username='".$upname."'"; 
				$result = mysqli_query($mysqli,$sql);
				while($value = mysqli_fetch_array($result)){
					$cpas = $value['pas']; 
					$cuid= $value['uid']; 
				}
				if($cuid){
					$xpass = md5(md5($upass).$cpas);
					$sql = "UPDATE user set password='".$xpass."' where uid='".$cuid."'"; 
					mysqli_query($mysqli,$sql);
					$jieguo[] = '66' ;
					echo json_encode($jieguo);
				}else{
					$jieguo[] = '3' ;//账号不存在
					echo json_encode($jieguo);
				}
			}else{
				$jieguo[] = '2' ;//新密码不能为空
				echo json_encode($jieguo);
			}
		}else{
			$jieguo[] = '1' ;//验证码错误
			echo json_encode($jieguo);
		}
	}else{
		$jieguo[] = '0' ;//接口错误
		echo json_encode($jieguo);
	}
}


