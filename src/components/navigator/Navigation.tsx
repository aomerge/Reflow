import React, { Children, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

interface NavigatorProps {
  children: ReactNode;
  type?: string;
  col_start?: number;
  col_end?: number;
  row_start?: number;
  row_end?: number;
  style?: React.CSSProperties;
  template?: string;
}

const Navigation: React.FC<NavigatorProps> = ( 
    { 
    children, 
    type,
    col_start,
    col_end,
    row_start,
    row_end,
    style
  }: NavigatorProps) => {
        
        return (
          <>
            <nav>
                {
                    children
                }
            </nav>            
          </> );
  }
    
  export default Navigation;