$(document).ready(function() {
    var user = "資管女籃"
    //取所有資料
    var data = getAll();
    //塞入
    pushIn(data);
    //一進入頁面(mark所屬系球種)
    search(user, data)
    //點擊搜尋
    $(function() {
        $("#lookFor").click(function() {
            //先將有mark的地方擦掉
            remove();
            var userSearch = $("#userSearch").val()
            search(userSearch,data)
        });
    });

});
function getAll() {
    var object = []
    $.ajax({
        url: "http://163.22.17.184:8080/bubble/Search_result/json",
        data: {},
        type: "GET",
        //↓天辣辣辣辣這行太神了!!!!傳回值終於可以存惹感動
        async: false,
        success: function(data) {
            for (i = 0; i < data.length; i++) {
                var inner = {
                        "使用者": data[i].使用者,
                        "球種": data[i].球種,
                        "星期": data[i].星期,
                        "場地代碼": data[i].場地代碼,
                        "時間代碼": data[i].時間代碼
                    }
                    //object[i]=inner
                object.push(inner);
            }
            console.log(object)
        }
    });
    return object
}

function pushIn(data) {
    for (i = 0; i < data.length; i++) {
        if ((data[i].星期 == "一") && (data[i].時間代碼 == "a")) {
            $("#MonA").append("<p >"+data[i].場地代碼+"："+ data[i].使用者 + data[i].球種 + "</p>");
        } else if ((data[i].星期 == "一") && (data[i].時間代碼 == "b")) {
            $("#MonB").append("<p >"+data[i].場地代碼+"："+ data[i].使用者 + data[i].球種 + "</p>");
        } else if ((data[i].星期 == "二") && (data[i].時間代碼 == "a")) {
            $("#TueA").append("<p >"+data[i].場地代碼+"："+ data[i].使用者 + data[i].球種 + "</p>");
        } else if ((data[i].星期 == "二") && (data[i].時間代碼 == "b")) {
            $("#TueB").append("<p >"+data[i].場地代碼+"："+ data[i].使用者 + data[i].球種 + "</p>")
        } else if ((data[i].星期 == "三") && (data[i].時間代碼 == "a")) {
            $("#WedA").append("<p >"+data[i].場地代碼+"："+ data[i].使用者 + data[i].球種 + "</p>");
        } else if ((data[i].星期 == "三") && (data[i].時間代碼 == "b")) {
            $("#WedB").append("<p >"+data[i].場地代碼+"："+ data[i].使用者 + data[i].球種 + "</p>");
        } else if ((data[i].星期 == "四") && (data[i].時間代碼 == "a")) {
            $("#ThuA").append("<p >"+data[i].場地代碼+"："+ data[i].使用者 + data[i].球種 + "</p>");
        } else if ((data[i].星期 == "四") && (data[i].時間代碼 == "b")) {
            $("#ThuB").append("<p >"+data[i].場地代碼+"："+ data[i].使用者 + data[i].球種 + "</p>");
        } else if ((data[i].星期 == "五") && (data[i].時間代碼 == "a")) {
            $("#FriA").append("<p >"+data[i].場地代碼+"："+ data[i].使用者 + data[i].球種 + "</p>");
        } else if ((data[i].星期 == "五") && (data[i].時間代碼 == "b")) {
            $("#FriB").append("<p >"+data[i].場地代碼+"："+ data[i].使用者 + data[i].球種 + "</p>");
        }
    }
}

function search(user, data) {
    //所有含有<P>的元素
    var x = document.getElementsByTagName("p");
    console.log(x)
    for (i = 0; i < x.length; i++) {
        var tmp = x[i].innerText
        if (tmp.match(user) != null) {
            x[i].innerHTML = '<font style="background:yellow;">' + tmp + '</font>';
        }
    }
    return x;
}
function remove(){
    $('font').removeAttr("style");
}
