import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Asegúrate de importar BrowserRouter
import App from './App.jsx';
import './index.css';

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,
document.getElementById('root')
);
