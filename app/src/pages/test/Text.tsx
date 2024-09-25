import React, { useState, createContext, useContext, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Text from '../../../../src/components/text/Text';
import Block, {BlockContext, useBlockContext} from '../../../../src/components/container/Block';



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

const App = () => {  
  const [data, setData] = useState<Post | null>(null);
  const [ text, setText ] = useState<number>(0);

  return (
    <Block type='section' style={{padding:"10px 20px"}}>        
        <div>
          <Text label="Fetch Data" type="h1" />
        </div>
    </Block>
  );
};

export default App;



// Renderiza la aplicación en el DOM
ReactDOM.render(<App />, document.getElementById('root'));