import React, {
    createContext,
    useContext,
    useState,
    ReactNode,  
    PropsWithChildren,
    memo,
    useMemo,
    useRef,
    useEffect
  } from 'react';
  import { nanoid } from 'nanoid';
  import {CssTrancition} from '../../Container';
  import { useId } from '../../../../hooks/events/useId';
  //import { getConfig } from '../../utils/config';
  import { ScrollProps, GridProps, ElementType, BlockProps, BlockContextType, FlexProps, OptionTemplate } from "../interfaces/IContainer";
  

//****************************************************************************** */}
//
//                                             Block
//
//****************************************************************************** */
export const BlockContext = createContext<BlockContextType | undefined>(undefined);

export const useBlockContext = () => {
  const context = useContext(BlockContext);
  if (!context) {
    throw new Error('useBlockContext debe usarse dentro de un BlockContext.Provider');
  }
  return context;
};
  
  
  // Block component
export const Block = memo(<T extends ElementType = 'div'>({
  newElement,
  children,
  type = 'div' as T,
  style,
  className = '',
  animationEffect = false,
  ...props
  }: PropsWithChildren<BlockProps<T>>) => {
  const [outlet, setOutlet] = useState<ReactNode>(children);

  const childTemplate = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.props) {
      return child.props.template || '';
    }
    return '';
  })?.join('') || '';

  const id = useId(`${type}-${childTemplate}`);
  
  useEffect(() => {
    console.log(animationEffect);
  }, [children, animationEffect]);

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
    <BlockContext.Provider value={{ outlet, setOutlet }}>
    <CssTrancition
      in={animationEffect}
      timeout={5000}
      classNames="fade"
      unmountOnExit={false}
    >
      <Element
      id={`Block-${id}`}
      style={style}
      className={`text-white ${className ? className : ''}`}
      {...(props as any)}
      >
      {renderedChildren}
      </Element>
    </CssTrancition>
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
  


//*******************************************************************************/
//
//                                          Flex
//
//*******************************************************************************/

/**
 * Flex component to create a flexible container with various layout options.
 *
 * @param props - The properties for the Flex component.
 * @returns {JSX.Element} The rendered Flex container.
 */
export const Flex = React.memo(({ children, template, width ,...props }: FlexProps): JSX.Element => {    
    const id = useId('flex', template);
    if (template && !Object.values<OptionTemplate>(OptionTemplate).includes(template)) {
        throw new Error(`Template "${template}" is not a valid option.`);
    }

    return (
        <div
            style={{ width: width ? `${width}%` : 'auto' }}         
            id={`flex-${id}`}
            {...props}
            className={`flex ${template ? `flex-${template}` : ''}`}
        >            
            {useMemo(() => React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child) : child), [children])}
        </div>
    );
});

//******************************************************************************** */
//
//                                          Grid
//
//******************************************************************************** */

export const Grid = React.memo(({ children, template ,col , row, item, className,...props }: GridProps) => {
    console.log('GridProps', template);
        
    return (
        <div id='grid' className={`grid-cols-${col} grid-row-${row} ${className} ${template ? `grid-${template}` : 'grid'}`} {...props}>            
            {
                useMemo(() => {
                    return React.Children.map(children, (child) => {
                        return React.cloneElement(child as React.ReactElement, { className: item });
                    });
                }, [children, item])
            }            
        </div>
    );
});

//***************************************************************************** */
//
//                                          Scroll
//
//***************************************************************************** */

/** Scroll 
 * @param scrollStep : Number
 * @param startIndex : Number
 * @param scrollDirections: Array[String]  
 * @param className : String
 * @param style : Object
 * @param props : Object
 * @returns React.FC<ScrollProps>
 * */
export const Scroll: React.FC<ScrollProps> = ({
  children,
  scrollStep = 200,
  startIndex = 0,
  scrollDirections = ['vertical'],
  className,
  style,
  ...props
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const isVertical = scrollDirections.includes('vertical');    

  // Assign indices to child elements
  const initialIndex = { value: startIndex };
  const mappedChildren = assignScrollIndex(children, initialIndex);  
  const sortedChildren = sortChildrenByScrollIndex(mappedChildren);

  return (
    <div      
      className={` scroll-container overflow-scroll flex ${isVertical ? "flex-col":""}  ${className}`}
      ref={scrollRef}
      style={{...style}}         
      {...props}
    >
      {sortedChildren}        
    </div>
  );
};

// Recursive function to assign data-scroll-index to each child element
const assignScrollIndex = (
  children: React.ReactNode,
  currentIndex: { value: number }
): React.ReactNode => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    // Use existing data-scroll-index or assign default
    let scrollIndex = child.props['data-scroll-index'];
    if (scrollIndex === undefined) {
      scrollIndex = currentIndex.value++;
    }

    const childWithIndex = React.cloneElement(child as React.ReactElement<any>, {
      'data-scroll-index': scrollIndex,
      className: `${child.props.className || ''} scroll-snap-item`,
      style: {
        ...child.props.style,
        flex: "0 0 auto"
      }
    });

    if (child.props.children) {
      return React.cloneElement(childWithIndex, {
        children: assignScrollIndex(child.props.children, currentIndex),
      });
    }

    return childWithIndex;
  });
};

// Function to sort children by data-scroll-index
const sortChildrenByScrollIndex = (children: React.ReactNode): React.ReactNode => {
  const childrenArray = React.Children.toArray(children);
  childrenArray.sort((a, b) => {
    const indexA = (a as React.ReactElement<any>).props['data-scroll-index'];
    const indexB = (b as React.ReactElement<any>).props['data-scroll-index'];
    return indexA - indexB;
  });
  return childrenArray;
};
