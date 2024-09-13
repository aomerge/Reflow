import React, { Children, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

// Interface

interface BlockProps {
  children: ReactNode;
  type?: string;
  col_start?: number;
  col_end?: number;
  row_start?: number;
  row_end?: number;
  style?: React.CSSProperties;
}

interface ComponetProps {
  type?: string;
  col_start?: number;
  col_end?: number;
  row_start?: number;
  row_end?: number;
  style?: React.CSSProperties;
  children: ReactNode;
}



// Component

const Container: React.FC<ComponetProps> = (
  { 
    children, 
    type,
    col_start,
    col_end,
    row_start,
    row_end,
    style
  }: ComponetProps) => {
    const ClassContainer = `  
          ${col_start && 'col-start-'+col_start}
          ${col_end && 'col-end-'+col_end}
          ${row_start && 'row-start-'+row_start}
          ${row_end && 'row-end-'+row_end}
          `;
  return (    
    <>
      {
        type === undefined &&
        <div style={style} className={ClassContainer}>
          {
            children
          }
        </div>
      }
      {
        type === 'Block' &&
        <div style={style} className={ClassContainer}>
          {
            children
          }
        </div>
      }
      {
        type === 'Section' &&
        <section style={style} className={ClassContainer}>
          {
            children
          }
        </section>
      }
      {
        type === 'Article' &&
        <article style={style} className={ClassContainer}>
          {
            children
          }
        </article>
      }            
      {
        type === 'Aside' &&
        <aside style={style} className={ClassContainer}>
          {
            children
          }
        </aside>
      }
      {
        type === 'Footer' &&
        <footer style={style} className={ClassContainer}>
          {
            children
          }
        </footer>
      }      
      {
        type === 'Main' &&
        <main style={style} className={ClassContainer}>
          {
            children
          }
        </main>
      }            
    </>    
  )
}

const Block: React.FC<BlockProps> = ({ children, type }) => {
      
      return (
        <>
          <Container type={type}>
            {
              children
            }
          </Container>
        </> );
}
  
export default Block;