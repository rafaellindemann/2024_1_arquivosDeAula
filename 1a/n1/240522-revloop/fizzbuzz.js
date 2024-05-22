// 🐱‍🏍Imprima os números de 1 a 100, 
// substituindo os múltiplos de 3 por "Fizz",
// os múltiplos de 5 por "Buzz"
// e os múltiplos de ambos por "FizzBuzz".

let resultado = document.getElementById("divResultado")
resultado.innerHTML = "Exercício FizzBuzz<hr>"

let i = 1
while(i<=100){
    if(i%3 == 0 && i%5 == 0){
        // resultado.innerHTML += 'FizzBuzz<br>'
        resultado.innerHTML += '<img src="ic--baseline-adb.svg" alt=""><br>'
    }else if(i%3 == 0){
            resultado.innerHTML += 'Fizz<br>'
    }else if(i%5 == 0){
        resultado.innerHTML += 'Buzz<br>'
    }else{
        resultado.innerHTML += i+'<br>'
    }
    i++
}



// let i = 1
// while(i<=100){
//     resultado.innerHTML += i + '<br>'

//     i++
// }


// for(let i = 1; i<=100; i++){
//     resultado.innerHTML += i + '<br>'
// }