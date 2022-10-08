function ss(){
    location.href='login.html'
}
function ccccc(){

    var x=document.getElementById("password").value;

    if(x.length >= 8){ window.alert("成功"),location.href='login.html',$.ajax({
        type: "post",
        url: "http://localhost:3000/user/repassword",
        data: {
          user_name :document.getElementById("user_name").value ,
          user_sex  :document.getElementById("user_sex").value ,
          password  :document.getElementById("password").value,
          user_email:document.getElementById("user_email") .value
        },
        success:function(code,msg){
         console.log(code)
         console.log(msg)   
        }
    })}
    else {window.alert("密码长度不足")}

}

function aa(){
    var q = document.getElementById("user_email").value;
var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
if(q!=null){
  if(myreg.test(q.value)){
    }
  else {
    window.alert("邮箱格式错误");
  }}
else{
    window.alert("邮箱未填写");
  }

}