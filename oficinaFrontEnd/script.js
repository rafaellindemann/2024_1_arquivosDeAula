
function converterParaReal(){
    // alert("Depois eu converto, agora estou ocupado")
    let dolar = document.getElementById('entradaDolar').value
    let real = dolar * 4.97

    document.getElementById('saidaReal').innerHTML = 'R$' + real
}
function converterParaDolar(){
    // alert("Depois eu converto, agora estou ocupado")
    let real = document.getElementById('entradaReal').value
    let dolar = real / 4.97

    document.getElementById('saidaDolar').innerHTML = 'R$' + dolar.toFixed(2)
}