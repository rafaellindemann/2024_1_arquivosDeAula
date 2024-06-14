
let contagens = []

// inicialização dos valores do array com 0
for(i=0; i<=20; i++){
    contagens[i] = 0;
}

for(i=0; i<100000000; i++){
    num = Math.floor(Math.random() * 20)

    contagens[num]++ // 
    // contagens[num] = contagens[num] + 1
}
console.log(contagens);
// começar o trampo de mostrar na página
let maior = 0;
for(i=0;i<20; i++){
    if(contagens[i] > maior){
        maior = contagens[i]
    }
}

let container = document.getElementById('container')
for(i=0; i<=20; i++){
    // container.innerHTML += i+ ': ' + contagens[i] + '<br>'
    if(i == contagens.indexOf(maior)){
        container.innerHTML += `<div class="valorMaior">` + i + ': ' + contagens[i] + '</div>'
    }else if(i%2==0){
        container.innerHTML += `<div class="valorPar">` + i + ': ' + contagens[i] + '</div>'
    }else{
        container.innerHTML += `<div class="valorImpar">` + i + ': ' + contagens[i] + '</div>'
    }
}


// 0 .. 19.99999999

// 0: [0 .. 0.4999999]
// 1: [0.5 .. 1.499999]
// 2: [1.5 - 2.4999999]
// 3: [2.5 - 3.4999999]
// ..

// 19: [18.5 - 19.4999]
// 20: [19.5 - 19.9999]
