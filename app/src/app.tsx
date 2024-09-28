import React, { useState, createContext, useContext, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from '../../src/components/button/button.v1';
import Fetch, {useFetchData} from '../../src/components/inputs/Fetch';
import Input from '../../src/components/inputs/Inputs';
import Submit from '../../src/components/inputs/Submit';
import Grid from '../../src/components/container/Grid';
import Text from '../../src/components/text/Text';
import Block, {BlockContext, useBlockContext} from '../../src/components/container/Block';
import Navigation from '../../src/components/navigator/Navigation';


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

const Child = ({text, setText}: ChildProps) => {
  return (
    <Block type='section' className='mb-5 mr-10'>          
      <Text label="Fetch Data" type="h1" />
    </Block>
  );
}

const App = () => {  
  const [data, setData] = useState<Post | null>(null);
  const [ text, setText ] = useState<number>(0);

  return (
    <Block className=' h-screen' type='section'>        
        <Navigation template='basic' >
          <Button  type="button" label="home" />
          <Button  type="button" label="project" />
          <Button  type="button" label="About" />
        </Navigation>
        <Block type='section' className='mb-5 mr-10'>          
          <Text label="Fetch Data" type="h1" />
        </Block>
    </Block>
  );
};

export default App;



// Renderiza la aplicación en el DOM
ReactDOM.render(<App />, document.getElementById('root'));
