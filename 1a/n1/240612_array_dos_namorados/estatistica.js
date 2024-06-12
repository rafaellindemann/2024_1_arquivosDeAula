
let contagens = []

// inicialização dos valores do array com 0
for(i=0; i<=20; i++){
    contagens[i] = 0;
}

for(i=0; i<100000000; i++){
    num = Math.floor(Math.random() * 20)

    contagens[num]++
}

console.log(contagens);



// 0 .. 19.99999999

// 0: [0 .. 0.4999999]
// 1: [0.5 .. 1.499999]
// 2: [1.5 - 2.4999999]
// 3: [2.5 - 3.4999999]
// ..

// 19: [18.5 - 19.4999]
// 20: [19.5 - 19.9999]
