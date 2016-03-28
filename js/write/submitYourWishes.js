$(document).ready(function() {

/*      左邊的長條圖~~~~~~~~~~~~~~~~~   */
    //進入頁面時預設顯示星期一
    weekFun("一");

    //點選星期的<a>時，取得對應日期
    $("#left > a").click(function() {
        var n = $(this).attr("value")
        weekFun(n)
    });

    //傳入日期，變換長條圖
    function weekFun(day) {
        $(function() {
            var num = []
            myurl = "http://163.22.17.184:8080/bubble/wish/imcount/json" + ";week=" + day
            $.ajax({
                url: myurl,
                data: {},
                type: "GET",
                //↓天辣辣辣辣這行太神了!!!!傳回值終於可以存惹感動
                async: false,
                success: function(data) {
                    place = "排球" //user的球類
                    console.log(data);
                    week = "三"
                    for (i = 0; i < 8; i++) {
                        num[i] = 0
                    }
                    for (i = 0; i <= 8; i++) {
                        if ((data[i].場地代碼 == "0A") && (data[i].時段 == "a")) {
                            num[0] = data[i].申請隊伍數
                        } else if ((data[i].場地代碼 == "0A") && (data[i].時段 == "b")) {
                            num[1] = data[i].申請隊伍數
                        } else if ((data[i].場地代碼 == "0B") && (data[i].時段 == "a")) {
                            num[2] = data[i].申請隊伍數
                        } else if ((data[i].場地代碼 == "0B") && (data[i].時段 == "b")) {
                            num[3] = data[i].申請隊伍數
                        } else if ((data[i].場地代碼 == "0C") && (data[i].時段 == "a")) {
                            num[4] = data[i].申請隊伍數
                        } else if ((data[i].場地代碼 == "0C") && (data[i].時段 == "b")) {
                            num[5] = data[i].申請隊伍數
                        } else if ((data[i].場地代碼 == "0D") && (data[i].時段 == "a")) {
                            num[6] = data[i].申請隊伍數
                        } else if ((data[i].場地代碼 == "0D") && (data[i].時段 == "b")) {
                            num[7] = data[i].申請隊伍數
                        }
                    }
                }
            });
            $('#container').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: "星期"+day+'的申請人數'
                },
                subtitle: {
                    text: ': <a href=""></a>'
                },
                xAxis: {
                    categories: [place + 'A', place + 'B', place + 'C', place + 'D'],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
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
                    data: [parseInt(num[0]), parseInt(num[2]), parseInt(num[4]), parseInt(num[6])]
                }, {
                    name: '20:00~23:00',
                    data: [parseInt(num[1]), parseInt(num[3]), parseInt(num[5]), parseInt(num[7])]
                }, ]
            });
        });
    }



/*      右邊的的申請場地次數~~~~~~~~~~~~~~~~~   */
    //顯示對應的次數
    $("#wish1").change(function() {
        var time = $("#YourTime1").val();
        var ball = $("#YourBall1").val();
        var place = $("#YourPlace1").val();
        if ((time != -1) && (ball != -1) && (place != -1)) {
            $.ajax({
                url: "http://163.22.17.184:8080/bubble/apply_count2/json",
                data: {},
                type: "GET",
                success: function(data) {
                    $.each(data, function(key, value) {
                        $("#wish1 > input").val(value).show();
                        console.log(key + ": " + value);
                    });
                }
            });
        }
    });
    $("#wish2").change(function() {
        var time = $("#YourTime2").val();
        var ball = $("#YourBall2").val();
        var place = $("#YourPlace2").val();
        if ((time != -1) && (ball != -1) && (place != -1)) {
            $.ajax({
                url: "http://163.22.17.184:8080/bubble/apply_count2/json",
                data: {},
                type: "GET",
                success: function(data) {
                    $.each(data, function(key, value) {
                        $("#wish2 > input").val(value).show();
                        console.log(key + ": " + value);
                    });
                }
            });
        }
    })
    $("#wish3").change(function() {
        var time = $("#YourTime3").val();
        var ball = $("#YourBall3").val();
        var place = $("#YourPlace3").val();
        if ((time != -1) && (ball != -1) && (place != -1)) {
            $.ajax({
                url: "http://163.22.17.184:8080/bubble/apply_count2/json",
                data: {},
                type: "GET",
                success: function(data) {
                    $.each(data, function(key, value) {
                        $("#wish3 > input").val(value).show();
                        console.log(key + ": " + value);
                    });
                }
            });
        }
    });
    $("#wish4").change(function() {
        var time = $("#YourTime4").val();
        var ball = $("#YourBall4").val();
        var place = $("#YourPlace4").val();
        if ((time != -1) && (ball != -1) && (place != -1)) {
            $.ajax({
                url: "http://163.22.17.184:8080/bubble/apply_count2/json",
                data: {},
                type: "GET",
                success: function(data) {
                    $.each(data, function(key, value) {
                        $("#wish4 > input").val(value).show();
                        console.log(key + ": " + value);

                    });
                }
            });
        }
    });

    $("#wish5").change(function() {
        var time = $("#YourTime5").val();
        var ball = $("#YourBall5").val();
        var place = $("#YourPlace5").val();
        if ((time != -1) && (ball != -1) && (place != -1)) {
            /* 列出所選時間
            $("#wish5 > input").val(" 　"+time+" "+ball+" "+place).show();
            */
            $.ajax({
                url: "http://163.22.17.184:8080/bubble/apply_count2/json",
                data: {},
                type: "GET",
                success: function(data) {
                    $.each(data, function(key, value) {
                        $("#wish5 > input").val(value).show();
                        console.log(key + ": " + value);

                    });
                }
            });

        }
    });




});

