let pai = []
let mae = []
let filho = []
let max = 99, min = 10
let saida = document.getElementById('divSaida')
for(i=0; i<50;i++){
    pai.push(Math.floor(Math.random() * (max - min + 1) ) + min)
    mae.push(Math.floor(Math.random() * (max - min + 1) ) + min)
}
console.log(pai);
console.log(mae);

for(i=0;i<50;i++){
    if(i % 2 == 0){
        filho.push(pai[i])
    }else{
        filho.push(mae[i])
    }
}

console.log(filho);
saida.innerHTML += `i --|| P -|| M || F<br>`
for(i=0;i<50;i++){
    if(i<10) {
        saida.innerHTML += '0'
    }
    saida.innerHTML += `${i} | ${pai[i]} | ${mae[i]} | ${filho[i]} <br>`
}

