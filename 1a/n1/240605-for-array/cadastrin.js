let nome = document.getElementById("inpNome")
let resultado = document.getElementById("divResultado")

let dinos = []

function cadastrar(){
    let dino = nome.value
    dinos.push(dino)
    console.log(dinos);
    nome.value = ''
    nome.focus()
}



nome.onkeyup = function (evento){
    // console.log(evento)
    let tecla = evento.key
    // console.log(tecla)
    if(evento.key == 'Enter'){
        cadastrar()
    }
 
}