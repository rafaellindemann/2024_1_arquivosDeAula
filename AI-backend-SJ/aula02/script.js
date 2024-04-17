// function testar(){
//     alert("Seja bem vindo")
// }

let usuario = document.getElementById("inpUsuario")
let senha = document.getElementById("inpSenha")
usuario.focus()
// console.log(usuario.value);
// console.log(senha.value)

function efetuarLogin(){
    console.log(usuario.value);
    console.log(senha.value)
    if(usuario.value == "Rafael" && senha.value == "123456"){
        alert("Seja bem vindo")
    }else{
        alert("Usuário ou senha incorretos")
    }
    usuario.value = ''
    senha.value = ''
    usuario.focus()
}
