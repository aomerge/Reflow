import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

interface GridProps {
    children: ReactNode;
    col: number;
    row: number;
  }
  
const Grid: React.FC<GridProps> = ({ children, col , row }) => {
    const gridComponent = `grid-cols-${col} grid-rows-${row}`;
        
    return (
        <div className={`grid ${gridComponent}`}>
            {
               children
            }
        </div>
    );
}
    
export default Grid;