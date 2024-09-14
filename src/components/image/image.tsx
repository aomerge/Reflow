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

const Images: React.FC<ImageProps> = ( 
    {     
    template,
    height,
    width,
    src,
    alt,
    style        
  }: ImageProps) => {
        const ClassContainer = `          
            ${height && 'h-['+height+']'}
            ${width && 'w-['+width+']'}
        `;

        return (
            <div style={style} className={`${ClassContainer}`}>
                <img  src={src} alt={alt} />
            </div>
        );             
          
  }