window.onload=function(){
	myAjax({
		methon : "get",
		url : "../servers/showRoom.php",
		dataType : "json",
		success : function(result){
			var str = "";
			for(var i = 0;i < result.length;i++){
				var roomid = result[i]['rid'];
				var roomname = result[i]['rname'];
				var roomdec = result[i]['rdec'];
				str += "<tr><td>"+roomid+"</td><td>"+roomname+"</td><td>"+roomdec+"</td></tr>";
			}
			document.getElementById("result").innerHTML += str;
		}
	});
};