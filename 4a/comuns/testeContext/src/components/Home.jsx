// Home.js
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      {user ? (
        <p>Olá, {user.username}!</p>
      ) : (
        <p>Bem-vindo! Faça login para continuar.</p>
      )}
    </div>
  );
};

export default Home;
