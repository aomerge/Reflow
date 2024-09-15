import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import Fetch from '../../src/components/inputs/Fetch';


interface ChildProps {
  data?: Post | null;
  loading?: boolean;
  error?: string | null;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


const ChildComponent: React.FC<ChildProps> = ({ data, loading, error }) => {
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No hay datos disponibles</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <span>{data.userId}</span>
      <p>{data.body}</p>
    </div>
  );
};

const App = () => {
  return (
    <Fetch<Post> url="https://jsonplaceholder.typicode.com/posts/1" option={{ method: 'GET' }} >
      <ChildComponent />
    </Fetch>
  );
};

export default App;



// Renderiza la aplicación en el DOM
ReactDOM.render(<App />, document.getElementById('root'));
