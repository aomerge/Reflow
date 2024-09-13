import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

interface FlexProps {
    children: ReactNode;
  }
  
const Flex: React.FC<FlexProps> = ({ children }) => {
        
    return (
        <div className="flex">
            {
               children
            }
        </div>
    );
}
    
export default Flex;