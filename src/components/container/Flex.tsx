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
  
const Flex: React.FC<FlexProps> = ({ children }) => {
        
    return (
        <div className="flex flex-">
            {
               children
            }
        </div>
    );
}
    
export default Flex;