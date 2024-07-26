

function trocarImagem(){
    let url = document.getElementById('inpImagem').value

    document.getElementById("imgPerfil").setAttribute('src', url)

    document.getElementById('inpImagem').value = ''

}


