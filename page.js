document.addEventListener("DOMContentLoaded", function() {

    var buttons = document.querySelectorAll(".menuButton");

    buttons.forEach(function(button) {
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "rgb(44, 96, 96)";
        });
    
        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "rgb(84, 136, 136)";
        });

        $('#lutherie').click(function () {
            var content = $('#content');
            content.empty();

            var html = `
            <h1 class="title">Lutherie</h1>`
            ;

            content.append(html);
        });

        $('#musique').click(function () {
            var content = $('#content');
            content.empty();

            var html = `
            <h1 class="title">Musique</h1>`
            ;

            content.append(html);
        });

        $('#code').click(function () {
            var content = $('#content');
            content.empty();

            var html = `
            <h1 class="title">Code / Informatique</h1>`
            ;

            content.append(html);
        });
    });
});