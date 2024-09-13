import React from 'react';
import ReactDOM from 'react-dom';
// Importa el componente o funcionalidad de la librería desde 'library/dist'
//import { MiComponente } from '../../library/dist/index';  // Ruta relativa al archivo compilado de la librería

function App() {
  return (
    <div>
      <h1>Probando Mi Librería de UI ma</h1>
      {/* Usa el componente exportado por tu librería */}      
    </div>
  );
}

// Renderiza la aplicación en el DOM
ReactDOM.render(<App />, document.getElementById('root'));
