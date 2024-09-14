import React, { Children, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

const Block: React.FC<BlockProps> = ( 
    { 
    children, 
    type,
    col_start,
    col_end,
    row_start,
    row_end,
    style
  }: BlockProps) => {
        
        return (
          <>
            <Container 
              style={style} 
              col_end={col_end} 
              col_start={col_start} 
              row_start={row_start}
              row_end={row_end}  
              type={type}
              >
              {children}
            </Container>
          </> );
  }
    
  export default Block;