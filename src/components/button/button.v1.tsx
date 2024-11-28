import React from 'react';
import '../../styles/tailwind.css';
import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  element?: React.ReactElement;
  template?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className, template, ...props }) => {
  const [action, direction, color] = template ? template.split('-') : [null, null, null];  

  return (
    <>
      <button
        id='button'
        className={`${template ? `button-${template}` : 'button'} ${(className !== null || className !== undefined) ? className: " "}`}
        {...props}
      >
        {action === 'icon' && props.children}
        {action !== 'icon' && label}
      </button>
    </>
  );
};

export default Button;
