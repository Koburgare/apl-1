var bilder = [
    "images/Jeppson.jpg",  
    "images/IsraeliTakuji.png", 
    "images/Punpun.jpeg",
    "images/Screenshot 2025-10-31 032036.png",
    "images/Screenshot 2026-08-18 223303.png",
    "images/totoro.jpg",
]
var knapp = document.querySelector("button");
var bild = document.querySelector("img");
var counter = 1;
knapp.addEventListener("click", function() {
    if(counter === 6){
        counter = 0;
    }
    bild.src = bilder[counter];
    counter = counter + 1;
});