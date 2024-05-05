import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Pages from './pages';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
