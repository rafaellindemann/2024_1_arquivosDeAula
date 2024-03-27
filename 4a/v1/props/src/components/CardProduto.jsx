
 function CardProduto(props) {
 return (
   <div>
        <h2>{props.nome}</h2>
        <p>Preço: R${props.valor}</p>
   </div>
 );
}

export default CardProduto