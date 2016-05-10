$(document).ready(function() {
    /*
        ㄜ 做一個判斷，看使用者是哪種球類
        假設:
            0->籃球  1->排球  2->羽球  3->桌球  4->壘球
    */
    //cookie為球種代碼
    var cookie = sessionStorage["account"].substring(2,3); //ballcode
    var json = [
        { "球類": "籃球", "場地數": 8, "場地": ["A", "B", "C", "D", "E", "F", "G", "H"], "時段數": 2, "時段": ["a", "b"], "時段差": 3, "時段開始": 1700 },
        { "球類": "排球", "場地數": 4, "場地": ["A", "B", "C", "D"], "時段數": 2, "時段": ["c", "d"], "時段差": 2, "時段開始": 1500 ,"時間":["1700", "1900","2100"]},
        { "球類": "羽球", "場地數": 4, "場地": ["A", "B", "C", "D"], "時段數": 2, "時段": ["a", "b"], "時段差": 2, "時段開始": 1500 },
        { "球類": "桌球", "場地數": 4, "場地": ["A", "B", "C", "D"], "時段數": 2, "時段": ["a", "b"], "時段差": 2, "時段開始": 1500 },
        { "球類": "壘球", "場地數": 4, "場地": ["A", "B", "C", "D"], "時段數": 2, "時段": ["a", "b"], "時段差": 2, "時段開始": 1500 }
    ]
    place = json[cookie].球類; //中文名
    // 偵測 Volleyball 改變時段選擇 (將原先時段刪除再加上新時段)
    // for(i = 0; i < json[cookie].場地數; i++){
    //     $(".Place").append("<option value=" +  json[cookie].場地[i] + ">" + place + json[cookie].場地[i] + "</option>");
    // }
    for (i = 0; i < json[cookie].時段數; i++) {
        from = json[cookie].時間[i];
        to = json[cookie].時間[i+1];
        $(".Time").append("<option value=" + json[cookie].時間[i] + ">" + from + "~" + to + "</option>");
    }
    $("#YourTime1").change(function(){
        if($("#YourTime1").val()=="1700"){
            $("#YourBall1 option:last").remove();
            $("#YourBall1 option:last").remove();
            $("#YourBall1 option:last").remove();
            $("#YourBall1 option:last").remove();
            $("#YourBall1").append("<option value=" + json[cookie].場地[0] + ">" + json[cookie].場地[0] + "</option>");
            $("#YourBall1").append("<option value=" + json[cookie].場地[1] + ">" + json[cookie].場地[1] + "</option>");
            $("#YourBall1").append("<option value=" + json[cookie].場地[2] + ">" + json[cookie].場地[2] + "</option>");
            $("#YourBall1").append("<option value=" + json[cookie].場地[3] + ">" + json[cookie].場地[3] + "</option>");
        }
        if($("#YourTime1").val()=="1900"){
            $("#YourBall1 option:last").remove();
            $("#YourBall1 option:last").remove();
            $("#YourBall1").append("<option value=" + json[cookie].場地[0] + ">" + json[cookie].場地[0] + "</option>");
            $("#YourBall1").append("<option value=" + json[cookie].場地[1] + ">" + json[cookie].場地[1] + "</option>");
        }
    });
    $("#YourTime2").change(function(){
        if($("#YourTime2").val()=="1700"){
            $("#YourBall2 option:last").remove();
            $("#YourBall2 option:last").remove();
            $("#YourBall2 option:last").remove();
            $("#YourBall2 option:last").remove();
            $("#YourBall2").append("<option value=" + json[cookie].場地[0] + ">" + json[cookie].場地[0] + "</option>");
            $("#YourBall2").append("<option value=" + json[cookie].場地[1] + ">" + json[cookie].場地[1] + "</option>");
            $("#YourBall2").append("<option value=" + json[cookie].場地[2] + ">" + json[cookie].場地[2] + "</option>");
            $("#YourBall2").append("<option value=" + json[cookie].場地[3] + ">" + json[cookie].場地[3] + "</option>");
        }
        if($("#YourTime2").val()=="1900"){
            $("#YourBall2 option:last").remove();
            $("#YourBall2 option:last").remove();
            $("#YourBall2").append("<option value=" + json[cookie].場地[0] + ">" + json[cookie].場地[0] + "</option>");
            $("#YourBall2").append("<option value=" + json[cookie].場地[1] + ">" + json[cookie].場地[1] + "</option>");
        }
    });
    $("#YourTime3").change(function(){
        if($("#YourTime3").val()=="1700"){
            $("#YourBall3 option:last").remove();
            $("#YourBall3 option:last").remove();
            $("#YourBall3 option:last").remove();
            $("#YourBall3 option:last").remove();
            $("#YourBall3").append("<option value=" + json[cookie].場地[0] + ">" + json[cookie].場地[0] + "</option>");
            $("#YourBall3").append("<option value=" + json[cookie].場地[1] + ">" + json[cookie].場地[1] + "</option>");
            $("#YourBall3").append("<option value=" + json[cookie].場地[2] + ">" + json[cookie].場地[2] + "</option>");
            $("#YourBall3").append("<option value=" + json[cookie].場地[3] + ">" + json[cookie].場地[3] + "</option>");
        }
        if($("#YourTime3").val()=="1900"){
            $("#YourBall3 option:last").remove();
            $("#YourBall3 option:last").remove();
            $("#YourBall3").append("<option value=" + json[cookie].場地[0] + ">" + json[cookie].場地[0] + "</option>");
            $("#YourBall3").append("<option value=" + json[cookie].場地[1] + ">" + json[cookie].場地[1] + "</option>");
        }
    });
    $("#YourTime4").change(function(){
        if($("#YourTime4").val()=="1700"){
            $("#YourBall4 option:last").remove();
            $("#YourBall4 option:last").remove();
            $("#YourBall4 option:last").remove();
            $("#YourBall4 option:last").remove();
            $("#YourBall4").append("<option value=" + json[cookie].場地[0] + ">" + json[cookie].場地[0] + "</option>");
            $("#YourBall4").append("<option value=" + json[cookie].場地[1] + ">" + json[cookie].場地[1] + "</option>");
            $("#YourBall4").append("<option value=" + json[cookie].場地[2] + ">" + json[cookie].場地[2] + "</option>");
            $("#YourBall4").append("<option value=" + json[cookie].場地[3] + ">" + json[cookie].場地[3] + "</option>");
        }
        if($("#YourTime4").val()=="1900"){
            $("#YourBall4 option:last").remove();
            $("#YourBall4 option:last").remove();
            $("#YourBall4").append("<option value=" + json[cookie].場地[0] + ">" + json[cookie].場地[0] + "</option>");
            $("#YourBall4").append("<option value=" + json[cookie].場地[1] + ">" + json[cookie].場地[1] + "</option>");
        }
    });
    $("#YourTime5").change(function(){
        if($("#YourTime5").val()=="1700"){
            $("#YourBall5 option:last").remove();
            $("#YourBall5 option:last").remove();
            $("#YourBall5 option:last").remove();
            $("#YourBall5 option:last").remove();
            $("#YourBall5").append("<option value=" + json[cookie].場地[0] + ">" + json[cookie].場地[0] + "</option>");
            $("#YourBall5").append("<option value=" + json[cookie].場地[1] + ">" + json[cookie].場地[1] + "</option>");
            $("#YourBall5").append("<option value=" + json[cookie].場地[2] + ">" + json[cookie].場地[2] + "</option>");
            $("#YourBall5").append("<option value=" + json[cookie].場地[3] + ">" + json[cookie].場地[3] + "</option>");
        }
        if($("#YourTime5").val()=="1900"){
            $("#YourBall5 option:last").remove();
            $("#YourBall5 option:last").remove();
            $("#YourBall5").append("<option value=" + json[cookie].場地[0] + ">" + json[cookie].場地[0] + "</option>");
            $("#YourBall5").append("<option value=" + json[cookie].場地[1] + ">" + json[cookie].場地[1] + "</option>");
        }
    });
    /*      左邊的長條圖~~~~~~~~~~~~~~~~~   */
    //進入頁面時預設顯示星期一
    weekFun("一", json[cookie], cookie);
    //點選星期時，取得對應日期
    $("#left > a").click(function() {
        var n = $(this).attr("value")
        weekFun(n, json[cookie], cookie)
    });


    //傳入日期，變換長條圖
    function weekFun(day, obj, ball_type) {
        $(function() {
            var num = [] //存各時段的申請次數
            $.ajax({
                url: "http://163.22.17.184:8080/bubble/user/apply/bar_chart",
                data: { "week": day }, //需要球類的參數?
                type: "GET",
                //↓天辣辣辣辣這行太神了!!!!傳回值終於可以存惹感動
                async: false,
                success: function(data) {
                    all_time = obj.場地數 * obj.時段數
                    for (i = 0; i < all_time; i++) {
                        num[i] = 0
                    }
                    for (i = 0; i < data.length; i++) {
                        for (k = 0; k < obj.場地數; k++) { //場地 8
                            for (z = 0; z < obj.時段數; z++) { //時段 2
                                times = k * 2 + z
                                p_code = cookie + obj.場地[k]
                                t_code = obj.時段[z]
                                if ((data[i].場地代碼 == p_code) && (data[i].時段 == t_code)) {
                                    num[times] = data[i].申請隊伍數
                                    console.log(times, num[times])
                                }
                            }
                        }
                    }
                }
            });
            longchart(day, obj, ball_type, num);
        });

    }

    //只寫了籃球(0)和桌球(1)的情況...
    function longchart(day, obj, ball_type, num) {
        if (ball_type == 0) {
            //籃球
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
                    categories: [place + obj.場地[0], place + obj.場地[1], place + obj.場地[2], place + obj.場地[3], place + obj.場地[4], place + obj.場地[5], place + obj.場地[6], place + obj.場地[7]],
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
                series: [{
                    name: '17:00~20:00',
                    data: [parseInt(num[0]), parseInt(num[2]), parseInt(num[4]), parseInt(num[6]), parseInt(num[8]), parseInt(num[10]), parseInt(num[12]), parseInt(num[14])]
                }, {
                    name: '20:00~23:00',
                    data: [parseInt(num[1]), parseInt(num[3]), parseInt(num[5]), parseInt(num[7]), parseInt(num[9]), parseInt(num[11]), parseInt(num[13]), parseInt(num[15])]
                }, ]
            });
        } else if(ball_type == 1){
            //排球
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
                    categories: [place + obj.場地[0], place + obj.場地[1], place + obj.場地[2], place + obj.場地[3]],
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
                series: [{
                    name: '17:00~19:00',
                    data: [parseInt(num[0]), parseInt(num[2]), parseInt(num[4]), parseInt(num[6])]
                }, {
                    name: '19:00~21:00',
                    data: [parseInt(num[1]), parseInt(num[3]), parseInt(num[5]), parseInt(num[7])]
                }, ]
            });
        }
    }

    /*      右邊的的申請場地次數~~~~~~~~~~~~~~~~~   */
    //顯示對應的次數
    $("#wish1").change(function() {
        var week = $("#YourWeek1").val();
        var ball = $("#YourBall1").val();
        var time = $("#YourTime1").val();
        if ((week != -1) && (ball != -1) && (time != -1)) {
            $.ajax({
                //http://163.22.17.184:8080/bubble/apply_count2/json? time=a & place=0A &week=五
                url: "http://163.22.17.184:8080/bubble/apply_count2/json",
                data: { "time": time, "place": ball, "week": week },
                type: "GET",
                success: function(data) {
                    $("#num1").val(data.申請次數).show();
                }
            });
            console.log("week", week, "ball", ball, "time", time);
        }
    });
    $("#wish2").change(function() {
        var week = $("#YourWeek2").val();
        var ball = $("#YourBall2").val();
        var time = $("#YourTime2").val();
        if ((week != -1) && (ball != -1) && (time != -1)) {
            $.ajax({
                //http://163.22.17.184:8080/bubble/apply_count2/json? time=a & place=0A &week=五
                url: "http://163.22.17.184:8080/bubble/apply_count2/json",
                data: { "time": time, "place": ball, "week": week },
                type: "GET",
                success: function(data) {
                    $("#num2").val(data.申請次數).show();
                }
            });
        }
    });
    $("#wish3").change(function() {
        var week = $("#YourWeek3").val();
        var ball = $("#YourBall3").val();
        var time = $("#YourTime3").val();
        if ((week != -1) && (ball != -1) && (time != -1)) {
            $.ajax({
                //http://163.22.17.184:8080/bubble/apply_count2/json? time=a & place=0A &week=五
                url: "http://163.22.17.184:8080/bubble/apply_count2/json",
                data: { "time": time, "place": ball, "week": week },
                type: "GET",
                success: function(data) {
                    $("#num3").val(data.申請次數).show();
                }
            });
        }
    });
    $("#wish4").change(function() {
        var week = $("#YourWeek4").val();
        var ball = $("#YourBall4").val();
        var time = $("#YourTime4").val();
        if ((week != -1) && (ball != -1) && (time != -1)) {
            $.ajax({
                //http://163.22.17.184:8080/bubble/apply_count2/json? time=a & place=0A &week=五
                url: "http://163.22.17.184:8080/bubble/apply_count2/json",
                data: { "time": time, "place": ball, "week": week },
                type: "GET",
                success: function(data) {
                    $("#num4").val(data.申請次數).show();
                }
            });
        }
    });
    $("#wish5").change(function() {
        var week = $("#YourWeek5").val();
        var ball = $("#YourBall5").val();
        var time = $("#YourTime5").val();
        if ((week != -1) && (ball != -1) && (time != -1)) {
            $.ajax({
                //http://163.22.17.184:8080/bubble/apply_count2/json? time=a & place=0A &week=五
                url: "http://163.22.17.184:8080/bubble/apply_count2/json",
                data: { "time": time, "place": ball, "week": week },
                type: "GET",
                success: function(data) {
                    $("#num5").val(data.申請次數).show();
                }
            });
        }
    });
});
/*  保留青儀原作塞場地xD
    依照球類，把該球類的場地和時段塞進選單
    for (i = 0; i < json[cookie].場地數; i++) {
        $(".Place").append("<option value=" + cookie + json[cookie].場地[i] + ">" + place + json[cookie].場地[i] + "</option>");
    }
    for (i = 0; i < json[cookie].時段數; i++) {
        from = json[cookie].時段開始 + (json[cookie].時段差 * i * 100)
        to = json[cookie].時段開始 + (json[cookie].時段差 * (i + 1) * 100)
        $(".Time").append("<option value=" + json[cookie].時段[i] + ">" + from + "~" + to + "</option>");
    }
    */
