<?php
header('content-type:text/html;charset=utf-8');
$conn=@mysql_connect("localhost","root",""); 
if (!$conn) 
{ 
    echo "连接 MySQL 失败: ";
}
$db_selected=mysql_select_db("js2018425",$conn);
mysql_query('SET NAMES UTF8');
	if(isset($_POST['username'])){
		$username=@$_POST['username'];
	}else{
		exit('非法操作');
	}
	$result=mysql_query("select * from login where name='$username'");
	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	}
	
	    $user=$_POST['username'];
		$pass=md5($_POST['password']);
	   mysql_query("insert login1 value(null,'$user','$pass')");
?>