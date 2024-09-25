import React from 'react';
import '../../styles/tailwind.css';

type ElementType = keyof JSX.IntrinsicElements;

interface TextProps {
  label: string;
  type: ElementType;
}

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
