import React, { Children, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

interface ImageProps { 
    template?: string;  
    height?: string;
    width?: string;
    src?: string;
    alt?: string;
    style?: React.CSSProperties;    
  }

const Block: React.FC<ImageProps> = ( 
    {     
    template,
    height,
    width,
    src,
    alt,
    style        
  }: ImageProps) => {
        
        return (
            <div>
                <img src="" alt="" />
            </div>
        );             
          
  }