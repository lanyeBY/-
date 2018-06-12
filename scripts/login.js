window.onload=function(){
	var username = document.getElementById("username");
	var password = document.getElementById("userpwd");
	var btn = document.getElementById("btn");
	
	username.onblur = function(){
		var userValue = username.value;
		var userNote = document.getElementById("userNote");
		var reg = /\d{8}/;
		if(!reg.test(userValue)){
			userNote.innerHTML="账号长度有误！请重新输入！<br>";	
		}else{
			userNote.innerHTML="";
		}
	};
	btn.onclick = function(){
		var userValue = username.value;
		var pwdValue = password.value;
		myAjax({
			methon : "get",
			url : "servers/login.php",
			data : {
				username : userValue,
				userpwd : pwdValue
			},
			dataType : "text",
			success : function(result){
				if(result=="ok1"){
					alert("登陆成功!\n\n你的身份是宾馆管理员！");
					window.location="http://localhost/hotel/root/root.html";
				}else if(result=="ok2"){
					alert("登陆成功！\n\n你的身份是前台服务员!");
					window.location = "http://localhost/hotel/receptionist/receptionist.html";
				}else if(result=="ok3"){
					alert("登陆成功！\n\n你的身份是客房服务员!");
					window.location = "http://localhost/hotel/housemaid/housemaid.html";						
				}else if(result=="ok4"){
					alert("登陆成功！\n\n你的身份是采购员!");
					window.location = "http://localhost/hotel/buyer/buyer.html";
				}else{
					alert("账号和密码有误！\n请重新登录！");
				}
			}
		});
	};
};