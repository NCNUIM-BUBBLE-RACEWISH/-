function showAccount(){
        // 系別判斷
        if(sessionStorage['account'].substring(0,2)=='01')
                $("#account").append("中文");
        else if(sessionStorage['account'].substring(0,2)=='02')
                $("#account").append("國比");
        else if(sessionStorage['account'].substring(0,2)=='03')
                $("#account").append("社工");
        else if(sessionStorage['account'].substring(0,2)=='04')
                $("#account").append("外文");
        else if(sessionStorage['account'].substring(0,2)=='05')
                $("#account").append("歷史");
        else if(sessionStorage['account'].substring(0,2)=='06')
                $("#account").append("公行");
        else if(sessionStorage['account'].substring(0,2)=='07')
                $("#account").append("教政");
        else if(sessionStorage['account'].substring(0,2)=='08')
                $("#account").append("東南亞");
        else if(sessionStorage['account'].substring(0,2)=='11')
                $("#account").append("經濟");
        else if(sessionStorage['account'].substring(0,2)=='12')
                $("#account").append("國企");
        else if(sessionStorage['account'].substring(0,2)=='13')
                $("#account").append("資管");
        else if(sessionStorage['account'].substring(0,2)=='14')
                $("#account").append("財金");
        else if(sessionStorage['account'].substring(0,2)=='21')
                $("#account").append("資工");
        else if(sessionStorage['account'].substring(0,2)=='22')
                $("#account").append("土木");
        else if(sessionStorage['account'].substring(0,2)=='23')
                $("#account").append("電機");
        else if(sessionStorage['account'].substring(0,2)=='24')
                $("#account").append("應化");
        else if(sessionStorage['account'].substring(0,2)=='42')
                $("#account").append("觀餐");
        // 球種判斷
        if(sessionStorage['account'].substring(2,4)=='0B')
                $("#account").append("男籃");
        else if(sessionStorage['account'].substring(2,4)=='0G')
                $("#account").append("女籃");
        else if(sessionStorage['account'].substring(2,4)=='1B')
                $("#account").append("男排");
        else if(sessionStorage['account'].substring(2,4)=='1G')
                $("#account").append("女排");
        else if(sessionStorage['account'].substring(2,3)=='2')
                $("#account").append("羽球");
        else if(sessionStorage['account'].substring(2,3)=='3')
                $("#account").append("桌球");
        else if(sessionStorage['account'].substring(2,3)=='4')
                $("#account").append("壘球");
}
