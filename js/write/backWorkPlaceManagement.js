$(document).ready(function() {
    /* 偶無能為力待修正ㄉ地方
    1.目前只能開從1000開始的時間，因為0900ㄉ話我沒辦法用數字去判斷囧
    也是可以硬寫辣
    */

    var info = [{
            "球類": "籃球",
            "場地數": 8,
            "場地資料": [{
                "場地名": "舊一場A場",
                "場地代碼": "0A",
            }, {
                "場地名": "舊二場B場",
                "場地代碼": "0B",
            }, {
                "場地名": "舊三場C場",
                "場地代碼": "0C",
            }, {
                "場地名": "舊四場D場",
                "場地代碼": "0D",
            }, {
                "場地名": "新一場E場",
                "場地代碼": "0E",
            }, {
                "場地名": "新二場F場",
                "場地代碼": "0F",
            }, {
                "場地名": "新三場G場",
                "場地代碼": "0G",
            }, {
                "場地名": "新四場H場",
                "場地代碼": "0H",
            }]
        }, {
            "球類": "排球",
            "場地數": 4,
            "場地資料": [{
                "場地名": "排球A",
                "場地代碼": "1A",
            }, {
                "場地名": "排球B",
                "場地代碼": "1B",
            }, {
                "場地名": "排球C",
                "場地代碼": "1C",
            }, {
                "場地名": "排球D",
                "場地代碼": "1D",
            }]
        }, {
            "球類": "羽球",
            "場地數": 7,
            "場地資料": [{
                "場地名": "羽球場A1",
                "場地代碼": "2A"
            }, {
                "場地名": "羽球場A2",
                "場地代碼": "2B"
            }, {
                "場地名": "羽球場A3",
                "場地代碼": "2C"
            }, {
                "場地名": "羽球場B1",
                "場地代碼": "2D"
            }, {
                "場地名": "羽球場B2",
                "場地代碼": "2E"
            }, {
                "場地名": "羽球場B3",
                "場地代碼": "2F"
            }, {
                "場地名": "羽球場B4",
                "場地代碼": "2G"
            }]
        }, {
            "球類": "桌球",
            "場地數": 2,
            "場地資料": [{
                "場地名": "體育館",
                "場地代碼": "3A"
            }, {
                "場地名": "綜B",
                "場地代碼": "3B"
            }]
        },
        //壘球另外弄
    ]

    var balltype = sessionStorage['balltype'];

    //塞對應球場的資料
    insert(balltype)

    //按下按鈕，篩選資料->送出
    $("#volunteer").submit(function(event) {
        //取得表單資料
        var oform = document.forms["volunteer"];
        var opentime = []; //所有開放時段
        //第一場的0~5不取(0~5個oform.elements是button和week選單)
        var i = 6,
            no = 6,
            w = 0;
        for (; i < 56; i++, no++, w++) {
            opentime[w] = oform.elements[no].value;
        }
        for (var t = 1; t < info[balltype].場地數; t++) {
            no += 5;
            for (i = 0; i < 50; i++, no++, w++) {
                opentime[w] = oform.elements[no].value;
            }
        }
        //篩選
        checkData(opentime, w);
    });


    function insert(balltype) {
        //填充bar
        if (balltype == 0) { //籃球 6
            /* 似乎是真的不能這樣寫 _(:3」∠)_....大概是ul和li階層的問題?
            $("#bar").append("<ul class='nav nav-tabs'>");
            for(var i=0;i<info[balltype].場地數;i++){
                $("#bar").append("<li class='active'><a data-toggle='tab' href='#"+info[balltype].場地資料[i].場地名+"'>"+info[balltype].場地資料[i].場地名+"</a></li>");
            }
            $("#bar").append("</ul/>");
            */
            $("#bar").append(
                "<ul class='nav nav-tabs'><li class='active'><a data-toggle='tab'href='#" + info[balltype].場地資料[0].場地名 + "'>" + info[balltype].場地資料[0].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[1].場地名 + "'>" + info[balltype].場地資料[1].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[2].場地名 + "'>" + info[balltype].場地資料[2].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[3].場地名 + "'>" + info[balltype].場地資料[3].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[4].場地名 + "'>" + info[balltype].場地資料[4].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[5].場地名 + "'>" + info[balltype].場地資料[5].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[6].場地名 + "'>" + info[balltype].場地資料[6].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[7].場地名 + "'>" + info[balltype].場地資料[7].場地名 + "</a></li></ul>")
        } else if (sessionStorage['balltype'] == 1) { //排球 4
            $("#bar").append(
                "<ul class='nav nav-tabs'><li class='active'><a data-toggle='tab'href='#" + info[balltype].場地資料[0].場地名 + "'>" + info[balltype].場地資料[0].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[1].場地名 + "'>" + info[balltype].場地資料[1].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[2].場地名 + "'>" + info[balltype].場地資料[2].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[3].場地名 + "'>" + info[balltype].場地資料[3].場地名 + "</a></li></ul>")
        } else if (sessionStorage['balltype'] == 2) { //羽球 7
            $("#bar").append(
                "<ul class='nav nav-tabs'><li class='active'><a data-toggle='tab'href='#" + info[balltype].場地資料[0].場地名 + "'>" + info[balltype].場地資料[0].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[1].場地名 + "'>" + info[balltype].場地資料[1].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[2].場地名 + "'>" + info[balltype].場地資料[2].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[3].場地名 + "'>" + info[balltype].場地資料[3].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[4].場地名 + "'>" + info[balltype].場地資料[4].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[5].場地名 + "'>" + info[balltype].場地資料[5].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[6].場地名 + "'>" + info[balltype].場地資料[6].場地名 + "</a></li></ul>")
        } else if (sessionStorage['balltype'] == 3) { //桌球  2
            $("#bar").append(
                "<ul class='nav nav-tabs'><li class='active'><a data-toggle='tab'href='#" + info[balltype].場地資料[0].場地名 + "'>" + info[balltype].場地資料[0].場地名 +
                "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[1].場地名 + "'>" + info[balltype].場地資料[1].場地名 + "</a></li></ul>")
        } else if (sessionStorage['balltype'] == 4) { //壘球

        }

        //填充場地id
        var add = "<div id='" + info[balltype].場地資料[0].場地名 + "' class='tab-pane fade in active'><form id='volunteer'></div>"
        for (var i = 1; i < info[balltype].場地數; i++) {
            add += "<div id='" + info[balltype].場地資料[i].場地名 + "' class='tab-pane fade'><form class='opentime'></form></div>"
        }
        $("#volunteer").append(add)


        //新增表單
        for (var k = 0; k < info[balltype].場地數; k++) {
            //選擇時段數
            var things = "<table id='block1'><tr><form>"
            var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
            for (var i = 0; i < 5; i++) {
                things += ("<td class='form'>" + week[i] + "<select class='" + week[i] + "' id='" + week[i] + "'>")
                things += "<option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td>"
            }
            things += "</form></tr><tr>"
                //第一列
            for (var i = 0; i < 5; i++) {
                things += "<td>開始時間 結束時間<span><input name='timecode' id='" + week[i] + "00'></span><span><input name='timecode' id='" + week[i] + "01'></span></td>"
            }
            things += "</tr><tr>"
                //第二列
            for (var i = 0; i < 5; i++) {
                things += "<td>開始時間 結束時間<span><input name='timecode' id='" + week[i] + "10' disabled='true'></span><span><input name='timecode' id='" + week[i] + "11' disabled='true'></span></td>"
            }
            things += "</tr><tr>"
                //第三列
            for (var i = 0; i < 5; i++) {
                things += "<td>開始時間 結束時間<span><input name='timecode' id='" + week[i] + "20' disabled='true'></span><span><input name='timecode' id='" + week[i] + "21' disabled='true'></span></td>"
            }
            things += "</tr><tr>"
                //第四列
            for (var i = 0; i < 5; i++) {
                things += "<td>開始時間 結束時間<span><input name='timecode' id='" + week[i] + "30' disabled='true'></span><span><input name='timecode' id='" + week[i] + "31' disabled='true'></span></td>"
            }
            things += "</tr><tr>"
                //第五列
            for (var i = 0; i < 5; i++) {
                things += "<td>開始時間 結束時間<span><input name='timecode' id='" + week[i] + "40' disabled='true'></span><span><input name='timecode' id='" + week[i] + "41' disabled='true'></span></td>"
            }
            things += "</tr></table>"
                //$(".opentime").html(things)
            $("#" + info[balltype].場地資料[k].場地名).html(things)
        }

        //檢查有沒有選擇時段數
        for (var k = 0; k < info[balltype].場地數; k++) {
            check(info[balltype].場地資料[k].場地名);
        }
    }

    function check(spacename) {
        $("#" + spacename + " #Monday").change(function() {
            //依照選擇的個數開放
            for (var i = 0; i < $("#" + spacename + " #Monday").val(); i++) {
                $("#" + spacename + " #Monday" + i + "0").attr('disabled', false);
                $("#" + spacename + " #Monday" + i + "1").attr('disabled', false);
            };
            for (var i = $("#" + spacename + " #Monday").val(); i < 5; i++) {
                $("#" + spacename + " #Monday" + i + "0").val("");
                $("#" + spacename + " #Monday" + i + "0").attr('disabled', true);
                $("#" + spacename + " #Monday" + i + "1").val("");
                $("#" + spacename + " #Monday" + i + "1").attr('disabled', true);
            };

        });
        $("#" + spacename + " #Tuesday").change(function() {
            //依照選擇的個數開放
            for (var i = 0; i < $("#" + spacename + " #Tuesday").val(); i++) {
                $("#" + spacename + " #Tuesday" + i + "0").attr('disabled', false);
                $("#" + spacename + " #Tuesday" + i + "1").attr('disabled', false);
            };
            for (var i = $("#" + spacename + " #Tuesday").val(); i < 5; i++) {
                $("#" + spacename + " #Tuesday" + i + "0").val("");
                $("#" + spacename + " #Tuesday" + i + "0").attr('disabled', true);
                $("#" + spacename + " #Tuesday" + i + "1").val("");
                $("#" + spacename + " #Tuesday" + i + "1").attr('disabled', true);
            };

        });
        $("#" + spacename + " #Wednesday").change(function() {
            for (var i = 0; i < $("#" + spacename + " #Wednesday").val(); i++) {
                $("#" + spacename + " #Wednesday" + i + "0").attr('disabled', false);
                $("#" + spacename + " #Wednesday" + i + "1").attr('disabled', false);
            };
            for (var i = $("#" + spacename + " #Wednesday").val(); i < 5; i++) {
                $("#" + spacename + " #Wednesday" + i + "0").val("");
                $("#" + spacename + " #Wednesday" + i + "0").attr('disabled', true);
                $("#" + spacename + " #Wednesday" + i + "1").val("");
                $("#" + spacename + " #Wednesday" + i + "1").attr('disabled', true);
            };
        });
        $("#" + spacename + " #Thursday").change(function() {
            for (var i = 0; i < $("#" + spacename + " #Thursday").val(); i++) {
                $("#" + spacename + " #Thursday" + i + "0").attr('disabled', false);
                $("#" + spacename + " #Thursday" + i + "1").attr('disabled', false);
            };
            for (var i = $("#" + spacename + " #Thursday").val(); i < 5; i++) {
                $("#" + spacename + " #Thursday" + i + "0").val("");
                $("#" + spacename + " #Thursday" + i + "0").attr('disabled', true);
                $("#" + spacename + " #Thursday" + i + "1").val("");
                $("#" + spacename + " #Thursday" + i + "1").attr('disabled', true);
            };
        });
        $("#" + spacename + " #Friday").change(function() {
            for (var i = 0; i < $("#" + spacename + " #Friday").val(); i++) {
                $("#" + spacename + " #Friday" + i + "0").attr('disabled', false);
                $("#" + spacename + " #Friday" + i + "1").attr('disabled', false);
            };
            for (var i = $("#" + spacename + " #Friday").val(); i < 5; i++) {
                $("#" + spacename + " #Friday" + i + "0").val("");
                $("#" + spacename + " #Friday" + i + "0").attr('disabled', true);
                $("#" + spacename + " #Friday" + i + "1").val("");
                $("#" + spacename + " #Friday" + i + "1").attr('disabled', true);
            };
        });

    }

    function isAcceptNumber(num) {
        if ((1000 <= num) && (num <= 2400)) {
            return true;
        } else if (num == "") {
            return true;
        } else {
            return false;
        }
    }

    function checkData(opentime, num) {
        var result=[];
        var error=0;
        //檢查有沒有漏填時段 opentime[0+1] opentime[1+1] 1組
        for (var i = 0; i < info[balltype].場地數 * 50; i += 2) {
            //檢查輸入格式(只能空值or數字)
            if (!isAcceptNumber(opentime[i])) {
                error = 1;
            }
            if (!isAcceptNumber(opentime[i + 1])) {
                error = 1;
            }
            //檢查有沒有漏填時段 opentime[0+1] opentime[1+1] 1組
            if ((opentime[i] != "") && (opentime[i + 1] != "")) {} else if ((opentime[i] == "") && (opentime[i + 1] == "")) {} else {
                //有漏填
                error = 2;
            }
            //檢查開始時間<結束時間
            if (parseInt(opentime[i]) >= parseInt(opentime[i + 1])) {
                error = 4;
            }
            var d = { "開始時間": opentime[i], "結束時間": opentime[i + 1] }
            result.push(d);
        }
        //判斷有沒有重複or重疊的時段
        for (var k = 0; k < info[balltype].場地數 * 25; k++) {
            //判斷有沒有重複
            //同球場同星期判斷(0,5,10,15,20) 0和5和10和15和20檢查，5和10和15和20檢查....
            if (result[k].開始時間 == "") {
                //跳過
                continue;
            } else {
                //和同球場同星期的檢查
                for (var r = (k / 5); r < 5; r++) {
                    if (result[(k % 5) + (r + 1) * 5].開始時間 == "") {
                        //跳過
                        continue;
                    } else {
                        var a = parseInt(result[k].開始時間); //1800   ||  1600
                        var b = parseInt(result[(k % 5) + (r + 1) * 5].開始時間) //1600  || 1800
                        var c = parseInt(result[k].結束時間); //2000   ||1800
                        var d = parseInt(result[(k % 5) + (r + 1) * 5].結束時間) //1800  || 2000
                            //1600~1800之間都不可
                        if (a < b && b < c) {
                            error = 3;
                        }
                        if (a < d && d < c) {
                            error = 3;
                        }
                        //重複時段
                        if (a == b || c == d) {
                            error = 5;
                        }
                    }
                }
            }
        }
        if (error == 1) {
            alert("不符合格式")
        } else if (error == 2) {
            alert("時段漏填")
        } else if (error == 3) {
            alert("時段重疊");
        } else if (error == 4) {
            alert("開始時間、結束時間填錯");
        } else if (error == 5) {
            alert("時段重複");
        } else {
            //沒有錯誤，將資料整理後送出
            postData(manage(result));
            console.log(result)
        }
    }

    function manage(result) {
        for (var i = 0; i < info[balltype].場地數 * 25; i++) {
            if (result[i].開始時間 != "") {
                //更改時間格式
                timecode = result[i].開始時間 + result[i].結束時間
                result[i] = { "timecode": timecode }
                    //添加學期
                result[i].term = "1061"
                    //添加星期
                if (i % 5 == 0) {
                    result[i].week = "一"
                } else if (i % 5 == 1) {
                    result[i].week = "二"
                } else if (i % 5 == 2) {
                    result[i].week = "三"
                } else if (i % 5 == 3) {
                    result[i].week = "四"
                } else if (i % 5 == 4) {
                    result[i].week = "五"
                }
                //添加球種
                result[i].kind = sessionStorage["kind"];
            } else {
                result[i] = { timecode: "" }
                result[i].term = ""
                result[i].week = ""
                result[i].kind = ""
                result[i].placeid = ""
            }
            //添加場地代碼
            var g = parseInt(i / 25); //整數
            result[i].placeid = info[balltype].場地資料[g].場地代碼

        }
        return result
    }

    function postData(alldata) {
        $.ajax({
            url: 'http://163.22.17.184:8080/bubble/management/add_openplace',
            contentType: "application/json",
            data: JSON.stringify(alldata),
            dataType: 'json',
            type: 'POST',
            success: function(data) {
                console.log('woohoo!');
                console.log(data);
                if (data.statuscode == 200) {
                    alert("已送出申請");
                    window.location.href = 'backWorkManagement.html';
                } else
                    alert("送出失敗");
            },
            error: function(err) {
                console.log('shit!');
                console.log(err);
            }
        });
    }

});
