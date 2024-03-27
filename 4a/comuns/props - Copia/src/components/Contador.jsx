import { useEffect, useState } from 'react';
import './Contador.css'

function Contador(){

    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("dentro do use effect")
    }, []);
    // let contador = 0;

    const handleMinus = () => {
        // contador -= 1
        setContador(contador - 1);
        console.log('fora do effect', contador);
    }

    const handlePlus = () => {
        setContador(contador + 1);
        console.log('fora do effect plus', contador);
    }

    return (
        <div className='divContador'>
            <h1>Contador</h1>
            <p>{contador}</p>
            fdsjaghdjkslafhsjld

            <button type="button" onClick={handleMinus}>Menos</button>
            <button type="button" onClick={handlePlus}>Mais</button>
            
            <h1>Espelho do Contador</h1>
            <p>{contador}</p>
            <p>{contador}</p>
            <p>{contador}</p>
            <p>{contador}</p>
            <p>{contador}</p>
        </div>
    )
}

export default Contador;