
// let n = Math.ceil(Math.random()*100)

// // console.log(n);




// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// //   n = getRndInteger(10,50)
// //   console.log(n);

//   let max = 50, min = 10
//   n = Math.floor(Math.random() * (max - min + 1) ) + min;
//   console.log(n);

let numeros = []

for(i=0; i<25;i++){
    let n = Math.ceil(Math.random()*100)
    numeros.push(n)
    // numeros.push(Math.ceil(Math.random()*100))
}
console.log(numeros);

let vetor = document.getElementById('divVetor')
vetor.innerHTML = ''
for(i=0;i<numeros.length; i++){
    vetor.innerHTML += i +': ' + numeros[i] + '<br>'
}
let n1,n2
function lerN1(){
    // alert("To funcionando")
    do{
        n1 = Number(prompt("Digite n1: "))
    }while(n1<0 || n1>24);
}
function lerN2(){
    do{
        n2 = Number(prompt("Digite n2: "))
    }while(n2<0 || n2>24);
}

let resultadoSoma = document.getElementById('divSoma')
function calcularSoma(){
    let soma = numeros[n1] + numeros[n2]
    resultadoSoma.innerHTML = `Resultado da soma: ${soma}`
}

