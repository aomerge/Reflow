import React from 'react';
import {TextProps, ElementType} from '../interfaces/IText';

const Text: React.FC<TextProps> = ({ label, type, size, color }) => {

  const Element = getElementByType(type) as React.ElementType;

  return <Element className={` ${size? size : ""} ${color? color : ""} `} >{label}</Element>;
};

export default Text;

function getElementByType<T extends ElementType>(type?: T): T {
  const elements: Record<string, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4:'h4',
    span: 'span',
  };
  return (elements[type as string] || 'p') as T;
}