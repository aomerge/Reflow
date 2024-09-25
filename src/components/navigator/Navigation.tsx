import React, { Children, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';
import Button from '../button/button.v1';
import themesConfig from '../templates/themesConfig';
import { INavigatorProps } from './INavigation';

const Navigation: React.FC<INavigatorProps> = ( 
    { 
    Url,
    template,
    children,     
    col_start,
    col_end,
    row_start,
    row_end,
    style,
    className,
    ...props
  }: INavigatorProps) => {
      const [theme, setTheme] = React.useState<keyof typeof themesConfig>(template || 'basic');
      const themeConfig = themesConfig[theme];

      const renderThemeComponent = () => {
        if (React.isValidElement(themeConfig.component)) {
          // Clonamos el componente del tema y le pasamos las props y children
          return React.cloneElement(themeConfig.component as React.ReactElement, { className, col_start, col_end, row_start, row_end, style, ...props, children });
        } else if (typeof themeConfig.component === 'function') {
          // Si es una función, ejecutamos la función pasando las props y children
          return themeConfig.component({ className, col_start, col_end, row_start, row_end, style, ...props, children });
        }
        return themeConfig.component;
      };
        
        return (
          <>
            <header className={`flex justify-between ${className}`} {...props}>              
                {
                  renderThemeComponent()
                }
            </header>            
          </> );
  }
    
  export default Navigation;