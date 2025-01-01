import React, {useEffect} from 'react';
import '../../styles/tailwind.css';
import '../../styles/styles.css';
import './button.css';
import { getConfig } from '../../utils/config';
import { ButtonProps } from './Interface/Ibutton';
import { Icon } from '../svg/icon';
import dropwn from './dropdown';
import { ButtonColor } from './Interface/Ibutton';
import { nanoid } from 'nanoid';

export const Dropdown = dropwn;

const iconosDisponibles = getConfig().svg.output;

const Button: React.FC<ButtonProps> = ({ label, template, icon, color,...props }) => {
  const [action, direction] = template ? template.split('-') : [null, null];  
  
  return (
    <>
      <button        
        id={`button-${nanoid(6)}`}
        className={`${color ? color : ButtonColor.Primary }  button ${template ? `button-${template}` : ''} ${props.className}`}
        aria-label={label}
        aria-pressed={props['aria-pressed']}
        {...props}
      > 
        {action === 'icon'  && <Icon icon={`${icon}`} size={20} aria-hidden="true" /> }
        {action === 'custom' && props.children}
        {action !== 'custom' && label}        
      </button>
    </>
  );
};

export default Button;

