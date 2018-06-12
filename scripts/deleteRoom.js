window.onload = function(){
	myAjax({
		methon : "get",
		url : "../servers/showRoom.php",
		success : function(result){
			var str = "";
			for(var i = 0;i < result.length;i++){
				var roomid = result[i]['rid'];
				var roomname = result[i]['rname'];
				var roomdec = result[i]['rdec'];
				var checkbox = "<input type='checkbox'>";
				str += "<tr><td>"+roomid+"</td><td>"+roomname+"</td><td>"+roomdec+"</td><td>"+checkbox+"</td></tr>";
			}
			document.getElementById("result").innerHTML += str;
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
				alert("请选择一间房间删除！");
			}
		}
		myAjax({
			methon : "get",
			url : "../servers/deleteRoom.php",
			data : {
				rid : rid
			},
			dataType : "text",
			success : function(result){
				if(result == "ok"){
					alert("删除成功！\n\n如需继续删除请重复当前操作。");
					window.location.reload();
				}else{
					alert("删除失败！\n\n请稍后再试。");
				}
			}
		});
	};
};