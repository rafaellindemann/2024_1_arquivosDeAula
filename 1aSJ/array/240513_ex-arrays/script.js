// Math.floor(Math.random() * (max - min + 1) ) + min;

let numeros = []
let min = -100
let max = 100

let saida = document.getElementById('divSaida')

for(i=0; i<50;i++){
    let n = Math.floor(Math.random() * (max - min + 1) ) + min;
    numeros.push(n)
}
console.log(numeros);

let tamanho = numeros.length
for(i=0;i<tamanho;i++){
    saida.innerHTML += numeros[i] + ', '
}

saida.innerHTML += '<hr>'
for(i=0; i<numeros.length; i++){
    if(numeros[i] < 0){
        numeros[i] = 0
    }
    saida.innerHTML += numeros[i] + ', '
}

for(i=0;i<50;i++){
    console.log(i);
}





