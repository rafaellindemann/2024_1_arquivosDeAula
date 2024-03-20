
import './App.css'
import Pessoa from './components/Pessoa'

function App() {

  let pessoas = [
    { id: 1, nome: 'Xylon', profissao: 'Engenheiro de Inteligência Artificial' },
    { id: 2, nome: 'Zyra', profissao: 'Cientista de Biônica' },
    { id: 3, nome: 'Korvax', profissao: 'Engenheiro de Viagem Espacial' },
    { id: 4, nome: 'Aelara', profissao: 'Especialista em Realidade Virtual' },
    { id: 5, nome: 'Dexon', profissao: 'Desenvolvedor de Nanotecnologia' },
    { id: 6, nome: 'Luminara', profissao: 'Arquiteta de Cidades Inteligentes' },
    { id: 7, nome: 'Nexis', profissao: 'Designer de Próteses Neuroassistidas' },
    { id: 8, nome: 'Sylph', profissao: 'Piloto de Carros Voadores' },
    { id: 9, nome: 'Quantum', profissao: 'Analista de Dados Quânticos' },
    { id: 10, nome: 'Astra', profissao: 'Engenheira de Energia Sustentável' },
    { id: 11, nome: 'Vex', profissao: 'Especialista em Segurança Cibernética Avançada' },
    { id: 12, nome: 'Neon', profissao: 'Artista de Holografia' },
    { id: 13, nome: 'Synthia', profissao: 'Criadora de Androides Conscientes' },
    { id: 14, nome: 'Elix', profissao: 'Biogeneticista' },
    { id: 15, nome: 'Nebula', profissao: 'Exploradora Espacial' }
];

  return (
    <div className='flexLinha'>
      {/* <Pessoa nome={"Mano Juca"} profissao={"Padeiro"}/>
      <Pessoa nome={"Gervázio"} profissao={"Coveiro"}/> */}

      {
        pessoas.map( (pessoa) => (
          // console.log(pessoa)
          <Pessoa key={pessoa.id} nome={pessoa.nome} profissao={pessoa.profissao} />
        ) )
      }

    </div>
  )
}

export default App
