programa {
  funcao inicio() {
    inteiro senha
    escreva("Voc� precisa escolher uma senha num�rica que\n-Tenha pelo menos 8 n�meros\n-N�o comece com '0'\nAgora digite sua senha: ")
    leia(senha)
    se(senha >= 10000000){
      escreva("Senha boa")
    }senao{
      escreva("Senha ruim")
    }
    
  }
}
