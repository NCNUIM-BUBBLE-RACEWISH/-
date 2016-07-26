$(document).ready(function() {
    var cookie
    if(parseInt(sessionStorage["account"].substring(2, 3)==0)||
        (parseInt(sessionStorage["account"].substring(2, 3)==1))){
        cookie = parseInt(sessionStorage["account"].substring(2, 3)) * 2;
    }else{
        cookie=parseInt(sessionStorage["account"].substring(2, 3))
    }
    console.log(cookie)
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
                },{
                    "場地名": "A3場",
                    "場地代碼": "J",
                    "開始時間": [13, 15, 17, 19],
                    "時段代碼": ["e", "f", "c", "d"],
                    "時段數": 4
                },{
                    "場地名": "B1場",
                    "場地代碼": "K",
                    "開始時間": [13, 15, 17, 19],
                    "時段代碼": ["e", "f", "c", "d"],
                    "時段數": 4
                },{
                    "場地名": "B2場",
                    "場地代碼": "L",
                    "開始時間": [13, 15, 17, 19],
                    "時段代碼": ["e", "f", "c", "d"],
                    "時段數": 4
                },{
                    "場地名": "B3場",
                    "場地代碼": "Q",
                    "開始時間": [13, 15, 17, 19],
                    "時段代碼": ["e", "f", "c", "d"],
                    "時段數": 4
                },{
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
        //塞場地
    for (var i = 0; i < json[cookie].總時間.length; i++) {
        $(".Time").append("<option value=" + json[cookie].總時間[i] + ">" + json[cookie].總開始時間[i] + "00~" + (json[cookie].總開始時間[i] + json[cookie].時段差) + "00</option>");
    }
    //選時段，塞入場地
    $("#YourTime1").change(function() {
        $("#YourBall1").html("<option value='-1' selected></option>");
        $("#YourBall1").removeAttr("disabled");
        var timecode = $("#YourTime1").val(); //所選時段
        //列出有此時段的所有場地
        var count;
        for (var i = 0; i < json[cookie].場地數; i++) {
            for (var h = 0; h < json[cookie].場地資料[i].時段數; h++) {
                if (json[cookie].場地資料[i].時段代碼[h] == timecode) {
                    $("#YourBall1").append("<option value=" + cookie + json[cookie].場地資料[i].場地代碼 + ">" + json[cookie].場地資料[i].場地名 + "</option>");
                }
            }
        }
    });
    $("#YourTime2").change(function() {
        $("#YourBall2").html("<option value='-1' selected></option>");
        $("#YourBall2").removeAttr("disabled");
        var timecode = $("#YourTime2").val(); //所選時段
        //列出有此時段的所有場地
        var count;
        for (var i = 0; i < json[cookie].場地數; i++) {
            for (var h = 0; h < json[cookie].場地資料[i].時段數; h++) {
                if (json[cookie].場地資料[i].時段代碼[h] == timecode) {
                    $("#YourBall2").append("<option value=" + cookie + json[cookie].場地資料[i].場地代碼 + ">" + json[cookie].場地資料[i].場地名 + "</option>");
                }
            }
        }
    });
    $("#YourTime3").change(function() {
        $("#YourBall3").html("<option value='-1' selected></option>");
        $("#YourBall3").removeAttr("disabled");
        var timecode = $("#YourTime3").val(); //所選時段
        //列出有此時段的所有場地
        var count;
        for (var i = 0; i < json[cookie].場地數; i++) {
            for (var h = 0; h < json[cookie].場地資料[i].時段數; h++) {
                if (json[cookie].場地資料[i].時段代碼[h] == timecode) {
                    $("#YourBall3").append("<option value=" + cookie + json[cookie].場地資料[i].場地代碼 + ">" + json[cookie].場地資料[i].場地名 + "</option>");
                }
            }
        }
    });
    $("#YourTime4").change(function() {
        $("#YourBall4").html("<option value='-1' selected></option>");
        $("#YourBall4").removeAttr("disabled");
        var timecode = $("#YourTime4").val(); //所選時段
        //列出有此時段的所有場地
        var count;
        for (var i = 0; i < json[cookie].場地數; i++) {
            for (var h = 0; h < json[cookie].場地資料[i].時段數; h++) {
                if (json[cookie].場地資料[i].時段代碼[h] == timecode) {
                    $("#YourBall4").append("<option value=" + cookie + json[cookie].場地資料[i].場地代碼 + ">" + json[cookie].場地資料[i].場地名 + "</option>");
                }
            }
        }
    });
    $("#YourTime5").change(function() {
        $("#YourBall5").html("<option value='-1' selected></option>");
        $("#YourBall5").removeAttr("disabled");
        var timecode = $("#YourTime5").val(); //所選時段
        //列出有此時段的所有場地
        var count;
        for (var i = 0; i < json[cookie].場地數; i++) {
            for (var h = 0; h < json[cookie].場地資料[i].時段數; h++) {
                if (json[cookie].場地資料[i].時段代碼[h] == timecode) {
                    $("#YourBall5").append("<option value=" + cookie + json[cookie].場地資料[i].場地代碼 + ">" + json[cookie].場地資料[i].場地名 + "</option>");
                }
            }
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
        } else if (ball_type == 2) {
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
                    data: [parseInt(num[0]), parseInt(num[4]),parseInt(num[8]),parseInt(num[12]),parseInt(num[16]),parseInt(num[20]),parseInt(num[24])]
                }, {
                    name: '15:00~17:00',
                    data: [parseInt(num[1]), parseInt(num[5]),parseInt(num[9]),parseInt(num[13]),parseInt(num[17]),parseInt(num[21]),parseInt(num[25])]
                }, {
                    name: '17:00~19:00',
                    data: [parseInt(num[2]), parseInt(num[6]),parseInt(num[10]),parseInt(num[14]),parseInt(num[18]),parseInt(num[22]),parseInt(num[26])]
                }, {
                    name: '19:00~21:00',
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
    });
    $("#wish2").change(function() {
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
    });
    $("#wish3").change(function() {
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
    });
    $("#wish4").change(function() {
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
    });
    $("#wish5").change(function() {
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
