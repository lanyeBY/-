window.onload=function(){
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
				str += "<tr><td>"+workerid+"</td><td>"+workername+"</td><td>"+workersex+"</td><td>"+workersort+"</td><td>"+workerage+"</td></tr>";
			}
			document.getElementById("result").innerHTML+=str;
		}
	});
};