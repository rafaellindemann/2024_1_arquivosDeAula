programa {
  funcao inicio() {
      inteiro numero
      escreva("Digite o n�mero: ")
      leia(numero)

      se(numero == 1){
        escreva("Domingo")
      }senao se(numero == 2){
        escreva("Segunda")
      }senao se(numero == 3){
        escreva("Ter�a")
      }senao se(numero == 4){
        escreva("Quarta")
      }senao se(numero == 5){
        escreva("Quinta")
      }senao se(numero == 6){
        escreva("Sexta")
      }senao se(numero == 7){
        escreva("S�bado")
      }senao{
        escreva("Erro 404")
      }

  }
}
