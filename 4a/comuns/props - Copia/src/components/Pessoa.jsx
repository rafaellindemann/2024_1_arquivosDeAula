import { useState } from 'react';
import './Pessoa.css'

function Pessoa(props){

    const {nome, setNome} = useState("");

    return (
        <div className='divPessoa'>
            {/* {console.log(props)} */}
            {/* <img src="./images/{props.imagem}" alt="" /> */}
            <h2>Nome: {props.nome}</h2>
            <input>Nome: </input>
            <p>Profissão: {props.profissao}</p>
        </div>
    )
}

export default Pessoa;