<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'search';
$soname = GET('keyboard');
$sotype = '1';
if($soname){
	if($op=='search'){
			if($sotype=='1'){
				$pagesize=15;
				$sql = "select id from gmlist where gmname LIKE '%$soname%' "; 
				$rs=mysqli_query($mysqli,$sql);
				$recordcount=mysqli_num_rows($rs); 
				$pagecount=($recordcount-1)/$pagesize+1;
				$pagecount=(int)$pagecount;
				if($_GET['pages']==""){ 
					$pages=1;
				}else{
					$pages=$_GET["pages"];
				}
				$startno=($pages-1)*$pagesize;
				$pagenum = $pagecount; 
				if($pagecount<="1"){
					
				}else{
					$bothnumleft = 2;//左侧显示几个分页
					$bothnumright = 2; //右侧显示几个分页
					if($pages == 1) {
						
					}else{
						$pagestr .= "<a href='index.php?to=search&type=".$sotype."&keyboard=".$soname."&pages=1'>首页</a>";
						if($pages<5 && $pages>2){
							$pagestr .= "<a href='index.php?to=search&type=".$sotype."&keyboard=".$soname."&pages=".($pages-2)."'>".($pages-2)."</a>";
						}
						if($pages<4 && $pages>1){
							$pagestr .= "<a href='index.php?to=search&type=".$sotype."&keyboard=".$soname."&pages=".($pages-1)."'>".($pages-1)."</a>";
						}
						
					}
					for($i=$bothnumleft; $i>=1; $i--) { 
						if(($pages - $i) < 3 ) { 
							continue;
						}
						$pagestr .= "<a href='index.php?to=search&type=".$sotype."&keyboard=".$soname."&pages=".($pages-$i)."'>".($pages - $i)."</a>";
					}
					
					$pagestr .= "<a href='index.php?to=search&type=".$sotype."&keyboard=".$soname."&pages=".($pages-$i)."' style='background: #23df94;color:#fff;'>".($pages)."</a>";
					
					for($i=1; $i<=$bothnumright; $i++) { 
						if(($pages + $i) > $pagenum) { 
							break;
						}
						$pagestr .= "<a href='index.php?to=search&type=".$sotype."&keyboard=".$soname."&pages=".($pages + $i)."'>".($pages + $i)."</a>";
					}
				
					if($pages == $pagenum) {
					} else {
						$quchu = $pagenum-3;
						if($pages<$quchu){
							$pagestr .= "<a href='index.php?to=search&type=".$sotype."&keyboard=".$soname."&pages=".($pages + $i)."'>..</a>";
						}
						$pagestr .= "<a href='index.php?to=search&type=".$sotype."&keyboard=".$soname."&pages=".($pagenum)."'>末页</a>";
					}
				}
				$sql = "SELECT id,gmname,gmlogo,gmbq,gmmb,gmdow,ios,Android FROM gmlist where gmname LIKE '%$soname%' order by id desc limit $startno,$pagesize"; 
				$result = mysqli_query($mysqli,$sql);
				while($value = mysqli_fetch_assoc($result)){
					$sogmlist[]= $value; 
				}
				$sqls = "SELECT COUNT(1) AS sonum from gmlist where gmname LIKE '%$soname%'"; 
				$results = mysqli_query($mysqli,$sqls);
				$sosonum = mysqli_fetch_assoc($results);
				mysqli_close($mysqli);
			}
	}
	//---------------SEO-----------------//
	$config['sy_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_title']);
	$config['sy_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_keyword']);
	$config['sy_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_description']);
	//---------------SEO-----------------//
	$tanchao->Template($op);
}else{
	header(sprintf('Location:%s', '/')); 
}

