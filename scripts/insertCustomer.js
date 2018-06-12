window.onload=function(){
	document.querySelector("#btn").onclick = function(){
		var cidValue = document.querySelector("#cid").value;
		var cnameValue = document.querySelector("#cname").value;
		var csexValue = document.querySelector("#csex").value;
		var cageValue = document.querySelector("#cage").value;
		var personNum = document.querySelector("#personNum").value;
		var rname ="";
		if(personNum == 1){
			rname = "单人房";
		}else if(personNum == 2){
			rname = "双人房";
		}
		myAjax({
			methon : "get",
			url : "../servers/insertCustomer.php",
			data : {
				cid : cidValue,
				cname : cnameValue,
				csex : csexValue,
				cage : cageValue,
				rname : rname
			},
			dataType : "text",
			success : function(result){
				if(result == "ok"){
					alert("房客信息添加成功！");
					window.location.reload();
				}else if(result == "fail1"){
					alert("很抱歉，目前没有所指定的空房间可以入住！");
				}else if(result == "fail2"){
					alert("当前数据库数据有误！请稍后再试！");
				}
			}
		});
	};
};