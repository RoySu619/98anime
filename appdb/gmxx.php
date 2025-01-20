<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}

$op = $_GET['op'] ? $_GET['op'] : 'gmxx';
if($op=='gmxx'){
	$gid = GET('id');
	if(is_numeric($gid)){
		$sql = "SELECT gmname,gmlogo,gmmb,gmbq,gmjj,gmjs,gmtuid,gmpf,gmdow,Android,ios,urlpd FROM gmlist where id='".$gid."' limit 1 "; 
		$result = mysqli_query($mysqli,$sql);
		while($appinfo = mysqli_fetch_assoc($result)){
			$gmxx[] = $appinfo;
			$tid = $appinfo['gmtuid'];
		}
		$sql = "UPDATE gmlist set gmdj=gmdj+1 where id='".$gid."' limit 1"; //查看数
		mysqli_query($mysqli,$sql);
		//截图
		$sql = "SELECT imgs FROM gmimg where cpid='".$tid."'"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){ 
			$imgss[] = $value;
		}
		$arr = array('gm'=>$gmxx,'img'=>$imgss);
		echo json_encode($arr);
	}
}



//游戏礼包
if($op=='gmxx_lb'){
	$gid = GET('id');
	$pagesize=7;

	$sql = "SELECT id,keyid,lbname,lbjj,lbsm,lbsy FROM lblist where lbsy!='0' and gid='".$gid."' order by id desc limit 8"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$lblists[]= $value; 
	}
	$arr = array('lblist'=>$lblists);
	echo json_encode($arr);
}
//领取礼包
if($op=='gmxx_getlb'){
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
						$sql = "UPDATE lbkey set keyzt='1' where lbkey='".$iddd."'"; 
						mysqli_query($mysqli,$sql);
						$zsy = $syl - 1;
						$sql = "UPDATE lblist set lbsy='".$zsy."' where id='".$lid."'"; //减去礼包数
						mysqli_query($mysqli,$sql);
						$dqtms = date('Y-m-d H:i:s');
						$sql = "insert into uslbkey set lbid='".$aid."',uid='".$G_uid."',usname='".$G_uname."',uslogo='".$G_ulogo."',lblx='".$lblx."',gmname='".$gmname."',usnick='".$G_unick."',gmlogo='".$lblogo."',lbkey='".$akey."',lbname='".$lbname."',lbtm='".$jtimes."',lbjj='".$lbjj."',lbjs='".$lbsm."',times='".$dqtms."'"; 
						mysqli_query($mysqli,$sql);
						mysqli_close($mysqli);
						$akeys  = str_replace('\r','',$akey);
						$arr = array ('msg'=>66,'keys'=>$akeys);//领取成功
						echo json_encode($arr);
					}else{
						$jieguo[] = 3; //余额不足（积分/平台币）
						echo json_encode($jieguo);	
					}
				}else{
					$jieguo[] = 2; //无卡了
					echo json_encode($jieguo);	
				}
		    }else{
				$sql = "SELECT lbkey FROM uslbkey where uid='".$G_uid."' and usname='".$G_uname."' and lbid='".$lkey."' limit 1"; //获取礼包KEY
				$result = mysqli_query($mysqli,$sql);
				while($value = mysqli_fetch_assoc($result)){
					$akey = $value['lbkey']; 
				}
				$akeys  = str_replace('\r','',$akey);
		        $jieguo = array ('msg'=>1,'keys'=>$akeys); //领取过
                echo json_encode($jieguo);
		    }
		}else{
		    $jieguo[] = 0; //未登陆
            echo json_encode($jieguo);
		}
	}
}


//游戏资讯
if($op=='gmxx_zx'){
	$gid = GET('id');
	$pagesize=5;
	$sql = "select id from newslist where zxlb like '%攻略%' and gid='".$gid."'"; 
	$rs=mysqli_query($mysqli,$sql);
	$recordcount=mysqli_num_rows($rs); 
	$pagecount=($recordcount-1)/$pagesize+1;
	$pagecount=(int)$pagecount;
	if(is_numeric(GET('pages'))==""){ 
		$pages=1;
	}else{
		$pages=GET("pages");
	}
	$startno=($pages-1)*$pagesize;
	$pagenum = $pagecount;
	$sql = "SELECT id,zxname,zxjj,times FROM newslist where zxlb like '%攻略%' and gid='".$gid."' order by times desc limit $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$nelist[]= $value; 
	}
	$arr = array('nelist'=>$nelist,'pagenum'=>$pagenum);
	echo json_encode($arr);
}


