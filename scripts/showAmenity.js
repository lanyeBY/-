window.onload = function(){
	myAjax({
		methon : "get",
		url : "../servers/showAmenity.php",
		success : function(result){
			var str = "";
			for(var i=0;i<result.length;i++){
				var amenityname = result[i]['aname'];
				var amenitynum = result[i]['anum'];
				var amenitydec = result[i]['adec'];
				str += "<tr><td>"+amenityname+"</td><td>"+amenitynum+"</td><td>"+amenitydec+"</td></tr>";
			}
			document.getElementById("result").innerHTML+=str;
		}
	});
};