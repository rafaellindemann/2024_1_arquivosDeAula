// Importe as dependências necessárias (UseState)
import React, { useState } from 'react';

// Importe a estilização
import './App.css';

// Defina o componente App
function App() {

 // Defina os estados locais username e userData usando useState
 const [username, setUsername] = useState('');
 const [userData, setUserData] = useState(null);

 // Função assíncrona para lidar com o envio do formulário
 const handleFormSubmit = async (event) => {
// Evita o comportamento padrão do formulário (recarregar a página)
 event.preventDefault();
 try {

 // Utilize o fetch para fazer uma requisição à API do GitHub
 const response = await fetch(`https://api.github.com/users/${username}`);

 // Verifique se a resposta da API foi bem-sucedida
 if (!response.ok) {
 throw new Error('Usuário não encontrado.');
 }

 // Converta a resposta para JSON e atualize o estado userData
 const data = await response.json();
 setUserData(data);
 } catch (error) {

 // Trate exceções e exiba mensagens de erro no console
 console.error(error);
 }
 };
 // Renderize o componente
 return (
 // Container principal que envolve todo o conteúdo do perfil
  <div className="profile-container">
    {/* Título do perfil do GitHub */}
    <h1>Perfil do GitHub</h1>
    {/* Formulário para buscar informações do usuário do GitHub */}
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Digite o nome de usuário do GitHub"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />&nbsp;
      {/* Botão de busca no formulário */}
      <button type="submit">Buscar</button>
    </form>
    {/* Container das informações do perfil do GitHub */}
    <div className="profile-info">
      {/* Renderização condicional: Se userData existe, renderize o seguinte bloco */}
      {userData ? (
        <>
          {/* Imagem do avatar do usuário do GitHub */}
          <img 
            className="avatar" 
            src={userData.avatar_url} 
            alt={`Avatar de ${userData.login}`} 
          />
          {/* Nome do usuário do GitHub */}
          <h2>{userData.name}</h2> 
          {/* Links para o perfil do GitHub e informações relacionadas */}
          <a 
          href={`https://github.com/${userData.login}`} 
          target="_blank" rel="noreferrer">
              <p>Nome de usuário: {userData.login}</p>
          </a>
          <a
          href={`https://github.com/${userData.login}?tab=repositories`}
          targt="_blank" rel="noreferrer">
              <p>Repositórios públicos: {userData.public_repos}</p>
          </a>
          <a
          href={`https://github.com/${userData.login}?tab=followers`}
          targt="_blank" rel="noreferrer">
              <p>Seguidores:: {userData.followers}</p>
          </a>
          <a
          href={`https://github.com/${userData.login}?tab=following`}
          targt="_blank" rel="noreferrer">
              <p>Seguindo: {userData.following}</p>
          </a>
          {console.log(userData)}
      
        </>
      ) : null}
    </div>
  </div>
 );
}
// Exporte o componente App
export default App;
