$(document).ready(function() {
    $(function() {
        $.ajax({
            url: "http://163.22.17.184:8080/bubble/wish/imcount/json;week=三",
            data: {},
            type: "GET",
                success: function(data) {
                    //$.each(data, function(key, value) {
                    //$("#wish1 > input").val(value).show();
                    //console.log(key + ": " + value);

                    //});
                    console.log(data);
                }
            });
        });
    });
});
