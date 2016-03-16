$(document).ready(function(){
    $("#volunteer").submit(function(event){
        //var data = $("#volunteer").serializeArray();
        //alert(JSON.stringify(data));
        var jsonuserinfo = $('#volunteer').serializeObject();
        alert(JSON.stringify(jsonuserinfo));
        $.ajax({
            url: 'http://163.22.17.184:8080/bubble/apply/json',
            contentType: "application/json",
            data: JSON.stringify(jsonuserinfo),
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
        console.log(JSON.stringify(jsonuserinfo))
        event.preventDefault();
    });
});

//將form裝成json
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
