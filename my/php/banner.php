<?php
header('content-type:text/html;charset=utf-8');
$conn=@mysql_connect("localhost","root",""); 
if (!$conn) 
{ 
    echo "连接 MySQL 失败: ";
}
$db_selected=mysql_select_db("js2018425",$conn);
mysql_query('SET NAMES UTF8');
 $query='SELECT src FROM banner';
 $result=mysql_query($query);
 $query1='SELECT li1 FROM banner';
 $result1=mysql_query($query1);
 $query2='SELECT li2 FROM banner';
 $result2=mysql_query($query2);
 $query3='SELECT li3 FROM banner';
 $result3=mysql_query($query3);
    $arr=array();
    $arr1=array();
    $arr2=array();
    $arr3=array();
    	for($i=0;$i<mysql_num_rows($result);$i++){
    		$arr[$i]=mysql_fetch_row($result);
    	}
    	for($i=0;$i<mysql_num_rows($result1);$i++){
    		$arr1[$i]=mysql_fetch_row($result1);
    	}
    	for($i=0;$i<mysql_num_rows($result2);$i++){
    		$arr2[$i]=mysql_fetch_row($result2);
    	}
    	for($i=0;$i<mysql_num_rows($result3);$i++){
    		$arr3[$i]=mysql_fetch_row($result3);
    	}

    $array=array(
    	"src"=>$arr,
    	"li1"=>$arr1,
    	"li2"=>$arr2,
    	"li3"=>$arr3
    );
    echo json_encode($array);
	//echo json_encode($array);
?>