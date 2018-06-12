window.onload=function(){
	document.querySelector("#btn").onclick = function(){
		var widValue = document.querySelector("#wid").value;
		var wnameValue = document.querySelector("#wname").value;
		var wsexValue = document.querySelector("#wsex").value;
		var wsortValue = document.querySelector("#wsort").value;
		var wageValue = document.querySelector("#wage").value;
		myAjax({
			methon : "get",
			url : "../servers/insertWorker.php",
			data : {
				wid : widValue,
				wname : wnameValue,
				wsex : wsexValue,
				wsort : wsortValue,
				wage : wageValue
			},
			dataType : "text",
			success : function(result){
				if(result == "ok"){
					alert("插入成功！\n\n如需继续插入请重复操作。");
					window.location.reload();
				}else if(result == "fail"){
					alert("该人员编号已存在！\n\n请重新输入！");
				}
			}
		});
	};
};