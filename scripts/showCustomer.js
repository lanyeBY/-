window.onload=function(){
	myAjax({
		methon : "get",
		url : "../servers/showCustomer.php",
		success : function(result){
			if(result.length == 0){
				document.getElementById("customentNote").innerHTML += "当前宾馆内没有房客居住。";
			}else{
				var str = "";
				for(var i=0;i<result.length;i++){
					var roomid = result[i]['rid'];
					var customerid = result[i]['cid'];
					var costomername = result[i]['cname'];
					var customersex = result[i]['csex'];
					var customerage = result[i]['cage'];
					str += "<tr><td>"+roomid+"</td><td>"+customerid+"</td><td>"+costomername+"</td><td>"+customersex+"</td><td>"+customerage+"</td></tr>";
				}
				document.getElementById("result").innerHTML+=str;
			}
		}
	});
};