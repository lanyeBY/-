<?php
	$conn = mysqli_connect("localhost","root","123456","hotel");
	if(mysqli_connect_error()){
		echo '数据库连接错误，错误信息为：'.mysqli_connect_error();
		exit();
	}
	$conn->set_charset('UTF8');
	$rid = $_GET['rid'];
	$rname = $_GET['rname'];
	$sql = "SELECT 'rid' from `room` where rid='$rid'";
	$result = mysqli_query($conn,$sql);
	if($result){
		$row = mysqli_fetch_assoc($result);
		if(is_null($row)){
			$insertsql = "INSERT INTO `room`(`rid`, `rname`, `rdec`) VALUES ('$rid','$rname','可入住')";
			mysqli_query($conn,$insertsql);
			echo "ok";
		}else{
			echo "fail1";
		}
	}else{
		echo "fail2";
	}
	$conn->close();	
?>