//游戏评论
if($op=='gmpl'){
	if(GET('oppl')=='go'){
		$cgid = GET('id');
		//游戏总评分
		$sql = "SELECT AVG(uspf) as cpjs FROM comment where did='".$cgid."' and hid='0'"; //游戏平均分数
		$result = mysqli_query($mysqli,$sql);
		$cpjs = mysqli_fetch_assoc($result);
		$cpjx= $cpjs['cpjs']; 
			
		$sql = "SELECT COUNT(1) as zxx FROM comment where did='".$cgid."' and hid='0'"; //游戏总评分
		$result = mysqli_query($mysqli,$sql);
		$zxx = mysqli_fetch_assoc($result);
		$zsx= $zxx['zxx']; 
	
		$sql = "SELECT COUNT(uspf) as 5xx FROM comment where did='".$cgid."' and hid='0' and uspf='5'"; //5星
		$result = mysqli_query($mysqli,$sql);
		$s5xx = mysqli_fetch_assoc($result);
		$c5x= $s5xx['5xx']; 
		
		$sql = "SELECT COUNT(uspf) as 4xx FROM comment where did='".$cgid."' and hid='0' and uspf='4' "; 
		$result = mysqli_query($mysqli,$sql);
		$s4xx = mysqli_fetch_assoc($result);
		$c4x= $s4xx['4xx']; 
		
		$sql = "SELECT COUNT(uspf) as 3xx FROM comment where did='".$cgid."' and hid='0' and uspf='3'"; 
		$result = mysqli_query($mysqli,$sql);
		$s3xx = mysqli_fetch_assoc($result);
		$c3x= $s3xx['3xx']; 
	
		$sql = "SELECT COUNT(uspf) as 2xx FROM comment where did='".$cgid."' and hid='0' and uspf='2'"; 
		$result = mysqli_query($mysqli,$sql);
		$s2xx = mysqli_fetch_assoc($result);
		$c2x= $s2xx['2xx']; 
		
		$sql = "SELECT COUNT(uspf) as 1xx FROM comment where did='".$cgid."' and hid='0' and uspf='1' "; 
		$result = mysqli_query($mysqli,$sql);
		$s1xx = mysqli_fetch_assoc($result);
		$c1x= $s1xx['1xx']; 
		
		if($zsx!=0){
			$bfb5 = ($c5x / $zsx ) * 100;
			$bfb4 = ($c4x / $zsx ) * 100;
			$bfb3 = ($c3x / $zsx ) * 100;
			$bfb2 = ($c2x / $zsx ) * 100;
			$bfb1 = ($c1x / $zsx ) * 100;
			$cpjxs = sprintf("%.1f",$cpjx);
		}
		//主玩家评论
		
		$sql = "SELECT id,hid,uslogo,usnick,plnr,uspf,huifu,dianzan,times FROM comment where hid='0' and ptpye='g' and did='".$cgid."' order by huifu desc limit 5"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){ 
			$zuspl[]= $value; 
		}
		//回复玩家评论
		$sql = "SELECT id,hid,uslogo,usnick,plnr,uspf,dianzan,husnick,times FROM comment where hid!='0' and ptpye='g' and did='".$cgid."' order by times asc limit 15"; 
		$result = mysqli_query($mysqli,$sql);
		while($value = mysqli_fetch_assoc($result)){ 
			$huspl[]= $value; 
		}
		$sql = "SELECT COUNT(did) AS plnum FROM comment where did='".$cgid."'"; //玩家评论
		$result = mysqli_query($mysqli,$sql);
		$value = mysqli_fetch_assoc($result);
		$usplnum = $value['plnum']; 
		
		$sql = "SELECT COUNT(1) as ren FROM comment where did='".$cgid."' and hid='0'"; //评分人数
		$result = mysqli_query($mysqli,$sql);
		$rens = mysqli_fetch_assoc($result);
		$ren= $rens ['ren']; 
	
		mysqli_close($mysqli);
		
		$arr = array('pfrs'=>$ren,'pjfs'=>$cpjxs,'x5'=>$bfb5,'x4'=>$bfb4,'x3'=>$bfb3,'x2'=>$bfb2,'x1'=>$bfb1,'lz'=>$zuspl,'hf'=>$huspl,'num'=>$usplnum);
		echo json_encode($arr);
	}
}

