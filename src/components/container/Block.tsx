import React, { createContext, useContext, HTMLAttributes, useState, Children, ReactElement, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';
import CSSTransition from '../trancition/CssTrancition';

type ElementType = keyof JSX.IntrinsicElements;

// Interface
interface ContainerProps<T extends ElementType> extends HTMLAttributes<void>{
  col_end?: number,
  col_start?: number,
  row_start?: number, 
  row_end?: number, 
  children: React.ReactNode;
  type?: T;
  style?: React.CSSProperties;
  newElement?: React.ReactElement
}

interface BlockProps extends React.HTMLAttributes<HTMLElement> {   
  children: ReactNode;
  type?: string;
  col_start?: number;
  col_end?: number;
  row_start?: number;
  row_end?: number;
  style?: React.CSSProperties;
  template?: string;     

}

interface BlockContextType {
  outlet:  ReactNode;
  setOutlet: any;
}

// Component
export const BlockContext = createContext<BlockContextType | undefined>({ outlet: null, setOutlet: () => {} });

export const useBlockContext = () => {
  const context = useContext(BlockContext);
  if (!context) {
    throw new Error('useBlockContext must be used within a Block component');
  }
  return context;
};

const Block =<T extends ElementType = 'div'> ({   
  newElement,
  col_end,
  col_start,
  row_start, 
  row_end, 
  children, 
  type, 
  style, 
  ...props }: ContainerProps<T>) => {

    const [outlet, setOutlet] = useState<any>(children);       
  
    const handleClick = () => {
      newElement && setOutlet?
        setOutlet(React.createElement(newElement.type, { id: 1, rollBack }))        
      : (console.error('newElement or setOutlet is not available'));
    };

    const rollBack = () => {
      setOutlet(children);
    };      

    const ClassContainer = `  
          ${col_start && 'col-start-'+col_start}
          ${col_end && 'col-end-'+col_end}
          ${row_start && 'row-start-'+row_start}
          ${row_end && 'row-end-'+row_end}

          `;
  
    const Element = getElementByType(type) as React.ElementType;    

  return (
    <BlockContext.Provider value={{ outlet, setOutlet }}>   
      <CSSTransition
        in={!!outlet}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >

        <Element style={style} className={ClassContainer} {...props}>
          {outlet ? (
            <>
              {Children.map(outlet, (child) => {
                if (React.isValidElement(child)) {
                  return React.cloneElement(child as ReactElement<any>, { handleClick, rollBack });
                }
                return outlet;
              })}
            </>
          ) : (        
            { outlet }
          )}
        </Element>
        </CSSTransition>          
    </BlockContext.Provider>
  );
}

function getElementByType<T extends ElementType>(type?: T): T {
  const elements: Record<string, ElementType> = {
    block: 'div',
    section: 'section',
    article: 'article',
    aside: 'aside',
    footer: 'footer',
    main: 'main',
  };
  return (elements[type as string] || 'div') as T;
}
  
export default Block;