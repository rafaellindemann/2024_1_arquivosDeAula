import './App.css'
import CardProduto from './components/CardProduto'
function App() {
  const produtos = [
    { id:0, nome: 'Vara de pesca', valor: '120.00' },
    { id:1, nome: 'Isca artificial', valor: '15.50' },
    { id:2, nome: 'Anzol', valor: '5.80' },
    { id:3, nome: 'Carretilha', valor: '250.00' },
    { id:4, nome: 'Molinete', valor: '80.00' },
    { id:5, nome: 'Chapéu de pesca', valor: '30.00' },
    { id:6, nome: 'Colete salva-vidas', valor: '85.00' },
    { id:7, nome: 'Bússola', valor: '20.00' },
    { id:8, nome: 'Faca de caça', valor: '45.00' },
    { id:9, nome: 'Arco e flecha', valor: '200.00' },
    { id:10, nome: 'Rede de pesca', valor: '40.00' },
    { id:11, nome: 'Lanterna', valor: '12.50' },
    { id:12, nome: 'Bote inflável', valor: '180.00' },
    { id:13, nome: 'Caixa de iscas', valor: '18.00' },
    { id:14, nome: 'Cadeira de pesca', valor: '55.00' },
    { id:15, nome: 'Binóculo', valor: '150.00' },
    { id:16, nome: 'GPS de trilha', valor: '120.00' },
    { id:17, nome: 'Canivete suíço', valor: '25.00' },
    { id:18, nome: 'Camisa de pesca', valor: '35.00' },
    { id:19, nome: 'Calça de caça', valor: '60.00' }
];
  return (
    <>
      {/* <CardProduto nome={'Laranjinha'} valor={5.77}/>
      <CardProduto nome={'Purezinha'} valor={6.50}/> */}

      {produtos.map( (produto) => (
        <CardProduto key={produto.id} nome={produto.nome} valor={produto.valor}/>
      ) )}

    </>
  )
}
export default App
