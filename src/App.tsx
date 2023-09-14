import React from 'react';
import { Container } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

const App: React.FC = () => {

  return (
    <Container>
      <Routes>
        <Route 
          path='/' 
          element={<HomePage />} 
        />
        <Route 
          path='/register' 
          element={<RegisterPage />}
        />
        <Route 
          path='/login' 
          element={<LoginPage />} 
        />
      </Routes>
    </Container>
  );
};

export default App;
