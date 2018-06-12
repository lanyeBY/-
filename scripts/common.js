//使用ajax获取数据库数据函数
function myAjax(obj){
    var order = {
        methon : "post",
        url : "#",
        data : {},
        dataType : "json",
        success : function(result){}
    };

    for(var key in obj){
        order[key] = obj[key];
    }
    //传入参数拼接
    var params = "";
    for(var attr in order.data){
        params = params + attr + "=" + order.data[attr] + "&";
    }
    params = params.substring(0,params.length-1);
    //地址和参数拼接
    if(order.methon == "get"){
        if(order.data && order.data != ""){
            order.url += "?" + params;
        }
    }

    //开始获取
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        //IE
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open(order.methon,order.url,true);
    
    if(order.methon == "get"){
        xhr.send(null);
    }else if(order.methon == "post"){
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(order.params);
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var result = null;
                if(order.dataType == "json"){
                    result = xhr.responseText;
                    result = JSON.parse(result);
                }else if(order.dataType == "xml"){
                    result = xhr.responseXML;
                }else{
                    result = xhr.responseText;
                }
                if(order.success){
                    order.success(result);
                }
            }
        }
    }
}

//getElementsByTagName函数的浏览器兼容问题解决
function myClassName(node,myclass){
    if(document.getElementsByClassName){
        return node.getElementsByClassName(myclass);
    }else{
        var tags = node.getElementsByTagName("*");
        var results;
        for(var i = 0;i < tags ;i++){
            if(tags[i].ClassName == myclass ){
                results.push.apply(tags[i]);
            }
        }
        return results;
    }
}

//为功能导航增加target以显示在右框架
function showhide(dom){
	var first = dom.getElementsByTagName("a")[0];
	var second = first.parentNode.getElementsByTagName("ul")[0];
	function setTarget(ttag){
        ttag.target = "result";
    }
    var arrA = second.getElementsByTagName("a");
    for(var i = 0;i < arrA.length;i++){
        setTarget(arrA[i],"result");
    }
}

//提醒功能
function showNote(number,url){
    var span = document.getElementsByTagName("span")[0];
    var notediv = document.getElementById("note");
    if(number > 0){
        notediv.style.display = "block";
        span.innerHTML = number;
    }else{
        notediv.style.display = "none";
    }
    notediv.onclick = function(){
		document.getElementById("result").src = url;
	};
}