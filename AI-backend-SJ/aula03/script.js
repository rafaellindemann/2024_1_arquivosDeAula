
let numero = document.getElementById('inpNumero')
let resultado = document.getElementById('resultado')
function gerarTabuada(){
    // console.log(numero.value);
    let n = Number(numero.value)
    resultado.innerHTML = ''
    for(i=1; i<=10; i++){
        let multiplicacao = n * i
        // console.log(n + "x" + i + "=" + multiplicacao )
        resultado.innerHTML += n + "x" + i + "=" + multiplicacao + "<br>"
    }
}
