let resultado = document.getElementById("divResultado")
let cont = 1
while(cont <= 500){
    valor = cont * 0.33
    console.log(cont + ": R$" + valor.toFixed(2))
    resultado.innerHTML += cont + ": R$" + valor.toFixed(2) + '<br>'
    cont++
}
