programa {
  funcao inicio() {
    inteiro numero
    escreva("Digite o número: ")
    leia(numero)
    se(numero == 1){
      escreva("Domingo")
    }
    se(numero == 2){
      escreva("Segunda")
    }
    se(numero == 3){
      escreva("Terça")
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
      escreva("Sábado")
    }
    se(numero < 1 ou numero > 7){
      escreva("Erro #2417")
    }
  }
}
