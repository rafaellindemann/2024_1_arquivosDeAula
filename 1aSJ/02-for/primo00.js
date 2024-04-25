
let numero = 15, i
divisores = 0
i=2
while(i<numero){
    if(numero%i == 0){
        divisores++
    }
    i++
}

console.log(divisores)
if(divisores > 0){
    console.log("Não é primo");
}else{
    console.log("É primo");
}