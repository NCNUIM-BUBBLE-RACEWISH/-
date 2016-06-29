$(document).ready(function() {
    var cookie;
    if (parseInt(sessionStorage["account"].substring(2, 3) == 0) ||
        (parseInt(sessionStorage["account"].substring(2, 3) == 1))) {
        cookie = parseInt(sessionStorage["account"].substring(2, 3)) * 2;
    } else {
        cookie = parseInt(sessionStorage["account"].substring(2, 3))
    }
    //搜尋的預設值
    var user = sessionStorage['cname']
    document.getElementById('userSearch').setAttribute("placeholder", user)
        //取所有資料
    var data = getAll();
    //塞入
    pushIn(data, cookie);
    //一進入頁面(mark所屬系球種)
    search(user, data)
        //點擊搜尋
    $(function() {
        $("#lookFor").click(function() {
            //先將有mark的地方擦掉
            remove();
            var userSearch = $("#userSearch").val()
            search(userSearch, data)
        });
    });

});

function getAll() {
	var nowDate = new Date();
    if (nowDate.getMonth() < 9 || nowDate.getMonth() > 2)
        nowDate = (nowDate.getFullYear() - 1912) * 10 + 2;
    else
        nowDate = (nowDate.getFullYear() - 1911) * 10 + 1;
    console.log(sessionStorage["account"],nowDate)
    var object = []
    $.ajax({
        url: "http://163.22.17.184:8080/bubble/Search/result",
        data: { "ballid": sessionStorage["account"], "term": nowDate  },
        type: "GET",
        //↓天辣辣辣辣這行太神了!!!!傳回值終於可以存惹感動
        async: false,
        success: function(data) {
            for (i = 0; i < data.length; i++) {
                var inner = {
                    "使用者": data[i].使用者, //資管
                    "球種": data[i].球種, //女籃
                    "星期": data[i].星期, //四
                    "場地代碼": data[i].場地代碼, //B
                    "時間代碼": data[i].時間代碼 //a
                }
                object.push(inner);
            }
        }
    });
    return object
}

function pushIn(data, cookie) {
    var json = [{
            "球類": "籃球",
            "總時間": ["a", "b"],
            "總開始時間": [17, 20],
            "時段差": 3
        }, {
            "球類": "排球",
            "總時間": ["c", "d"],
            "總開始時間": [17, 19],
            "時段差": 2,
        }, {
            "球類": "羽球",
            "總時間": ["e", "f", "c", "d"],
            "總開始時間": [13, 15, 17, 19],
            "時段差": 2,
        }, {
            "球類": "桌球",
            "總時間": ["c", "d"],
            "總開始時間": [17, 19],
            "時段差": 2,
        },
        //壘球另外弄
    ];
    //該球類多少時段
    var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    for (var w = 0; w < 5; w++) {
        var sho = week[w].substring(0, 3);
        var s = 0;
        document.getElementById(week[w]).innerHTML += '<button type="button" class="btn btn-default btn-block">' + week[w] + '</button><br><div class="row" id="' + sho + s + '"><div class="col-md-5" id="search0">';
        var end = parseInt(json[cookie].總開始時間[0]) + parseInt(json[cookie].時段差);
        $("#" + sho + s + " > #search0").append("<p>時段</p><p>" + json[cookie].總開始時間[0] + "00" + "</p><p>" + end + "00" + "</p>");
        document.getElementById(sho + s).innerHTML += '<div class="col-md-7" id="' + week[w] + 0 + '"></div>'
        s++;
        for (var i = 1; i < json[cookie].總時間.length; i++) {
            document.getElementById(week[w]).innerHTML += '<br><div class="row" id="' + sho + s + '"><div class="col-md-5" id="search' + i + '">';
            end = parseInt(json[cookie].總開始時間[i]) + parseInt(json[cookie].時段差);
            $("#" + sho + s + " > #search" + i).append("<p>時段</p><p>" + json[cookie].總開始時間[i] + "00" + "</p><p>" + end + "00" + "</p>");
            document.getElementById(sho + s).innerHTML += '<div class="col-md-7" id="' + week[w] + i + '"></div>';
            s++;
        }
    }
    //塞資料
    var week2 = ["一", "二", "三", "四", "五"];
    var num = json[cookie].總時間.length * 5;
    for (i = 0; i < data.length; i++) {
        for (var d = 0; d < json[cookie].總時間.length; d++) {
            if (data[i].時間代碼 == json[cookie].總時間[d]) {
                for (var w = 0; w < 5; w++) {
                    if (data[i].星期 == week2[w]) {
                        $("#" + week[w] + d).append("<p >" + data[i].場地代碼 + "：" + data[i].使用者 + data[i].球種 + "</p>");
                    }

                }
            }

        }
    }
}

function search(user, data) {
    //所有含有<P>的元素
    var x = document.getElementsByTagName("p");
    for (i = 0; i < x.length; i++) {
        var tmp = x[i].innerText
        if (tmp.match(user) != null) {
            x[i].innerHTML = '<font style="background:yellow;">' + tmp + '</font>';
        }
    }
    return x;
}

function remove() {
    $('font').removeAttr("style");
}
