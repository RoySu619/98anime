<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
if($G_uid==''){
	header(sprintf('Location:%s', './index.php?to=login')); 
	exit();
}
$op = $_GET['op'] ? $_GET['op'] : 'user';

if($op=='user'){//修改资料
	$pagesize=15;
	$sql = "select id from uslbkey"; 
	$rs=mysqli_query($mysqli,$sql);
	$recordcount=mysqli_num_rows($rs); 
	$pagecount=($recordcount-1)/$pagesize+1;
	$pagecount=(int)$pagecount;
	if(is_numeric($_GET['pages'])==""){ 
		$pages=1;
	}else{
		$pages=trim($_GET["pages"]);
	}
	$startno=($pages-1)*$pagesize;
	$pagenum = $pagecount;
	if($pagecount<="1"){
	    
	}else{
		$bothnumleft = 3;//左侧显示几个分页
		$bothnumright = 2; //右侧显示几个分页
		if($pages == 1) {
			
		} else {
			$pagestr .= "<a href='index.php?to=user&op=uslb&pages=1'>首页</a>";
			if($pages<5 && $pages>2){
			  $pagestr .= "<a href='index.php?to=user&op=uslb&pages=".($pages-2)."'>".($pages-2)."</a>";
			}
			if($pages<4 && $pages>1){
			  $pagestr .= "<a href='index.php?to=user&op=uslb&pages=".($pages-1)."'>".($pages-1)."</a>";
			}
			
		}
		for($i=$bothnumleft; $i>=1; $i--) {//已翻页数
		if(($pages - $i) < 3 ) { 
		continue;
		}
		  $pagestr .= "<a href='index.php?to=user&op=uslb&pages=".($pages-$i)."'>".($pages - $i)."</a>";
		}
		
		$pagestr .= "<a href='index.php?to=user&op=uslb&pages=".($pages-$i)."' style='background:#23df94;color:#fff;'>".($pages)."</a>";
		
		for($i=1; $i<=$bothnumright; $i++) { 
		if(($pages + $i) > $pagenum) { 
        break;
		
		}
		$pagestr .= "<a href='index.php?to=user&op=uslb&pages=".($pages + $i)."'>".($pages + $i)."</a>";
		}
	
		if($pages == $pagenum) {
		} else {
			$quchu = $pagenum-3;
			if($pages<$quchu){
			$pagestr .= "<a href='index.php?to=user&op=uslb&pages=".($pages + $i)."'>..</a>";
			}
			$pagestr .= "<a href='index.php?to=user&op=uslb&pages=".($pagenum)."'>末页</a>";
		}
	}
	$sql = "SELECT gmlogo,gmname,lbname,lbtm,lbjj,lbtm,lbkey,times FROM uslbkey where id order by id desc limit $startno,$pagesize"; 
	$result = mysqli_query($mysqli,$sql);
	while($value = mysqli_fetch_assoc($result)){ 
		$lblist[]= $value; 
	}
//---------------SEO-----------------//
$config['sy_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_title']);
$config['sy_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_keyword']);
$config['sy_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_description']);
//---------------SEO-----------------//
$tanchao->Template('user_'.$op);
}

if($op=='user_date'){
	if(POST('myzl')=='go'){
		$nick = nofake(POST('nicks'));
		$emaild = POSTEAMIL('emails');
		if(is_numeric(POST('tells'))){
			$tell = POST('tells');
		}else{
			$tell = false;
		}
		if(is_numeric(POST('qqs'))){
			$qq = trim(POST('qqs'));
		}
		$wx = trim(POST('weixs'));
		if($nick){
			if($tell){
					$postlogo = POSTIMG('ulogo');
					if($postlogo==''){
						$logos='userlogo=userlogo,';
					}else{
						$logos="userlogo='".$postlogo."',";
					}
					$sql = "Update user set $logos nickname='".$nick."',email='".$emaild."',tell='".$tell."',qq='".$qq."', weixi='".$wx."' where uid='".$G_uid."'"; 
					mysqli_query($mysqli,$sql);
					mysqli_close($mysqli);
					$arr[] = '6';
					echo json_encode($arr);	
				
			}else{
				$arr[] = '2';
				echo json_encode($arr);
			}
		}else{
			$arr[] = '1';
			echo json_encode($arr);
		}
	}
}



