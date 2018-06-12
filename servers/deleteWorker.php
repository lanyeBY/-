<?php
	$conn = mysqli_connect("localhost","root","123456","hotel");
	if(mysqli_connect_error()){
		echo '数据库连接错误，错误信息为：'.mysqli_connect_error();
		exit();
	}
	$conn->set_charset('UTF8');
	$wid = $_GET['wid'];
	$deletesql = "DELETE FROM `worker` WHERE `wid`='$wid'";
	mysqli_query($conn,$deletesql);
	echo "ok";
	$conn->close();	
?>