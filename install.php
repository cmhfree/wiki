<?php
require 'config.php';
$mysql = new SaeMysql();
$sql = "show tables like '".DB_TABLEPRE."setting'";
$data = $mysql->getData( $sql );
if($data){
	$sql = "SELECT * FROM ".DB_TABLEPRE."setting where variable='site_url'";
	$data = $mysql->getData( $sql );
	if( $mysql->errno() != 0 )
	{
		die( "Error:" . $mysql->errmsg() );
	}
	if(isset($data) && !empty($data)){
		$installed       = true ;
	}else{
		$installed       = false;
	}

	$mysql->closeDb();
}else{
	$installed       = false;
}	
if ($installed)
{
	header('location: index.php');
	exit();
}

if(isset($_GET['sae_token']) && !empty($_GET['sae_token'])) {
	$sae_token = $_GET['sae_token'];
}elseif(isset($_POST['ak']) && !empty($_POST['ak'])){
	$saekey =trim($_POST['ak']).trim($_POST['sk']);
	$sae_token = md5($saekey);
}else{
	$sae_token = '';
}
		
		
if(!empty($sae_token)) {
	$install_token = md5(SAE_ACCESSKEY.SAE_SECRETKEY);

	if($install_token == $sae_token) {
	
		$mysql = new SaeMysql();

		//导入数据库文件
		$sql=file_get_contents('data/hdwiki.sql');
		$sql_list = explode(";\n", $sql);
		$sql_num=count($sql_list);

		for ($i=0;$i<$sql_num;$i++)
		{
			if (!empty($sql_list[$i]))
			{
				$mysql->runSql($sql_list[$i]);
			}
		}
		//change by Pangee,SAE
		$sql = "UPDATE `wiki_setting` SET `value`='http://".$_SERVER['HTTP_HOST']."' WHERE `variable`='site_url'";
		$mysql->runSql( $sql );
		$mysql->closeDb();
		//echo information
		echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
		echo '<div style="margin:40px 300px;">';
		echo '<h1 style="font-size:22px;margin:0;line-height:36px;">恭喜你，安装成功！</h1>';
		echo '<h3>管理员帐号：<font color="#CC0000"><u>admin</u></font> &nbsp;&nbsp;&nbsp;&nbsp; 密码：<font color="#CC0000"><u>password</u></font></h3>';
		echo '<h4>快速链接： <a href="./index.php">网站首页</a> &nbsp;&nbsp;&nbsp;&nbsp; <a href="./index.php?admin_main">管理后台</a></h4><br/><br/><p>Host on <a href="http://sae.sina.com.cn/">SAE</a></p>';
		echo '</div>';
		//header('location: index.php');
		exit();
	}else{
		echo '
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<style>
		html,body,div,dl,dt,dd,ul,ul li,h1,h2,h3,h4,h5,h6,pre,input,p,blockquote,th,td,form{margin:0;padding:0;}
		ul,ul li,dd,dt,dl{ list-style:none;}
		body{text-align:center;font:12px/1.2 verdana,SimSun,Arial,Helvetica,"sans-serif";}
		h3,.h3{font-size:12px; font-weight:normal;}
		input,select,textarea{font-size:12px; color:#111111;font-family:verdana,"lucida grande",taho,"trebuchet ms",sans-serif;}
		.btn_inp{line-height:20px;padding:2px 6px 1px 6px;*padding:2px 2px 1px 2px;margin-right:3px;font-size:14px;}
		.login-static .col-ul{margin-top:15px;}
		.login-static li{margin-left:60px;position:relative;padding:4px 0;}
		.login-static li span{position:absolute;top:5px;left:-60px;width:50px;text-align:right;display:block;}
		.login-static li .inp_txt{width:120px;padding:2px 8px;height:16px;vertical-align:middle;}
		.register{margin-top:20px;}
		.reg-r{width:390px;height:345px;background:#e8e8e8;margin:3px 0 0 3px; position:relative;margin:0 auto;text-align:left;}
		.reg_main{position:absolute; top:-4px;left:-4px;width:388px;height:343px;background:#f7f7f7;border:1px #ccc solid;}
		.reg_main h2{border-bottom:1px #ccc solid;height:27px;line-height:27px;padding:0 12px;}
		.reg_main li{margin-left:90px;padding:10px 0;}
		.reg_main li span{left:-90px;width:80px;top:18px;}
		.reg_main li .inp_txt{width:100px;}
		.reg_main li input{margin-right:8px; vertical-align:middle;}
		.reg_main li label{ font-family:SimSun, Arial, Helvetica, sans-serif;}
		.register .col-dl{float:left;width:395px;padding-left:70px;margin-top:20px;margin-bottom:10px; line-height:22px;}
		</style>
		<body>
		<div class="r reg-r">
			<div class="login-static reg_main">
			<h2 class="h3 a-r">您尚未安装，请填写相关信息完成安装</h2>
		
			<form name="box-login" action="install.php" method="post">
			<ul class="col-ul">
				<li>access key或者secert key 不正确，请重新填写</li>
				<li><span>access key：</span>	<input name="ak" id="ak"  tabindex="3" type="text" class="inp_txt"  maxlength="32" /><label id="checkak">*sae提供给应用的access key!</label></li>
				<li><span>secert key：</span>	<input name="sk" id="sk"  tabindex="4"  type="password" class="inp_txt" maxlength="50" /><label id="checksk">*sae提供给应用的secert key!</label></li>
						<li><input name="submit" type="submit" value="安装应用" class="btn_inp" tabindex="6" /></li>
		
			</ul>
			</form>
			</div>
			</div></body>
		';
		
	}
}else{

echo '
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<style>
html,body,div,dl,dt,dd,ul,ul li,h1,h2,h3,h4,h5,h6,pre,input,p,blockquote,th,td,form{margin:0;padding:0;}
ul,ul li,dd,dt,dl{ list-style:none;}
body{text-align:center;font:12px/1.2 verdana,SimSun,Arial,Helvetica,"sans-serif";}
h3,.h3{font-size:12px; font-weight:normal;}
input,select,textarea{font-size:12px; color:#111111;font-family:verdana,"lucida grande",taho,"trebuchet ms",sans-serif;}
.btn_inp{line-height:20px;padding:2px 6px 1px 6px;*padding:2px 2px 1px 2px;margin-right:3px;font-size:14px;}
.login-static .col-ul{margin-top:15px;}
.login-static li{margin-left:60px;position:relative;padding:4px 0;}
.login-static li span{position:absolute;top:5px;left:-60px;width:50px;text-align:right;display:block;}
.login-static li .inp_txt{width:120px;padding:2px 8px;height:16px;vertical-align:middle;}
.register{margin-top:20px;}
.reg-r{width:390px;height:345px;background:#e8e8e8;margin:3px 0 0 3px; position:relative;margin:0 auto;text-align:left;}
.reg_main{position:absolute; top:-4px;left:-4px;width:388px;height:343px;background:#f7f7f7;border:1px #ccc solid;}
.reg_main h2{border-bottom:1px #ccc solid;height:27px;line-height:27px;padding:0 12px;}
.reg_main li{margin-left:90px;padding:10px 0;}
.reg_main li span{left:-90px;width:80px;top:18px;}
.reg_main li .inp_txt{width:100px;}
.reg_main li input{margin-right:8px; vertical-align:middle;}
.reg_main li label{ font-family:SimSun, Arial, Helvetica, sans-serif;}
.register .col-dl{float:left;width:395px;padding-left:70px;margin-top:20px;margin-bottom:10px; line-height:22px;}
</style>
<body>
<div class="r reg-r">
	<div class="login-static reg_main">
	<h2 class="h3 a-r">您尚未安装，请填写相关信息完成安装</h2>

	<form name="box-login" action="install.php" method="post">
	<ul class="col-ul">
		
		<li><span>access key： </span>	<input name="ak" id="ak"  tabindex="3" type="text" class="inp_txt"  maxlength="32" /><label id="checkak">*sae提供给应用的access key!</label></li>
		<li><span>secert key： </span>	<input name="sk" id="sk"  tabindex="4"  type="password" class="inp_txt" maxlength="50" /><label id="checksk">*sae提供给应用的secert key!</label></li>
				<li><input name="submit" type="submit" value="安装应用" class="btn_inp" tabindex="6" /></li>

	</ul>
	</form>
	</div>
	</div></body>
';
}