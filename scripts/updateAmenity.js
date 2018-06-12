window.onload=function(){
	var aname = document.getElementById("aname");
	var anum = document.getElementById("anum");
	var add = document.getElementById("add");
	var decline = document.getElementById("decline");
	var amenitynum = new Array();
	myAjax({
		methon : "get",
		url : "servers/showAmenity.php",
		success : function(result){
			var str = "";
			for(var i=0;i<result.length;i++){
				var amenityname = result[i]['aname'];
				amenitynum[i] = result[i]['anum'];
				str = "<option value='"+amenityname+"'>"+amenityname+"</option>";
				aname.innerHTML+=str;
			}
		}
	});
	aname.onchange= function(){
		var option = document.getElementsByTagName("option");
		for(var i=0;i<option.length;i++){
			if(option[i].selected){
				anum.value = amenitynum[i];
				anum.max = amenitynum[i];
			}
		}
		add.style.display = "none";
	};
	anum.onchange = function(){
		add.style.display = "inline";
	};
	add.onclick = function(){
		anum.value++;
	};
	decline.onclick = function(){
		anum.value--;
	};
	document.querySelector("#btn").onclick = function(){
		var anameValue = document.querySelector("#aname").value;
		var anumValue = document.querySelector("#anum").value;
		var adecValue = "充足";
		if(anumValue<=5){
			adecValue = "缺少";
		}
		myAjax({
			methon : "get",
			url : "servers/updateAmenity.php",
			data : {
				aname : anameValue,
				anum : anumValue,
				adec : adecValue
			},
			dataType : "text",
			success : function(result){
				if(result == "ok"){
					alert("修改成功！\n\n如需继续修改请重复操作。");
					window.location.reload();
				}else{
					alert("修改有误。\n\n请稍后再试。");
				}
			}
		});
	};
};