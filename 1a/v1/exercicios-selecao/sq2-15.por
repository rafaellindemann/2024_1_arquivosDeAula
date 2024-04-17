programa {
  funcao inicio() {
    real peso, altura, imc
    escreva("Peso: ")
    leia(peso)
    escreva("Altura: ")
    leia(altura)
    imc = peso / (altura * altura)
    escreva("Seu IMC é: " + imc)
    se(imc < 18.5){
      escreva("\nFaixa: Magreza")
    }senao se(imc < 25){
      escreva("\nFaixa: Normal")
    }senao se(imc < 30){
      escreva("\nFaixa: Sobrepeso I")
    }senao se(imc < 40){
      escreva("\nFaixa: Obesidade II")
    }senao {
      escreva("\nFaixa: Obesidade Grave III")
    }
  }
}

