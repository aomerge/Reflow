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

const BlockCompoent: React.FC<ComponetProps> = (
  { 
    children, 
    type,
    col_start,
    col_end,
    row_start,
    row_end,
    style
  }: ComponetProps) => {
  return (
    <div style={style} className={
      `  
      ${col_start && 'col-start-'+col_start}
      ${col_end && 'col-end-'+col_end}
      ${row_start && 'row-start-'+row_start}
      ${row_end && 'row-end-'+row_end}
      `
     }>
      {
        children
      }
    </div>
  )
}

const SectionCompoent: React.FC<ComponetProps> = ({children}) => {
  return (
    <section className="bg-gray-200 p-4">
      {
        children
      }
    </section>
  )
}

const ArticleCompoent: React.FC<ComponetProps> = ({children}) => {
  return (
    <article className="bg-gray-200 p-4">
      {
        children
      }
    </article>
  )
}


const Block: React.FC<BlockProps> = ({ children, type }) => {
      
      return (
        <>
          {
            type === 'Block' && ( 
            <BlockCompoent>
              {
                children
              }               
            </BlockCompoent>  )          
          }
          {
            type === 'Section' && (
              <SectionCompoent >
                {
                  children
                }
              </SectionCompoent>
            )
          }
          {
            type === 'Article' && (
              <ArticleCompoent>
                {
                  children
                }
              </ArticleCompoent>
            )
          }
          {
            !type && (
              <BlockCompoent>
                {
                  children
                }
              </BlockCompoent>
            )
          }

        </> );
}
  
export default Block;