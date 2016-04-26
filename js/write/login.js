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
                                        document.location.href="reroute.html";
                                }
                                if(result.statuscode==401){
                                        document.getElementById("status").innerHTML='帳號密碼錯誤!';
                                }
                                if(result.statuscode==500){
                                        document.getElementById("status").innerHTML='伺服器問題 請稍後再試';
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
