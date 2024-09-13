import React, { Children, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

// Interface

interface BlockProps {
  children: ReactNode;
  type?: string;
}


interface ComponetProps {
  children: ReactNode;
}



// Component

const BlockCompoent: React.FC<ComponetProps> = ({children}) => {
  return (
    <div className="bg-gray-200 p-4">
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