
import Dino from './Dino'

function DinosaurList({ dinos }) {
  return (
    <div>
      <h2>Lista de Dinossauros</h2>
      
        {dinos.map((dino, index) => (
          <Dino key={index}  dino={dino}/>         
        ))}
      
    </div>
  );
}

export default DinosaurList;