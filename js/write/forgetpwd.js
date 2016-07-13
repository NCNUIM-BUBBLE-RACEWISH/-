$(document).ready(function(){
        $("#email").submit(function(event){
                var email=document.getElementById("inputEmail").value;
                var emaildata={};
                emaildata.email=email;
                console.log(JSON.stringify(emaildata));
                $.ajax({
                        url:'http://163.22.17.184:8080/bubble/user/passwd/forget',
                        contentType:'application/json',
                        data:JSON.stringify(emaildata),
                        dataType:'json',
                        type:'POST',
                        success:function(result){
                                if(result.statuscode==200)
                                        alert("信件已寄出，請至信箱查看您的密碼");
                                else if(result.statuscode==401)
                                        alert("信箱有錯喔!");
                                document.location.href="index.html";
                        },
                        error:function(err){
                                console.log('shit!');
                                console.log(err);
                        }
                });
                event.preventDefault();
        });
});
