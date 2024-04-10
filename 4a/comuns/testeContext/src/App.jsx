// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';
import Services from './components/Services';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" component={Products} />
            <Route path="/services" component={Services} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
{/* Problema do não tem export de switch: https://www.youtube.com/watch?v=Wy8hVFi7LYQ&t=85s&ab_channel=CodeByHeart */}
