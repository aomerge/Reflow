import React from 'react';
import './card.css';
import { CardProps } from './interface/Icard';

/**
 * Card component that displays content based on the provided template.
 *
 * @param {CardProps} props - The properties for the Card component.
 * @param {string} props.title - The title of the card.
 * @param {string} props.content - The content of the card.
 * @param {string} [props.template] - The template string to determine the card's layout and style.
 * @param {React.CSSProperties} [props.Style] - The inline styles for the card.
 * @param {string} [props.className] - Additional class names for the card.
 * @param {React.ReactNode} [props.children] - The custom content to be rendered if the template action is 'custom'.
 * @param {string} [props.img] - The image source URL to be rendered if the template action is 'img'.
 *
 * @returns {JSX.Element} The rendered Card component.
 */
const Card: React.FC<CardProps> = ({ title, content, template, ...props}) => {    
    const [action, direction , color ] = template ? template.split('-') : [null, null, null];    
    return (        
        <div id="card" style={props.Style} className={`${template ? `card${"-" + template}` : "card"} ${props.className}`}>            
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
            (action === null || action !== 'custom' && action !== 'img' && action !== 'button'  )   && 
            <>
                <h2 className="card-title">{title}</h2>
                <p className="card-content">{content}</p>
            </>
            }
            {
                action === 'button' && 
                <>
                    <h2 className="card-title">{title}</h2>
                    <p className="card-content">{content}</p>
                    <button className={`button ${template ? `button-${template}` : ''}`} {...props}>Ver más</button>
                </>
            }
        </div>
    );
};

export default Card;