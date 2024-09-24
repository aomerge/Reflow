import React, { ReactNode } from 'react';
import '../../styles/tailwind.css';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    item?: string;
    justify?: string;
    col: number;
    row: number;    
  }
  
const Grid = ({ children, col , row, item, justify, style, className,...props }: GridProps) => {
    console.log(col);
    const gridComponent = `
                        ${col && `grid-cols-${col.toString()}`}
                        ${row && 'grid-row-'+row}
                        ${item && 'grid-item-'+item}
                        ${justify && 'justify-'+justify}
                        `;
        
    return (
        <div style={style} className={` grid grid-cols-${col.toString()} ${className}`} {...props}>
            {
               children
            }
        </div>
    );
}
    
export default Grid;