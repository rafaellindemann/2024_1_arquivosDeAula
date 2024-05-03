
// let numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// let numeros = []
// for(i=2;i<=20;i++){
//     if(i % 2 == 0){
//         numeros.push(i)
//     }
//     console.log('Array agora: ' + numeros);
// }

// console.log(numeros);

let numeros = []
for(i=2;i<=20;i+=2){
    numeros.push(i)
    console.log('Array agora: ' + numeros);
}
console.log(numeros);

let soma = 0
for(i=0;i<numeros.length; i++){
    soma += numeros[i]
}
let media = soma/numeros.length

let sominha = numeros[0] + numeros[1]


