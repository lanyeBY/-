window.onload = function(){
	myAjax({
		methon : "get",
		url : "../servers/updateService.php",
		success : function(result){
			var number = result.length;
			showNote(number,"service_update.html");
		}
	});
};