<?php
	$conn = mysqli_connect("localhost","root","123456","hotel");
	if(mysqli_connect_error()){
		echo "数据库连接错误，错误信息为：".mysqli_connect_error();
		exit();
	}
	$conn->set_charset("UTF8");
	$aname = $_GET['aname'];
	$anum = $_GET['anum'];
	$adec = $_GET['adec'];
	$updatesql = "UPDATE `amenity` SET `anum`='$anum',`adec`='$adec' WHERE `aname`='$aname'";
	mysqli_query($conn,$updatesql);
	echo "ok";
	$conn->close();	
?>