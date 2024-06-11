import React, { useState } from 'react';
import axios from 'axios';
import md5 from 'md5';
import './App.css';

function App() {
  const [character, setCharacter] = useState('');
  const [characterData, setCharacterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacter = async () => {
    setLoading(true);
    setError(null);

    const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
    const ts = new Date().getTime();
    const hash = md5(ts + privateKey + publicKey);

    try {
      const response = await axios.get(`https://gateway.marvel.com/v1/public/characters`, {
        params: {
          name: character,
          ts: ts,
          apikey: publicKey,
          hash: hash,
        },
      });
      setCharacterData(response.data.data.results[0]);
      console.log(response.data.data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Marvel Character Search</h1>
      <input
        type="text"
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
        placeholder="Enter character name"
      />
      <button onClick={fetchCharacter}>Search</button>

      {loading && <div>Loading...</div>}
      {error && <div>Error fetching character data: {error.message}</div>}
      {characterData && (
        <div>
          <h2>{characterData.name}</h2>
          <img
            src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
            alt={characterData.name}
          />
          <p>{characterData.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
