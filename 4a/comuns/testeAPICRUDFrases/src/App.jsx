import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [frases, setFrases] = useState([]);
  const [novaFrase, setNovaFrase] = useState({ frase: '', nomeAutor: '' });
  const [fraseAtualizada, setFraseAtualizada] = useState({ id: '', frase: '', nomeAutor: '' });

  useEffect(() => {
    // GET request to fetch frases
    // axios.get('https://frases.docapi.dev/frase')
    axios.get('https://frases.docapi.dev/frase/obter')
      .then(response => {
        setFrases(response.data.resposta);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar as frases!', error);
      });
  }, []);

  useEffect(() => {
    console.log(frases);
  }, [frases])

  const handlePost = () => {
    // POST request to add a frase
    axios.post('https://frases.docapi.dev/frase/criar', novaFrase)
      .then(response => {
        setFrases([...frases, response.data]);
        setNovaFrase({ frase: '', nomeAutor: '' });
      })
      .catch(error => {
        console.error('Houve um erro ao criar a frase!', error);
      });
  };

  const handleUpdate = () => {
    // PUT request to update a frase
    axios.put(`https://frases.docapi.dev/frase/atualizar/${fraseAtualizada.id}`, fraseAtualizada)
      .then(response => {
        const frasesAtualizadas = frases.map(f => f.id === fraseAtualizada.id ? response.data : f);
        setFrases(frasesAtualizadas);
        setFraseAtualizada({ id: '', frase: '', nomeAutor: '' });
      })
      .catch(error => {
        console.error('Houve um erro ao atualizar a frase!', error);
      });
  };

  const handleDelete = (id) => {
    // DELETE request to remove a frase
    axios.delete(`https://frases.docapi.dev/frase/deletar/${id}`)
      .then(() => {
        setFrases(frases.filter(frase => frase.id !== id));
      })
      .catch(error => {
        console.error('Houve um erro ao deletar a frase!', error);
      });
  };

  return (
    <div>
      <h1>Gerenciador de Frases</h1>

      <div>
        <h2>Criar Frase</h2>
        <input 
          type="text" 
          placeholder="Frase" 
          value={novaFrase.frase} 
          onChange={(e) => setNovaFrase({ ...novaFrase, frase: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Nome do Autor" 
          value={novaFrase.nomeAutor} 
          onChange={(e) => setNovaFrase({ ...novaFrase, nomeAutor: e.target.value })} 
        />
        <button onClick={handlePost}>Adicionar Frase</button>
      </div>

      <div>
        <h2>Atualizar Frase</h2>
        <input 
          type="text" 
          placeholder="ID" 
          value={fraseAtualizada.id} 
          onChange={(e) => setFraseAtualizada({ ...fraseAtualizada, id: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Frase" 
          value={fraseAtualizada.frase} 
          onChange={(e) => setFraseAtualizada({ ...fraseAtualizada, frase: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Nome do Autor" 
          value={fraseAtualizada.nomeAutor} 
          onChange={(e) => setFraseAtualizada({ ...fraseAtualizada, nomeAutor: e.target.value })} 
        />
        <button onClick={handleUpdate}>Atualizar Frase</button>
      </div>

      <div>
        <h2>Frases</h2>
        <ul>
          {!!frases.length && frases.map((frase, index) => (
            // <li key={index}>
            <li key={frase._id}>
              {frase.frase} - {frase.nomeAutor}
              <button onClick={() => handleDelete(frase.id)}>Deletar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
