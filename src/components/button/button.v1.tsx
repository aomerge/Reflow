import React, {useEffect} from 'react';
import '../../styles/tailwind.css';
import '../../styles/styles.css';
import './button.css';
import { getConfig } from '../../utils/config';
import { ButtonProps } from './Interface/Ibutton';
import { Icon } from '../svg/icon';
import dropwn from './dropdown';

export const Dropdown = dropwn;

const iconosDisponibles = getConfig().svg.output;

const Button: React.FC<ButtonProps> = ({ label, template, icon,...props }) => {
  const [action, direction, color] = template ? template.split('-') : [null, null, null];  
  
  return (
    <>
      <button
        id='button'
        className={`button ${template ? `button-${template}` : ''} ${props.className}`}
        {...props}
      > 
        {action === 'icon'  && <Icon icon={`${icon}`} size={15} /> }
        {action === 'custom' && props.children}
        {action !== 'custom' && label}        
      </button>
    </>
  );
};

export default Button;

