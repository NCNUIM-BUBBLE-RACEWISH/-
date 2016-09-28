$(document).ready(function() {
    var cookie
    if (parseInt(sessionStorage["account"].substring(2, 3) == 0) ||
        (parseInt(sessionStorage["account"].substring(2, 3) == 1))) {
        cookie = parseInt(sessionStorage["account"].substring(2, 3)) * 2;
    } else {
        cookie = parseInt(sessionStorage["account"].substring(2, 3))
    }
    console.log(cookie);
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
    console.log(JSON.stringify(termkind));
    $.ajax({
        url:'http://163.22.17.184:8080/bubble/management/apply/choose',
        contentType:"application/json",
        data:JSON.stringify(termkind),
        dataType: 'json',
        type: 'POST',
        success: function(result) {
                console.log('woohoo!');
                console.log(result);
                // 成功時將帳號,狀態碼,存入session
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
        //0->籃球  1->排球  2->羽球  3->桌球  4->壘球
    var json = [{
                "球類": "籃球",
                "場地數": 6,
                "總時間": ["a", "b"],
                "總開始時間": [17, 20],
                "時段差": 3,
                "場地資料": [{
                    "場地名": "籃球場B",
                    "場地代碼": "A",
                    "開始時間": [17, 20],
                    "時段代碼": ["a", "b"],
                    "時段數": 2
                }, {
                    "場地名": "籃球場C",
                    "場地代碼": "B",
                    "開始時間": [17, 20],
                    "時段代碼": ["a", "b"],
                    "時段數": 2
                }, {
                    "場地名": "籃球場D",
                    "場地代碼": "C",
                    "開始時間": [17, 20],
                    "時段代碼": ["a", "b"],
                    "時段數": 2
                }, {
                    "場地名": "新一場",
                    "場地代碼": "D",
                    "開始時間": [17, 20],
                    "時段代碼": ["a", "b"],
                    "時段數": 2
                }, {
                    "場地名": "新二場",
                    "場地代碼": "E",
                    "開始時間": [17, 20],
                    "時段代碼": ["a", "b"],
                    "時段數": 2
                }, {
                    "場地名": "新三場",
                    "場地代碼": "F",
                    "開始時間": [17, 20],
                    "時段代碼": ["a", "b"],
                    "時段數": 2
                }]
            }, {
                "球類": "排球",
                "場地數": 4,
                "總時間": ["c", "d"],
                "總開始時間": [17, 19],
                "時段差": 2,
                "場地資料": [{
                    "場地名": "排球場A",
                    "場地代碼": "I",
                    "開始時間": [17],
                    "時段代碼": ["c"],
                    "時段數": 1
                }, {
                    "場地名": "排球場B",
                    "場地代碼": "J",
                    "開始時間": [17],
                    "時段代碼": ["c"],
                    "時段數": 1
                }, {
                    "場地名": "排球場C",
                    "場地代碼": "K",
                    "開始時間": [17, 19],
                    "時段代碼": ["c", "d"],
                    "時段數": 2
                }, {
                    "場地名": "排球場D",
                    "場地代碼": "L",
                    "開始時間": [17, 19],
                    "時段代碼": ["c", "d"],
                    "時段數": 2
                }]
            }, {
                "球類": "羽球",
                "場地數": 7,
                "總時間": ["e", "f", "c", "d"],
                "總開始時間": [13, 15, 17, 19],
                "時段差": 2,
                "場地資料": [{
                    "場地名": "A1場",
                    "場地代碼": "M",
                    "開始時間": [13, 15, 17, 19],
                    "時段代碼": ["e", "f", "c", "d"],
                    "時段數": 4
                }, {
                    "場地名": "A2場",
                    "場地代碼": "I",
                    "開始時間": [13, 15, 17, 19],
                    "時段代碼": ["e", "f", "c", "d"],
                    "時段數": 4
                }, {
                    "場地名": "A3場",
                    "場地代碼": "J",
                    "開始時間": [13, 15, 17, 19],
                    "時段代碼": ["e", "f", "c", "d"],
                    "時段數": 4
                }, {
                    "場地名": "B1場",
                    "場地代碼": "K",
                    "開始時間": [13, 15, 17, 19],
                    "時段代碼": ["e", "f", "c", "d"],
                    "時段數": 4
                }, {
                    "場地名": "B2場",
                    "場地代碼": "L",
                    "開始時間": [13, 15, 17, 19],
                    "時段代碼": ["e", "f", "c", "d"],
                    "時段數": 4
                }, {
                    "場地名": "B3場",
                    "場地代碼": "Q",
                    "開始時間": [13, 15, 17, 19],
                    "時段代碼": ["e", "f", "c", "d"],
                    "時段數": 4
                }, {
                    "場地名": "B4場",
                    "場地代碼": "Z",
                    "開始時間": [13, 15, 17, 19],
                    "時段代碼": ["e", "f", "c", "d"],
                    "時段數": 4
                }]
            }, {
                "球類": "桌球",
                "場地數": 2,
                "總時間": ["c", "d"],
                "總開始時間": [17, 19],
                "時段差": 2,
                "場地資料": [{
                    "場地名": "體育館",
                    "場地代碼": "G",
                    "開始時間": [17, 19],
                    "時段代碼": ["c", "d"],
                    "時段數": 2
                }, {
                    "場地名": "綜B",
                    "場地代碼": "H",
                    "開始時間": [17, 19],
                    "時段代碼": ["c", "d"],
                    "時段數": 2
                }]
            },
            //壘球另外弄
        ]
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
                data: { "week": day },
                type: "GET",
                //↓天辣辣辣辣這行太神了!!!!傳回值終於可以存惹感動
                async: false,
                success: function(data) {
                    var all_time = 0;
                    for (var i = 0; i < obj.場地數; i++) {
                        all_time += obj.場地資料[i].時段數;
                    }
                    for (var i = 0; i < all_time; i++) {
                        num[i] = 0
                    }
                    console.log(all_time)

                    for (var i = 0; i < data.length; i++) {
                        for (var k = 0; k < obj.場地數; k++) {
                            for (var z = 0; z < obj.場地資料[k].時段數; z++) {
                                p_code = ball_type + obj.場地資料[k].場地代碼
                                t_code = obj.場地資料[k].時段代碼[z]
                                times = k * obj.場地資料[k].時段數 + z
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
                    categories: [obj.場地資料[0].場地名, obj.場地資料[1].場地名, obj.場地資料[2].場地名, obj.場地資料[3].場地名, obj.場地資料[4].場地名, obj.場地資料[5].場地名],
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
                    data: [parseInt(num[0]), parseInt(num[2]), parseInt(num[4]), parseInt(num[6]), parseInt(num[8]), parseInt(num[10])]
                }, {
                    name: '20:00~23:00',
                    data: [parseInt(num[1]), parseInt(num[3]), parseInt(num[5]), parseInt(num[7]), parseInt(num[9]), parseInt(num[11])]
                }, ]
            });
        } else if (ball_type == 1) {
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
                    categories: [obj.場地資料[0].場地名, obj.場地資料[1].場地名, obj.場地資料[2].場地名, obj.場地資料[3].場地名],
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
                    data: [parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[4])]
                }, {
                    name: '19:00~21:00',
                    data: ["", "", parseInt(num[3]), parseInt(num[5])]
                }, ]
            });
        } else if (ball_type == 3) {
            //桌球
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
                    categories: [obj.場地資料[0].場地名, obj.場地資料[1].場地名],
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
                    data: [parseInt(num[0]), parseInt(num[2])]
                }, {
                    name: '19:00~21:00',
                    data: [parseInt(num[1]), parseInt(num[3])]
                }, ]
            });
        } else if (ball_type == 2){

            //羽球
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
                    categories: [obj.場地資料[0].場地名, obj.場地資料[1].場地名, obj.場地資料[2].場地名, obj.場地資料[3].場地名, obj.場地資料[4].場地名, obj.場地資料[5].場地名,obj.場地資料[6].場地名],
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
                    name: '13:00~15:00',
                    //data: [1, 3, 2, 5, 10,2,1]
                    data: [parseInt(num[0]), parseInt(num[4]),parseInt(num[8]),parseInt(num[12]),parseInt(num[16]),parseInt(num[20]),parseInt(num[24])]
                }, {
                    name: '15:00~17:00',
                    //data: [2, 0, 3, 2, 2,4,10]
                    data: [parseInt(num[1]), parseInt(num[5]),parseInt(num[9]),parseInt(num[13]),parseInt(num[17]),parseInt(num[21]),parseInt(num[25])]
                }, {
                    name: '17:00~19:00',
                    //data: [9, 2, 13, 2, 2,4,10]
                    data: [parseInt(num[2]), parseInt(num[6]),parseInt(num[10]),parseInt(num[14]),parseInt(num[18]),parseInt(num[22]),parseInt(num[26])]
                }, {
                    name: '19:00~21:00',
                    //data: [5, 10, 3, 6, 4,4,7]
                    data: [parseInt(num[3]), parseInt(num[7]),parseInt(num[11]),parseInt(num[15]),parseInt(num[19]),parseInt(num[23]),parseInt(num[27])]
                } ]
            });
    }
}

//      右邊的的申請場地次數~~~~~~~~~~~~~~~~~
//顯示對應的次數
$("#wish1").change(function() {
    var week = $("#YourWeek1").val();
    var ball = $("#YourBall1").val();
    var time = $("#YourTime1").val();
    console.log(week+ball+time);
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
