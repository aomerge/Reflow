import React, { useRef } from 'react';

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  scrollStep?: number;
  startIndex?: number;
  scrollDirections?: ('horizontal' | 'vertical')[];
}

/** Scroll 
 * @param scrollStep : Number
 * @param startIndex : Number
 * @param scrollDirections: Array[String]  
 * @param className : String
 * @param style : Object
 * @param props : Object
 * @returns React.FC<ScrollProps>
 * */
const Scroll: React.FC<ScrollProps> = ({
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

export default Scroll;
