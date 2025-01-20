<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'forget';

if($op=='forget'){//找回密码
$tanchao->Template($op);
}

if($op=='forget_zhpas'){ //修改密码
	if(POST('zhpass')=='go'){
			$unames= POST('uname');
			$upass= POST('mypass');
			$upasss= POST('mypasss');
			$yzmas= $_POST['yzma'];
			if($upass==$upasss){
				if($_SESSION['autocode']==$yzmas){
					if($upass!='' ){
						$sql = "select pas from user where  username='".$unames."' limit 1"; 
						$result = mysqli_query($mysqli,$sql);
						while($value = mysqli_fetch_array($result)){
							$fpas = $value['pas']; 
						}
						$xpass = md5(md5($upass).$fpas);
						$sql = "UPDATE user set password='".$xpass."' where username='".$unames."'"; 
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




