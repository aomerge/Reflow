import React, { useState, createContext, useContext, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Button} from '../../src/components/button/button';
import Text from '../../src/components/text/Text';
import Block, {BlockContext, useBlockContext} from '../../src/components/container/Block';
import Navigation from '../../src/components/navigator/Navigation';
import Scroll from '../../src/components/container/Scroll';
import SkeletonLoader from '../../src/components/loaders/loader';
import Card from '../../src/components/card/card';
import SubNavigator from '../../src/components/navigator/SubNavigator';
import Breadcrumb from '../../src/components/breadcrumb/breadcrumb';
import {useStorage} from '../../src/hooks/localhost/storage';
import { useCookies } from '../../src/hooks/localhost/cookies';
import { useSession } from '../../src/hooks/localhost/session';
import { useCache } from '../../src/hooks/localhost/cache';
import { Icon } from '../../src/components/svg/icon';


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

const SubElement = ({...props})=>{
  console.log("hola");
  return (
    <SubNavigator >
      <Button label="Products" />
      <Button label="services" />
      <Button label="Pricing" />
    </SubNavigator>
  );
}

const App = () => {  
  const [data, setData] = useState<Post | null>(null);
  const [ text, setText ] = useState<number>(0);

  const { value, performAction } = useStorage<string>('mykey');  

  const { cookies,setCookie, getCookie, deleteCookie} = useCookies();
  const { setItem, getItem, sessionData, deleteItem } = useSession();
  const { create: createImageCache } = useCache();

  setCookie('user', 'John Doe', 1, {
    secure: false,
    httpOnly: false,
    sameSite: 'strict',
  });   

  useEffect(() => {
    const storeImage = async () => {
        const response = await fetch('');
        if (response.ok) {
            await createImageCache('/images/sample', response);
        }
        console.log("hola", response);
    };
    storeImage();
  }, []);

  const guardarNombre = () => {
    setItem('nombreUsuario', 'Jane Doe');
  };
  //deleteItem('sessionUser');

  //deleteCookie('user');
    
  //getCookie('user');

  //performAction('search');
  //console.log("hola", cookies);
  //console.log("hola", value);  

  return (
    <Block className=' h-screen ' style={{padding:"5px 20px"}} type='section'>              
        <Navigation template='black'>
          <Block>
            <img src="https://media.flaticon.com/dist/min/img/logos/flaticon-color-negative.svg" title="Logo de Flaticon" width="147" height="22" className="block" alt="Flaticon logo"></img>
          </Block>
          <Block className='trasnparent'>
            {/* <Button element={<SubElement />}  label="Home" template='trasparent-down'/>           */}
            <Button element={<p>hola</p>} label="Loging" />      
          </Block>
          {/* <Button element={<SubElement />}  label="Home" template='trasparent-down'/>           */}
          <Button element={<p>hola</p>} label="Loging" />      
        </Navigation>
        {/* <Button label="Click me" onClick={()=>setText(text + 1)} template='black' /> */}             
        

        {/* <Scroll 
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
        <ProfileSkeleton /> */}
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
