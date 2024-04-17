programa
{
	
	funcao inicio()
	{
		inteiro idade, quadrado
		real altura, salario
		cadeia nome
		real resultado
		

		idade = 22
		idade++
		idade = idade + 8
		idade += 90

		idade--
		idade = idade - 2
		idade -= 2

		idade = idade / 2
		idade /= 2

		idade = idade * 2
		idade *= 2
		
		quadrado = idade ^ 2
		
		resultado = 20.0/5

		escreva("Digite sua idade: ")
		leia(idade)

		salario = 10000.0
		escreva("Sua idade: " + idade + "\nSalario: R$" + salario)
		
		se(idade < 18){
			escreva("Menor de idade")			
		}

		idade = 22
		se(idade < 18){
			escreva("Menor de idade")			
		}senao{
			escreva("Maior de idade")
		}

		se(idade < 18){
			escreva("1")
		}
		escreva("2")
		escreva("3")

		cadeia linguagem
		linguagem = "Node"

		se(linguagem == "Node"){
			escreva("Curso do Erick Wendell")
		}
		se(linguagem == "Python"){
			escreva("Curso do Guanabara")
		}
		se(linguagem == "Java"){
			escreva("Curso da Loiane Grosner")
		}
		se(linguagem == "C#"){
			escreva("Curso da Microsoft")
		}
		se(linguagem == "PHP"){
			escreva("Volta no tempo... 😁")
		}
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 792; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {idade, 6, 10, 5}-{resultado, 9, 7, 9};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */