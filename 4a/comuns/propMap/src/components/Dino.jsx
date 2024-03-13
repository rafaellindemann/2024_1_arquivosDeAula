
function Dino(props){
    return (
        <>
            <h2>{props.dino.nome}</h2>
            <strong>Família:</strong> {props.dino.família} <br />
            <strong>Peso:</strong> {props.dino.peso} <br />
            <strong>Altura:</strong> {props.dino.altura} <br />
            <strong>Comprimento:</strong> {props.dino.comprimento} <br />
            <strong>Período Histórico:</strong> {props.dino.períodoHistórico}
        </>
    )
}

export default Dino;