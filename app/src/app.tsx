//***************************************************************************/
//
//                           IMPORTS
//
//************************************************************************* */
import React, {useState, useContext} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import * as Reflow from '../../packages/react/src/setup';
import { Block } from '@reflow-js/react';
import { Body, Header, Sidebar  } from './componets/components';

//***************************************************************************/
//
//                           COMPONENTS
//
//************************************************************************* */
const Grid = Reflow.Grid;
//const Block = Reflow.Block;
const Flex = Reflow.Flex;
const Text = Reflow.Text;
const Button = Reflow.Button;
const Dropdown = Reflow.Dropdown;
const ButtonColor = Reflow.ButtonColor;
const ButtonTemplate = Reflow.ButtonTemplate;
const dropdownDirection = Reflow.DropdownDirection;
const tem = Reflow.tem;
const Accordion = Reflow.Accordion;
const Card = Reflow.Card;


export {
  Grid,
  Block,
  Flex,
  Text,
  Button,
  Dropdown,
  ButtonColor,
  ButtonTemplate,
  dropdownDirection,
  tem,
  Accordion,
  Card,  
}


//***************************************************************************/
//
//                           APP
//
//***************************************************************************/
interface MyContextType {
  sharedValue: string;
  setSharedValue: React.Dispatch<React.SetStateAction<string>>;
}

const App = () => {  
  const [sharedValue, setSharedValue] = useState('');

  return (
    <MyContext.Provider value={{ sharedValue, setSharedValue }}>      
      <Grid template='Dashboard-slide'>
          <Header />        
          <Sidebar />
          <Body />   
          <Block className='footer' >
            <Text label='Footer' type='h2' />     
          </Block>
      </Grid>
    </MyContext.Provider>
  );
};

const MyContext = React.createContext<MyContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useAppContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de un MyContextProvider');
  }
  return context;
};

export const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sharedValue, setSharedValue] = useState('');

  return (
    <MyContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default App;

//***************************************************************************/
//
//                           Render
//
//************************************************************************* */

// Renderiza la aplicación en el DOM
performance.mark('startRender');
performance.measure('startRenderToNow', 'startRender');

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

performance.mark('endRender');
performance.measure('renderTime', 'startRender', 'endRender');

console.log(performance.getEntriesByType('measure'));
