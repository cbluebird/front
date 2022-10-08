
window.onload=function(){

var params={};
params.user_id=window.location.search.split("=")[2];

$.ajax({
    type:"get",
    url:"http://47.98.62.67:6060/user/read",
    headers:{'Content-Type':'application/json'},
    datatype:'json',
    data:JSON.stringify(params),
    success:function(data){
    if(data.msg=='OK'){
        var num=data.data.number;
        //for(var i=1;i<=num;i++){
          var title =data.data.list[0].Title;
          var resumeid =data.data.list[0].Resumeid;
          document.getElementById('myarea1').innerHTML=document.getElementById('myarea1').innerHTML+"简历编号: "+resumeid;
          document.getElementById('myarea1').innerHTML=document.getElementById('myarea1').innerHTML+"简历标题: "+title;
        //}
          var title =data.data.list[1].Title;
          var resumeid =data.data.list[1].Resumeid;
          document.getElementById('myarea2').innerHTML=document.getElementById('myarea2').innerHTML+"简历编号: "+resumeid;
          document.getElementById('myarea2').innerHTML=document.getElementById('myarea2').innerHTML+"简历标题: "+title;

          var title =data.data.list[2].Title;
          var resumeid =data.data.list[2].Resumeid;
          document.getElementById('myarea3').innerHTML=document.getElementById('myarea3').innerHTML+"简历编号: "+resumeid;
          document.getElementById('myarea3').innerHTML=document.getElementById('myarea3').innerHTML+"简历标题: "+title;

          var title =data.data.list[3].Title;
          var resumeid =data.data.list[3].Resumeid;
          document.getElementById('myarea4').innerHTML=document.getElementById('myarea4').innerHTML+"简历编号: "+resumeid;
          document.getElementById('myarea4').innerHTML=document.getElementById('myarea4').innerHTML+"简历标题: "+title;
          
          var title =data.data.list[4].Title;
          var resumeid =data.data.list[4].Resumeid;
          document.getElementById('myarea5').innerHTML=document.getElementById('myarea5').innerHTML+"简历编号: "+resumeid;
          document.getElementById('myarea5').innerHTML=document.getElementById('myarea5').innerHTML+"简历标题: "+title;

          var title =data.data.list[5].Title;
          var resumeid =data.data.list[5].Resumeid;
          document.getElementById('myarea6').innerHTML=document.getElementById('myarea6').innerHTML+"简历编号: "+resumeid;
          document.getElementById('myarea6').innerHTML=document.getElementById('myarea6').innerHTML+"简历标题: "+title;
          
      }
    }            
})

}
function edit1(){
  window.location.href="edit.html?name_id="+window.location.search.split("=")[2]+'&resume_id='+1;
}

function edit2(){
  window.location.href="edit.html?name_id="+window.location.search.split("=")[2]+'&resume_id='+2;
}

function edit3(){
  window.location.href="edit.html?name_id="+window.location.search.split("=")[2]+'&resume_id='+3;
}

function edit4(){
  window.location.href="edit.html?name_id="+window.location.search.split("=")[2]+'&resume_id='+4;
}

function edit5(){
  window.location.href="edit.html?name_id="+window.location.search.split("=")[2]+'&resume_id='+5;
}

function edit6(){
  window.location.href="edit.html?name_id="+window.location.search.split("=")[2]+'&resume_id='+6;
}

function edit(){
  window.location.href="edit.html?name_id="+window.location.search.split("=")[2]+'&resume_id='+i;
}


