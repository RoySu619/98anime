<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'regsiter';
if($G_uid){
	header("location:/");
}
if($op=='regsiter'){
	//---------------SEO-----------------//
	$config['sy_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_title']);
	$config['sy_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_keyword']);
	$config['sy_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_description']);
	//---------------SEO-----------------//
	$tanchao->Template($to);
}
if($op=='usreg'){
	if(POST('reg')=='go'){
		$name=POST('uname');//账号
		$pass=POST('upass');//密码
		$usauto= POST('yzma');//验证码
		if(!preg_match("/^[A-Za-z0-9]+$/g",$pass)){
			if(is_numeric($name)!='' && $pass!=''){
				if($_SESSION['autocode']==$usauto){
					$sql = "SELECT COUNT(1) as usczf FROM user where username='$name'"; 
					$result = mysqli_query($mysqli,$sql);
					while($value = mysqli_fetch_assoc($result)){ //assoc
					$usczf= $value['usczf']; 
					}
					if($usczf==0){
						$sjm = md5(time() . mt_rand(1000,9999));
						$aaa = substr($sjm, -6);
						$sdb = sprintf($aaa);
						$npass=md5(md5($pass).$sdb);
						$dqtm = date('Y-m-d h:i:s');
						$tmnick = date('Ymdhis');
						$nick = "Atc".$aaa."";
						$ip = $_SERVER["REMOTE_ADDR"];
						$pt0 =time() . mt_rand(100,9999);
						$pt1 = substr($pt0, -8);
						$pt2 = date('ishdmy');
						$pthao= "Yml".$pt1."";
						$sql = "insert into user set ptname='".$pthao."',tell='".$name."',nickname='".$nick."',username='".$name."' , password='".$npass."' ,pas='".$sdb."',regip='".$ip."',zctime ='".$dqtm."'"; 
						mysqli_query($mysqli,$sql);
						$ret[] = 66;
						echo json_encode($ret);
					}else{
						$ret[] = 3;//账号存在
						echo json_encode($ret);	
					}
				}else{
					$ret[] = 2;//验证码错误
					echo json_encode($ret);
				}
			}else{
				$jieguo[] = 0;//账号密码不能空
				echo json_encode($jieguo);	
			}
		}else{
			$jieguo[] = 0;//账号密码不能空
			echo json_encode($jieguo);	
		}
	}
}

?>