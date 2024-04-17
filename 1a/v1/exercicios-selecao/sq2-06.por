programa {
  funcao inicio() {
    inteiro senha
    escreva("Você precisa escolher uma senha numérica que\n-Tenha pelo menos 8 números\n-Não comece com '0'\nAgora digite sua senha: ")
    leia(senha)
    se(senha >= 10000000){
      escreva("Senha boa")
    }senao{
      escreva("Senha ruim")
    }
    
  }
}
