window.onload=function(){
	var aname = document.getElementById("aname");
	var anum = document.getElementById("anum");
	var amenitynum = new Array();
	var xhr = new XMLHttpRequest();
	xhr.open("get","../servers/showAmenity.php",true);
	xhr.send(null);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				var result = xhr.responseText;
				result = JSON.parse(result);
				var str = "";
				for(var i=0;i<result.length;i++){
					var amenityname = result[i]['aname'];
					amenitynum[i] = result[i]['anum'];
					str = "<option value='"+amenityname+"'>"+amenityname+"</option>";
					aname.innerHTML+=str;
				}
			}
		}
	};
	aname.onchange= function(){
		var option = document.getElementsByTagName("option");
		for(var i=0;i<option.length;i++){
			if(option[i].selected){
				anum.value = amenitynum[i];
			}
		}
	};
	document.querySelector("#btn").onclick = function(){
		var anameValue = document.querySelector("#aname").value;
		var anumValue = document.querySelector("#anum").value;
		var adecValue = "充足";
		if(anumValue<=5){
			adecValue = "缺少";
		}
		var xhr2 = new XMLHttpRequest();
		xhr2.open("get","../servers/updateAmenity.php?aname="+anameValue+"&anum="+anumValue+"&adec="+adecValue,true);
		xhr2.send(null);
		xhr2.onreadystatechange=function(){
			if(xhr2.readyState==4){
				if(xhr2.status==200){
					var result2 = xhr2.responseText;
					if(result2 == "ok"){
						alert("修改成功！\n\n如需继续修改请重复操作。");
						window.parent.location.reload();
					}else{
						alert("修改有误。\n\n请稍后再试。");
					}
				}
			}
		};
	};
};