<?php
	$conn = mysqli_connect("localhost","root","123456","hotel");
	if(mysqli_connect_error()){
		echo '数据库连接错误，错误信息为：'.mysqli_connect_error();
		exit();
	}
	$conn->set_charset('UTF8');
	$cid = $_GET['cid'];
	$cname = $_GET['cname'];
	$csex = $_GET['csex'];
	$cage = $_GET['cage'];
	$rname = $_GET['rname'];
	$nullroom = "SELECT `rid` from `room` where `rname`='$rname' AND `rdec`='可入住' LIMIT 1";
	$result = mysqli_query($conn,$nullroom);
	if($result){
		$row = mysqli_fetch_assoc($result);
		if(is_null($row)){
			echo "fail1";
		}else{
			$rid = $row['rid'];
			$updatesql = "UPDATE `room` SET `rdec`='已入住' WHERE `rid`='$rid'";
			mysqli_query($conn,$updatesql);
			$insertsql = "INSERT INTO `customer`(`rid`,`cid`, `cname`, `csex`,`cage`) VALUES ('$rid','$cid','$cname','$csex','$cage')";
			mysqli_query($conn,$insertsql);
			echo "ok";
		}
	}else{
		echo "fail2";
	}
	$conn->close();	
?>