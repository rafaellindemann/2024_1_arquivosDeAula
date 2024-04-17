import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log(userData);
  }, [userData]); 

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };


  return (
    <div>
      <h1>GitHub User Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <img src={userData.avatar_url} alt="User Avatar" style={{ width: '100px', borderRadius: '50%' }} />
        </div>
      )}
    </div>
  );
}

export default App;
