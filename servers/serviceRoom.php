<?php
	$conn = mysqli_connect("localhost","root","123456","hotel");
	if(mysqli_connect_error()){
		echo '数据库连接错误，错误信息为：'.mysqli_connect_error();
		exit();
	}
	$conn->set_charset('UTF8');
	$rid = $_GET['rid'];
	$snote = $_GET['snote'];
	$roomsql = "SELECT `rid` from `room` where `rid`='$rid'";
	$result = mysqli_query($conn,$roomsql);
	if($result){
		$row = mysqli_fetch_assoc($result);
		if(is_null($row)){
			echo "fail";
		}else{
			$updatesql = "INSERT INTO `server`(`rid`, `snote`) VALUES ('$rid','$snote')";
			mysqli_query($conn,$updatesql);
			echo "ok";			
		}
	}
	$conn->close();
?>