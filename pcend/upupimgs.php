<?php 
if (!defined('TANCHAO')) {
	exit('Access Denied');
}if($G_uid<=0){header(sprintf('Location:%s', '../')); exit();}
$op = $_GET['op'] ? $_GET['op'] : 'upupimg';
if($op=='upupimg'){
	if(POST('imgup')=='yes'){
		if($_FILES["file"]["size"] < 10240){ //1MB
			$type=array("jpg","jpeg","png"); //设置允许上传文件的类型	
			function getfilesname($filename) { //获取文件后缀名函数 
				return substr(strrchr($filename, '.'), 1); 
			} 
			if(!in_array(strtolower(getfilesname($_FILES['filename']['name'])),$type)) { 
				$data[]='err';
				$arr = array('msg' => $data);
				echo json_encode($arr);
				return;
			}else{ 
				$filename=explode(".",$_FILES['filename']['name']); 
			do{ 
				$filename[0]=date('Ymdhis'); //设置随机数长度 
				$name=implode(".",$filename); 
				$uploadfile=$name; 
			} 
			while(file_exists($uploadfile)); 
			if(move_uploaded_file($_FILES['filename']['tmp_name'],$uploadfile)) { 
				if(is_uploaded_file($_FILES['filename']['tmp_name'])){
					$ret_code[]=1;//上传失败
				}else{//上传成功
					if($file_type=$_FILES["filename"]['type']=='image/gif'){
						$data = $uploadfile;
					}else{
						$data = 'upload/ltimg/tzimg/'.$uploadfile.'';
					}
					$file = $uploadfile;
					
				} 
			}
			$arr = array('msg' =>'yes','data'=>$data);
			echo json_encode($arr);
		}
		 
		//压缩图片参数
			$uploaddir_resize="./upload/ltimg/tzimg/";
			$uploadfile_resize=$uploaddir_resize.$name;
			$pic_width_max=1000;
			$pic_height_max=1000;
			$file_type=$_FILES["filename"]['type'];
		//压缩图片参数
			function ResizeImage($uploadfile,$maxwidth,$maxheight,$name){//开始压缩
				$width = imagesx($uploadfile);
				$height = imagesy($uploadfile);
				//$i=0.5;
				//生成缩略图的大小
				if(($width > $maxwidth) || ($height > $maxheight)){
					$widthratio = $maxwidth/$width;
					$heightratio = $maxheight/$height;
				if($widthratio < $heightratio){
					$ratio = $widthratio;
				}else{
					$ratio = $heightratio;
				}
				$newwidth = $width * $ratio;
				$newheight = $height * $ratio;
				/*$newwidth = $width * $i;
				$newheight = $height * $i;*/
				if(function_exists("imagecopyresampled")){
					$uploaddir_resize = imagecreatetruecolor($newwidth, $newheight);
					imagecopyresampled($uploaddir_resize, $uploadfile, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);
				}else{
					$uploaddir_resize = imagecreate($newwidth, $newheight);
					imagecopyresized($uploaddir_resize, $uploadfile, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);
				}
					ImageJpeg ($uploaddir_resize,$name);
					ImageDestroy ($uploaddir_resize);
				}else{
					ImageJpeg ($uploadfile,$name);
				}
			}
		 
			if($_FILES["filename"]['size']){
				if($file_type == "image/pjpeg" || $file_type == "image/jpg" || $file_type == "image/jpeg"){
					$im = imagecreatefromjpeg($uploadfile);
				}elseif($file_type == "image/png"){
					$im = imagecreatefrompng($uploadfile);
				}elseif($file_type == "image/gif"){
					$im = imagecreatefromgif($uploadfile);
				}else{
					$im = imagecreatefromjpeg($uploadfile);
				}
				if($im){
					ResizeImage($im,$pic_width_max,$pic_height_max,$uploadfile_resize);
					ImageDestroy ($im);
					//压缩结束删除原图
					unlink($file);
				}
			} 
		}else{
			$arr = array('msg'=>0);
			echo json_encode($arr);
		}
	}
}
//■■■■■■■■■■■■■■■■公共单图上传■■■■■■■■■■■■■■■■
if($op=='dup'){
	if(POST('dup')=='on'){ //ajax 根目录/upload/下
		$newName = date('Ymdhis');
	    $mulu = POST('open'); //图片文件夹
		if($_FILES["file"]["size"] < 50000){ //500KB
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
				$jieguo =$arr;
				echo json_encode($jieguo);
			}
		}
		}else{
			$arr = array('yes'=>0);
			$jieguo =$arr;
			echo json_encode($jieguo);
		}
	}
}

if($op=='usupimg'){//base64 UP
	$base64_image_content = POSTIMG64('bases');
	$dtms = date('Ymdhis',time());
	if(preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_image_content, $result)){
		$type = $result[2];
		$new_file = "upload/uslogo/"; 
		if(!file_exists($new_file)){
			mkdir($new_file, 0777);
		}
		if($type=='jpeg' || $type=='png'){
			$new_file = $new_file.time().".jpg";
			if (file_put_contents('./'.$new_file, base64_decode(str_replace($result[1], '', $base64_image_content)))){
				$arr = array('msg'=>66,'data'=>'/'.$new_file);
				echo json_encode($arr);
			}
		}else{
			echo json_encode(1);
		}
	}
}

?>