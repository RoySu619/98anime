<?php
if(!defined('TANCHAO')){
	exit('Access Denied');
}
$op = $_GET['op'] ? $_GET['op'] : 'about';
$op = htmlspecialchars($op, ENT_QUOTES);
if($op=='about'){

}
//---------------SEO-----------------//
$config['sy_title'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_title']);
$config['sy_keyword'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_keyword']);
$config['sy_description'] = str_replace(["%getwebname%","%getweburl%"],[$config['wzname'],$config['wzurl']], $config['sy_description']);
//---------------SEO-----------------//
$tanchao->Template('about_'.$op);
