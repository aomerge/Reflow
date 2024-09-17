import React, { useState, createContext, useContext, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Fetch, {useFetchData} from '../../src/components/inputs/Fetch';
import Input from '../../src/components/inputs/Inputs';
import Submit from '../../src/components/inputs/Submit';
import Block, {BlockContext, useBlockContext} from '../../src/components/container/Block';


interface ChildProps {  
  text: string | number ;
  setText: React.Dispatch<React.SetStateAction<any>>;
}

interface Post{
  results: Array<IPost>;
}

interface IPost{
  name: string;
  image: string;
}


const ElementTestT = ({ data, loading, error, handleClick , id}: {id:number|String, data: any, loading:any, error: any, handleClick?: any})=>{  

  return (
    <>
    {
      data.results.map((item: any, index: number) => {
      
        return (
          <div onClick={handleClick} style={{borderRadius:"26px"}}  key={index}>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
        </div>    
        ) 
      })
    }
    </>
  )
}

const NewElementT = ({id, rollBack}:{id?:any, rollBack?:any})=>{
  return (
    <Block>
      <h1>number: {id}</h1>
      <button onClick={rollBack}>Back</button>
    </Block>
  );
};

const ChildComponent: React.FC<ChildProps> = ({ text, setText }) => {
  const { data, loading, error } = useFetchData<Post>();     
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No hay datos disponibles</p>  
  
  return (
    <Block type='main'>  
        <Block type='section' newElement={<NewElementT id={text} />}>
          <ElementTestT id={text} data={data} loading={loading} error={error} />          
        </Block>            
    </Block>
  );
};

const App = () => {  
  const [data, setData] = useState<Post | null>(null);
  const [ text, setText ] = useState<number>(0);
  


  return (
    <Fetch<Post>  url={`${
      text === 0 ? 'https://rickandmortyapi.com/api/character' : `https://rickandmortyapi.com/api/character/${text}`
    }`} >
      <div style={{margin:"150px"}}>        
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
