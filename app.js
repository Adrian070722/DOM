var libro = document.getElementById("libro");

console.log(libro);

var documento = document.getElementsByClassName("documento");

console.log(documento);

var page = document.getElementsByTagName("page");

console.log(page);


var cancion = document.getElementById("cancion");



var estado = 0;
function playMusic () {
    if (estado == 0) {
     cancion.play();
        estado +=1;
}  
    else {
    cancion.pause();
    estado -= 1;
}  

}
libro.addEventListener('click' , playMusic);


libro.addEventListener('click' , function(){
    libro.style.backgroundColor = ('#e30032')
});

const listaDeDragones = document.querySelector('ul');
const dragones = ['Balerion', 'Vaghar', 'Syrax', 'Caraxes', 'Sunfyre', 'Vermithor'];

for (let i = 0; i < dragones.length; i++){
    const li = document.createElement('li');
    li.textContent = dragones [i];
    listaDeDragones.appendChild(li);
}







