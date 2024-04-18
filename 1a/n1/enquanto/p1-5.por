programa
{
//2) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)

	funcao inicio()
	{
		inteiro contador, idade, maiorIdade=0
		real media=0.0
		cadeia nome, nomeMaior=""

		contador = 0
		enquanto(contador<5){
			escreva("Digite um nome: ")
			leia(nome)
			escreva("Qual a idade de ",  ": ")
			leia(idade)
			se(idade > maiorIdade){
				maiorIdade = idade
				nomeMaior = nome
			}
			se(idade == maiorIdade){
				nomeMaior = nomeMaior + ", " + nome
			}
			//media = media + idade
			media += idade
			contador++
		}
		media = media / 5
		escreva("Média: ", media)
		escreva("\nMaior Idade: ", maiorIdade)
		escreva("\nNome do maior: ", nomeMaior)
	}
}


/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 324; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */