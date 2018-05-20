<?php
header('content-type:text/html;charset=utf-8');
$conn=@mysql_connect("localhost","root",""); 
if (!$conn) 
{ 
    echo "连接 MySQL 失败: ";
}
$db_selected=mysql_select_db("js2018425",$conn);
mysql_query('SET NAMES UTF8');
 $query='SELECT src FROM src1';
 $result=mysql_query($query);
 $query1='SELECT title FROM src1';
 $result1=mysql_query($query1);
 $query2='SELECT price FROM src1';
 $result2=mysql_query($query2);
    $arr=array();
    $arr1=array();
    $arr2=array();
        	for($i=0;$i<mysql_num_rows($result);$i++){
    		$arr[$i]=mysql_fetch_row($result);
    	}
    	for($i=0;$i<mysql_num_rows($result1);$i++){
    		$arr1[$i]=mysql_fetch_row($result1);
    	}
    	for($i=0;$i<mysql_num_rows($result2);$i++){
    		$arr2[$i]=mysql_fetch_row($result2);
    	}
    $array=array(
    	"src"=>$arr,
    	"title"=>$arr1,
    	"price"=>$arr2,
    );
    echo json_encode($array);
?>