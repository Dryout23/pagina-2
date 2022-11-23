let cerrar = document.querySelector(".cerrar");
let modal = document.querySelector(".pagina-modal");
let zoro = document.querySelector(".tarjetas1");
let sanji = document.querySelector(".tarjetas2");
let nami = document.querySelector(".tarjetas3");


zoro.addEventListener("click", ()=>{
    modal.classList.remove("ocultar");
    modal.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    modal.classList.add("ocultar");
 
})

sanji.addEventListener("click", ()=>{
    modal.classList.remove("ocultar");
    modal.classList.add("visible");
})
cerrar.addEventListener("click", ()=>{
    modal.classList.add("ocultar");
 
})
nami.addEventListener("click", ()=>{
    modal.classList.remove("ocultar");
    modal.classList.add("visible");
})
cerrar.addEventListener("click", ()=>{
    modal.classList.add("ocultar");
 
})