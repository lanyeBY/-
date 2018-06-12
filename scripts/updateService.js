window.onload = function(){
	myAjax({
		methon : "get",
		url : "../servers/updateService.php",
		success : function(result){
			var str = "";
			for(var i=0;i<result.length;i++){
				var roomid = result[i]['rid'];
				var servicenote = result[i]['snote'];
				var checkbox = "<input type='checkbox'>";
				str += "<tr><td>"+roomid+"</td><td>"+servicenote+"</td><td>"+checkbox+"</td></tr>";
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
				var snote = tr[i+1].getElementsByTagName("td")[1].innerHTML;
				break;
			}else if(i == checkbox.length-2){
				alert("请至少选择一个服务项进行删除！");
			}
		}
		myAjax({
			methon : "get",
			url : "../servers/updateService.php",
			data : {
				rid : rid,
				snote : snote
			},
			success : function(){
				alert("删除成功！\n\n如需继续删除请重复当前操作。");
				window.parent.location.reload();
			}
		});
	};
};