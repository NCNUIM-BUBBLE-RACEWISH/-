$(document).ready(function(){
        var kind=sessionStorage['kind'];
        var deptid=sessionStorage['deptid'];
        var email="test@ya";
        var ckstatus=1;
        $("#chpwd").submit(function(event){
                var oldpwd=document.getElementById('oldpwd').value;
                var newpwd=document.getElementById('newpwd').value;
                var ck=document.getElementById('cknewpwd').value;
                if(newpwd==""){
                        alert("密碼不得為空");
                        ckstatus=0;
                }
                else if(oldpwd!=(sessionStorage['pwd'])){
                        alert("密碼輸入錯誤");
                        ckstatus=0;
                }else if(newpwd!=ck){
                        alert("新密碼確認與新密碼不一致唷");
                        ckstatus=0;
                }
                if(ckstatus==1){
                        var pwd=document.getElementById('newpwd').value;
                        var data={};
                        data.kind=kind;
                        data.deptid=deptid;
                        data.passwd=oldpwd;
                        data.newpasswd=newpwd;
                        console.log(JSON.stringify(data));
                        $.ajax({
                                url:'http://163.22.17.184:8080/bubble/user/passwd/verification',
                                contentType:'application/json',
                                data:JSON.stringify(data),
                                dataType:'json',
                                type:'POST',
                                success:function(result){
                                        console.log(result);
                                        if(result.statuscode==200){
                                                alert("密碼修改成功!");
                                                document.location.href='reroute.html';
                                        }
                                },
                                error:function(err){
                                        alert("伺服器出現問題，請稍後再試");
                                }
                        });
                        event.preventDefault();
                }
        });
});
