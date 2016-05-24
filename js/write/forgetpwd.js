$(document).ready(function(){
        $("#email").submit(function(event){
                var email=document.getElementById("inputEmail").value;
                console.log(email);
        });
});
