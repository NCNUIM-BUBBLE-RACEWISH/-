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
                                // 成功時將帳號,狀態碼,存入session
                                if(result.statuscode==200){
                                        sessionStorage["deptid"]=deptid;
                                        sessionStorage["kind"]=kind;
                                        sessionStorage["account"]=result.account;
                                        sessionStorage["statuscode"]=result.statuscode;
                                        sessionStorage['pwd']=passwd;
                                        sessionStorage['cname']=get_cname(sessionStorage["account"]);
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
// 若未關閉瀏覽器則自動登入
/*function autoLogin(){
        if(sessionStorage["statuscode"]==200)
                document.location.href="reroute.html";
 }
*/
function get_cname(account){
        var full;
        if(account.substring(0,2)=='01')
                full="中文";
        else if(account.substring(0,2)=='02')
                full="國比";
        else if(account.substring(0,2)=='03')
                full="社工";
        else if(saccount.substring(0,2)=='04')
                full="外文";
        else if(account.substring(0,2)=='05')
                full="歷史";
        else if(account.substring(0,2)=='06')
                full="公行";
        else if(account.substring(0,2)=='07')
                full="教政";
        else if(account.substring(0,2)=='08')
                full="東南亞";
        else if(account.substring(0,2)=='11')
                full="經濟";
        else if(account.substring(0,2)=='12')
                full="國企";
        else if(account.substring(0,2)=='13')
                full="資管";
        else if(account.substring(0,2)=='14')
                full="財金";
        else if(account.substring(0,2)=='21')
                full="資工";
        else if(account.substring(0,2)=='22')
                full="土木";
        else if(account.substring(0,2)=='23')
                full="電機";
        else if(account.substring(0,2)=='24')
                full="應化";
        else if(account.substring(0,2)=='42')
                full="觀餐";
        // 球種判斷
        if(account.substring(2,4)=='0B')
                full+="男籃";
        else if(account.substring(2,4)=='0G')
                full+="女籃";
        else if(account.substring(2,4)=='1B')
                full+="男排";
        else if(account.substring(2,4)=='1G')
                full+="女排";
        else if(account.substring(2,3)=='2')
                full+="羽球";
        else if(account.substring(2,3)=='3')
                full+="桌球";
        else if(account.substring(2,3)=='4')
                full+="壘球";
        return full;
}