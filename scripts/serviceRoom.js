window.onload = function(){
	var snote = document.getElementById("snote");
	var btn = document.getElementById("btn");
	snote.onchange = function(){
		if(document.getElementById("addThing").selected){
			document.getElementById("snote2").style.display = "block";				
		}else if(document.getElementById("cleanRoom").selected){
			if(document.getElementById("snote2").style.display == "block"){
				document.getElementById("snote2").style.display = "none";
			}
		}
	};
	btn.onclick = function(){
		var ridValue = document.getElementById("rid").value;
		var snoteValue = document.getElementById("snote").value;
		if(snoteValue == "用品补充"){
			snoteValue = document.getElementById("snote2").value;
			snoteValue +="补充";
		}
		myAjax({
			methon : "get",
			url : "../servers/serviceRoom.php",
			data : {
				rid : ridValue,
				snote : snoteValue
			},
			dataType : "text",
			success : function(result){
				if(result == "ok"){
					alert("命令发送成功！\n\n如需继续发送请重复当前操作。");
					window.location.reload();
				}else if(result == "fail"){
					alert("房间号输入有误！\n\n当前宾馆内无该房间。");
				}else{
					alert("数据库数据有误！\n\n请稍后再试！");
				}
			}
		});
	};
};