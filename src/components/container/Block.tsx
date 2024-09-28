import React, { createContext, useContext, HTMLAttributes, useState, Children, ReactElement, ReactNode, useEffect } from 'react';
import '../../styles/styles.css';
import '../../styles/tailwind.css';
import CSSTransition from '../trancition/CssTrancition';
import { getConfig } from '../../utils/config';


type ElementType = keyof JSX.IntrinsicElements;

// Interface

interface BlockProps {
  children: ReactNode;
  newElement?: ReactElement<any>;
  type?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
  col_start?: number;
  col_end?: number;
  row_start?: number;
  row_end?: number;
  animationEffect?: boolean;
}

interface BlockContextType {
  outlet: ReactNode;
  setOutlet: any;
  Id: number | null;
  setId: React.Dispatch<React.SetStateAction<number | null>>;
}

// Component
export const BlockContext = createContext<BlockContextType | undefined>({ outlet: null, setOutlet: () => {}, Id: null, setId: () => {} });

export const useBlockContext = () => {
  const context = useContext(BlockContext);
  if (!context) {
    throw new Error('useBlockContext must be used within a Block component');
  }
  return context;
};

let id = 0;

const Block =<T extends ElementType = 'div'> ({     
  newElement,
  col_end,
  col_start,
  row_start, 
  row_end, 
  children, 
  type, 
  style, 
  className,
  animationEffect = false,
  ...props }: BlockProps) => {

    const [outlet, setOutlet] = useState<any>(children);    
    const [Id, setId] = useState<number | null>(id);         

    const ClassContainer = `  
          ${col_start && 'col-start-'+col_start}
          ${col_end && 'col-end-'+col_end}
          ${row_start && 'row-start-'+row_start}
          ${row_end && 'row-end-'+row_end}
          `;
  
    const Element = getElementByType(type) as React.ElementType;    
    const Secondary = getConfig().color.primary.toString();

  return (
    <BlockContext.Provider value={{ outlet, setOutlet, Id ,setId }}>   
      <CSSTransition
        none={animationEffect}
        in={true}         
        timeout={50000}
        classNames="fade"
        unmountOnExit={false}
      >

          <Element style={style} className={` bg-black text-white ${className}`} {...props}>
              {newElement
                ? React.isValidElement(newElement)
                  ? React.cloneElement(newElement, { ...props })
                  : newElement
                : React.Children.map(children, (child) =>
                    React.isValidElement(child)
                      ? React.cloneElement(child, { ...props })
                      : child
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