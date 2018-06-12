window.onload = function(){
	myAjax({
		methon : "get",
		url : "../servers/showCustomer.php",
		success : function(result){
			var str = "";
			for(var i=0;i<result.length;i++){
				var roomid = result[i]['rid'];
				var customerid = result[i]['cid'];
				var costomername = result[i]['cname'];
				var customersex = result[i]['csex'];
				var customerage = result[i]['cage'];
				var checkbox = "<input type='checkbox'>";
				str += "<tr><td>"+roomid+"</td><td>"+customerid+"</td><td>"+costomername+"</td><td>"+customersex+"</td><td>"+customerage+"</td><td>"+checkbox+"</td></tr>";
			}
			document.getElementById("result").innerHTML+=str;
		}
	});
	var btn = document.getElementById("btn");
	btn.onclick = function(){
		var tr = document.getElementsByTagName("tr");
		var checkbox = document.getElementsByTagName("input");
		for(var i=0;i < checkbox.length-1;i++){
			if(checkbox[i].checked){
				var rid = tr[i+1].querySelector("td").innerHTML;
				break;
			}else if(i == checkbox.length-2){
				alert("请选择一位房客表项完成退房操作！");
			}
		}
		myAjax({
			methon : "get",
			url : "../servers/deleteCustomer.php",
			data : {
				rid : rid
			},
			dataType : "text",
			success : function(result){
				if(result == "ok"){
					alert("退房成功！\n\n如需继续删除请重复当前操作。");
					window.location.reload();
				}else{
					alert("退房失败！\n\n请稍后再试。");
				}
			}
		});
	};
};