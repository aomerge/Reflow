import React from 'react';
import {TextProps, ElementType} from '../interfaces/IText';
import { tem } from '../../../../setup';
import { useId } from '../../../../hooks/events/useId';
const Text: React.FC<TextProps> = ({ label, type, size, color, className,...props }) => {
  const id = useId(label, `${size}${type}`);
  const Element = getElementByType(type) as React.ElementType;

  return <Element id={`Text-${id}`} {...props} className={` ${size? size : ""} ${color? color : ""} ${className||""}`} >{label}</Element>;
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