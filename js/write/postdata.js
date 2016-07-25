$(document).ready(function() {
    $("#volunteer").submit(function(event) {
        //console.log($(this).serializeArray());
        var formData = $(this).serializeArray();
        var nowDate = new Date();
        if (nowDate.getMonth() < 9 || nowDate.getMonth() > 2)
            nowDate = (nowDate.getFullYear() - 1912) * 10 + 2;
        else
            nowDate = (nowDate.getFullYear() - 1911) * 10 + 1;
        var dataObj;
        var alldata = [];
        for (var j = 0; j < 5; j++) {
            dataObj = { "ballid": sessionStorage["account"], "term": nowDate };
            for (var i = j * 4; i < j * 4 + 4; i++) {
                var key = formData[i].name;
                dataObj[key] = formData[i].value;
            }
            console.log(dataObj);
            alldata.push(dataObj);
            dataObj = {};
        }
        console.log(JSON.stringify(alldata));
        var check = "二次確認您的志願序：\n\n";
        var count = 0;
        for (var i = 1; i <= 5; i++) {
            var w = $('#YourWeek' + i + ' :selected').text();
            var p = $('#YourBall' + i + ' :selected').text();
            var t = $('#YourTime' + i + ' :selected').text();
            //不可有欄位為空
            if ((w == p) && (p == t)) { //放棄此志願
                count++;
            } else if (w == "") {
                alert("項目不可有空值")
                return;
            } else if (p == "") {
                alert("項目不可有空值")
                return;
            } else if (t == "") {
                alert("項目不可有空值")
                return;
            } else {
                check += "志願" + i + " : " + w + "  " + t + "  " + p + "  \n";
            }
        }
        if (count == 5) {
            alert("請填寫志願")
        } else {
            if (confirm(check)) {
                postData(alldata);
            }
        }
        event.preventDefault();
    });

    function postData(alldata) {
        $.ajax({
            url: 'http://163.22.17.184:8080/bubble/user/apply/insert',
            contentType: "application/json",
            data: JSON.stringify(alldata),
            dataType: 'json',
            type: 'POST',
            success: function(data) {
                console.log('woohoo!');
                console.log(data);
                if (data.statuscode == 200) {
                    alert("已送出申請");
                    window.location.href = 'reroute.html';
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
/* 備註可能會用到的工具
$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};
function onClik(){
        //var data = $("#test").serializeArray(); //自动将form表单封装成json
        //alert(JSON.stringify(data));
        var jsonuserinfo = $('#test').serializeObject();
        alert(JSON.stringify(jsonuserinfo));
}
*/
