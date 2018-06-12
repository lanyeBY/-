window.onload = function(){
	myAjax({
		methon : "get",
		url : "../servers/alertAmenity.php",
		success : function(result){
			var number = result.length;
			showNote(number,"amenity_show.html");
		}
	});
};