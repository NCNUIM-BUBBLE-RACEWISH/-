function showAccount(){
        console.log("sessionStorage['account']",sessionStorage["account"])
        if(sessionStorage['kind'].substring(0,2)=='00'){
                $("#account").append("體育組");
                sessionStorage["account"]="0000";
                sessionStorage['cname']="無";
                sessionStorage['balltype']="無";
        }else if(sessionStorage['kind'].substring(0,2)=='0B'){
                $("#account").append("男籃管理員");
                sessionStorage["account"]="010B";
                sessionStorage['cname']="無";
                sessionStorage['balltype']=0;
        }else if(sessionStorage['kind'].substring(0,2)=='0G'){
                $("#account").append("女籃管理員");
                sessionStorage["account"]="010G";
                sessionStorage['cname']="無";
                sessionStorage['balltype']=0;
        }else if(sessionStorage['kind'].substring(0,2)=='1B'){
                $("#account").append("男排管理員");
                sessionStorage["account"]="011B";
                sessionStorage['cname']="無";
                sessionStorage['balltype']=1;
        }else if(sessionStorage['kind'].substring(0,2)=='1G'){
                $("#account").append("女排管理員");
                sessionStorage["account"]="011G";
                sessionStorage['cname']="無";
                sessionStorage['balltype']=1;
        }else if(sessionStorage['kind'].substring(0,2)=='2'){
                $("#account").append("羽球管理員");
                sessionStorage["account"]="012";
                sessionStorage['cname']="無";
                sessionStorage['balltype']=2;
        }else if(sessionStorage['kind'].substring(0,2)=='3'){
                $("#account").append("桌球管理員");
                sessionStorage["account"]="013";
                sessionStorage['cname']="無";
                sessionStorage['balltype']=3;
        }else if(sessionStorage['kind'].substring(0,2)=='4'){
                $("#account").append("壘球管理員");
                sessionStorage["account"]="014";
                sessionStorage['cname']="無";
                sessionStorage['balltype']=4;
        }
        console.log("sessionStorage['account']",sessionStorage["account"])
}