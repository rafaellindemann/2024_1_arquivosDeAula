programa
{
	inteiro idade, idadeHumana
	funcao inicio()
	{
		escreva("Digite a idade do cachorro:")
		leia(idade)
		idadeHumana = idade * 7
		se(idadeHumana >= 60){
			escreva("Já pode se aposentar")
		}senao{
			escreva("NÃO pode se aposentar ainda")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 119; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {idade, 3, 10, 5}-{idadeHumana, 3, 17, 11};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */