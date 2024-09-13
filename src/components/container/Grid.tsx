import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

interface GridProps {
    children: ReactNode;
    col: number;
    row: number;
  }
  
const Grid: React.FC<GridProps> = ({ children }) => {
        
    return (
        <div className={"grid"}>
            {
               children
            }
        </div>
    );
}
    
export default Grid;