$(document).ready(function(){
    $("#volunteer").submit(function(event){
        //console.log($(this).serializeArray());
        var formData = $(this).serializeArray();
        var dataObj ={};
        var alldata =[];
        for (var j = 0; j < 5; j++) {
            for (var i = j*5; i < j*5+5; i++) {
              var key = formData[i].name;
              dataObj[key]=formData[i].value;
            }
            //console.log(dataObj);
            alldata.push(dataObj);
            dataObj = {};
            console.log(JSON.stringify(alldata));
        };
        console.log(JSON.stringify(formData));
        //console.log(JSON.stringify(alldata));
        $.ajax({
            url: 'http://163.22.17.184:8080/bubble/apply/json',
            contentType: "application/json",
            data: JSON.stringify(dataObj),
            dataType: 'json',
            type: 'POST',
            success: function(data) {
                console.log('woohoo!');
                console.log(data);
            },
            error: function(err) {
                console.log('shit!');
                console.log(err);
            }
        });

        event.preventDefault();
    });
});
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
/*
function onClik(){
        //var data = $("#test").serializeArray(); //自动将form表单封装成json
        //alert(JSON.stringify(data));
        var jsonuserinfo = $('#test').serializeObject();
        alert(JSON.stringify(jsonuserinfo));
}*/
