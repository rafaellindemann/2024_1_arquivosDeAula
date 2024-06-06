let dias = ['domingo', 'segunda','terça', 'quarta', 'quinta', 'sexta', 'sabado']

// console.log(dias.length);

dias.push('feriado')

// alert("Ilustre usuário genérico, você recebeu a honra de batizar o dia que vamos inventar.")

// let dia = prompt('Diga o nome do dia:')
// dias.push(dia)

// 4 - remover o último
dias.pop()

// teste do shift - remove o primeiro
console.log(dias)
dias.shift()
console.log(dias)

let pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
pares[2] = 12
console.log(pares);

// 7
let frutas = ['banana', 'maçã', 'uva']
frutas.push('morango')

// 8 - remover o segundo - feito depois das 22h
console.log(frutas)
frutas.splice(1, 1)
console.log(frutas)

// spoiler
// frutas.splice(0, frutas.length)
// frutas.length = 
// frutas.length -= 1
frutas.length--