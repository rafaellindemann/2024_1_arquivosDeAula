
let nota1, nota2, media;

nota1 = Number(prompt("Digite a primeira nota:"))
nota2 = Number(prompt("Digite a segunda nota:"))

media = (nota1+nota2)/2

alert("Média: " + media.toFixed(5) )


let texto = "Média: " + media

if(media >= 7){
    // alert("Passou")
    texto = texto + "\nPassou"
}else{
    // alert("Não Passou")
    texto = texto + "\nNão Passou"
}

alert(texto)

// document.write("Média: " + media)
// document.write("<br>Média: " + media)
