$(document).ready(function() {
    if (sessionStorage['account'].substring(0, 2) == '08') {
        var dep = sessionStorage['cname'].substring(0, 3)
        var kind = sessionStorage['cname'].substring(3, 5)
    } else {
        var dep = sessionStorage['cname'].substring(0, 2)
        var kind = sessionStorage['cname'].substring(2, 4)
    }
    document.getElementById("dep").innerHTML = dep + "系";
    document.getElementById("kind").innerHTML = kind;
});
