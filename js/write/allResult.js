$(document).ready(function() {
    var user = "資管女籃"
        //取所有資料
    getAll(user);
});
//取所有資料
function getAll(user) {
    $(function() {
        $.ajax({
            url: "http://163.22.17.184:8080/bubble/Search_result/json",
            data: {},
            type: "GET",
            //↓天辣辣辣辣這行太神了!!!!傳回值終於可以存惹感動
            async: false,
            success: function(data) {

                for (i = 0; i < data.length; i++) {
                    if ((data[i].星期 == "一") && (data[i].時間代碼 == "a")) {
                        if ((data[i].使用者 + data[i].球種) == user) {
                            $("#MonA").append("<p id=" + i + ">" + data[i].使用者 + data[i].球種 + data[i].場地代碼 + "</p>");
                            $("#MonB > #" + i).css({ "background-color": "yellow" });
                        } else {
                            $("#MonA").append(data[i].使用者 + data[i].球種 + data[i].場地代碼 + "<br>");
                        }
                    } else if ((data[i].星期 == "一") && (data[i].時間代碼 == "b")) {
                        if ((data[i].使用者 + data[i].球種) == user) {
                            $("#MonB").append("<p id=" + i + ">" + data[i].使用者 + data[i].球種 + data[i].場地代碼 + "</p>");
                            $("#MonB > #" + i).css({ "background-color": "yellow" });
                        } else {
                            $("#MonB").append(data[i].使用者 + data[i].球種 + data[i].場地代碼 + "<br>");
                        }
                    } else if ((data[i].星期 == "二") && (data[i].時間代碼 == "a")) {
                        if ((data[i].使用者 + data[i].球種) == user) {
                            $("#TueA").append("<p id = " + i + " > " + data[i].使用者 + data[i].球種 + data[i].場地代碼 + "</p>");
                            $("#TueA > #" + i).css({ "background-color": "yellow" });
                        } else {
                            $("#TueA").append(data[i].使用者 + data[i].球種 + data[i].場地代碼 + "<br>");
                        }
                    } else if ((data[i].星期 == "二") && (data[i].時間代碼 == "b")) {
                        if ((data[i].使用者 + data[i].球種) == user) {
                            $("#TueB").append("<p id=" + i + ">" + data[i].使用者 + data[i].球種 + data[i].場地代碼 + "</p>");
                            $("#TueB > #" + i).css({ "background-color": "yellow" });

                        } else {
                            $("#TueB").append(data[i].使用者 + data[i].球種 + data[i].場地代碼 + "<br>")
                        }
                    } else if ((data[i].星期 == "三") && (data[i].時間代碼 == "a")) {
                        if ((data[i].使用者 + data[i].球種) == user) {
                            $("#WedA").append("<p id=" + i + ">" + data[i].使用者 + data[i].球種 + data[i].場地代碼 + "</p>");
                            $("#WedA > #" + i).css({ "background-color": "yellow" });
                        } else {
                            $("#WedA").append(data[i].使用者 + data[i].球種 + data[i].場地代碼 + "<br>");
                        }
                    } else if ((data[i].星期 == "三") && (data[i].時間代碼 == "b")) {
                        if ((data[i].使用者 + data[i].球種) == user) {
                            $("#WedB").append("<p id=" + i + ">" + data[i].使用者 + data[i].球種 + data[i].場地代碼 + "</p>");
                            $("#WedB > #" + i).css({ "background-color": "yellow" });
                        } else {
                            $("#WedB").append(data[i].使用者 + data[i].球種 + data[i].場地代碼 + "<br>");
                        }
                    } else if ((data[i].星期 == "四") && (data[i].時間代碼 == "a")) {
                        if ((data[i].使用者 + data[i].球種) == user) {
                            $("#ThuA").append("<p id=" + i + ">" + data[i].使用者 + data[i].球種 + data[i].場地代碼 + "</p>");
                            $("#ThuA > #" + i).css({ "background-color": "yellow" });
                        } else {
                            $("#ThuA").append(data[i].使用者 + data[i].球種 + data[i].場地代碼 + "<br>");
                        }

                    } else if ((data[i].星期 == "四") && (data[i].時間代碼 == "b")) {
                        if ((data[i].使用者 + data[i].球種) == user) {
                            $("#ThuB").append("<p id=" + i + ">" + data[i].使用者 + data[i].球種 + data[i].場地代碼 + "</p>");
                            $("#ThuB > #" + i).css({ "background-color": "yellow" });

                        } else {
                            $("#ThuB").append(data[i].使用者 + data[i].球種 + data[i].場地代碼 + "<br>");

                        }

                    } else if ((data[i].星期 == "五") && (data[i].時間代碼 == "a")) {
                        if ((data[i].使用者 + data[i].球種) == user) {
                            $("#FriA").append("<p id=" + i + ">" + data[i].使用者 + data[i].球種 + data[i].場地代碼 + "</p>");
                            $("#FriA > #" + i).css({ "background-color": "yellow" });

                        } else {
                            $("#FriA").append(data[i].使用者 + data[i].球種 + data[i].場地代碼 + "<br>");
                        }
                    } else if ((data[i].星期 == "五") && (data[i].時間代碼 == "b")) {
                        if ((data[i].使用者 + data[i].球種) == user) {
                            $("#FriB").append("<p id=" + i + ">" + data[i].使用者 + data[i].球種 + data[i].場地代碼 + "</p>");
                            $("#FriB > #" + i).css({ "background-color": "yellow" });
                        } else {
                            $("#FriB").append(data[i].使用者 + data[i].球種 + data[i].場地代碼 + "<br>");
                        }

                    }
                }
            }
        });
    });

}
