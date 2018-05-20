<?php
header('content-type:text/html;charset=utf-8');
$conn=@mysql_connect("localhost","root",""); 
if (!$conn) 
{ 
    echo "连接 MySQL 失败: ";
}
$db_selected=mysql_select_db("js2018425",$conn);
mysql_query('SET NAMES UTF8');
 $query='SELECT src FROM shop';
 $result=mysql_query($query);
    $arr=array();
        	for($i=0;$i<mysql_num_rows($result);$i++){
    		$arr[$i]=mysql_fetch_row($result);
    	}
    $array=array(
    	"src"=>$arr,
    );
    echo json_encode($array);
?>