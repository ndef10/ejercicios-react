import React from 'react';
import ReactDOM from 'react-dom/client';

//FORMA DE IMPORTAR LA FUNCION
import { App } from './App';

//IMPORTAR CSS
import './styles.css'

// FUNCION CORTADA Y PEGADA EN ARCHIVO INDEPENDIENTE
// function App() {
//     return (<h1>Hola Mundo!!!</h1>);    
// }

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <App />        
    </React.StrictMode>
)