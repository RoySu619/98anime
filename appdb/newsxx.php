<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
$op = $_GET['op'] ? $_GET['op'] : 'newsxx';
if($op=='newsxx'){
	$nid= GET('id');
	if(is_numeric($nid)){
		$sql = "SELECT zxname,zxnr,times FROM newslist where id='".$nid."'  limit 1"; 
		$result = mysqli_query($mysqli,$sql);
		$newsxx = mysqli_fetch_assoc($result);
		$newsxx['zxnr'] = str_replace("&lt;","<",$newsxx['zxnr']);
		$newsxx['zxnr'] = str_replace('&gt;','>', $newsxx['zxnr']);
		$newsxx['zxnr'] = str_replace('&#39;','"', $newsxx['zxnr']);
		$newsxx['zxnr'] = str_replace('&quot;','', $newsxx['zxnr']);
		$newsxx['zxnr'] = str_replace('&quot;','', $newsxx['zxnr']);
		preg_match('/<img.+src=\"?(.+\.(jpg|gif|bmp|bnp|png))\"?.+>/i',$newsxx['zxnr'],$match);
		$nrimg = substr($match[1], 0, 4);
		if($nrimg=='http'){
			$newsxx['zxnr'] = $newsxx['zxnr'];
		}else{
			$newsxx['zxnr'] = str_replace('../../upload/',$http_type.$_SERVER['HTTP_HOST'].'/upload/', $newsxx['zxnr']);
		}
		$sql = "UPDATE newslist set zxllcs=zxllcs+1 where id='".$nid."'"; //查看数
		mysqli_query($mysqli,$sql);
		mysqli_close($mysqli);
		$arr = array('newname'=>$newsxx['zxname'],'newnr'=>$newsxx['zxnr'],'times'=>$newsxx['times']);
		echo json_encode($arr);
	}
}