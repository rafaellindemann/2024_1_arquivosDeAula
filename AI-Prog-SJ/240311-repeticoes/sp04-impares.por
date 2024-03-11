programa
{
	inteiro contador, tabuada, resultado
	
	funcao inicio()
	{
		escreva("Digite um número: ")
		leia(tabuada)
		contador = 1
		enquanto(contador <= 10){
			resultado = tabuada * contador
			escreva(tabuada + " x " + contador + " = " +
			resultado + "\n")
			contador = contador + 1
		}
	}
}



/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 201; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */