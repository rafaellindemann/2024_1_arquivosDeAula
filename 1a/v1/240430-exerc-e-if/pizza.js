
let quantidade = Number(prompt("Quantas pizzas?"))
let tamanho = prompt("Digite o tamanho da pizza:"+
'\nPequena/Média/Grande')
let conta

if(tamanho.toUpperCase().trim() == 'PEQUENA'){
    conta = quantidade * 35
    alert(`Pizza Pequena: R$35,00 cada\nQuantidade: ${quantidade}
    \nTOTAL: R$${conta. toFixed(2)}` )
}else if(tamanho.toUpperCase() == 'Média'.toUpperCase()){
    conta = quantidade * 50
    alert(`Pizza Média: R$50,00 cada\nQuantidade: ${quantidade}
    \nTOTAL: R$${conta. toFixed(2)}` )
}else if(tamanho.toLowerCase() == 'grande'){
    conta = quantidade * 80
    alert(`Pizza Grande: R$80,00 cada\nQuantidade: ${quantidade}
    \nTOTAL: R$${conta. toFixed(2)}` )
}else{
    alert('EsSa NãO tEm')
}
