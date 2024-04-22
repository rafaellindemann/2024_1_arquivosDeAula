let numero = Number(prompt("Digite o valor para testar:"))
let i
let primo = true

i=2
while(i < numero){
    if(numero % i == 0){
        primo = false
    }
    i++
}
if(primo){
    console.log("É primo");
}else{
    console.log("NÃO é primo");
}