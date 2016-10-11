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
    balltype=sessionStorage['balltype'];
    //填充bar
	if(balltype==0){
        /* 似乎是真的不能這樣寫 _(:3」∠)_....大概是ul和li階層的問題?
        $("#bar").append("<ul class='nav nav-tabs'>");
        for(var i=0;i<info[balltype].場地數;i++){
            $("#bar").append("<li class='active'><a data-toggle='tab' href='#"+info[balltype].場地資料[i].場地名+"'>"+info[balltype].場地資料[i].場地名+"</a></li>");
        }
        $("#bar").append("</ul/>");
        */
		$("#bar").append(
		"<ul class='nav nav-tabs'><li class='active'><a data-toggle='tab'href='#"+info[balltype].場地資料[0].場地名+"'>"+info[balltype].場地資料[0].場地名+
		"</a></li><li><a data-toggle='tab' href='#"+info[balltype].場地資料[1].場地名+"'>"+info[balltype].場地資料[1].場地名+
		"</a></li><li><a data-toggle='tab' href='#"+info[balltype].場地資料[2].場地名+"'>"+info[balltype].場地資料[2].場地名+
		"</a></li><li><a data-toggle='tab' href='#"+info[balltype].場地資料[3].場地名+"'>"+info[balltype].場地資料[3].場地名+
		"</a></li><li><a data-toggle='tab' href='#"+info[balltype].場地資料[4].場地名+"'>"+info[balltype].場地資料[4].場地名+
		"</a></li><li><a data-toggle='tab' href='#"+info[balltype].場地資料[5].場地名+"'>"+info[balltype].場地資料[5].場地名+"</a></li></ul>")
	}else if(sessionStorage['balltype']==1){
		document.getElementById('bar').innerHTML+="<ul class='nav nav-tabs'><li class='active'><a data-toggle='tab'href='#A'>"+info[1].場地資料[0].場地名+"</a></li><li><a data-toggle='tab' href='#B'>"+info[1].場地資料[1].場地名+"</a></li><li><a data-toggle='tab' href='#C'>"+info[1].場地資料[2].場地名+"</a></li><li><a data-toggle='tab' href='#D'>"+info[1].場地資料[3].場地名+"</a></li></ul>"
        document.getElementById('info').innerHTML+="<div id='A' class='tab-pane fade in active'><table id='block1'><tr><form><td class='form'>星期一<select id='mon'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td class='form'>星期二<select id='tue'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td class='form'>星期三<select id='wed'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td class='form'>星期四<select id='thur'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td class='form'>星期五<select id='fri'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></form></tr><tr><td>開始時間 結束時間<span ><input id='b1moninput1'></span><span ><input id='b1moninput2'></span></td><td>開始時間 結束時間<span><input id='b1tueinput1'></span><span><input id='b1tueinput2'></span></td><td>開始時間 結束時間<span><input id='b1wedinput1'></span><span><input id='b1wedinput2'></span></td><td>開始時間 結束時間<span ><input id='b1thurinput1'></span><span ><input id='b1thurinput2'></span></td><td>開始時間 結束時間<span><input id='b1friinput1'></span><span><input id='b1friinput2'></span></td></tr></table><br>"      

	}else if(sessionStorage['balltype']==2){
		document.getElementById('bar').innerHTML+="<ul class='nav nav-tabs'><li class='active'><a data-toggle='tab'href='#A'>"+info[2].場地資料[0].場地名+"</a></li><li><a data-toggle='tab' href='#B'>"+info[2].場地資料[1].場地名+"</a></li><li><a data-toggle='tab' href='#C'>"+info[2].場地資料[2].場地名+"</a></li><li><a data-toggle='tab' href='#D'>"+info[2].場地資料[3].場地名+"</a></li><li><a data-toggle='tab' href='#E'>"+info[2].場地資料[4].場地名+"</a></li><li><a data-toggle='tab' href='#F'>"+info[2].場地資料[5].場地名+"</a></li><li><a data-toggle='tab' href='#G'>"+info[2].場地資料[6].場地名+"</a></li></ul>"
        document.getElementById('info').innerHTML+="<div id='A' class='tab-pane fade in active'><table id='block1'><tr><form><td class='form'>星期一<select id='mon'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td class='form'>星期二<select id='tue'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td class='form'>星期三<select id='wed'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td class='form'>星期四<select id='thur'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td class='form'>星期五<select id='fri'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></form></tr><tr><td>開始時間 結束時間<span ><input id='b1moninput1'></span><span ><input id='b1moninput2'></span></td><td>開始時間 結束時間<span><input id='b1tueinput1'></span><span><input id='b1tueinput2'></span></td><td>開始時間 結束時間<span><input id='b1wedinput1'></span><span><input id='b1wedinput2'></span></td><td>開始時間 結束時間<span ><input id='b1thurinput1'></span><span ><input id='b1thurinput2'></span></td><td>開始時間 結束時間<span><input id='b1friinput1'></span><span><input id='b1friinput2'></span></td></tr></table><br>"      
	}else if(sessionStorage['balltype']==3){
		document.getElementById('bar').innerHTML+="<ul class='nav nav-tabs'><li class='active'><a data-toggle='tab'href='#A'>"+info[3].場地資料[0].場地名+"</a></li><li><a data-toggle='tab' href='#B'>"+info[3].場地資料[1].場地名+"</a></li><li><a data-toggle='tab' href='#C'>"+info[3].場地資料[2].場地名+"</a></li><li><a data-toggle='tab' href='#D'>"+info[3].場地資料[3].場地名+"</a></li></ul>"
        document.getElementById('info').innerHTML+="<div id='A' class='tab-pane fade in active'><table id='block1'><tr><form><td class='form'>星期一<select id='mon'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td class='form'>星期二<select id='tue'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td class='form'>星期三<select id='wed'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td class='form'>星期四<select id='thur'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td class='form'>星期五<select id='fri'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></form></tr><tr><td>開始時間 結束時間<span ><input id='b1moninput1'></span><span ><input id='b1moninput2'></span></td><td>開始時間 結束時間<span><input id='b1tueinput1'></span><span><input id='b1tueinput2'></span></td><td>開始時間 結束時間<span><input id='b1wedinput1'></span><span><input id='b1wedinput2'></span></td><td>開始時間 結束時間<span ><input id='b1thurinput1'></span><span ><input id='b1thurinput2'></span></td><td>開始時間 結束時間<span><input id='b1friinput1'></span><span><input id='b1friinput2'></span></td></tr></table><br>"      
	}else if(sessionStorage['balltype']==4){

	}


    //填充場地id
    var add="<div id='"+info[balltype].場地資料[0].場地名+"' class='tab-pane fade in active'><form class='opentime'></form></div>"
    for(var i=1;i<info[balltype].場地數;i++){
        add+="<div id='"+info[balltype].場地資料[i].場地名+"' class='tab-pane fade'><form class='opentime'></form></div>"
    }
    $("#information").append(add)



    //新增表單
    for(var i=0;i<info[balltype].場地數;i++){
        //選擇時段數
        var things="<table id='block1'><tr><form>"
        var week=["Monday","Tuesday","Wednesday","Thursday","Friday"]
        for(var i=0;i<5;i++){
            things+=("<td class='form'>"+week[i]+"<select class='"+week[i]+"' id='"+week[i]+"'>")
            things+="<option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td>"
        }
        things+="</form></tr><tr>"
        //第一列
        for(var i=0;i<5;i++){
            //星期一 : 開始(Monday00)  結束(Monday01)
            //星期二 : 開始(Tuesday00)  結束(Tuesday01)...
            things+="<td>開始時間 結束時間<span><input name='timecode'></span><span><input name='timecode'></span></td>"
        }
        things+="</tr><tr>"
        //第二列
        for(var i=0;i<5;i++){
            //星期一 : 開始(Monday00)  結束(Monday01)
            //星期二 : 開始(Tuesday00)  結束(Tuesday01)...
            things+="<td>開始時間 結束時間<span><input name='timecode'></span><span><input name='timecode'></span></td>"
        }
        things+="</tr><tr>"
        //第三列
        for(var i=0;i<5;i++){
            //星期一 : 開始(Monday00)  結束(Monday01)
            //星期二 : 開始(Tuesday00)  結束(Tuesday01)...
            things+="<td>開始時間 結束時間<span><input name='timecode'></span><span><input name='timecode'></span></td>"
        }
        things+="</tr><tr>"
        //第四列
        for(var i=0;i<5;i++){
            //星期一 : 開始(Monday00)  結束(Monday01)
            //星期二 : 開始(Tuesday00)  結束(Tuesday01)...
            things+="<td>開始時間 結束時間<span><input name='timecode'></span><span><input name='timecode'></span></td>"
        }
        things+="</tr><tr>"
        //第五列
        for(var i=0;i<5;i++){
            //星期一 : 開始(Monday00)  結束(Monday01)
            //星期二 : 開始(Tuesday00)  結束(Tuesday01)...
            things+="<td>開始時間 結束時間<span><input name='timecode'></span><span><input name='timecode'></span></td>"
        }
        things+="</tr></table>"
        $(".opentime").html(things)
    }

function trim(str) {
  return str.replace(/\s+/g, "");
}


});
