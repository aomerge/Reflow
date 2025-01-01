import React, { ReactNode, useMemo } from 'react';
import '../../styles/tailwind.css';
import '../../styles/styles.css';
import './container.css';
import { GridProps } from './interfaces/IContainer';
  
const Grid = React.memo(({ children, template ,col , row, item, className,...props }: GridProps) => {
    console.log('GridProps', template);
        
    return (
        <div id='grid' className={`grid-cols-${col} grid-row-${row} ${className} ${template ? `grid-${template}` : 'grid'}`} {...props}>            
            {
                useMemo(() => {
                    return React.Children.map(children, (child) => {
                        return React.cloneElement(child as React.ReactElement, { className: item });
                    });
                }, [children, item])
            }            
        </div>
    );
});
    
export default Grid;