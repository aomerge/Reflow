import React from 'react';
import './card.css';

interface CardProps {
    title: string;
    content: string;
    img?: string;
    template?: string | null | undefined;
}

const Card: React.FC<CardProps> = ({ title, content, template, ...props}) => {    
    const [action, direction , color ] = template ? template.split('-') : [null, null, null];
    console.log(action, direction, color);
    return (        
        <div className={`${template? `card${"-"+template}` : "card"}`}>            
            {
                action === 'img' && 
                [
                <img src={props.img} alt={title} /> ,
                <section>
                    <h2 className="card-title">{title}</h2>
                    <p className="card-content">{content}</p>
                </section>
                ]
            }
            {
                action === null && [
                    <h2 className="card-title">{title}</h2>,
                    <p className="card-content">{content}</p>
                ]
            }            
        </div>
    );
};

export default Card;