import React from 'react';
import {TextProps, ElementType} from './interfaces/IText';
import '../../styles/tailwind.css';



/**
 * Text component that renders different HTML elements based on the provided type.
 *
 * @param {TextProps} props - The properties for the Text component.
 * @param {string} props.label - The text content to be displayed.
 * @param {ElementType} props.type - The type of HTML element to render (e.g., 'h1', 'h2', 'h3', 'span', 'p').
 *
 * @returns {JSX.Element} The rendered HTML element with the appropriate styles.
 */
const Text: React.FC<TextProps> = ({ label, type }) => {

  const getElementClassName = (type: ElementType): string => {
    const styles: Partial<Record<ElementType, string>> = {
      h1: 'text-4xl font-bold ',
      h2: 'text-3xl font-semibold ',
      h3: 'text-2xl font-medium ',
      span: 'text-base ',
      p: 'text-lg ', 
    };
    return styles[type] || styles.p!;
  };

  const Element = getElementByType(type) as React.ElementType;
  const className = getElementClassName(type); // Obtener las clases de Tailwind CSS

  return <Element className={className}>{label}</Element>;
};

export default Text;

function getElementByType<T extends ElementType>(type?: T): T {
  const elements: Record<string, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    span: 'span',
  };
  return (elements[type as string] || 'p') as T;
}
