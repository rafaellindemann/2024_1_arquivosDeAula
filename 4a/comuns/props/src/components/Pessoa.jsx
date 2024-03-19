import './Pessoa.css'

function Pessoa(props){

    return (
        <div className='divPessoa'>
            {/* {console.log(props)} */}
            {/* <img src="./images/{props.imagem}" alt="" /> */}
            <h2>Nome: {props.nome}</h2>
            <p>Profissão: {props.profissao}</p>
        </div>
    )
}

export default Pessoa;