programa {
  funcao inicio() {
    inteiro numero, sub, dobro, quadrado, resto
    real metade
    escreva("Digite um n�mero: ")
    leia(numero)
    sub = numero - 10
    escreva("Subtra��o: " + sub)
    dobro = numero * 2
    escreva("\nDobro: " + dobro)
    metade = numero / 2
    escreva("\nMetade: " + metade)
    escreva("\nA metade de " + numero + "m � " + metade + "m")
    //quadrado = numero**2
    //escreva("\nQuadrado: " + quadrado)
    resto = numero % 2
    escreva("\nResto da divis�o por 2: " + resto)
  }
}








