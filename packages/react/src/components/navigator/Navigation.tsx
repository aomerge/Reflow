// Components/Navigator/Navigation.tsx
// Date: 28-09-2024

/// Imports 
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import './navigation.css';
import { INavigatorProps } from './INavigation';

// Componente de navegación principal
const Navigation: React.FC<INavigatorProps> = ({
  template,
  children,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<React.ReactElement | false>(false);
  const [isFocused, setIsFocused] = useState(false);
  const [action, direction, color] = template ? template.split('-') : [null, null, null];  

  return (
    <nav
      id='nav'
      className={`${template ? `nav-${template}` : 'nav'} ${(className !== null || className !== undefined) ? className: " "}`}
    >
      {
        React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;
          const childElement = child as React.ReactElement<any>;
          const customKey = `nav-child-${index}`;

          const clonedChild = React.cloneElement(childElement, {
            ...props,
            key: customKey,
            onFocus: () => {
              if (child.props.element) return setIsFocused(true)
            },            
            onMouseEnter: () => {
              setIsFocused(true);
              if (child.props.element) {
                setIsOpen(childElement.props.element);
              }
            },
               
          });

          return clonedChild;
        })
      }

      {
        isFocused && 
        <div         
        className='sub-navigator effectOut'
        onMouseLeave={() => setIsFocused(false)}
        >
          {isOpen}
        </div>
      }
    </nav>
  )
};


export default Navigation;
