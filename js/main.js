// SCROLL SECCIÓN INFORMACIÓN
function apareceScroll(){
    var html = document.getElementsByTagName("html")[0];
    var elementoAparece = document.getElementsByClassName("aparecer");
    document.addEventListener("wheel", function(){
      console.log("girando")
        var topVent = html.scrollTop;
        console.log(topVent)
        for(i=0; i < elementoAparece.length; i++){
            var topelemAparece = elementoAparece[i].offsetTop;
            console.log(topelemAparece)
            if(topVent > topelemAparece - 400){
              console.log("entra")
                elementoAparece[i].style.opacity = 1;         
             } //  fin if
        } // fin for
    }) // fin addEventListener
} // fin apareceScroll
apareceScroll();


// BOTON DEL MENÚ RESPONSIVE
function accion(){
    console.log('está funcionando mi boton');
    var ancla = document.getElementsByClassName('nav-enlace');
    for(var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
    }
}


// LOOP DE IMAGENES EN EL HOME 
window.addEventListener('load', function (){

    var imagenes = [];

    imagenes[0] = 'imagenes/home.jpg';
    imagenes[1] = 'imagenes/home3.jpg';
    imagenes[2] = 'imagenes/home2.jpg';
    imagenes[3] = 'imagenes/home1.jpg';
    
    var indiceImagenes = 0;
    function cambiarImagenes() {

    document.slider.src = imagenes[indiceImagenes];

    if (indiceImagenes < 3) {
        indiceImagenes++;
        } else {
        indiceImagenes = 0;
        }
    }   
    setInterval(cambiarImagenes, 2000);
});

var i = image.length;

function nextImage(){
    if (i<image.length) {
        i= i+1;
    } else{
        i = 1;
    }
    botones.innerHTML = "<img src="+image[i+1]+".jpg"; 
}















