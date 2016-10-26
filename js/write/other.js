$(document).ready(function(){
        $("#record").click(function(event){
                //將帳號密碼轉json
                var data ={"ballid":sessionStorage['account']};
                console.log(data);
                $.ajax({
                        url:'http://163.22.17.184:8080/bubble/users/apply/final_apply',
                        contentType:"application/json",
                        data:JSON.stringify(data),
                        dataType: 'json',
                        type: 'POST',
                        success: function(result) {
                                console.log('woohoo!');
                                console.log(result.length);

                                // 成功時將帳號,狀態碼,存入session
                                if(result[0].statuscode==200 && result.length>1){
                                        var st="";
                                        var tmp="";
                                        for(i=1; i<result.length; i++){
                                                tmp="第"+i+"志願 "+" 場地 "+result[i].場地代碼+" 時間 "+result[i].時間代碼;
                                                st+=("\n"+tmp);
                                        }
                                        alert(st);
                                }else if(result[0].statuscode==200 && result.length==1){
                                        alert("你還沒申請志願喔");
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
