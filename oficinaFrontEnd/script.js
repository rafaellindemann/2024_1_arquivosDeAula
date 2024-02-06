
function converterParaReal(){
    // alert("Depois eu converto, agora estou ocupado")
    let dolar = document.getElementById('entradaDolar').value
    let real = dolar * 4.97

    document.getElementById('saidaReal').innerHTML = 'R$' + real
}