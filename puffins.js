document.addEventListener("DOMContentLoaded", function() {

    //Menu
    var buttons = document.querySelectorAll(".menuButton");

    buttons.forEach(function(button) {
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "rgb(44, 96, 96)";
        });
    
        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "rgb(84, 136, 136)";
        });
    });

    $('#accueil').click(function () {
        window.location.replace('accueil.html');
    });
    
});