let tempoMusica, nomeMusica
let totalTempo = 0
let horas=0, minutos=0
do{
    tempoMusica=Number(prompt("Tempo da música:"))
    console.log(tempoMusica);
    if(tempoMusica > 0){
        nomeMusica = prompt("Nome da música")
        totalTempo += tempoMusica
    }
}while(tempoMusica!=0);

console.log("Soma dos tempos: " + totalTempo);

// while(totalTempo >= 60){
//     totalTempo -= 60;
//     horas++
// }
// minutos = totalTempo

horas = parseInt(totalTempo/60)
minutos = totalTempo%60

console.log(horas + ":" + minutos);
