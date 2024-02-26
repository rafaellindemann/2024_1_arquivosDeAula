programa
{
		
	funcao inicio()
	{
		inteiro numeroMagico, palpite
		numeroMagico = sorteia(0,10)
		escreva("Digite seu palpite: ")
		leia(palpite)

		se(palpite == numeroMagico)
		{
			escreva("O número sorteado foi: " + 
			numeroMagico + "\nVocê acertou! Parabéns!")
		}senao{
			escreva("O número sorteado foi: " + 
			numeroMagico + "\nVocê Chutou: " + palpite +
			"\nVocê errou!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 65; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numeroMagico, 6, 10, 12}-{palpite, 6, 24, 7};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */