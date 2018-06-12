window.onload = function(){
	myAjax({
		methon : "get",
		url : "../servers/showWorker.php",
		success : function(result){
			var str = "";
			for(var i=0;i<result.length;i++){
				var workerid = result[i]['wid'];
				var workername = result[i]['wname'];
				var workersex = result[i]['wsex'];
				var workersort = result[i]['wsort'];
				var workerage = result[i]['wage'];
				var checkbox = "<input type='checkbox'>";
				str += "<tr><td>"+workerid+"</td><td>"+workername+"</td><td>"+workersex+"</td><td>"+workersort+"</td><td>"+workerage+"</td><td>"+checkbox+"</td></tr>";
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
				var wid = tr[i+1].querySelector("td").innerHTML;
				break;
			}else if(i == checkbox.length-2){
				alert("请选择一个人员删除！");
			}
		}
		myAjax({
			methon : "get",
			url : "servers/deleteWorker.php",
			data : {
				wid : wid
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