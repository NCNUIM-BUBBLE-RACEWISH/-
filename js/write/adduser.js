$(document).ready(function(){
        $("#account").submit(function(event){
                //將帳號密碼轉json
                var kind=document.getElementById("kind").value;
                var deptid=document.getElementById("deptid").value;
                var passwd=document.getElementById("passwd").value;
                var email=document.getElementById("inputEmail").value;
                var data ={};
                data.kind=kind;
                data.deptid=deptid;
                data.newpasswd=passwd;
                data.email=email;
                console.log(JSON.stringify(data));
                $.ajax({
                        url:'http://163.22.17.184:8080/bubble/management/user/insert',
                        contentType:"application/json",
                        data:JSON.stringify(data),
                        dataType: 'json',
                        type: 'POST',
                        success: function(result) {
                                console.log('woohoo!');
                                console.log(result);
                                // 成功時將帳號,狀態碼,存入session
                                if(result.statuscode==200){
                                        alert("帳號已新增成功!");
                                        document.getElementById("passwd").value="";
                                        document.getElementById("inputEmail").value="";
                                }
                                else if(result.statuscode==401){
                                        document.getElementById("status").innerHTML=result.message;
                                }
                                else if(result.statuscode==500){
                                        document.getElementById("status").innerHTML="此帳號已經擁有! 請至修改密碼";
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
