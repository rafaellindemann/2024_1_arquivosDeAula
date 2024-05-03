
let dinos = ['Espinossauro', 'Tricerátopo', 'Estegossauro', 'Rex', 'Anquilossauro', 'Braquiossauro', 'Argentinossauro', 'Borealopeuta', 'Patagotitan']

let linguagens = ['JS','Java', 'C++', 'Python', 'Rust', 'Ruby', 'PHP', 'C#', 'HTML', 'CSS', 'Portugol']

console.log(linguagens);

linguagens.splice(1,2)
console.log(linguagens);

let i = linguagens.indexOf('Portugol')
linguagens.splice(i,1)
console.log(linguagens);

linguagens.push("JAVAAAAA")
console.log(linguagens);