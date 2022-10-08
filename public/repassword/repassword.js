function bbbbb()
{
  var q = document.getElementById("code").value;
  var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  if(q!=null){
    if(myreg.test(q.value)){
      }
    else{
      window.alert("邮箱格式错误");
    }}
  else{
      window.alert("邮箱未填写");
    }
}
function ddddd()
{ var x=document.getElementById("password1").value;
 var y=document.getElementById("password2").value;
 var z=document.getElementById("code").value;
 if(x == y){
  if(x.length >= 8){window.alert("成功"),location.href='login.html',$.ajax({
    type: "post",
    url: "http://localhost:3000/user/repassword",
    data: {
      user_email :document.getElementById("user_email").value ,
      password :x
    },
    success: function (code,msg) {
      console.log(code),
      console.log(msg)
    }
  });}
  else{window.alert("密码长度少于8位")}
}
else{window.alert("两次密码输入不一致")}}
function ss(){
  location.href='login.html'
}



