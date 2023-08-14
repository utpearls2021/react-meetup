import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {FavoritsContextProvider} from './store/Favorits-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritsContextProvider>

);
