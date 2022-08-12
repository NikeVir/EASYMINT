import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContexProvider } from './ContexProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContexProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ContexProvider>
);
