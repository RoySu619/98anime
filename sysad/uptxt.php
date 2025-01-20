<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'txtup';
if($op=='txtup'){
	if($_POST['txtupup']=='on'){ 
		if($_FILES["file"]["size"] < 1024000){ //10m
			$newName = date('Y_m_d_h_i_s');
			if (file_exists("/upload/lbkey/".$newName. $_FILES["file"]["name"])){
			   echo $_FILES["file"]["name"] . " already exists. ";
			}else{
			   $houzui = '.txt';
			   move_uploaded_file($_FILES["file"]["tmp_name"], "./upload/lbkey/" . $newName. $houzui );
			   $uploadfile="./upload/lbkey/". $newName .$houzui;
			   $file = $uploadfile;
			   $dqtm = date('ymsdhis');
			   $content= file_get_contents($file, "r"); 
			   $contents= explode("\n",$content);
			   foreach($contents as $k => $v){
			   $nr = str_replace(PHP_EOL, '', $v);
			   $sql=@"insert into lbkey (lbid,lbkey)values('$dqtm','$nr')"; 
			   mysqli_query($mysqli,$sql);
			   }
			   $s = ($k + 1);
			   $arr = "$s|$dqtm";
			   $jieguo = $arr;
			   echo json_encode($jieguo);
			}
		}
	}
}

if($op=='textxg'){
	if(POST('txtxgup')=='on'){ 
		if($_FILES["file"]["size"] < 1024000){ //10m
			$newName = date('Y_m_d_h_i_s');
			if (file_exists("/upload/lbkey/".$newName. $_FILES["file"]["name"])){
			   echo $_FILES["file"]["name"] . " already exists. ";
			}else{
				$houzui = '.txt';
				move_uploaded_file($_FILES["file"]["tmp_name"], "./upload/lbkey/" . $newName. $houzui );
				$uploadfile="./upload/lbkey/". $newName .$houzui;
				$file = $uploadfile;
				$dqtm = date('ymsdhis');
				$content= file_get_contents($file, "r"); 
				$contents= explode("\n",$content);
				$ctext = texset($contents);
				foreach($ctext as $k => $v){
				   $nr = $v;
				   $sql="insert into lbkey (lbid,lbkey)values('$dqtm','$nr')"; 
				   mysqli_query($mysqli,$sql);
				}
				$keyid = POST('deltxt');
				$sql = "DELETE FROM lbkey where lbid=".$keyid.""; 
				mysqli_query($mysqli,$sql);
				$s = ($k + 1);
				$arr = "$s|$dqtm";
				$jieguo = $arr;
				echo json_encode($jieguo);
			}
		}
	}
}

function texset($nr){
	$nr = str_replace('\r', '', $nr);
	return $nr;
}




