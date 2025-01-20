<?php
session_start(); 
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'code';
if($op=='code'){ 
    $tell = $_POST['tell'];
	if($tell && $_POST['yzma']=='go'){
        $sjm = time() . mt_rand(2200,9999);
		$aaa = substr($sjm, -6);
		$captch_code = sprintf($aaa);
		$_SESSION['autocode'] = $captch_code; 
		$arr = array('Message'=>'OK','code'=>$captch_code);
		echo json_encode($arr);

	}
}
if($op=='gethui'){ 
    if($tell && $_POST['yzma']=='go'){
        $sjm = time() . mt_rand(2200,9999);
		$aaa = substr($sjm, -6);
		$captch_code = sprintf($aaa);
		$_SESSION['autocode'] = $captch_code; 
		$arr = array('Message'=>'OK','code'=>$captch_code);
		echo json_encode($arr);

	}
}