//楼主评论
if($op=='moerlz'){
	$lid= GET('id');
	$sql = "SELECT usnick,id,uslv,times,plnr,huifu,dianzan FROM comment where hid='0' and id='".$lid."' limit 1"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$lzlist[]= $value; 
	}
	//回复楼主列表
	$pagesize=5;
	$sql = "select id from comment where hid='".$lid."'"; 
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
	$pagenum = $pagecount;
	$sql = "SELECT usnick,id,uslogo,times,plnr,huifu,dianzan,husnick FROM comment where hid='".$lid."'  order by id asc limit $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$hftlist[]= $value; 
	}
	mysqli_close($mysqli); 
	$arr = array('lzpl'=>$lzlist,'ushf'=>$hftlist,'pagenum'=>$pagenum);
	echo json_encode($arr);
}
//发布评论
if($op=='comment'){
	$uids = $G_uid;
	if($uids!=''){
		if(POST('pltj')=='go'){
			$nr = POST('huif');
			if($nr==''){
				$arr = array('msg'=>'1');
				$jieguo = $arr;
				echo json_encode($jieguo);
			}else{
				$dids = POST('did');// 新闻ID 或者游戏ID
				$hids = POST('pid') ? POST('pid') : '0';
				$hnames = POST('pnick') ? POST('pnick') : '0'; 
				$plnra = nofake($_POST['huif']);//评论内容
				$plnrs =$plnra;//处理评论  
				$mypfs = POST('mypf') ? POST('mypf') :'3';//评分
				$dqtms = date('Y-m-d H:i:s');
				$tpye = POST('tpx');
				$sql = "insert into comment set did='".$dids."',ptpye='".$tpye."',uid='".$uids."',usnick='".$G_unick."',uslogo='".$G_ulogo."',uspf='".$mypfs."',uslv='".$G_lv."',hid='".$hids."',husnick='".$hnames."',plnr='".$plnrs."',times='".$dqtms."'"; 
				mysqli_query($mysqli,$sql);
				$sql = "UPDATE comment set huifu=huifu+1 where id='".$hids."'"; 
				mysqli_query($mysqli,$sql);
				$sql = "SELECT AVG(uspf) as cpjs FROM comment where did='".$dids."' and hid='0'"; //游戏平均分数
				$result = mysqli_query($mysqli,$sql);
				$cpjf = mysqli_fetch_assoc($result);
				$cpjx= $cpjf['cpjs']; 
				$sql = "UPDATE gmlist set gmpf='".$cpjx."' where id='".$dids."'"; 
				mysqli_query($mysqli,$sql);
				$arr = array('msg'=>'3','nick'=>$G_unick,'logo'=>$G_ulogo);
				$jieguo = $arr;
				echo json_encode($jieguo);
			}
		}
	}else{
		$arr = array('msg'=>'0');
		$jieguo = $arr;
		echo json_encode($jieguo);
	}
}

//回复评论
if($op=='commenth'){
	if(POST('plhf')=='go'){
			$dids = POST('did');// 新闻ID 或者游戏ID
			$hid = POST('hid');//发表评论者ID，
			$sjname = date('YmdHis');
			$huslogos = POST('huslogos');
			$hnames = POST('hname') ? POST('hname') : '0'; 
			$plnra = nofake($_POST['uspl']);//评论内容
			$plnrs =str_replace(array("\r\n", "\r", "\n"), "", $plnra);//处理评论  
			$dqtms = date('Y-m-d H:i:s');
			$tpye = POST('tpx');
			$sql = "insert into comment set did='".$dids."',ptpye='".$tpye."',uid='".$uids."',usnick='".$G_unick."',uslogo='".$G_ulogo."',uslv='".$G_lv."',hid='".$hid."',husnick='".$hnames."',plnr='".$plnrs."',times='".$dqtms."'"; 
			mysqli_query($mysqli,$sql);
			$sql = "UPDATE comment set huifu=huifu+1 where id='".$hid."'"; 
			mysqli_query($mysqli,$sql);
			$arr = array('msg'=>'3','nick'=>$G_unick);
			$jieguo = $arr;
			echo json_encode($jieguo);
	}
}

if($op=='dzup'){//点赞
	if(POST('dz-tj-up')=='go'){
		$id = POST('plid');
		$sql = "UPDATE comment set dianzan=dianzan+1 where id='".$id."'";
		mysqli_query($mysqli,$sql);
		$jieguo[]='1';
		echo json_encode($jieguo);
	}
}
if($op=='dzd'){
	if(POST('dz-tj-d')=='go'){//减点赞
		$id = POST('plid');
		$sql = "UPDATE comment set dianzan=dianzan-1 where id='".$id."'";
		mysqli_query($mysqli,$sql);
		$jieguo[]='1';
		echo json_encode($jieguo);
	}
}
if($op=='dows'){//下载次数
	$gids = GET('id');
	$sql = "UPDATE gmlist set gmdow=gmdow+1 where id='".$gids."'"; 
	mysqli_query($mysqli,$sql);
}
