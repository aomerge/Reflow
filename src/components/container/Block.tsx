import React, {
  createContext,
  useContext,
  useState,
  ReactNode,  
  PropsWithChildren,
  memo,
  useMemo
} from 'react';

import '../../styles/styles.css'; // vars of tailwind
import '../../styles/tailwind.css';
import CSSTransition from '../trancition/CssTrancition';
import { getConfig } from '../../utils/config';
import { ElementType, BlockProps, BlockContextType } from "./interfaces/IContainer";

// Create context with undefined as the default value
export const BlockContext = createContext<BlockContextType | undefined>(undefined);

// Custom hook to use Block context
export const useBlockContext = () => {
  const context = useContext(BlockContext);
  if (!context) {
    throw new Error('useBlockContext must be used within a Block component');
  }
  return context;
};

let globalId = 0;

// Block component
const Block = memo(<T extends ElementType = 'div'>({
  newElement,
  col_start,
  col_end,
  row_start,
  row_end,
  children,
  type = 'div' as T,
  style,
  className = '',
  animationEffect = false,
  ...props
}: PropsWithChildren<BlockProps<T>>) => {
  const [outlet, setOutlet] = useState<ReactNode>(children);
  const [id, setId] = useState<number | null>(() => globalId++);

  // Use template literals more effectively for class concatenation
  const classContainer = [
    col_start && `col-start-${col_start}`,
    col_end && `col-end-${col_end}`,
    row_start && `row-start-${row_start}`,
    row_end && `row-end-${row_end}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Get element type dynamically
  const Element = useMemo(() => getElementByType(type), [type]);
  const renderedChildren = useMemo(
    () =>
      newElement
        ? React.isValidElement(newElement)
          ? React.cloneElement(newElement, { ...props })
          : newElement
        : React.Children.map(children, (child) =>
            React.isValidElement(child) ? React.cloneElement(child, { ...props }) : child
          ),
    [newElement, children, props]
  );

  return (
    <BlockContext.Provider value={{ outlet, setOutlet, id, setId }}>
      <CSSTransition
        in={animationEffect}
        timeout={50000}
        classNames="fade"
        unmountOnExit={false}
      >
        <Element id={`Block-${id}`} style={style} className={`text-white ${classContainer}`} {...(props as any)}>
          {renderedChildren}
        </Element>
      </CSSTransition>
  </BlockContext.Provider>
  );
});

// Helper function to get element by type
function getElementByType<T extends ElementType>(type: T): React.ElementType {
  const elements: Record<string, ElementType> = {
    block: 'div',
    section: 'section',
    article: 'article',
    aside: 'aside',
    footer: 'footer',
    main: 'main',
  };
  return elements[type as string] || 'div';
}

export default Block;
