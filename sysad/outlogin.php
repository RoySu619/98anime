<?php
if (!defined('TANCHAO')) {
	exit('Access Denied');
}
if(@$_GET['login']=='out'){
	unset($_SESSION);
    setcookie("J_uid", null, time()-3600*24*365);
    setcookie("Z_uid", null, time()-3600*24*365);
    setcookie(session_name(),session_id(),time() -8000000);
	//session_destroy();
	echo '<script>location.href="/sysadmin.php?to=login";</script>';
}
