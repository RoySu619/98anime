<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'register';
if($op=='register'){
	if(POST('lregzc')=='go'){
		$name=POST('uname');//账号
		$pass=POST('upass');//密码
		$usauto=POST('yzma');//密码
		if($name!='' && $pass!=''){
			if($_SESSION['autocode']==$usauto){
				$sql = "SELECT COUNT(1) as usczf FROM user where username='".$name."'"; 
				$result = mysqli_query($mysqli,$sql);
				while($value = mysqli_fetch_assoc($result)){
					$usczf= $value['usczf']; 
				}
				if($usczf==0){
					$sjm = md5(time() . mt_rand(1000,9999));
					$aaa = substr($sjm, -6);
					$sdb = sprintf($aaa);
					$npass=md5(md5($pass).$sdb);
					$dqtm = date('Y-m-d H:i:s');
					$tmnick = date('Ymdhis');
					$nick = "Atc".$aaa."";
					$ip = $_SERVER["REMOTE_ADDR"];
					//$pt0 = md5(time() . mt_rand(100,9999));
					$pt0 =time() . mt_rand(100,9999);
					$pt1 = substr($pt0, -8);
					$pt2 = date('ishdmy');
					$pthao= "Atc".$pt1."";
					$sql = "insert into user set ptname='".$pthao."',tell='".$name."',nickname='".$nick."',username='".$name."' , password='".$npass."' ,pas='".$sdb."',regip='".$ip."',zctime ='".$dqtm."'"; 
					mysqli_query($mysqli,$sql);
					$ret[] = '66';
					echo json_encode($ret);
				}else{
					$ret[] = '3';
					echo json_encode($ret);	
				}
			}else{
				$ret[] = '2';
				echo json_encode($ret);
				
			}
		}else{
			$jieguo[] = '0';
			echo json_encode($jieguo);	
		}
	}
}
?>