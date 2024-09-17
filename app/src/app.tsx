import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import Fetch, {useFetchData} from '../../src/components/inputs/Fetch';
import Input from '../../src/components/inputs/Inputs';
import Submit from '../../src/components/inputs/Submit';
import Block from '../../src/components/container/Block';


interface ChildProps {  
  text: string | number;
  setText: React.Dispatch<React.SetStateAction<any>>;
}

interface Post{
  results: Array<IPost>;
}

interface IPost{
  name: string;
  image: string;
}


const ChildComponent: React.FC<ChildProps> = ({ text, setText }) => {
  const { data, loading, error } = useFetchData<Post>();
  
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No hay datos disponibles</p>

  return (
    <div>    
     {
      data.results.map((item: any, index: number) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
        </div>
      ))
     }
    </div>
  );
};

const App = () => {  
  const [data, setData] = useState<Post | null>(null);
  const [ text, setText ] = useState<number>(1);

  return (
    <Fetch<Post>  url={`https://rickandmortyapi.com/api/character`} option={
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
        body: null
      }
    }  >
      <div>
        <h1>abs {text}</h1>
        <ChildComponent text={text} setText={setText} />
        <Input  value={text} onValueChange={setText} type="number"  />   
        <Submit Text="Send" style={{backgroundColor: 'blue', color: 'white'}} />
      </div>
    </Fetch>
  );
};

export default App;



// Renderiza la aplicación en el DOM
ReactDOM.render(<App />, document.getElementById('root'));
