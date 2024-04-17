programa {
  funcao inicio() {
    inteiro numero, sub, dobro, quadrado, resto
    real metade
    escreva("Digite um número: ")
    leia(numero)
    sub = numero - 10
    escreva("Subtração: " + sub)
    dobro = numero * 2
    escreva("\nDobro: " + dobro)
    metade = numero / 2
    escreva("\nMetade: " + metade)
    escreva("\nA metade de " + numero + "m é " + metade + "m")
    //quadrado = numero**2
    //escreva("\nQuadrado: " + quadrado)
    resto = numero % 2
    escreva("\nResto da divisão por 2: " + resto)
  }
}








