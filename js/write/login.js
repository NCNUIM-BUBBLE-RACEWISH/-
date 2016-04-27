$(document).ready(function(){
        $("#account").submit(function(event){
                //將帳號密碼轉json
                var kind=document.getElementById("kind").value;
                var deptid=document.getElementById("deptid").value;
                var passwd=document.getElementById("passwd").value;
                var data ={}
                data.kind=kind;
                data.deptid=deptid;
                data.passwd=passwd;
                console.log(JSON.stringify(data));
                $.ajax({
                        url:'http://163.22.17.184:8080/bubble/user/passwd',
                        contentType:"application/json",
                        data:JSON.stringify(data),
                        dataType: 'json',
                        type: 'POST',
                        success: function(result) {
                                console.log('woohoo!');
                                console.log(result);
                                // 成功時將帳號存入session
                                if(result.statuscode==200){
                                        sessionStorage["account"]=result.account;
                                        sessionStorage["statuscode"]=result.statuscode;
                                        document.location.href="reroute.html";
                                }
                                else if(result.statuscode==401){
                                        document.getElementById("status").innerHTML=result.message;
                                }
                                else if(result.statuscode==500){
                                        document.getElementById("status").innerHTML=result.message;
                                }
                                else{
                                        document.getElementById("status").innerHTML="發生不明原因錯誤 請稍後再試";
                                }
                        },
                        error: function(err) {
                                console.log('shit!');
                                console.log(err);
                        }
                });
                event.preventDefault();
        });
});
//測試用
function printdata(){
        console.log(sessionStorage["account"]);
}
function autoLogin(){
        if(sessionStorage["statuscode"]==200)
                document.location.href="reroute.html";
 }
