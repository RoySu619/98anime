<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op= $_GET['op'] ? $_GET['op'] : 'sys';
$newName = date('Ymdhis');
if($op=='sys'){
//■■■■■■■■■■■■■■■■系统设置■■■■■■■■■■■■■■■■
    if($_POST['upup']=='sys'){
	    if($_FILES["file"]["size"] < 300000){//300kb
			//logo
			if ($_FILES["file"]["type"] == "image/jpeg" || $_FILES["file"]["type"] == "image/pjpeg" || $_FILES["file"]["type"] == "image/png"){
				if ($_FILES["file"]["error"] > 0){
				}else{
					if (file_exists("./image/logo". $_FILES["file"]["name"])){
						echo $_FILES["file"]["name"] . " already exists. ";
					}else{
						if($_FILES["file"]["type"] == "image/jpeg" || $_FILES["file"]["type"] == "image/pjpeg"){
							$houzui = '.jpg';
						}
						if($_FILES["file"]["type"] == "image/png"){
							$houzui = '.png';
						}
						move_uploaded_file($_FILES["file"]["tmp_name"], "./image/logo". $houzui );
						$uplogo="image/logo".$houzui;
					}
				}
			}
		}
		if($_FILES["file1"]["size"] < 300000){//300kb
			//ico
			if ($_FILES["file1"]["type"] == "image/x-icon" ){
				if ($_FILES["file1"]["error"] > 0){
				}else{
					if (file_exists("./icon". $_FILES["file1"]["name"])){
						echo $_FILES["file1"]["name"] . " already exists. ";
					}else{
						$houzui = '.ico';
						move_uploaded_file($_FILES["file1"]["tmp_name"], "./icon.ico" );
						$upico="/icon.ico";
						
					}
				}
			}
		}
		
		//微信二维码
		
		if($_FILES["file2"]["size"] < 300000){//300kb
			if ($_FILES["file2"]["type"] == "image/jpeg" || $_FILES["file2"]["type"] == "image/pjpeg" || $_FILES["file2"]["type"] == "image/png"){
				if ($_FILES["file2"]["error"] > 0){
				}else{
					if (file_exists("./image/wxewm". $_FILES["file2"]["name"])){
						echo $_FILES["file2"]["name"] . " already exists. ";
					}else{
						if($_FILES["file2"]["type"] == "image/jpeg" || $_FILES["file2"]["type"] == "image/pjpeg"){
							$houzui = '.jpg';
						}
						if($_FILES["file2"]["type"] == "image/png"){
							$houzui = '.png';
						}
						move_uploaded_file($_FILES["file2"]["tmp_name"], "./image/wxewm". $houzui );
						$upewm="image/wxewm".$houzui;
					}
				}
			}
        }
		
	}

}
//■■■■■■■■■■■■■■■■推荐广告/ APP闪屏■■■■■■■■■■■■■■■■
if($op=='appspgg'){
	if(POST('uptjgg')=='on'){
		if($_FILES["file"]["size"] < 1000000){ //300KB
			if ($_FILES["file"]["type"] == "image/jpeg" || $_FILES["file"]["type"] == "image/gif" || $_FILES["file"]["type"] == "image/pjpeg" || $_FILES["file"]["type"] == "image/png"){
				if ($_FILES["file"]["error"] > 0){
				}else{
					if (file_exists("/image/".$newName. $_FILES["file"]["name"])){
						echo $_FILES["file"]["name"] . " already exists. ";
					}else{
					if($_FILES["file"]["type"] == "image/jpeg" || $_FILES["file"]["type"] == "image/pjpeg"){
						$houzui = '.jpg';
					}else if($_FILES["file"]["type"] == "image/gif" ){
						$houzui = '.gif'; 
					}else{
						$houzui = '.png'; 
					}
						move_uploaded_file($_FILES["file"]["tmp_name"], "./image/" . $newName. $houzui );
						$uploadfile="image/". $newName .$houzui;
						$arr = array('yes'=>1,'lgurl'=>$uploadfile);
						echo json_encode($arr);
					}
				}
			}
		}else{
			$arr = array('yes'=>99);
			echo json_encode($arr);
		}
	}
}

//■■■■■■■■■■■■■■■■公共批量上传■■■■■■■■■■■■■■■■
if($op=='pup'){
	if(@$_POST['pup']=='on'){ //ajax 根目录/upload/下
		$mulu = $_POST['open']; //图片文件夹
		header('content-type:text/html charset:utf-8');
			$dir_base = "./upload/".$mulu."/";
			$newName = date('Y_m_d_H_i_s');
			$index = 0; 
			foreach($_FILES as $file){
				$upload_file_name = 'duofile' . $index;
				$new = "".$newName."_".$index."" ;
				$filename = $_FILES[$upload_file_name]['name'];
				$gb_filename = iconv('utf-8','gb2312',$filename);  
				$isMoved = false; 
				$MAXIMUM_FILESIZE = 0.5 * 1024 * 1024; 
				$rEFileTypes = "/^\.(jpg|jpeg|png){1}$/i"; 
				if($gb_filename == "image/jpeg" || $gb_filename == "image/pjpeg"){
					$houzui = '.jpg';
				}else{
					$houzui = '.png'; 
				}
				if ($_FILES[$upload_file_name]['size'] <= $MAXIMUM_FILESIZE && 	preg_match($rEFileTypes, strrchr($gb_filename, '.'))) {
					$isMoved = @move_uploaded_file ( $_FILES[$upload_file_name]['tmp_name'], $dir_base . $new . $houzui); 
					$duotu[]="upload/".$mulu."/". $new .$houzui;
					$arr = array('yes'=>1,'imgs'=>$duotu);
				}else{
					$arr = array('yes'=>99);
				}
			
			$index++;
			 
			}
			echo json_encode($arr);
		
	}
}
//■■■■■■■■■■■■■■■■公共单图上传■■■■■■■■■■■■■■■■
if($op=='dup'){
	if(@$_POST['dup']=='on'){ //ajax 根目录/upload/下
	    $mulu = $_POST['open']; //图片文件夹
		if($_FILES["file"]["size"] < 300000){ //300KB
			if ($_FILES["file"]["type"] == "image/jpeg" || $_FILES["file"]["type"] == "image/pjpeg" || $_FILES["file"]["type"] == "image/png"){
				if ($_FILES["file"]["error"] > 0){
				}else{
					if($_FILES["file"]["type"] == "image/jpeg" || $_FILES["file"]["type"] == "image/pjpeg"){
						$houzui = '.jpg';
					}else{
						$houzui = '.png'; 
					}
					move_uploaded_file($_FILES["file"]["tmp_name"], "./upload/".$mulu."/" . $newName. $houzui );
					$uploadfile="upload/".$mulu."/". $newName .$houzui;
					$arr = array('yes'=>1,'imgurl'=>$uploadfile);
					echo json_encode($arr);
				}
			}
		}else{
			$arr = array('yes'=>99);
			echo json_encode($arr);
		}
	}
}
?>