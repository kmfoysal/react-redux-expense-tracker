import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import AllTransactions from './pages/allTransactions/AllTransactions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout />}/>
        <Route path='/allTransactions' element={<AllTransactions />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
