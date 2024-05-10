
function Receitas(props) {
  return (
    <div>
      {props.receitas.map(
        (receita, index) => (
            <div key={index}>
                <p>{receita.nome}</p>
                <p>{receita.pmodoDePreparo}</p>
            </div>
        )
      )}
    </div>
  )
}

export default Receitas
