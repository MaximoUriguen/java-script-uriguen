let imagen = document.querySelector ('h1')



let imagen = document.querySelector ('.imagen')
imagen.src = 'https://ideogram.ai/g/OMMmEYmGSHy-OyCh7thcpQ/0'
let titulo = document.querySelector ('h1')

let botonRojo = document.querySelector ('#rojo')
let botonverde = document.querySelector ('#verde')
let botonazul = document.querySelector ('#azul')
let botonnegro = document.querySelector ('#negro')
botonRojo.onclick = function (){
    titulo.style.color = 'red'
}
botonverde.onclick = function (){
    titulo.style.color = 'green'
}
botonazul.onclick = function (){
    titulo.style.color = 'blue'
}
botonanegro.onclick = function (){
    titulo.style.color = 'black'
}