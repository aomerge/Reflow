import React, {useEffect, useState, useRef} from 'react';
import { getConfig } from '../../../../utils/config';
import { ButtonProps } from '../Interface/Ibutton';
import { Icon } from '../../../svg/icon';
import { nanoid } from 'nanoid';
import { ButtonColor, DropdownProps  } from '../Interface/Ibutton';
import { useId } from '../../../../hooks/events/useId';

const iconosDisponibles = getConfig().svg.output;

export const Dropdown: React.FC<DropdownProps> = ({ label, direction ,template, icon, color,...props }) => {
    const [action, ] = template ? template.split('-') : [null, null];  
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);    
    const id = useId(label, template);    

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const toggleDropdown = () => {
        setIsOpen(prevState => {
            const newState = !prevState;
            if (icon) {
                const iconElement = document.getElementById(`dropdown-${id}`)?.querySelector('svg');
                if (iconElement) {
                    iconElement.style.transform = newState ? 'rotate(90deg)' : 'rotate(0deg)';
                    iconElement.style.transition = 'transform 0.3s ease-in-out';
                }
            }
            return newState;
        });
    };
    
    useEffect(() => {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            if (isOpen) {
                (dropdownMenu as HTMLElement).classList.remove('fadeInTop');
                (dropdownMenu as HTMLElement).classList.add('fadeInDown');

            } else {                
                (dropdownMenu as HTMLElement).classList.remove('fadeInDown');
                (dropdownMenu as HTMLElement).classList.add('fadeInTop');
            }
        }
    }, [isOpen]);

    return (
        <div id={`dropdown-${id}`} className="relative" ref={dropdownRef}>
            <Button                
                className={`dropdown`}
                template={template}
                label={label}
                icon={icon}
                color={color}
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen} />
            {isOpen && (
                <div className={`dropdown-menu dropdown-${direction}`}>
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {props.children}
                    </div>
                </div>
            )}
        </div>
    );
};


export const Button: React.FC<ButtonProps> = ({ label, template, className,icon, color, ...props }) => {
  const [theme, action] = template ? template.split('-') : [null, null];  
  const id = useId(label, template);
  
    useEffect(() => {
        const buttonElement = document.getElementById(`button-${id}`);    
        if (buttonElement && color !== undefined) {
            buttonElement.style.setProperty('--color', `var(--${color})` || ` var(--${ButtonColor.Primary})`);                    
        }
        
    }, [color]);

  return (
    <>
      <button        
        id={`button-${id}`}
        className={` ${className || ''} button ${template ? `button-${template}` : ''} `}
        aria-label={label}
        aria-pressed={props['aria-pressed']}
        {...props}
      > 
        {(action === 'icon' || icon ) && <Icon icon={`${icon || 'home'}`} size={20} aria-hidden="true" /> }
        {action === 'custom' && props.children}
        {action !== 'custom' && label}        
      </button>
    </>
  );
};
