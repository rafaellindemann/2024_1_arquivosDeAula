programa {
  funcao inicio() {
    inteiro numero
    escreva("Digite o n�mero: ")
    leia(numero)
    se(numero == 1){
      escreva("Domingo")
    }
    se(numero == 2){
      escreva("Segunda")
    }
    se(numero == 3){
      escreva("Ter�a")
    }
    se(numero == 4){
      escreva("Quarta")
    }    
    se(numero == 5){
      escreva("Quinta")
    }
    se(numero == 6){
      escreva("Sexta")
    }
    se(numero == 7){
      escreva("S�bado")
    }
    se(numero < 1 ou numero > 7){
      escreva("Erro #2417")
    }
  }
}
