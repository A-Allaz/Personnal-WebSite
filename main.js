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
        var content = $('#content');
        content.empty();

        var html = `
        <h1 class="title">Accueil</h1>
        `;

        content.append(html);
    });

    //Contact
    var contact = document.querySelector('.contactButton');

    if(contact){
        contact.addEventListener("mouseover", function() {
            contact.style.color = "white";
        });
        contact.addEventListener("mouseout", function() {
            contact.style.color = "black";
        });
    }

    //Lutherie
    $('#lutherie').click(function () {
        var content = $('#content');
        content.empty();

        var html = `
        <h1 class="title">Lutherie</h1>
        `;

        content.append(html);
    });
    
    //Photographie
    $('#photo').click(function () {
        var content = $('#content');
        content.empty();

        var html = `
        <h1 class="title">Photographie</h1>
        <div class="photoDiv">
            <img src="./images/photographie/Puffins_1.jpg" id="puffins" onclick="puffinClicked()">
            <center>
                <figcaption>Puffins</figcaption>
            </center>
        </div>
        <div class="photoDiv">
            <img src="./images/photographie/Circumpolaire_1.jpg" id="astro">
            <center>
                <figcaption>Astro-photographie</figcaption>
            </center>
        </div>
        `;

        content.append(html);
    });

    //Musique
    $('#musique').click(function () {
        var content = $('#content');
        content.empty();

        var html = `
        <h1 class="title">Musique</h1>
        `;

        content.append(html);
    });

    //Code / Informatique
    $('#code').click(function () {
        var content = $('#content');
        content.empty();

        var html = `
        <h1 class="title">Code / Informatique</h1>
        `;

        content.append(html);
    });

    //Contact
    $('#contact').click(function () {
        var content = $('#content');
        content.empty();

        var html = `
        <h1 class="title">Contact</h1>
        <div class="contactDiv">
            <h3><u>Mail :</u></h3>
            <p>exemple@mail.com</p>
            <h3><u>Téléphone :</u></h3>
            <p>01 02 03 04 05</p>
        </div>
        `;

        content.append(html);
    });
    
});

function puffinClicked(){
    window.location.replace('puffins.html');
};