import React from 'react';
import Login from './pages/Login';
import { useAuth } from './context/AuthContext';
import Dashboard from './pages/Dashboard';


const App = () => {
   const { user } = useAuth();

   return (
    user ? <Dashboard /> : <Login />
   )
  
}

export default App
