programa {
  funcao inicio() {
    inteiro ano
    escreva("Ano: ")
    se(ano%400==0){
      escreva("� bissexto")
    }senao se(ano%100==0){
      escreva("N�o � bissexto")
    }senao se(ano%4==0){
      escreva("� bissexto")
    }senao{
      escreva("N�o � bissexto!")
    }
  }
}
