import React, { useMemo } from 'react';
import './card.css';
import { CardProps } from './interface/Icard';
import Button from '../button/button.v1';
import { ButtonTemplate } from '../button/Interface/Ibutton';
import { nanoid } from 'nanoid';
/**
 * Card component that displays content based on the provided template.
 *
 * @param {CardProps} props - The properties for the Card component.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card: React.FC<CardProps> = ({ button, title, content, template, ...props }) => {  
  const [action, direction, color] = useMemo(() => template?.split('-') || [null, null, null], [template]);
  // Render the appropriate content based on the action
  const renderContent = useMemo(() => {
    switch (action) {
      case 'custom':
        return props.children;

      case 'img':
        return (
          <>
            <img key="img" src={props.img} alt={title} />
            <section key="section">
              <h2 className="card-title">{title}</h2>
              <p className="card-content">{content}</p>
            </section>
          </>
        );

      case 'button':
        return (
          <>
            <div>
              <h2 className="card-title">{title}</h2>
              <p className="card-content">{content}</p>
            </div>
            <Button
              label={button?.label || 'Ver más'}
              icon={button?.icon || "arrow-xs-rigth"}
              template={button?.template|| ButtonTemplate.Icon_Affter}
            />
          </>
        );

      default:
        return (
          <>
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
          </>
        );
    }
  }, [action, button, content, props.children, props.img, title]);

  return (
    <div id={`card-${nanoid(6)}`} style={props.Style} className={`card ${template ? `card-${template}` : 'card'} ${props.className || ''}`}>
      {renderContent}
    </div>
  );
};

export default Card;
