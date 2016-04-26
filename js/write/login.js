$(document).ready(function(){
        $("#account").submit(function(event){
                var Balltype=document.getElementById("Balltype").value;
                var YourDepartment=document.getElementById("YourDepartment").value;
                var pwd=document.getElementById("pwd").value;
                var data ={}
                data.Balltype=Balltype;
                data.YourDepartment=YourDepartment;
                data.pwd=pwd;
                sessionStorage["data"]=JSON.stringify(data);
                console.log(JSON.stringify(data));
                window.location.replace("reroute.html");
                $.ajax({
                        url:'https://github.com/NCNUIM-BUBBLE-RACEWISH/RaceWish-Server/blob/place/Test.java',
                        contentType:"application/json",
                        data:JSON.stringify(data),
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
function printdata(){
        console.log(sessionStorage["data"]);
}
