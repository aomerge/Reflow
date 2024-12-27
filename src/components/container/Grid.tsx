import React, { ReactNode } from 'react';
import '../../styles/tailwind.css';
import '../../styles/styles.css';
import './container.css';
import { GridProps } from './interfaces/IContainer';
  
const Grid = ({ children, template ,col , row, item, className,...props }: GridProps) => {
    console.log('GridProps', template);
        
    return (
        <div id='grid' className={`grid-cols-${col} grid-row-${row} ${className} ${template ? `grid-${template}` : 'grid'}`} {...props}>
            {
               children
            }
        </div>
    );
}
    
export default Grid;