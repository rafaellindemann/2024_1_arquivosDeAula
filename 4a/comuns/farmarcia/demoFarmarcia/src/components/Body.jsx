import './Body.css'
import Data from './Data';
function Body(){
  return (
    <div className="body">
      <h2>Bem vindo à Farmárcia</h2>
      <p>Conheça um pouco da nossa nova marca!</p>
      <img src="./images/farmarcia-placa.PNG" alt="" />
      <h2>Grande sorteio de camisetas</h2>
      <img src="./images/farmarcia-camiseta.PNG" alt="" />
      <p>Para participar do sorteio divulgue nossa data de inauguração nas suas redes sociais e marque o @farmarcia</p>
      <p>Quanto mais marcações em mais redes, mais chances. Pode botar no insta, no face, no x, pode botar até no koo...</p>
      <Data dia={15} mes='Março' ano={2024}/>
    </div>
  );
}

export default Body;
