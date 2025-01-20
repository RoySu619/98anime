<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'login';
if($G_uid){
	header("location:/");
}
if($op=='login'){
	//---------------SEO-----------------//
	$config['sy_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_title']);
	$config['sy_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_keyword']);
	$config['sy_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_description']);
	//---------------SEO-----------------//
	$tanchao->Template($to);
}
if($op=='logins'){
	if(POST('lg')=='go'){
		$name=POST('uname');//账号
		$pass=POST('upass');//密码
		if(!preg_match("/^[A-Za-z0-9]+$/g",$pass)){
			if(is_numeric($name)!='' && $pass!=''){
				$sql = "select uid,password,pas,sfgl,dlzt from user where username='".$name."' limit 1"; 
				$result = mysqli_query($mysqli,$sql);
				$cuser = mysqli_fetch_array($result);
				$fpass = $cuser['password']; 
				$fpas = $cuser['pas']; 
				$uids = $cuser['uid'];
				$loginno = $cuser['dlzt'];
				$dqtime = time();//当前时间戳
				$dltimes = time()+86400;
				$dqtm = date('Y-m-d H:i:s',strtotime("+1 minute"));
				$dqtms = date('Y-m-d H:i:s');
					if($uids!=''){
						$zspas = md5(md5($pass).$fpas);
						if($fpass==$zspas){
							$sql = "update user set dlcs=dlcs+'1',dlzt='1',sctime ='".$dqtm."' where uid='".$uids."'"; 
							mysqli_query($mysqli,$sql);
							$zuid = md5(md5($uids).'Kmdlopqa2531sdx1313=*025452022222dailis34zwqfi2qwe!@123$#!');
							setcookie("Z_uid",$zuid,time()+86400,NULL, NULL, NULL, TRUE);//60s
							setcookie("J_uid",$uids,time()+86400,NULL, NULL, NULL, TRUE);//60s
							$jieguo = 'yes'; //登录成功
							echo json_encode($jieguo);
						}else{
							$jieguo = 'nopas'; // 密码错误
							echo json_encode($jieguo);
						}
					}else{
						$jieguo = 'nopas'; // 账号不存在
						echo json_encode($jieguo);	
					}
			}else{
				$jieguo = 'nopas'; // 账号不存在
				echo json_encode($jieguo);	
			}
		}else{
			$jieguo = 'nopas'; // 账号不存在
			echo json_encode($jieguo);	
		}		
	}
}	