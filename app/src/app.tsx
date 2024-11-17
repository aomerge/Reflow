import React, { useState, createContext, useContext, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from '../../src/components/button/button.v1';
import Text from '../../src/components/text/Text';
import Block, {BlockContext, useBlockContext} from '../../src/components/container/Block';
import Navigation from '../../src/components/navigator/Navigation';
import Scroll from '../../src/components/container/Scroll';
import SkeletonLoader from '../../src/components/loaders/loader';
import Card from '../../src/components/card/card';


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
          <Text label="Logo" type="h1" />
          <SubElement >
            <Button element={<p>hola</p>}  label="Products" />
            <Button element={<p>hola1</p>}label="services" />
            <Button label="Pricing" />
          </SubElement>  
          <Button element={<p>hola</p>} label="Loging" />      
        </Navigation>

        <Card title="Card Title" content="Card Content" />
        <Card title="Card Title" content="Card Content" template="img-row-primary" img="https://via.placeholder.com/150" />

        <Scroll 
          scrollStep={500}
          startIndex={0}
          scrollDirections={['vertical']}
          className='mt-10'
          style={{margin:"40px 0px 0px 0px", width:"500px", height:"500px", background:"gray"}}
        >          
          <div style={{background:"red", height:"500px", width:"500px", margin:"0px 0px 0px 0"}}>1</div>
          <div style={{background:"blue", height:"500px", width:"500px", margin:"0px 0px"}}>2</div>
          <div style={{background:"red", height:"500px", width:"500px", margin:"0px 0px"}}> 3</div>
          <div style={{background:"blue", height:"500px", width:"500px", margin:"0px 0px"}}>4</div>
          <div data-scroll-index={3} style={{background:"green", height:"500px", width:"500px", margin:"0px 0px"}}>4</div>
          <div data-scroll-index={3} style={{background:"blue", height:"500px", width:"500px", margin:"0px 0px"}}>4</div>
        </Scroll>
        <ProfileSkeleton />
          </Block>
  );
};
const ProfileSkeleton = () => (
  <SkeletonLoader width="600" height="160" viewBox="0 0 600 160">
    <circle cx="60" cy="60" r="50" />
    <rect x="130" y="15" rx="4" ry="4" width="250" height="13" />
    <rect x="130" y="35" rx="4" ry="4" width="200" height="13" />
    <rect x="130" y="55" rx="4" ry="4" width="300" height="13" />
    <rect x="130" y="75" rx="4" ry="4" width="250" height="13" />    
  </SkeletonLoader>
);

export default App;



// Renderiza la aplicación en el DOM
ReactDOM.render(<App />, document.getElementById('root'));
