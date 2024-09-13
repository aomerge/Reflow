import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

interface GridProps {
    children: ReactNode;
    item?: string;
    justify?: string;
    col: number;
    row: number;
    style?: React.CSSProperties;
  }
  
const Grid: React.FC<GridProps> = ({ children, col , row, item, justify, style }) => {
    const gridComponent = `
                        ${col && 'grid-cols-'+col}
                        ${row && 'grid-row-'+row}
                        ${item && 'grid-item-'+item}
                        ${justify && 'justify-'+justify}
                        `;
        
    return (
        <div style={style} className={` grid ${gridComponent}`}>
            {
               children
            }
        </div>
    );
}
    
export default Grid;