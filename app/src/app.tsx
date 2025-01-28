//***************************************************************************/
//
//                           IMPORTS
//
//************************************************************************* */
import React, {useState, useContext} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import {Grid, Block, Text} from '@reflow-js/react';

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
      <Block>                    
          <Block className='footer' >
            <h1>hola</h1>          
          </Block>
      </Block>
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
