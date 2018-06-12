window.onload=function(){
	document.querySelector("#btn").onclick = function(){
		var ridValue = document.querySelector("#rid").value;
		var rnameValue = document.querySelector("#rname").value;
		myAjax({
			methon : "get",
			url : "../servers/insertRoom.php",
			data : {
				rid : ridValue,
				rname : rnameValue
			},
			dataType : "text",
			success : function(result){
				if(result == "ok"){
					alert("插入成功！\n\n如需继续插入请重复操作。");
					window.location.reload();
				}else if(result == "fail1"){
					alert("该房间号已存在！\n\n请重新输入！");
				}else if(result == "fail2"){
					alert("数据库连接有误！\n\n请稍后再试。");
				}
			}
		});
	};
};