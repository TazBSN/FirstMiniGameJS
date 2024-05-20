var perso = document.querySelector(".perso");
var obstacle = document.querySelector(".obstacle")

document.addEventListener("keydown", function(event) {
    // Si la touche enfoncée est la barre d'espace (code 32)
    if (event.keyCode === 32) {
        jump(); // Appelle la fonction de saut
    }
});

function jump(){
    // alert("vous avez clique sur le bouton")
    if(perso.classList != "animation"){
        perso.classList.add('animation');
    }

    setTimeout(function(){
        perso.classList.remove('animation');
    },500)
}

// obstacle touch bob
var verification = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(obstacleLeft<60 && obstacleLeft>0 && persoTop>=124){
        obstacle.style.animation = "none";
        alert("you loose")
    }
},1)