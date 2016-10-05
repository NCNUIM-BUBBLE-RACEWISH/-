$(document).ready(function() {
    var cookie
    if (parseInt(sessionStorage["account"].substring(2, 3) == 0) ||
        (parseInt(sessionStorage["account"].substring(2, 3) == 1))) {
        cookie = parseInt(sessionStorage["account"].substring(2, 3)) * 2;
    } else {
        cookie = parseInt(sessionStorage["account"].substring(2, 3))
    }
    //抓學期
    var nowDate = new Date();
        if (nowDate.getMonth() < 9 || nowDate.getMonth() > 2)
            nowDate = (nowDate.getFullYear() - 1912) * 10 + 2;
        else
            nowDate = (nowDate.getFullYear() - 1911) * 10 + 1;
    //抓球種
    var kind = sessionStorage["account"].substring(2, 4);
    //學期暫用測試1031 測試完請改回
    var termkind = {"term":'1031',"kind":kind};
    $.ajax({
        url:'http://163.22.17.184:8080/bubble/management/apply/choose',
        contentType:"application/json",
        data:JSON.stringify(termkind),
        dataType: 'json',
        type: 'POST',
        success: function(result) {
                console.log('woohoo!');
                if(result[0].statuscode==200){
                    //看星期塞時間
                    $("#YourWeek1").change(function() {
                        $("#YourTime1").html("<option value='-1' selected></option>");
                        $("#YourTime1").removeAttr("disabled");
                        $("#YourBall1").html("<option value='-1' selected></option>");
                        $("#YourBall1").removeAttr("disabled");
                        //列出有此日期的所有場地 時段
                        var timearray = [-1];
                        for(var i=2; i<result.length; i++){
                            tmp=1;
                            for(var j=0; j<timearray.length; j++){
                                if(result[i].時間代碼==timearray[j]){
                                    tmp=0;
                                    break;
                                }
                            }
                            if(tmp==1&&$("#YourWeek1").val()==result[i].星期){
                                timearray.push(result[i].時間代碼);
                                $("#YourTime1").append("<option value=" + result[i].時間代碼 + ">" + result[i].時間代碼.substring(0, 4) + "~" + result[i].時間代碼.substring(4, 8) + "</option>");
                            }
                        }
                    });
                    //看時間塞場地
                    $("#YourTime1").change(function() {
                        $("#YourBall1").html("<option value='-1' selected></option>");
                        $("#YourBall1").removeAttr("disabled");
                        var timearray = [-1];
                        for(var i=2; i<result.length; i++){
                            tmp=1;
                            for(var j=0; j<timearray.length; j++){
                                if(result[i].場地代碼==timearray[j]){
                                    tmp=0;
                                    break;
                                }
                            }
                            if(tmp==1&&$("#YourWeek1").val()==result[i].星期){
                                timearray.push(result[i].場地代碼);
                                $("#YourBall1").append("<option value=" + result[i].場地代碼 + ">" + result[i].場地代碼 +"</option>");
                            }
                        }
                    });
                    $("#YourWeek2").change(function() {
                        $("#YourTime2").html("<option value='-1' selected></option>");
                        $("#YourTime2").removeAttr("disabled");
                        $("#YourBall2").html("<option value='-1' selected></option>");
                        $("#YourBall2").removeAttr("disabled");
                        //列出有此日期的所有場地 時段
                        var timearray = [-1];
                        for(var i=2; i<result.length; i++){
                            tmp=1;
                            for(var j=0; j<timearray.length; j++){
                                if(result[i].時間代碼==timearray[j]){
                                    tmp=0;
                                    break;
                                }
                            }
                            if(tmp==1&&$("#YourWeek2").val()==result[i].星期){
                                timearray.push(result[i].時間代碼);
                                $("#YourTime2").append("<option value=" + result[i].時間代碼 + ">" + result[i].時間代碼.substring(0, 4) + "~" + result[i].時間代碼.substring(4, 8) + "</option>");
                            }
                        }
                    });
                    //看時間塞場地
                    $("#YourTime2").change(function() {
                        $("#YourBall2").html("<option value='-1' selected></option>");
                        $("#YourBall2").removeAttr("disabled");
                        var timearray = [-1];
                        for(var i=2; i<result.length; i++){
                            tmp=1;
                            for(var j=0; j<timearray.length; j++){
                                if(result[i].場地代碼==timearray[j]){
                                    tmp=0;
                                    break;
                                }
                            }
                            if(tmp==1&&$("#YourWeek2").val()==result[i].星期){
                                timearray.push(result[i].場地代碼);
                                $("#YourBall2").append("<option value=" + result[i].場地代碼 + ">" + result[i].場地代碼 +"</option>");
                            }
                        }
                    });
                    $("#YourWeek3").change(function() {
                        $("#YourTime3").html("<option value='-1' selected></option>");
                        $("#YourTime3").removeAttr("disabled");
                        $("#YourBall3").html("<option value='-1' selected></option>");
                        $("#YourBall3").removeAttr("disabled");
                        //列出有此日期的所有場地 時段
                        var timearray = [-1];
                        for(var i=2; i<result.length; i++){
                            tmp=1;
                            for(var j=0; j<timearray.length; j++){
                                if(result[i].時間代碼==timearray[j]){
                                    tmp=0;
                                    break;
                                }
                            }
                            if(tmp==1&&$("#YourWeek3").val()==result[i].星期){
                                timearray.push(result[i].時間代碼);
                                $("#YourTime3").append("<option value=" + result[i].時間代碼 + ">" + result[i].時間代碼.substring(0, 4) + "~" + result[i].時間代碼.substring(4, 8) + "</option>");
                            }
                        }
                    });
                    //看時間塞場地
                    $("#YourTime3").change(function() {
                        $("#YourBall3").html("<option value='-1' selected></option>");
                        $("#YourBall3").removeAttr("disabled");
                        var timearray = [-1];
                        for(var i=2; i<result.length; i++){
                            tmp=1;
                            for(var j=0; j<timearray.length; j++){
                                if(result[i].場地代碼==timearray[j]){
                                    tmp=0;
                                    break;
                                }
                            }
                            if(tmp==1&&$("#YourWeek3").val()==result[i].星期){
                                timearray.push(result[i].場地代碼);
                                $("#YourBall3").append("<option value=" + result[i].場地代碼 + ">" + result[i].場地代碼 +"</option>");
                            }
                        }
                    });
                    $("#YourWeek4").change(function() {
                        $("#YourTime4").html("<option value='-1' selected></option>");
                        $("#YourTime4").removeAttr("disabled");
                        $("#YourBall4").html("<option value='-1' selected></option>");
                        $("#YourBall4").removeAttr("disabled");
                        //列出有此日期的所有場地 時段
                        var timearray = [-1];
                        for(var i=2; i<result.length; i++){
                            tmp=1;
                            for(var j=0; j<timearray.length; j++){
                                if(result[i].時間代碼==timearray[j]){
                                    tmp=0;
                                    break;
                                }
                            }
                            if(tmp==1&&$("#YourWeek4").val()==result[i].星期){
                                timearray.push(result[i].時間代碼);
                                $("#YourTime4").append("<option value=" + result[i].時間代碼 + ">" + result[i].時間代碼.substring(0, 4) + "~" + result[i].時間代碼.substring(4, 8) + "</option>");
                            }
                        }
                    });
                    //看時間塞場地
                    $("#YourTime4").change(function() {
                        $("#YourBall4").html("<option value='-1' selected></option>");
                        $("#YourBall4").removeAttr("disabled");
                        var timearray = [-1];
                        for(var i=2; i<result.length; i++){
                            tmp=1;
                            for(var j=0; j<timearray.length; j++){
                                if(result[i].場地代碼==timearray[j]){
                                    tmp=0;
                                    break;
                                }
                            }
                            if(tmp==1&&$("#YourWeek4").val()==result[i].星期){
                                timearray.push(result[i].場地代碼);
                                $("#YourBall4").append("<option value=" + result[i].場地代碼 + ">" + result[i].場地代碼 +"</option>");
                            }
                        }
                    });
                    $("#YourWeek5").change(function() {
                        $("#YourTime5").html("<option value='-1' selected></option>");
                        $("#YourTime5").removeAttr("disabled");
                        $("#YourBall5").html("<option value='-1' selected></option>");
                        $("#YourBall5").removeAttr("disabled");
                        //列出有此日期的所有場地 時段
                        var timearray = [-1];
                        for(var i=2; i<result.length; i++){
                            tmp=1;
                            for(var j=0; j<timearray.length; j++){
                                if(result[i].時間代碼==timearray[j]){
                                    tmp=0;
                                    break;
                                }
                            }
                            if(tmp==1&&$("#YourWeek5").val()==result[i].星期){
                                timearray.push(result[i].時間代碼);
                                $("#YourTime5").append("<option value=" + result[i].時間代碼 + ">" + result[i].時間代碼.substring(0, 4) + "~" + result[i].時間代碼.substring(4, 8) + "</option>");
                            }
                        }
                    });
                    //看時間塞場地
                    $("#YourTime5").change(function() {
                        $("#YourBall5").html("<option value='-1' selected></option>");
                        $("#YourBall5").removeAttr("disabled");
                        var timearray = [-1];
                        for(var i=2; i<result.length; i++){
                            tmp=1;
                            for(var j=0; j<timearray.length; j++){
                                if(result[i].場地代碼==timearray[j]){
                                    tmp=0;
                                    break;
                                }
                            }
                            if(tmp==1&&$("#YourWeek5").val()==result[i].星期){
                                timearray.push(result[i].場地代碼);
                                $("#YourBall5").append("<option value=" + result[i].場地代碼 + ">" + result[i].場地代碼 +"</option>");
                            }
                        }
                    });
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
    /*      左邊的長條圖~~~~~~~~~~~~~~~~~   */
    //進入頁面時預設顯示星期一
    weekFun("一", cookie);
    //點選星期時，取得對應日期
    $("#left > a").click(function() {
        var n = $(this).attr("value")
        weekFun(n, cookie)
    });

    //傳入日期，變換長條圖
    function weekFun(day, ball_type) {
        $(function() {
            var num = [] //存各時段的申請次數
            $.ajax({
                url: "http://163.22.17.184:8080/bubble/user/apply/bar_chart",
                data: { "week": day },
                type: "GET",
                //↓天辣辣辣辣這行太神了!!!!傳回值終於可以存惹感動
                async: false,
                success: function(data) {
                    //抓有幾個時段
                    var timearray = [];
                    for(var i=1; i<data.length; i++){
                        tmp=1;
                        var j=0;
                        do{
                            if(data[i].時段==timearray[j]){
                                tmp=0;
                                break;
                            }
                            j++;
                        }while(j<timearray.length);
                        if(tmp==1){
                            timearray.push(data[i].時段);
                        }
                    }
                    //抓有幾個場地
                    var courtarr = [];
                    for(var i=1; i<data.length; i++){
                        tmp=1;
                        var j=0;
                        do{
                            if(data[i].場地代碼==courtarr[j]){
                                tmp=0;
                                break;
                            }
                            j++;
                        }while(j<courtarr.length);
                        if(tmp==1){
                            courtarr.push(data[i].場地代碼);
                        }
                    }
                    //設定長條圖所需資料
                    var allpeoplearr = [];
                    for (var i = 0; i < timearray.length; i++) {
                        var peoplearr=[];
                        for (var test = 0; test < courtarr.length; test++) {
                            peoplearr[test] = courtarr[test];
                        }
                        for(var j=0; j<courtarr.length; j++){
                            var tmp=0;
                            for(var k=0; k<data.length; k++){
                                // console.log(data[k].場地代碼+" "+peoplearr[j]);
                                if(data[k].場地代碼==peoplearr[j]&&data[k].時段==timearray[i]){
                                    tmp=1;
                                    break;
                                }
                            }
                            if(tmp==1){
                                peoplearr[j]=parseInt(data[k].申請隊伍數);
                            }else{
                                peoplearr[j]=parseInt(0);
                            }
                        }
                        allpeoplearr.push(peoplearr);
                    }
                    var longchartdata=[];
                    for(var i=0; i<timearray.length; i++){
                        var d={"name":timearray[i],"data":allpeoplearr[i]};
                        longchartdata.push(d);
                    }
                    //執行長條圖
                    longchart(day, ball_type, num,courtarr,longchartdata);
                }
            });
        });

    }

    function longchart(day, ball_type, num,courtarr,longchartdata) {
        $('#container').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: "星期" + day + '的申請人數'
            },
            subtitle: {
                text: ': <a href=""></a>'
            },
            xAxis: {
                //categories:["場地名","場地名"]
                categories: courtarr,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                allowDecimals: false,
                title: {
                    text: 'Population',
                    align: 'middle'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            //游標滑過顯示的
            tooltip: {
                valueSuffix: ''
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                shadow: true
            },
            //series:[{"name":"新一場","data":[parseInt(5),parseInt(8),parseInt(9)]},{"name":"新一場","data":[parseInt(5),parseInt(8),parseInt(9)]}]
            series: longchartdata
        });
}

//      右邊的的申請場地次數~~~~~~~~~~~~~~~~~
//顯示對應的次數
$("#wish1").change(function() {
    var week = $("#YourWeek1").val();
    var ball = $("#YourBall1").val();
    var time = $("#YourTime1").val();
    if ((week != -1) && (ball != -1) && (time != -1)) {
        $.ajax({
            //http://163.22.17.184:8080/bubble/apply_count2/json? time=a & place=0A &week=五
            url: "http://163.22.17.184:8080/bubble/user/apply/information/Real_time",
            data: { "time": time, "place": ball, "week": week },
            type: "GET",
            success: function(data) {
                $("#num1").val(data.申請次數).show();
            }
        });
        console.log("week", week, "ball", ball, "time", time);
    }
}); $("#wish2").change(function() {
    var week = $("#YourWeek2").val();
    var ball = $("#YourBall2").val();
    var time = $("#YourTime2").val();
    if ((week != -1) && (ball != -1) && (time != -1)) {
        $.ajax({
            //http://163.22.17.184:8080/bubble/apply_count2/json? time=a & place=0A &week=五
            url: "http://163.22.17.184:8080/bubble/user/apply/information/Real_time",
            data: { "time": time, "place": ball, "week": week },
            type: "GET",
            success: function(data) {
                $("#num2").val(data.申請次數).show();
            }
        });
    }
}); $("#wish3").change(function() {
    var week = $("#YourWeek3").val();
    var ball = $("#YourBall3").val();
    var time = $("#YourTime3").val();
    if ((week != -1) && (ball != -1) && (time != -1)) {
        $.ajax({
            //http://163.22.17.184:8080/bubble/apply_count2/json? time=a & place=0A &week=五
            url: "http://163.22.17.184:8080/bubble/user/apply/information/Real_time",
            data: { "time": time, "place": ball, "week": week },
            type: "GET",
            success: function(data) {
                $("#num3").val(data.申請次數).show();
            }
        });
    }
}); $("#wish4").change(function() {
    var week = $("#YourWeek4").val();
    var ball = $("#YourBall4").val();
    var time = $("#YourTime4").val();
    if ((week != -1) && (ball != -1) && (time != -1)) {
        $.ajax({
            //http://163.22.17.184:8080/bubble/apply_count2/json? time=a & place=0A &week=五
            url: "http://163.22.17.184:8080/bubble/user/apply/information/Real_time",
            data: { "time": time, "place": ball, "week": week },
            type: "GET",
            success: function(data) {
                $("#num4").val(data.申請次數).show();
            }
        });
    }
}); $("#wish5").change(function() {
    var week = $("#YourWeek5").val();
    var ball = $("#YourBall5").val();
    var time = $("#YourTime5").val();
    if ((week != -1) && (ball != -1) && (time != -1)) {
        $.ajax({
            //http://163.22.17.184:8080/bubble/apply_count2/json? time=a & place=0A &week=五
            url: "http://163.22.17.184:8080/bubble/user/apply/information/Real_time",
            data: { "time": time, "place": ball, "week": week },
            type: "GET",
            success: function(data) {
                $("#num5").val(data.申請次數).show();
            }
        });
    }
});



});
