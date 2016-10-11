$(document).ready(function() {
    var info = [{
            "球類": "籃球",
            "場地數": 6,
            "場地資料": [{
                "場地名": "B場",
            }, {
                "場地名": "C場",
            }, {
                "場地名": "D場",
            }, {
                "場地名": "新1場",
            }, {
                "場地名": "新2場",
            }, {
                "場地名": "新3場",
            }]
        }, {
            "球類": "排球",
            "場地數": 4,
            "場地資料": [{
                "場地名": "A場",
            }, {
                "場地名": "B場",
            }, {
                "場地名": "C場",
            }, {
                "場地名": "D場",
            }]
        }, {
            "球類": "羽球",
            "場地數": 7,
            "場地資料": [{
                "場地名": "A1場",
            }, {
                "場地名": "A2場",
            }, {
                "場地名": "A3場",
            }, {
                "場地名": "B1場",
            }, {
                "場地名": "B2場",
            }, {
                "場地名": "B3場",
            }, {
                "場地名": "B4場",
            }]
        }, {
            "球類": "桌球",
            "場地數": 2,
            "場地資料": [{
                "場地名": "體育館",
            }, {
                "場地名": "綜B",
            }]
        },
        //壘球另外弄
    ]
    balltype = sessionStorage['balltype'];
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
            "</a></li><li><a data-toggle='tab' href='#" + info[balltype].場地資料[5].場地名 + "'>" + info[balltype].場地資料[5].場地名 + "</a></li></ul>")
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

    //post資料
    $("#volunteer").submit(function(event) {
        var formData = $(this).serializeArray();
        console.log(formData)
        //表單塞成json
        /*
        for (var j = 0; j < 3; j++) {
            for (var i = j * 4; i < j * 4 + 4; i++) {
                var key = formData[i].name; //key
                dataObj[key] = formData[i].value; //data
            }
            alldata.push(dataObj);
            dataObj = {};
        }
        */
    //讓他不要送出  現在爆掉惹>_____<
    });


    //增加時段數
    function check(spacename) {
        $("#" + spacename + " #Monday").change(function() {
            //全關
            for (var i = 0; i < 5; i++) {
                $("#" + spacename + " #Monday" + i + "0").attr('disabled', true);
                $("#" + spacename + " #Monday" + i + "1").attr('disabled', true);
            };
            //依照選擇的個數開放
            for (var i = 0; i < $("#" + spacename + " #Monday").val(); i++) {
                $("#" + spacename + " #Monday" + i + "0").attr('disabled', false);
                $("#" + spacename + " #Monday" + i + "1").attr('disabled', false);
            };
        });
        $("#" + spacename + " #Tuesday").change(function() {
            //全關
            for (var i = 0; i < 5; i++) {
                $("#" + spacename + " #Tuesday" + i + "0").attr('disabled', true);
                $("#" + spacename + " #Tuesday" + i + "1").attr('disabled', true);
            };
            //依照選擇的個數開放
            for (var i = 0; i < $("#" + spacename + " #Tuesday").val(); i++) {
                $("#" + spacename + " #Tuesday" + i + "0").attr('disabled', false);
                $("#" + spacename + " #Tuesday" + i + "1").attr('disabled', false);
            };
        });
        $("#" + spacename + " #Wednesday").change(function() {
            //全關
            for (var i = 0; i < 5; i++) {
                $("#" + spacename + " #Wednesday" + i + "0").attr('disabled', true);
                $("#" + spacename + " #Wednesday" + i + "1").attr('disabled', true);
            };
            //依照選擇的個數開放
            for (var i = 0; i < $("#" + spacename + " #Wednesday").val(); i++) {
                $("#" + spacename + " #Wednesday" + i + "0").attr('disabled', false);
                $("#" + spacename + " #Wednesday" + i + "1").attr('disabled', false);
            };
        });
        $("#" + spacename + " #Thursday").change(function() {
            //全關
            for (var i = 0; i < 5; i++) {
                $("#" + spacename + " #Thursday" + i + "0").attr('disabled', true);
                $("#" + spacename + " #Thursday" + i + "1").attr('disabled', true);
            };
            //依照選擇的個數開放
            for (var i = 0; i < $("#" + spacename + " #Thursday").val(); i++) {
                $("#" + spacename + " #Thursday" + i + "0").attr('disabled', false);
                $("#" + spacename + " #Thursday" + i + "1").attr('disabled', false);
            };
        });
        $("#" + spacename + " #Friday").change(function() {
            //全關
            for (var i = 0; i < 5; i++) {
                $("#" + spacename + " #Friday" + i + "0").attr('disabled', true);
                $("#" + spacename + " #Friday" + i + "1").attr('disabled', true);
            };
            //依照選擇的個數開放
            for (var i = 0; i < $("#" + spacename + " #Friday").val(); i++) {
                $("#" + spacename + " #Friday" + i + "0").attr('disabled', false);
                $("#" + spacename + " #Friday" + i + "1").attr('disabled', false);
            };
        });

    }

});
