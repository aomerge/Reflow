// Components/Navigator/Navigation.tsx
// Date: 28-09-2024

/// Imports 
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import '../../styles/tailwind.css';
import themesConfig from '../templates/themesConfig';
import { INavigatorProps } from './INavigation';
///

function mapElements(
  children: React.ReactNode,
  func: (child: React.ReactElement, index: number) => React.ReactElement
): React.ReactNode {
  return React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    // Aplicar la función solo si el elemento tiene la prop 'element'
    let newChild = child;
    if (child.props && child.props.element) {
      newChild = func(child, index);
    }

    // Si el elemento tiene hijos, aplicar recursivamente
    if (child.props && child.props.children) {
      newChild = React.cloneElement(newChild as React.ReactElement, {
        children: mapElements((child as React.ReactElement).props.children, func),
      });
    }

    return newChild;
  });
}


///Component Navigation
const Navigation: React.FC<INavigatorProps> = ({
  template,
  children,
  className,
  ...props
}: INavigatorProps) => {
  // Template
  const [theme, setTheme] = useState<keyof typeof themesConfig>(template || 'basic');
  const themeConfig = themesConfig[theme];

  const [showSubNavigation, setShowSubNavigation] = useState(false);
  const [focusedChild, setFocusedChild] = useState<React.ReactElement | null>(null);
  const [element, setElement] = useState<React.ReactElement | null>(null);

  // Referencias para manejar eventos
  const navRef = useRef<HTMLDivElement>(null);
  const subNavRef = useRef<HTMLDivElement>(null);  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        subNavRef.current &&
        !subNavRef.current.contains(event.target as Node)
      ) {
        setShowSubNavigation(false);
        setFocusedChild(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const addHandlers = (child: React.ReactElement, index: number): React.ReactElement => {
    const element = child.props.element;

    // Verificar que 'element' sea un React Element válido
    if (!React.isValidElement(element)) {
      console.warn(`El elemento 'element' en el hijo con key=${index} no es un React Element válido.`);
      return child;
    }

    return React.cloneElement(child, {
      key: index,
      className: `${child.props.className || ''} rounded-md`,
      onMouseEnter: () => {
        setShowSubNavigation(true);
        setFocusedChild(element as React.ReactElement);
      },
      onMouseLeave: () => {
        setTimeout(() => {
          if (
            !navRef.current?.contains(document.activeElement) &&
            !subNavRef.current?.contains(document.activeElement)
          ) {
            setShowSubNavigation(false);
            setFocusedChild(null);
          }
        }, 100);
      },
      onFocus: () => {
        setShowSubNavigation(true);
        setFocusedChild(element as React.ReactElement);
      },
      onBlur: () => {
        setTimeout(() => {
          if (
            !navRef.current?.contains(document.activeElement) &&
            !subNavRef.current?.contains(document.activeElement)
          ) {
            setShowSubNavigation(false);
            setFocusedChild(null);
          }
        }, 100);
      },
    });
  };

  return (
    <section className='w-full relative'>
      <nav
        ref={navRef}
        className={`flex relative justify-between gap-5 ${className}`}
        {...props}
      >
        {mapElements(children, (child, index) => addHandlers(child, index))}
      </nav>
      {showSubNavigation && focusedChild && (
        <SubNavigation ref={subNavRef}>{focusedChild}</SubNavigation>
      )}
    </section>
  );
};
///

///Component SubNavigation
const SubNavigation = React.forwardRef<HTMLDivElement, { children?: ReactNode }>(
  ({ children }, ref) => {      
    return (
      <div
        ref={ref}
        className='absolute top-[110%] w-full h-100 opacity-85 py-1 bg-secondary text-black rounded-md'        
      >
        {children}
      </div>
    );
  }
);

export default Navigation;


// renderThemeComponent.tsx
export function renderThemeComponent(
  themeConfig: any,
  props: {
    className?: string;
    col_start?: number;
    col_end?: number;
    row_start?: number;
    row_end?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    [key: string]: any;
  }
) {
  const {
    className,
    col_start,
    col_end,
    row_start,
    row_end,
    style,
    children,
    ...restProps
  } = props;

  if (React.isValidElement(themeConfig.component)) {
    // Clonamos el componente del tema y le pasamos las props y children
    return React.cloneElement(themeConfig.component, {
      className,
      col_start,
      col_end,
      row_start,
      row_end,
      style,
      ...restProps,
      children,
    });
  } else if (typeof themeConfig.component === 'function') {
    // Si es una función, ejecutamos la función pasando las props y children
    return themeConfig.component({
      className,
      col_start,
      col_end,
      row_start,
      row_end,
      style,
      ...restProps,
      children,
    });
  }
  return themeConfig.component;
}
