let nome = document.getElementById("inpNome")
let resultado = document.getElementById("divResultado")
function cadastrar(){
    console.log(nome.value)
    // let limite = Number(prompt("Quantas fatias?"))
    let limite = Number(nome.value)
    for(let i=0; i<limite; i++){
        console.log("Fatia: " + i)
        resultado.innerHTML += 'Fatia: ' + i + '<br>'
    }
    console.log("Terminou a repetição")
}
