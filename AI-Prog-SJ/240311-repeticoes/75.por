programa
{
	inclua biblioteca Matematica --> m 
	inteiro contador
	real preco
	funcao inicio()
	{
		contador = 1
		enquanto(contador <= 500){
			preco = contador * 0.33
			escreva(contador + ": R$" + 
				m.arredondar(preco,2) + "\n")
			contador = contador + 1
		}
	}
}


/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 268; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */