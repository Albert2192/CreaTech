const empezar = document.getElementById("empezar");
const conteiner = document.getElementById("conteiner");
const contenido = document.getElementById("contenido");

empezar.addEventListener('click', ()=>{
    conteiner.classList.toggle("active");
    contenido.classList.toggle("active");
});