let copito = document.querySelectorAll("#caracoli div");

copito.forEach(pieza => {
    pieza.addEventListener("click", Arribi);
});

function Arribi(){
    this.style.opacity = 0;
    this.style.transitionDuration = "2s"; 

};
