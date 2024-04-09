programa {
  funcao inicio() {
    inteiro ano
    escreva("Ano: ")
    se(ano%400==0){
      escreva("É bissexto")
    }senao se(ano%100==0){
      escreva("Não é bissexto")
    }senao se(ano%4==0){
      escreva("É bissexto")
    }senao{
      escreva("Não é bissexto!")
    }
  }
}
