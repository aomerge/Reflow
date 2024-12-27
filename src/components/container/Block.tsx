import React, { createContext, useContext, useState, ReactElement, ReactNode } from 'react';
import '../../styles/styles.css'; // vars of tailwind
import '../../styles/tailwind.css';
import CSSTransition from '../trancition/CssTrancition';
import { getConfig } from '../../utils/config';
import { ElementType, BlockProps, BlockContextType } from "./interfaces/IContainer";



// Create context with default values
export const BlockContext = createContext<BlockContextType | undefined>({
  outlet: null,
  setOutlet: () => {},
  Id: null,
  setId: () => {},
});

// Custom hook to use Block context
export const useBlockContext = () => {
  const context = useContext(BlockContext);
  if (!context) {
    throw new Error('useBlockContext must be used within a Block component');
  }
  return context;
};

let id = 0;

// Block component
const Block = <T extends ElementType = 'div'>({
  newElement,
  col_end,
  col_start,
  row_start,
  row_end,
  children,
  type = 'div',
  style,
  className,
  animationEffect = false,
  ...props
}: BlockProps) => {
  const [outlet, setOutlet] = useState<ReactNode>(children);
  const [Id, setId] = useState<number | null>(id);

  const classContainer = `
    ${col_start ? 'col-start-' + col_start : ''}
    ${col_end ? 'col-end-' + col_end : ''}
    ${row_start ? 'row-start-' + row_start : ''}
    ${row_end ? 'row-end-' + row_end : ''}
  `;

  const Element = getElementByType(type) as React.ElementType;

  return (
    <BlockContext.Provider value={{ outlet, setOutlet, Id, setId }}>
      <CSSTransition
        none={animationEffect}
        in={true}
        timeout={50000}
        classNames="fade"
        unmountOnExit={false}
      >
        <Element id="Block" style={style} className={` text-white ${className}`} {...props}>
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
};

// Helper function to get element by type
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