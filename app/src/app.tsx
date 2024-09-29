import React, { useState, createContext, useContext, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from '../../src/components/button/button.v1';
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

const SubElement = ({children, ...props}: any)=>{
  return (
    <Block style={{background:"transparent", color: "default", gap:"5px", display:"flex"}}>          
      {
        React.Children.map(children, (child: any) => {
          return React.cloneElement(child, { ...props });
        })
      } 
    </Block>
  );
}

const App = () => {  
  const [data, setData] = useState<Post | null>(null);
  const [ text, setText ] = useState<number>(0);

  return (
    <Block className=' h-screen ' style={{padding:"5px 20px"}} type='section'>              
        <Navigation>
          <Text label="Logo" type="h2" />
          <SubElement >
            <Button element={<p>hola</p>}  label="Products" />
            <Button element={<p>hola1</p>}label="services" />
            <Button label="Pricing" />
          </SubElement>  
          <Button element={<p>hola</p>} label="Loging" />      
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
