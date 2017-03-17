function test(){
    var ingredient1 = document.getElementById("ingredient1").value;
    var ingredient2 = document.getElementById("ingredient2").value;
    var ingredient3 = document.getElementById("ingredient3").value;

   window.open("https://duckduckgo.com/?q=!ducky " + ingredient1 + " and " + ingredient2 + " and " + ingredient3 + " " + "recipe");
}

$(function() {
    $("form input").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            $('button[type=submit] .default').click();
            return false;
        } else {
            return true;
        }
    });
});