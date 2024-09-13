import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

interface FlexProps {
    children: ReactNode;
    direction?: string;
    justify?: string;
    item?: string;
    col?: boolean;
    row?: boolean;
    flex_wrap?: string;

  }
  
const Flex: React.FC<FlexProps> = ({ children, col, row, justify, item, flex_wrap, direction }) => {
    const flexComponent = `
                    ${col && 'grid-cols-'+col}
                    ${row && 'grid-row-'+row}
                    ${item && 'grid-item-'+item}
                    ${justify && 'justify-'+justify}
                    ${flex_wrap && 'flex-wrap-'+flex_wrap}
                    ${direction && 'flex-'+direction}
                `;
    return (
        <div
             
            className={`flex ${flexComponent} `}
        >
            {
               children
            }
        </div>
    );
}
    
export default Flex;