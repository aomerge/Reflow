import React, { useState, createContext, useContext, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from '../../src/components/button/button.v1';
import Fetch, {useFetchData} from '../../src/components/inputs/Fetch';
import Input from '../../src/components/inputs/Inputs';
import Submit from '../../src/components/inputs/Submit';
import Grid from '../../src/components/container/Grid';
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


const ElementTestT = ({ setId, data }: any)=>{   
  return (
    <Grid col={5} row={0} >
    {
      data.results.map((item: any, index: number) => {
      
        return (
        <Block onClick={()=>setId(index+1)} style={{borderRadius:"26px"}}  key={index}>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
        </Block>    
        ) 
      })
    }
    </Grid>
  )
}

const NewElement = () => {
  const { data, loading, error } = useFetchData<any>();  
  return (
    <div>
      <h1>{data?.name}</h1>
      <img src={data?.image} alt={data?.name} />
    </div>
  );
}

const NewElementT = ({Id ,rollBack}: any) => {    
  const { data, loading, error } = useFetchData<any>();    
  return (
    <div>
        <Block>
          <Fetch url={`https://rickandmortyapi.com/api/character/${Id}`}>
            <NewElement  />
          </Fetch>
          <Block >
            <Button className='mt-2' onClick={rollBack} label='Volver' />
          </Block>
        </Block>
    </div>    
  );
};

const ChildComponent: React.FC<ChildProps> = ({ text, setText }) => {
  const [Id, setId] = useState<number | null>(null);
  const { data, loading, error } = useFetchData<Post>();     

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No hay datos disponibles</p>  
  
  return (
    <Block type='main'>  
      <Block
        type='section'
        newElement={
          Id !== null ? (
            <NewElementT Id={Id} setId={setId} rollBack={() => setId(null)} />
          ) : undefined
        }
      >
        <ElementTestT setId={setId} data={data} />
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
      <div style={{padding:"10px 20px"}}>        
        <ChildComponent text={text} setText={setText} />        
      </div>
    </Fetch>
  );
};

export default App;



// Renderiza la aplicación en el DOM
ReactDOM.render(<App />, document.getElementById('root'));
