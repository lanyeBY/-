<?php
	$conn = mysqli_connect("localhost","root","123456","hotel");
	if(mysqli_connect_error()){
		echo '数据库连接错误，错误信息为：'.mysqli_connect_error();
		exit();
	}
	$conn->set_charset('UTF8');
	$wid = $_GET['wid'];
	$wname = $_GET['wname'];
	$wsex = $_GET['wsex'];
	$wsort = $_GET['wsort'];
	$wage = $_GET['wage'];
	$sql = "SELECT 'wid' from `worker` where wid='$wid'";
	$result = mysqli_query($conn,$sql);
	if($result){
		$row = mysqli_fetch_assoc($result);
		if(is_null($row)){
			$insertsql = "INSERT INTO `worker`(`wid`, `wname`, `wsex`,`wsort`,`wage`) VALUES ('$wid','$wname','$wsex','$wsort','$wage')";
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