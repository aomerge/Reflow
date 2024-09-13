import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../src/components/button/button.v1';  // Importa el componente Button desde la librería



function App() {
  return (
    <div>
      <h1>Probando Mi Librería de UI ma</h1>
      <Button label="Haz clic aquí" />      
    </div>
  );
}

// Renderiza la aplicación en el DOM
ReactDOM.render(<App />, document.getElementById('root'));
