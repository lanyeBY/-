<?php
	$conn = mysqli_connect("localhost","root","123456","hotel");
	if(mysqli_connect_error()){
		echo "数据库连接错误，错误信息为：".mysqli_connect_error();
		exit();
	}
	$conn->set_charset("UTF8");
	$sql = "SELECT * from `server`";
	$results= array();
	$result = mysqli_query($conn,$sql);
	if($result){
		while($row = mysqli_fetch_assoc($result)){
			$results[]=$row;
		}
		echo json_encode($results);
	}
	if(isset($_GET['rid'])){
		$rid = $_GET['rid'];
		$snote = $_GET['snote'];
		$deletesql = "DELETE FROM `server` WHERE `rid`='$rid' AND `snote`='$snote'";
		mysqli_query($conn,$deletesql);
	}
	$conn->close();	
?>