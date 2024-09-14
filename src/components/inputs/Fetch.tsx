import React, { Children, ReactNode, createContext } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

const StateContext = createContext({});

interface ImageProps { 
    children: ReactNode;      
    type?: string;
  }

const Images: React.FC<ImageProps> = ( 
    {   
    children,      
  }: ImageProps) => {        
    const [state, setState] = React.useState("Hello World");
        return (
            <>
                {
                    children
                }
            </>
        );             
          
  }