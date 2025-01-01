import React, {useEffect, useState, useRef} from 'react';
import '../../styles/tailwind.css';
import '../../styles/styles.css';
import './button.css';
import { getConfig } from '../../utils/config';
import { ButtonProps } from './Interface/Ibutton';
import { Icon } from '../svg/icon';
import { nanoid } from 'nanoid';
import { ButtonColor } from './Interface/Ibutton';

const iconosDisponibles = getConfig().svg.output;

const Dropdown: React.FC<ButtonProps> = ({ label, template, icon, color,...props }) => {
    const [action, direction] = template ? template.split('-') : [null, null];  
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const toggleDropdown = () => {
        setIsOpen(prevState => {
            const newState = !prevState;
            if (icon) {
                const iconElement = document.getElementById('dropdown')?.querySelector('svg');
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
        <div className="relative" ref={dropdownRef}>
            <button
                id={`dropdown-${nanoid(6)}`}
                className={`${color ? color : ButtonColor.Primary }  dropdown ${template ? `dropdown-${template}` : ''} ${props.className}`}
                onClick={toggleDropdown}
                {...props}
            >
                {action === 'icon' && <Icon icon={`${icon}`} size={15} color='rgba(255, 255, 255, 0.63)' />}
                {action === 'custom' && props.children}
                {action !== 'custom' && label}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {props.children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;