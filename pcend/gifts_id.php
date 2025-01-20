<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'gifts_id';
if($op=='gifts_id'){
	$lid = trim($_GET['id']);
	
	if(is_numeric($lid)){
	$where ="id='".$lid."' limit 1";
	$sql = "SELECT id,lbname,lblogo,lqfs,keyid,lbjj,lbsm,gid,gmname,lbxt,ktimes,jtimes,lbzs,lbsy FROM lblist where $where"; 
	$result = mysqli_query($mysqli,$sql);
	$lbxx = mysqli_fetch_assoc($result);
	if(!$lbxx){header("location:/");die;}
	
	$sql = "SELECT lbkey FROM uslbkey where lbid='".$lbxx['keyid']."' and uid='".$G_uid."' limit 1"; 
	$result = mysqli_query($mysqli,$sql);
	$lbkey = mysqli_fetch_assoc($result);
	//游戏信息
	$sql = "SELECT id,gmjj FROM gmlist where id='".$lbxx['gid']."' limit 1"; 
	$result = mysqli_query($mysqli,$sql);
	$appinfo = mysqli_fetch_assoc($result);
	
	//相关礼包
	$xggname=$lbxx['gmname'];
	$sql = "SELECT id,lbname,lblogo,lbjj,gmname,jtimes,lbzs,lbsy FROM lblist WHERE gmname LIKE '%$xggname%' order by id desc limit 4"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ //assoc
	    $xglb[]= $value; 
	}

	//热门礼包
	$sql = "SELECT id,gmname,lbname,lblogo,lbjj,lbsy,jtimes FROM lblist where lbsy>'0' order by lbsy limit 6"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ //assoc
	    $hotgmlb[]= $value; 
	}
	mysqli_close($mysqli);
	
	//---------------SEO-----------------//
	$config['lbxx_title'] = str_replace(["%getwebname%","%getweburl%","%getlbname%","%getgmname%"],[$config['wzname'],$config['wzurl'],$lbxx['lbname'],$lbxx['gmname']], $config['lbxx_title']);
	$config['lbxx_keyword'] = str_replace(["%getwebname%","%getweburl%","%getlbname%","%getgmname%"],[$config['wzname'],$config['wzurl'],$lbxx['lbname'],$lbxx['gmname']], $config['lbxx_keyword']);
	$config['lbxx_description'] = str_replace(["%getwebname%","%getweburl%","%getexplain%","%getgmname%"],[$config['wzname'],$config['wzurl'],$appinfo['gmjj'],$lbxx['gmname']], $config['lbxx_description']);
	//---------------SEO-----------------//
	$tanchao->Template($op);
	}else{
		header("location:/");
	}
}

if($op=='gelibao'){
	if(POST('golq')=='go'){
	    $lkey = POST('lbkey');//keyid
		$lid = POST('lbid');//礼包id
		if($G_uid){
			$sql = "SELECT COUNT(1) as uslqf FROM uslbkey where uid='".$G_uid."' and usname='".$G_uname."' and lbid='".$lkey."' limit 1"; 
			$result = mysqli_query($mysqli,$sql);
			while($value = mysqli_fetch_assoc($result)){
				$lqf = $value['uslqf']; 
			}
			if($lqf<1){
				$sql = "SELECT id,lbname,lbjj,lbsm,gmname,lblogo,jtimes,lqfs,lbsy,lbxh,lblx FROM lblist where id='".$lid."' limit 1"; //礼包信息
				$result = mysqli_query($mysqli,$sql);
				while($value = mysqli_fetch_assoc($result)){
					$lbname= $value['lbname']; 
					$lbjj= $value['lbjj']; 
					$lbsm= $value['lbsm']; 
					$gmname= $value['gmname']; 
					$lblogo= $value['lblogo']; 
					$jtimes= $value['jtimes'];
					$lqfs = $value['lqfs'];
					$syl = $value['lbsy'];
					$lqxh = $value['lbxh'];
					$lblx = $value['lblx'];
				}
				
				$sql = "SELECT id,lbid,lbkey FROM lbkey where lbid=".$lkey." and keyzt='0'  order by id limit 1"; //获取礼包KEY
				$result = mysqli_query($mysqli,$sql);
				while($value = mysqli_fetch_assoc($result)){
					$akey = $value['lbkey']; 
					$aid = $value['lbid']; 
					$iddd = $value['id']; 
				}
				if($aid>0){
					if($lqfs=='平台币'){
						$kcbi = $G_rmb;
					}else{
						$kcbi = $G_jf;
					}
					if($kcbi>=$lqxh){
						if($lqfs=='平台币'){
							$sql = "UPDATE user set qian=qian-'".$lqxh."' where uid='".$G_uid."'";//减去平台币
							mysqli_query($mysqli,$sql);
						}else{
							$sql = "UPDATE user set jifen=jifen-'".$lqxh."' where uid='".$G_uid."'"; //减去积分
							mysqli_query($mysqli,$sql);
						}
						$sql = "UPDATE lbkey set keyzt='1' where id='".$iddd."'"; 
						mysqli_query($mysqli,$sql);
						$zsy = $syl - 1;
						$sql = "UPDATE lblist set lbsy='".$zsy."' where id='".$lid."'"; //减去礼包数
						mysqli_query($mysqli,$sql);
						$dqtms = date('Y-m-d H:i:s');
						$sql = "insert into uslbkey set lbid='".$aid."',uid='".$G_uid."',usname='".$G_uname."',uslogo='".$G_ulogo."',lblx='".$lblx."',gmname='".$gmname."',usnick='".$G_unick."',gmlogo='".$lblogo."',lbkey='".$akey."',lbname='".$lbname."',lbtm='".$jtimes."',lbjj='".$lbjj."',lbjs='".$lbsm."',times='".$dqtms."'"; 
						mysqli_query($mysqli,$sql);
						mysqli_close($mysqli);
						$arr = array ('msg'=>66,'keys'=>$akey);//领取成功
						echo json_encode($arr);
					}else{
						$jieguo[] = 3; //余额不足（积分/平台币）
						echo json_encode($jieguo);	
					}
				}else{
					$jieguo[] =2; //无卡了
					echo json_encode($jieguo);	
				}
		    }else{
				$sql = "SELECT lbkey FROM uslbkey where lbid=".$lkey." limit 1"; //获取礼包KEY
				$result = mysqli_query($mysqli,$sql);
				while($value = mysqli_fetch_assoc($result)){
					$akey = $value['lbkey']; 
				}
		        $jieguo = array ('msg'=>1,'keys'=>$akey); //领取过
                echo json_encode($jieguo);
		    }
		}else{
		    $jieguo[] = 0; //未登陆
            echo json_encode($jieguo);
		}
	}
}

