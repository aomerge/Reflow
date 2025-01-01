import React, { useEffect,Children, ReactNode, useState } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

interface ImageProps { 
    template?: string;  
    height?: number;
    width?: number;
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
        const [isLoaded, setIsLoaded] = useState(false);

        const handleImageLoad = () => {
            setIsLoaded(true);
        };

        const ClassContainer = `          
            ${height && 'h-['+height+']'}
            ${width && 'w-['+width+']'}
        `;        
        return (
            <div style={style} className={`${ClassContainer} rounded-sm`}>
                { !isLoaded &&  <p>Loading...</p>}                
                <img src={src} alt={alt} onLoad={handleImageLoad} style={{ display: isLoaded ? 'block' : 'none' }} />
            </div>
        );                    
  }

export default Images;