import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    direction?: string;
    justify?: string;
    item?: string;    
    flex_wrap?: string;
  }
  
const Flex = ({ children, justify, item, flex_wrap, direction, ...props }: FlexProps) => {
    const flexComponent = `                    
                    ${item && 'grid-item-'+item}
                    ${justify && 'justify-'+justify}
                    ${flex_wrap && 'flex-wrap-'+flex_wrap}
                    ${direction && 'flex-'+direction}
                `;
    return (
        <div
             {...props}
            className={`flex ${flexComponent} `}
        >
            {
               children
            }
        </div>
    );
}
    
export default Flex;