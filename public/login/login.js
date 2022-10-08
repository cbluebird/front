function login(){
	var Id = document.getElementById("username");
	var password =  document.getElementById("password");
	var oError = "";
	var isError = true;
	if (Id.value.length==0) {
		oError = "用户名不能为空！",
		isError = false;
		window.alert(oError);
	}
	if (password.value.length==0){
		oError = "密码不能为空！",
	     isError = false;
		 if  (Id.value.length==0){	oError = "用户名不能为空！"};
		 window.alert(oError);
	}  
	 if(isError)
    {
    	var params={};
    	params.user_name=Id.value;
		params.password=password.value;

    	$.ajax({
			type:"POST",
			url:"http://47.98.62.67:6060/user/login",
			headers:{'Content-Type':'application/json'},
			datatype:'json',
			data:JSON.stringify(params),
			success:function(data){
				if(data.msg=='OK'){
					console.log(data.data.user_id);
					window.location.href="/htmlM/user.html?id="+params.user_name+'&id='+data.data.user_id;
					window.alert("登录成功！");
				}else if(data.msg!='OK')window.alert("账号密码错误，登录失败！");
			}
		})
    }
}