<?php
if (!defined('TANCHAO')) {
exit('Access Denied');
}
$sql = "select appv,iurl,aurl from appsys where id order by id desc limit 1"; 
$result = mysqli_query($mysqli,$sql);
$app = mysqli_fetch_assoc($result);
mysqli_close($mysqli);
$http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
$ewm = $http_type.$_SERVER['HTTP_HOST'].'/mobile.php?to=appdow';
$tanchao->Template($to);