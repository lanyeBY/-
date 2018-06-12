<?php
	$conn = mysqli_connect("localhost","root","123456","hotel");
	if(mysqli_connect_error()){
		echo "数据库连接错误，错误信息为：".mysqli_connect_error();
		exit();
	}
	$conn->set_charset("UTF8");
	$selectsql = "SELECT * FROM `amenity` WHERE `adec`='缺少'";
	$results=array();
	$result = mysqli_query($conn,$selectsql);
	if($result){
		while($row = mysqli_fetch_assoc($result)){
			$results[]=$row;
		}
		echo json_encode($results);
	}
	$conn->close();	
?>