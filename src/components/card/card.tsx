import React from 'react';
import './card.css';

interface CardProps {
    title?: string;
    content?: string;
    img?: string;
    template?: string | null | undefined;
    className?: string;
    Style?: React.CSSProperties;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, template, ...props}) => {    
    const [action, direction , color ] = template ? template.split('-') : [null, null, null];    
    return (        
        <div style={props.Style} className={`${template ? `card${"-" + template}` : "card"} ${props.className}`}>            
            {action === 'custom' && props.children}                   
            {
            action === 'img' && 
            <>
                <img key="img" src={props.img} alt={title} />
                <section key="section">
                <h2 className="card-title">{title}</h2>
                <p className="card-content">{content}</p>
                </section>
            </>
            }
            {
            (action === null || action !== 'custom' && action !== 'img'  )   && 
            <>
                <h2 className="card-title">{title}</h2>
                <p className="card-content">{content}</p>
            </>
            }
        </div>
    );
};

export default Card;