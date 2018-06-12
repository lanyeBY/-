<?php
	$conn = mysqli_connect("localhost","root","123456","hotel");
	if(mysqli_connect_error()){
		echo '数据库连接错误，错误信息为：'.mysqli_connect_error();
		exit();
	}
	$conn->set_charset('UTF8');
	$username = $_GET["username"];
	$userpwd = $_GET["userpwd"];
	$sql = "SELECT * from `user` where username='$username'and userpwd='$userpwd'";
	$result = mysqli_query($conn,$sql);
	if($result){
		while($row = mysqli_fetch_assoc($result)){
			$dbusername = $row['username'];
			$dbuserpwd = $row['userpwd'];
		}
		$reg1 = "/^1\d{7}/";
		$reg2 = "/^2\d{7}/";
		$reg3 = "/^3\d{7}/";
		$reg4 = "/^4\d{7}/";
		if(is_null($dbusername)){
			echo "fail";
		}else if(preg_match($reg1,$dbusername)){
			echo "ok1";
		}else if(preg_match($reg2,$dbusername)){
			echo "ok2";
		}else if(preg_match($reg3,$dbusername)){
			echo "ok3";
		}else if(preg_match($reg4,$dbusername)){
			echo "ok4";
		}
	}else{
		echo "查询失败";
	}
	$conn->close();
?>