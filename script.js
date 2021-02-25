function endAnimation(){

var anime = document.getElementById('anime');
var name  = document.getElementById('name');

name.style.transitionDelay="2s";
name.style.transitionDuration="3s";
name.style.opacity--;

anime.style.transitionDelay="2s";
anime.style.transitionDuration="3s";
anime.style.opacity--;
}
endAnimation();