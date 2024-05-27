document.addEventListener("DOMContentLoaded", function() {

    var buttons = document.querySelectorAll(".menuButton");

    buttons.forEach(function(button) {
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "rgb(44, 96, 96)";
        });
    
        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "rgb(84, 136, 136)";
        });
    });
});